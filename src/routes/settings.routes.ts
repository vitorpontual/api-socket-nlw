import { Router } from "express";
import { SettingsController } from "../Controller/SettingsController";

const settingsRoutes = Router()

const settingsController = new SettingsController();

settingsRoutes.post("/", settingsController.create)

export  { settingsRoutes }