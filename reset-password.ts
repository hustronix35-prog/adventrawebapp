import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
    const email = 'spandanp793@gmail.com'
    const newPassword = 'spandan05'

    const hashedPassword = await bcrypt.hash(newPassword, 10)

    try {
        const user = await prisma.user.update({
            where: { email },
            data: { password: hashedPassword },
        })
        console.log(`Password for ${user.email} has been reset to: ${newPassword}`)
    } catch (error) {
        console.error("Error updating password:", error)
    }
}

main()
    .catch(e => console.error(e))
    .finally(async () => await prisma.$disconnect())
