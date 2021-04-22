import { EntityRepository, Repository } from "typeorm";
import { Message } from "../entities/Messages";


@EntityRepository(Message)
export class MessagesRepository extends Repository<Message>{}