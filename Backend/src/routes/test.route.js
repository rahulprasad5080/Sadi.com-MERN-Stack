import express from "express";

const router = express.Router();

//get test
router.get("/", (req, res) => {
  res.status(200).json({ message: "Test Rahul route" });
});

export default router;
