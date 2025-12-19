
const { prisma: db } = require('./src/lib/prisma');

async function main() {
    try {
        console.log('Testing Prisma Connection...');
        const trip = await db.trip.findFirst();
        const circles = await db.circle.findMany();
        console.log('Successfully fetched trip:', trip ? trip.title : 'No trips found');
        console.log('Review Count:', trip ? trip.reviewCount : 'N/A');
        console.log('Communities found:', circles.length);
        circles.forEach((c: any) => console.log(' - ' + c.name));

    } catch (e) {
        console.error('Prisma Error:', e);
    } finally {
        await db.$disconnect();
    }
}

main();
