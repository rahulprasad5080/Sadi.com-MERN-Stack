import express from "express";
import Test from "./test.route.js";

const router = express.Router();

const routes = [
  {
    path: "/test",
    route: Test,
  },
];

routes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
