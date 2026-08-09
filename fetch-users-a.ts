
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const users = await prisma.user.findMany({
        where: {
            name: {
                startsWith: 'A',
                mode: 'insensitive'
            }
        },
        select: {
            name: true,
            email: true
        }
    });

    if (users.length === 0) {
        console.log("No users found starting with 'A'.");
    } else {
        console.log("Users found:");
        users.forEach(u => console.log(`- Name: ${u.name}, Email: ${u.email}`));
    }
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
