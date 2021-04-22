import { Request, Response } from "express";
import { MessagesService } from "../services/MessageService";


export class MessagesController {

  async create(request: Request, response: Response): Promise<Response>{
    const { user_id, admin_id, text} = request.body

    const messagesRepository = new MessagesService();

    try{
      const messages = await messagesRepository.create({
        user_id, admin_id, text
      })

      return response.status(201).json(messages)
    }catch(err){
      return response.status(400).json({
        Error: err.message
      })
    }
  }

  async showByUser(request: Request, response: Response): Promise<Response>{
    const { id } = request.params

    const messagesRepository = new MessagesService();

    const list = await messagesRepository.lisyByUser(id)

    return response.json(list)
  }
}