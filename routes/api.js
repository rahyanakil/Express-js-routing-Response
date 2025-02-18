import express from "express";
const router = express.Router();
import * as taskController from "../controllers/taskController.js";
import authmiddleware from "../middlewares/authmiddleware.js";

// Request params & query string
router.post("/demo1/:name/:age", taskController.demo1);
router.post("/demo2", taskController.demo2);
router.post("/demo3", taskController.demo3);
router.post("/demo4", taskController.demo4);
router.post("/demo5", taskController.demo5);
router.post("/demo6",authmiddleware, taskController.demo6);

export default router;
