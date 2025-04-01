import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("./layout/ScrapeLayout.jsx", [
    index("./pages/Mainpage.jsx"),
    route("saved_articles", "./pages/SavedArticles.jsx"),
  ]),
] satisfies RouteConfig;
