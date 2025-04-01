import ArticleCard from "./ArticleCard.jsx";

export default function ArticleCards({
  contents,
  handleViewArticle,
  handleDeleteArticle,
}) {
  return (
    <>
      {contents.map((item, index) => (
        <ArticleCard
          key={item._id}
          item={item}
          index={index}
          handleViewArticle={handleViewArticle}
          handleDeleteArticle={handleDeleteArticle}
        />
      ))}
    </>
  );
}
