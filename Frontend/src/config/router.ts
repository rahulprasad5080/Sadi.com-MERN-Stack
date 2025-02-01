import { createBrowserRouter } from "react-router";
import HomePage from "../pages/HomePage";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/",
        Component: HomePage,
      },
    ],
  },
]);
