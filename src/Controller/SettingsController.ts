import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";

import { SettingsRepository } from "../repositories/SettingsRepository";
import { SettingsService } from "../services/SettingsService";

export class SettingsController {

  async create(request: Request, response: Response): Promise<Response> {
    const { username, chat } = request.body

    const settingsRepository = new SettingsService();

    try{
      const settings = await settingsRepository.create({ chat, username })

      return response.status(201).json(settings)

    }catch(err){
      return response.status(400).json({
        Error: err.message})
    }
    
  }

}