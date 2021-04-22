import { Router } from "express";
import { UserController } from "../Controller/UsersController";

const userRouter = Router();

const userController = new UserController();

userRouter.post("/", userController.create)


export { userRouter }