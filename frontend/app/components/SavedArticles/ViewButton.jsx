export default function ViewButton({ item, handleViewArticle }) {
  return (
    <button
      onClick={() => handleViewArticle(item)}
      className="w-[75%] text-sm hover:underline"
    >
      {item.name}
    </button>
  );
}
