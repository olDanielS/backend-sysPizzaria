import { Request, Response } from "express";

import {DetailsUserService} from "../../services/DetailsUserService";

class DetailsUserController{
    async handle(req:Request, res:Response){
        const DetailService = new DetailsUserService();
        
        const exec = await DetailService.execute();

        return res.json(exec)
    }
}

export {DetailsUserController};