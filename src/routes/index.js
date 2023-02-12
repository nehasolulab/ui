import { lazy } from "react";

export const routes = [
  {
    name: "Dashboard",
    exact: true,
    path: "/",
    component: lazy(() => import("../views/dashboard/Dashboard")),
  },
];
