import Session from "./session.model.js";
import { getWikiPageContents, getContentsSummaryWithAI } from "./utils.js";

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
  const { summary, article, session } = req.body;
  const newSessionArticle = new Session({ summary, article });
  console.log(newSessionArticle);
  res.json({ message: "Article Saving Test", data: newSessionArticle });
  w;
};

export { extractPageContents, getSummary, saveArticle };
