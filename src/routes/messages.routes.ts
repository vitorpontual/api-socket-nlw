import { Router } from "express";
import { MessagesController } from "../Controller/MessageController";

const messagesRouter = Router();

const messagesController = new MessagesController();

messagesRouter.post("/", messagesController.create)
messagesRouter.get("/:id", messagesController.showByUser)

export { messagesRouter }