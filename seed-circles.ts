
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function createUser(email: string, name: string) {
    const password = await bcrypt.hash("password123", 10);
    return prisma.user.upsert({
        where: { email },
        update: {},
        create: { email, name, password },
    });
}

async function main() {
    console.log("Creating users...");
    const alice = await prisma.user.findUnique({ where: { email: "alice@example.com" } });
    if (!alice) throw new Error("Alice not found! Run create-alice.ts first.");

    const bob = await createUser("bob@example.com", "Bob Builder");
    const charlie = await createUser("charlie@example.com", "Charlie Trekker");

    console.log("Creating circles...");

    // Circle 1: Himalayan Hikers (Owner: Alice)
    const hikers = await prisma.circle.create({
        data: {
            name: "Himalayan Hikers",
            description: "For those who love high altitude adventures in the Himalayas.",
            image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            ownerId: alice.id,
            members: {
                create: [
                    { userId: bob.id },
                    { userId: charlie.id }
                ]
            }
        }
    });

    // Circle 2: Weekend Warriors (Owner: Bob)
    const warriors = await prisma.circle.create({
        data: {
            name: "Weekend Warriors",
            description: "Short trips for busy professionals every weekend.",
            image: "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            ownerId: bob.id,
            members: {
                create: [
                    { userId: alice.id }
                ]
            }
        }
    });

    // Circle 3: Photography Pros (Owner: Charlie)
    const photos = await prisma.circle.create({
        data: {
            name: "Photography Pros",
            description: "Capture the moment. Sharing tips and best spots for travel photography.",
            image: "https://images.unsplash.com/photo-1542038784424-48ed70432451?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            ownerId: charlie.id,
            members: {
                create: [
                    { userId: alice.id },
                    { userId: bob.id }
                ]
            }
        }
    });

    console.log("Seeding complete!");
    console.log(`Created Circle: ${hikers.name} with members Bob & Charlie`);
    console.log(`Created Circle: ${warriors.name} with member Alice`);
    console.log(`Created Circle: ${photos.name} with members Alice & Bob`);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
