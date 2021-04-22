import { Router } from "express";
import { SettingsController } from "../controller/SettingsController";

const settingsRoutes = Router()

const settingsController = new SettingsController();

settingsRoutes.post("/", settingsController.create)
settingsRoutes.get("/:username", settingsController.findByUserName)
settingsRoutes.put("/:username", settingsController.update)


export  { settingsRoutes }