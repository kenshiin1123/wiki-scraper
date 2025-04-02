import getSavedArticles from "~/apis/getSavedArticles.js";
import deleteSavedArticle from "~/apis/deleteSavedArticle.js";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export const useArticles = () => {
  const [config, setConfig] = useState({
    selectedArticle: null,
    contents: [],
  });

  useEffect(() => {
    const fetchSavedContents = async () => {
      const fetchPromise = getSavedArticles();

      toast.promise(fetchPromise, {
        loading: "Fetching saved articles...",
        success: "Articles fetched successfully!",
        error: "Failed to fetch saved articles.",
      });

      try {
        const { data: fetchedContents } = await fetchPromise;

        if (fetchedContents.length === 0) {
          toast("No saved articles found.");
        }

        setConfig((prevConfig) => {
          return {
            ...prevConfig,
            contents: fetchedContents,
          };
        });
      } catch (error) {
        console.error("Error fetching saved articles:", error);
      }
    };

    fetchSavedContents();
  }, []);

  const handleViewArticle = (article) => {
    setConfig((prevConfig) => {
      return {
        ...prevConfig,
        selectedArticle: article,
      };
    });
  };

  const handleDeleteArticle = async (itemId) => {
    const deletePromise = deleteSavedArticle(itemId);

    toast.promise(deletePromise, {
      loading: "Deleting article...",
      success: "Article deleted successfully!",
      error: "Failed to delete article.",
    });

    try {
      await deletePromise;
      setConfig((prevConfig) => {
        return {
          ...prevConfig,
          contents: prevConfig.contents.filter((item) => item._id !== itemId),
        };
      });
    } catch (error) {
      console.error("Error deleting article:", error);
    }
  };

  return {
    config,
    setConfig,
    handleViewArticle,
    handleDeleteArticle,
  };
};
