import prismaClient from "../prisma";
import { io } from "../app";


class GetLast3MessagesService {
    async execute() {
        const messages = await prismaClient.message.findMany({
            take: 3,
            orderBy: {
                Created_at: "desc",
            },
            include: {
                user: true,
            },
        });
        // SELECT * FROM MESSAGES LIMIT 3 ORDER BY CREATED_AT DESC

        return messages;
    }
}

export { GetLast3MessagesService };