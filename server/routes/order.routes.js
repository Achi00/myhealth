import express from "express"

import { getAllOrders, deleteOrder } from "../controllers/order.controller.js"

const router = express.Router()

router.route("/").get(getAllOrders);
router.route("/:id").delete(deleteOrder);

export default router
