import Item from "./Item";

export default function Items({ content }) {
  const { article } = content;
  return article
    .filter(
      (item) => item.tag !== "img" && item.tag !== "a" && item.tag !== "li"
    ) /*Only tags that are not image*/
    .map((item, index) => <Item item={item} key={index} />);
}
