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
    route("/projects", "routes/Cases.tsx"),
    route("/services", "routes/servicesPage.tsx"),
    route("/contact", "routes/Contact.tsx"),
    route("/services/:dynamicService", "routes/ServiceDetail.tsx", {
      id: "services-dynamicEvent",
    }),
    route("/projects/:dynamicProject", "routes/ProjectDetail.tsx", {
      id: "projects-dynamicProject",
    }),
  ]),
] satisfies RouteConfig;
