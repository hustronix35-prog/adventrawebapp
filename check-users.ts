import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
    const users = await prisma.user.findMany()
    console.log(`Total users found: ${users.length}`)
    users.forEach(u => console.log(`- ${u.email} (${u.name})`))
}

main()
    .catch(e => console.error(e))
    .finally(async () => await prisma.$disconnect())
