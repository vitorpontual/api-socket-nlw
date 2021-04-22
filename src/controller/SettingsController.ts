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

  async findByUserName(request: Request, response: Response): Promise<Response>{
    const { username } = request.params;

    const settingsService = new SettingsService();

    const settings = await settingsService.findByUsername(username);

    return response.json(settings);

  }

  async update(request: Request, response: Response): Promise<Response>{
    const { username } = request.params;
    const { chat } = request.body;

    const settingsService = new SettingsService();

    const settings = await settingsService.update(username, chat)
    return response.json(settings)
  }

}