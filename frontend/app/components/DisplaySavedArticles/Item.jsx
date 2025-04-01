import { createElement } from "react";

const styleSetter = (tag) => {
  switch (tag) {
    case "h1":
      return "text-5xl text-center";
    case "h2":
      return "text-3xl";
    case "p":
      return "shadow-sm shadow-gray-500 border-r border-l border-gray-300 rounded-sm mt-3 p-1 text-justify";
    case "a":
      return "text-blue-700 text-sm mr-5";
    case "li":
      return "inline ";
  }
};

const attributesSetter = (attributes, item) => {
  if (item.tag == "a") {
    attributes = {
      ...attributes,
      href: `https://en.wikipedia.org/${item.href}`,
      target: "_blank",
      rel: "noopener noreferrer",
    };
  } else if (item.tag == "img") {
    attributes = {
      ...attributes,
      src: item.src,
      alt: item.alt,
    };
  }

  return attributes;
};

export default function Item({ item, index, contents }) {
  /* Sets the style of each tags*/
  const itemStyle = styleSetter(item.tag);

  /* Sets the attributes of each tags*/
  const attributes = attributesSetter(
    { key: index, className: itemStyle },
    item
  );

  if (
    /*Display All Headers*/
    item.tag == "h1" ||
    item.tag == "h2" ||
    item.tag == "h3" ||
    item.tag == "h4" ||
    item.tag == "h5" ||
    item.tag == "h6"
  )
    item;
  return createElement(item.tag, { ...attributes }, item.content);
}
