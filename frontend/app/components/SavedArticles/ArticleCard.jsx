import { motion } from "motion/react";
import ViewButton from "./ViewButton";
import DeleteArticleButton from "./DeleteArticleButton";

export default function ArticleCard({
  item,
  index,
  handleViewArticle,
  handleDeleteArticle,
}) {
  return (
    <motion.div
      className="flex items-center justify-center w-72 h-16 shadow shadow-gray-500 rounded mx-auto p-2 bg-white ellipse"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: index * 0.12 }}
    >
      <ViewButton handleViewArticle={handleViewArticle} item={item} />
      <DeleteArticleButton
        itemId={item._id}
        handleDeleteArticle={handleDeleteArticle}
      />
    </motion.div>
  );
}
