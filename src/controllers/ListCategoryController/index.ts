import { Request, Response } from "express";

import { ListCategoryService } from "../../services/Category/ListCategoryService";

class ListCategoryController{
    async handle(req: Request, res: Response){
        
        const ListCategory = await new ListCategoryService().execute()

        return res.json(ListCategory);
    }
}

export {ListCategoryController};