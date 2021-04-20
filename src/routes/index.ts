import { Router } from 'express';
import {settingsRoutes as settings} from "./settings.routes"

const router = Router()

router.use("/settings", settings)


export { router }