import List from "./List";

const LISTS = [
  { id: "a", label: "Links" },
  { id: "img", label: "Images" },
  { id: "p", label: "Paragraphs" },
  { id: "li", label: "Lists" },
];

export default function Lists({ contents, handleFilterChange }) {
  return LISTS.map((list) => (
    <List
      key={list.id}
      list={list}
      contents={contents}
      handleFilterChange={handleFilterChange}
    />
  ));
}
