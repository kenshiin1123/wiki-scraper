import contentsLimiter from "../utils/contentsLimiter.js";

const { VITE_ROOT_API, VITE_SESSION_API, VITE_ORIGIN } = import.meta.env || {};
const saveArticle = async (summary, articles, name) => {
  if (!summary) {
    summary = "none";
  }
  const session = localStorage.getItem("session_id");
  try {
    if (session) {
      const payload = {
        name: name,
        article: contentsLimiter(articles),
        summary: summary,
        session: session,
      };

      const res = await fetch(
        `${VITE_ORIGIN}${VITE_ROOT_API}${VITE_SESSION_API}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Failed to save article");
      }
      if (data.error) {
        throw new Error(data.error);
      }
    } else {
      console.log("Missing Articles or Session");
    }
  } catch (error) {
    console.dir(error);
  }
};

export default saveArticle;
