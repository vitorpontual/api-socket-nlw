import { Router } from "express";
import { UserController } from "../controller/UsersController";

const userRouter = Router();

const userController = new UserController();

userRouter.post("/", userController.create)


export { userRouter }