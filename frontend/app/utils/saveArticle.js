import contentsLimiter from "./contentsLimiter.js";

const saveArticle = async (summary, articles) => {
  const session = localStorage.getItem("session_id");
  try {
    if (session) {
      const payload = {
        article: contentsLimiter(articles),
        summary: summary,
        session: session,
      };

      console.log(payload);

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
      console.log(data);
    } else {
      console.log("Missing Articles or Session");
    }
  } catch (error) {
    console.dir(error);
  }
};

export default saveArticle;
