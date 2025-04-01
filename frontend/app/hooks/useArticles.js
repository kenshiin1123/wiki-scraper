import getSavedArticles from "~/apis/getSavedArticles.js";
import deleteSavedArticle from "~/apis/deleteSavedArticle.js";
import { useEffect, useState } from "react";

export const useArticles = () => {
  const [config, setConfig] = useState({
    selectedArticle: null,
    contents: [],
  });

  useEffect(() => {
    const fetchSavedContents = async () => {
      try {
        const { data: fetchedContents } = await getSavedArticles();

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
    try {
      await deleteSavedArticle(itemId);
      setConfig((prevConfig) => {
        return {
          ...prevConfig,
          contents: prevConfig.contents.filter((item) => item._id !== itemId),
        };
      });
      console.log("Article deleted successfully");
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
