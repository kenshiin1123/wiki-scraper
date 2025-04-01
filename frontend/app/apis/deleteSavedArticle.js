const { VITE_ROOT_API, VITE_ORIGIN, VITE_SAVED_ARTICLES_API } =
  import.meta.env || {};

const deleteSavedArticle = async (articleId) => {
  console.log(VITE_ROOT_API, VITE_ORIGIN, VITE_SAVED_ARTICLES_API);
  try {
    if (!VITE_ROOT_API || !VITE_ORIGIN || !VITE_SAVED_ARTICLES_API) {
      throw new Error("Missing required environment variables.");
    }

    if (!articleId) {
      throw new Error("Article ID is required.");
    }

    const res = await fetch(
      `${VITE_ORIGIN}${VITE_ROOT_API}${VITE_SAVED_ARTICLES_API}`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ articleId }),
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to delete article: ${res.statusText}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error deleting saved article:", error.message);
    throw error;
  }
};

export default deleteSavedArticle;
