import { toast } from "sonner";
import { useState } from "react";
import scrape from "~/apis/scrape.js";
import summarize from "~/apis/summarize.js";

const INITIAL_SCRAPED_CONTENTS = {
  selectedArticleId: "",
  query: "",
  success: false,
  message: "",
  summary: "",
  data: [],
  filterData: {
    a: false,
    img: true,
    p: true,
    li: false,
  },
};

const deriveScrapedContents = async (
  setScrapedContents,
  scrapeKeyword,
  prevKeyword
) => {
  if (scrapeKeyword === prevKeyword) {
    return {
      success: false,
      message: Error("Please enter a new keyword to scrape.").message,
    };
  }

  try {
    const { success, message, data } = await scrape(scrapeKeyword);

    if (!success) {
      return { success, message };
    }

    setScrapedContents((prevContents) => ({
      ...prevContents,
      data,
      success,
      message,
      summary: "",
      query: scrapeKeyword,
    }));

    return { success, message, data };
  } catch (error) {
    return {
      success: false,
      message: error.message || "An error occurred while scraping.",
    };
  }
};

const deriveSummarizedContents = async (
  scrapedContents,
  setScrapedContents
) => {
  // This variable will extract all the content's paragraphs and join them into a single string.
  const paragraph = scrapedContents.data
    .filter((content) => content.tag === "p" || content.tag === "li")
    .map((item) => item.content)
    .join(" ");

  const { success, message, data } = await summarize(paragraph);

  if (!success) {
    return { success, message };
  }

  setScrapedContents((prevContents) => ({
    ...prevContents,
    summary: data,
  }));

  return { success, message, data };
};

export function useScraping() {
  const [scrapedContents, setScrapedContents] = useState(
    INITIAL_SCRAPED_CONTENTS
  );

  const handleScrape = async (query) => {
    const { scrapeKeyword } = query;

    const scrapePromise = deriveScrapedContents(
      setScrapedContents,
      scrapeKeyword,
      scrapedContents.query
    );

    toast.promise(scrapePromise, {
      loading: "Scraping in progress...",
      success: (message) => message,
      error: (message) => message,
    });
  };

  const handleSummarizeContents = async () => {
    const summarizeContentPromise = deriveSummarizedContents(
      scrapedContents,
      setScrapedContents
    );

    toast.promise(summarizeContentPromise, {
      loading: "Summarizing in progress...",
      success: (message) => message,
      error: (message) => message,
    });
  };

  return {
    scrapedContents,
    handleScrape,
    handleSummarizeContents,
    setScrapedContents,
  };
}
