import { CiSquareRemove } from "react-icons/ci";
export default function DeleteArticleButton({ itemId, handleDeleteArticle }) {
  return (
    <button
      className="text-3xl w-[15%] hover:scale-110"
      onClick={() => handleDeleteArticle(itemId)}
    >
      <CiSquareRemove />
    </button>
  );
}
