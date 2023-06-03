import express from "express"

import { getAllOrders, deleteOrder, createOrder } from "../controllers/order.controller.js"

const router = express.Router()

router.route("/").get(getAllOrders);
router.route("/").post(createOrder);
router.route("/:id").delete(deleteOrder);

export default router
