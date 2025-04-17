import Session from "./session.model.js";
import { getWikiPageContents, getContentsSummaryWithAI } from "./utils.js";

let numberOfSavedArticles = 0;

const healthCheck = (req, res) => {
  return res.status(200).json({
    status: "success",
    message: "Server is up and running.",
    timestamp: new Date().toISOString()
  });
}

const extractPageContents = async (req, res) => {
  const { s } = req.body;
  try {
    const data = await getWikiPageContents(s);

    if (data == 1) {
      return res.json({
        success: false,
        message: `No results found for "${s}"! The topic may not exist on Wikipedia, or there could be a typo. Try different keywords!`,
        data,
      });
    } else {
      return res.json({
        success: true,
        message: `Results found for "${s}"! Here's the information retrieved from Wikipedia.`,
        data,
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `An error occurred while fetching the Wikipedia page contents.`,
      error: error.message,
    });
  }
};

const getSummary = async (req, res) => {
  const { prompt } = req.body;
  try {
    const data = await getContentsSummaryWithAI(prompt);
    return res.json({
      success: true,
      message: `Summary generated for the prompt!`,
      data,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `An error occurred while generating the summary.`,
      error: error.message,
    });
  }
};

const saveArticle = async (req, res) => {
  const { summary, article, session, name } = req.body;
  try {
    const newSessionArticle = new Session({
      name,
      summary,
      article,
      sessionId: session,
    });
    await newSessionArticle.save();
    numberOfSavedArticles++;
    console.log("Article saved successfully", numberOfSavedArticles);
    res.json({ message: "Successfully Saved The Article" });
  } catch (error) {
    console.dir(error);
    res.json({ message: "Saving Failed!" });
  }
};

const getSavedArticles = async (req, res) => {
  const { session } = req.body;
  const savedArticles = await Session.find({ sessionId: session });
  if (savedArticles.length === 0) {
    return res.json({
      success: false,
      message: `No saved articles found for session "${session}"!`,
      data: savedArticles,
    });
  } else {
    return res.json({
      success: true,
      message: `Saved articles found for session "${session}"!`,
      data: savedArticles,
    });
  }
};

const deleteSavedArticle = async (req, res) => {
  const { articleId } = req.body;
  console.log(req.body);

  if (articleId === undefined) {
    return res.status(400).json({ message: "Session ID is required" });
  }

  try {
    const deletedArticle = await Session.findByIdAndDelete(articleId);
    if (!deletedArticle) {
      return res.status(404).json({ message: "Article not found" });
    }
    console.log("Article deleted successfully", numberOfSavedArticles);
    return res.json({ message: "Article deleted successfully" });
  } catch (error) {
    console.error("Error deleting article:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export {
  extractPageContents,
  getSummary,
  saveArticle,
  getSavedArticles,
  deleteSavedArticle,
  healthCheck
};
