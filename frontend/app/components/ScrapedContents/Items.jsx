import Item from "./Item";

export default function Items({ data, contents }) {
  return data
    .filter((item) => item.tag !== "img") /*Only tags that are not image*/
    .map((item, index) => <Item item={item} key={index} contents={contents} />);
}
