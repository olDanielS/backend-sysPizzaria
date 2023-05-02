import prismaClient from "../../../prisma";

interface CategoryParams{
    name: string
}

class CreateCategoryService{
    async execute({name}: CategoryParams){
        
        const nCategory = await prismaClient.category.create({
            data: {
                name
            },
            select: {
                id: true,
                name: true
            }
        })

        return nCategory;
    }
}

export {CreateCategoryService};