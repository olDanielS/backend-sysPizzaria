import prismaClient from "../../../prisma";

class ListCategoryService{
    async execute(){
        const data = await prismaClient.category.findMany({
            select: {
                id:true,
                name: true
            }
        });
        
        return data;
    }
}

export {ListCategoryService};