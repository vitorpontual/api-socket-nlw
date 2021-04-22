import { Request, Response } from "express";
import { UserService } from "../services/UsersService";


export class UserController {
  async create(request: Request, response: Response): Promise<Response> {
    const { email } = request.body;

    const userRepository = new UserService();

    try{
      const user = await userRepository.create(email);

      return response.status(201).json(user)
    }catch(err){
      return response.status(400).json({
        Error: err.message
      })
    }

  }
}