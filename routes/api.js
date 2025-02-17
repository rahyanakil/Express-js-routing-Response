import express from"express"
const router =express.Router();
import * as taskController from"../controllers/taskController.js"

//Request params & query string
router.post(path:"/demo1",taskController.demo1);
router.post(path:"/demo2",taskController.demo2);
router.post(path:"/demo3",taskController.demo3);
router.post(path:"/demo4",taskController.demo4);
router.post(path:"/demo5",taskController.demo5);
 

export default router;