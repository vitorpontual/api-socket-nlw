import { Router } from 'express';
import {settingsRoutes as settings} from "./settings.routes"
import { userRouter as users} from "./users.routes"
import {messagesRouter as messages} from "./messages.routes"

const router = Router()

router.use("/settings", settings)
router.use("/users", users)
router.use("/messages", messages)


export { router }