import { getCustomRepository, Repository } from "typeorm";
import { Message } from "../entities/Messages";
import { MessagesRepository } from "../repositories/MessagesRepository";
import { messagesRouter } from "../routes/messages.routes";

interface IMessageCreate {
  admin_id?: string;
  user_id: string;
  text: string;
}


export class MessagesService {

  private messagesRepositroy: Repository<Message>

  constructor(){
    this.messagesRepositroy = getCustomRepository(MessagesRepository)
  }
  
  async create({admin_id, text, user_id}: IMessageCreate): Promise<Message> {

    const messages = this.messagesRepositroy.create({
      admin_id, text, user_id
    })

    await this.messagesRepositroy.save(messages)

    return messages
  }
 
  async lisyByUser(user_id: string): Promise<Message[]> {
    const list = await this.messagesRepositroy.find({ 
      where: {user_id},
      relations: ["user"]
    })

    return list
  }
}