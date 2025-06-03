import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("./components/layout.tsx", [
    index("routes/home.tsx"),
    route("/about-us", "routes/about.tsx"),
    route("/case-study", "routes/Cases.tsx"),
  ]),
] satisfies RouteConfig;
