import Header from "../components/SavedArticles/Header.jsx";
import ItemsContainer from "../components/SavedArticles/ItemsContainer.jsx";
import ArticleCards from "../components/SavedArticles/ArticleCards.jsx";

import { useArticles } from "~/hooks/useArticles.js";
import DisplaySavedArticle from "~/components/DisplaySavedArticles/DisplaySavedArticle.jsx";
import { AnimatePresence } from "motion/react";
export default function SavedArticles() {
  const { config, handleViewArticle, handleDeleteArticle } = useArticles();

  return (
    <div className="relative h-[100vh] ">
      <Header />
      <ItemsContainer>
        <ArticleCards
          contents={config.contents}
          handleViewArticle={handleViewArticle}
          handleDeleteArticle={handleDeleteArticle}
        />
      </ItemsContainer>
      <AnimatePresence>
        {config.selectedArticle && (
          <DisplaySavedArticle
            article={config.selectedArticle}
            onClose={handleViewArticle}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
