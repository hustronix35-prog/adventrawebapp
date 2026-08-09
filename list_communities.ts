
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    console.log('--- TIPS ("Communities") ---');
    const trips = await prisma.trip.findMany({
        select: { id: true, title: true, creatorId: true }
    });
    if (trips.length === 0) {
        console.log('No trips found.');
    } else {
        trips.forEach((t: any) => console.log(`- [${t.id}] ${t.title} (Creator: ${t.creatorId})`));
    }

    console.log('\n--- CIRCLES ---');
    const circles = await prisma.circle.findMany({
        select: { id: true, name: true, ownerId: true }
    });
    if (circles.length === 0) {
        console.log('No circles found.');
    } else {
        circles.forEach((c: any) => console.log(`- [${c.id}] ${c.name} (Owner: ${c.ownerId})`));
    }
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
