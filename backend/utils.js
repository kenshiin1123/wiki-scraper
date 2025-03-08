import * as cheerio from "cheerio";
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();

const getWikiPageContents = async (query) => {
  const res = await fetch(`https://en.wikipedia.org/wiki/${query}`);
  const text = await res.text();
  const $ = cheerio.load(text);
  const result = [];

  // Pushes The Title to the result array
  result.push({ tag: "h1", content: $("h1#firstHeading").text().trim() });

  // Pushes The Image with its attributes to the result array
  $("div.mw-content-ltr")
    .find("figure > a > img")
    .each((_, element) => {
      const src = $(element).attr("src");
      const alt = $(element).attr("alt");
      result.push({ tag: "img", src, alt });
    });

  $("div.mw-content-ltr > table.infobox")
    .find("td.infobox-image img")
    .each((_, element) => {
      const src = $(element).attr("src");
      const alt = $(element).attr("alt");
      result.push({ tag: "img", src, alt });
    });

  const contents = $("div#mw-content-text > div")
    .find("h2, h3, h4, h5, h6, p, li, a")
    .map((_, element) => {
      // Tag
      const tag = element.tagName.toLowerCase();

      // Remove <sup> elements that start with "[" inside the current element
      $(element)
        .find("sup")
        .each((_, sup) => {
          if ($(sup).text().trim().startsWith("[")) {
            $(sup).remove();
          }
        });

      // inner text
      const content = $(element).text().trim();

      // href
      const href = $(element).attr("href");

      if (
        content.length > 0 &&
        !content.startsWith("[") &&
        !content.startsWith("^")
      ) {
        if (tag == "a") {
          return { tag, content, href };
        } else {
          return { tag, content };
        }
      }
    })
    .get();

  result.push(...contents); // Spread contents instead of nesting it

  //
  for (const item of result) {
    if (
      item.content ==
        "If a page was recently created here, it may not be visible yet because of a delay in updating the database; wait a few minutes or try the purge function." ||
      item.content == "Why was the page I created deleted?"
    ) {
      return 1;
    }
  }

  return result; // Return the result array
};

const getContentsSummaryWithAI = async (prompt) => {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const result = await model.generateContent(
    "Topic Summarization with Key Insights. Write in a paragraph format. Here's my data: " +
      prompt
  );
  return result.response.text();
};

export { getWikiPageContents, getContentsSummaryWithAI };
