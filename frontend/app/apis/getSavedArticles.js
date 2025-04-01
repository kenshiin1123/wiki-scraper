const { VITE_ROOT_API, VITE_SAVED_ARTICLES_API, VITE_ORIGIN } =
  import.meta.env || {};

const getSavedArticles = async () => {
  const session = localStorage.getItem("session_id");

  if (!session) {
    throw new Error("Session ID is missing. Please log in.");
  }

  if (!VITE_ORIGIN || !VITE_ROOT_API || !VITE_SAVED_ARTICLES_API) {
    throw new Error("Environment variables are not properly configured.");
  }

  try {
    const res = await fetch(
      `${VITE_ORIGIN}${VITE_ROOT_API}${VITE_SAVED_ARTICLES_API}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ session }),
      }
    );

    if (!res.ok) {
      throw new Error(
        `Failed to fetch articles: ${res.status} ${res.statusText}`
      );
    }

    const articles = await res.json();
    return articles;
  } catch (error) {
    console.error("Error fetching saved articles:", error);
    throw error;
  }
};

export default getSavedArticles;
