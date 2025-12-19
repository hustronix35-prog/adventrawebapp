import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const TRIPS = [
    {
        title: "Everest Base Camp Trek",
        description: "Experience the ultimate high-altitude trekking adventure to the base of the world's highest mountain. This legendary trek takes you through the heart of the Sherpa culture, past ancient monasteries, and offers breathtaking views of Everest, Lhotse, Nuptse, and Ama Dablam.",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        location: "Nepal",
        duration: "14 Days",
        durationDays: 14,
        rating: 4.9,
        reviews: 124,
        price: 1499,
        difficulty: "Challenging",
        highlights: JSON.stringify(["Scenic flight to Lukla", "Namche Bazaar", "Tengboche Monastery", "Kala Patthar Viewpoint", "Khumbu Glacier"]),
        itinerary: JSON.stringify([
            { day: 1, title: "Arrival in Kathmandu", description: "Welcome to Nepal! Transfer to hotel and briefing." },
            { day: 2, title: "Fly to Lukla, Trek to Phakding", description: "Scenic flight and short trek to start acclimatization." },
            { day: 3, title: "Trek to Namche Bazaar", description: "Steep ascent to the Sherpa capital." },
            { day: 4, title: "Acclimatization Day", description: "Explore Namche and hike to Everest View Hotel." },
            { day: 8, title: "Everest Base Camp", description: "Reach the base of the world's highest peak." },
            { day: 12, title: "Fly back to Kathmandu", description: "Return flight from Lukla." }
        ]),
        inclusions: JSON.stringify([
            "Airport transfers",
            "3 nights hotel in Kathmandu",
            "Teahouse accommodation during trek",
            "All meals during trek",
            "Domestic flights (Kathmandu-Lukla-Kathmandu)",
            "English speaking guide and porters",
            "Sagarmatha National Park permit"
        ]),
        exclusions: JSON.stringify([
            "International airfare",
            "Nepal visa fee",
            "Travel insurance",
            "Personal equipment",
            "Tips for guide and porters"
        ]),
        bestTime: "Mar-May, Sep-Nov",
        tripType: "High Altitude Trekking",
        summitHeight: "5,545m (Kala Patthar)",
        region: "Khumbu Region",
        placesOfInterest: JSON.stringify([
            { title: "Namche Bazaar", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
            { title: "Tengboche Monastery", image: "https://images.unsplash.com/photo-1585938389612-a552a28d6914?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
            { title: "Kala Patthar", image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
        ]),
        routeImage: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        requirements: "Physical fitness is required. You should be able to walk 5-7 hours a day.",
        status: "active"
    },
    {
        title: "Inca Trail to Machu Picchu",
        description: "Follow the ancient footsteps of the Incas to the lost city of Machu Picchu. This classic 4-day trek combines stunning mountain scenery, cloud forests, and impressive Inca ruins, culminating in a sunrise arrival at the Sun Gate.",
        image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        location: "Peru",
        duration: "4 Days",
        durationDays: 4,
        rating: 4.8,
        reviews: 89,
        price: 899,
        difficulty: "Moderate",
        highlights: JSON.stringify(["Cusco City", "Sacred Valley", "Machu Picchu Sunrise", "Winay Wayna Ruins"]),
        itinerary: JSON.stringify([
            { day: 1, title: "Cusco to Wayllabamba", description: "Start the trek at Km 82." },
            { day: 2, title: "Dead Woman's Pass", description: "The most challenging day, crossing the highest pass." },
            { day: 3, title: "Phuyupatamarca & Wiñay Wayna", description: "Cloud forests and Inca sites." },
            { day: 4, title: "Machu Picchu", description: "Sunrise at Sun Gate and tour of the citadel." }
        ]),
        inclusions: JSON.stringify([
            "Hotel pickup in Cusco",
            "Train and bus tickets",
            "Entrance to Machu Picchu",
            "Camping equipment (tents, mats)",
            "Professional guide and porters",
            "All meals on the trail"
        ]),
        exclusions: JSON.stringify([
            "Sleeping bag (rentable)",
            "Breakfast on Day 1",
            "Lunch on Day 4",
            "Tips"
        ]),
        bestTime: "May-Sep",
        tripType: "Historical Trekking",
        summitHeight: "4,215m (Dead Woman's Pass)",
        region: "Cusco Region",
        status: "active"
    },
    {
        title: "Tour du Mont Blanc",
        description: "Trek through France, Italy, and Switzerland on this classic Alpine route. Experience the best of the Alps with stunning views of Mont Blanc, charming villages, and delicious cuisine.",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        location: "France / Italy / Switzerland",
        duration: "11 Days",
        durationDays: 11,
        rating: 5.0,
        reviews: 56,
        price: 1899,
        difficulty: "Challenging",
        highlights: JSON.stringify(["Alpine Meadows", "Glacial Valleys", "Three Countries", "Chamonix"]),
        itinerary: JSON.stringify([
            { day: 1, title: "Chamonix to Les Houches", description: "Start of the trek." },
            { day: 5, title: "Courmayeur (Italy)", description: "Rest day or explore the Italian side." },
            { day: 11, title: "Return to Chamonix", description: "Complete the circuit." }
        ]),
        inclusions: JSON.stringify([
            "Accommodation in mountain huts/hotels",
            "Breakfast and dinner",
            "Luggage transfer",
            "Guide",
            "Cable car tickets"
        ]),
        exclusions: JSON.stringify([
            "Lunches",
            "Travel to Chamonix",
            "Insurance",
            "Drinks"
        ]),
        bestTime: "Jun-Sep",
        tripType: "Alpine Trekking",
        summitHeight: "2,537m (Grand Col Ferret)",
        region: "Alps",
        status: "active"
    },
    {
        title: "Kilimanjaro Summit Climb",
        description: "Conquer the Roof of Africa on the Machame Route. Traverse through five distinct climate zones, from rainforest to arctic summit, on this challenging but rewarding expedition.",
        image: "https://images.unsplash.com/photo-1650668302197-7f556c34cb91?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        location: "Tanzania",
        duration: "7 Days",
        durationDays: 7,
        rating: 4.7,
        reviews: 210,
        price: 2200,
        difficulty: "Difficult",
        highlights: JSON.stringify(["Uhuru Peak", "Barranco Wall", "Shira Plateau", "Sunrise from Summit"]),
        itinerary: JSON.stringify([
            { day: 1, title: "Machame Gate to Machame Camp", description: "Rainforest zone." },
            { day: 6, title: "Summit Night", description: "Climb to Uhuru Peak." },
            { day: 7, title: "Descent to Mweka Gate", description: "Celebration and certificate." }
        ]),
        inclusions: JSON.stringify([
            "Park fees and rescue fees",
            "Camping equipment",
            "All meals on mountain",
            "Guide, cook, and porters",
            "Airport transfers"
        ]),
        exclusions: JSON.stringify([
            "Tanzania Visa",
            "Tips for crew (mandatory)",
            "Personal gear",
            "Travel insurance"
        ]),
        bestTime: "Jan-Mar, Jun-Oct",
        tripType: "Summit Expedition",
        summitHeight: "5,895m (Uhuru Peak)",
        region: "Kilimanjaro",
        status: "active"
    },
    {
        title: "Patagonia W Trek",
        description: "Explore the dramatic landscapes of Torres del Paine National Park. Witness the granite towers, calving glaciers, and turquoise lakes of Chilean Patagonia.",
        image: "https://images.unsplash.com/photo-1518182170546-0766aa6f6a56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        location: "Chile",
        duration: "5 Days",
        durationDays: 5,
        rating: 4.9,
        reviews: 78,
        price: 1200,
        difficulty: "Moderate",
        highlights: JSON.stringify(["Grey Glacier", "French Valley", "The Towers", "Nordenskjöld Lake"]),
        itinerary: JSON.stringify([
            { day: 1, title: "Grey Glacier", description: "Hike to the glacier viewpoint." },
            { day: 3, title: "French Valley", description: "Panoramic views of the massif." },
            { day: 5, title: "Base of the Towers", description: "The iconic view." }
        ]),
        inclusions: JSON.stringify([
            "Refugio accommodation/camping",
            "All meals",
            "Catamaran crossing",
            "Park entrance fee",
            "Guide"
        ]),
        exclusions: JSON.stringify([
            "Flights to Punta Arenas",
            "Bus to Puerto Natales",
            "Insurance",
            "Personal expenses"
        ]),
        bestTime: "Nov-Mar",
        tripType: "Wilderness Trekking",
        summitHeight: "850m (Base Torres)",
        region: "Patagonia",
        status: "active"
    },
    {
        title: "Annapurna Circuit",
        description: "A classic trek through diverse landscapes in the heart of the Himalayas. Circle the Annapurna massif, crossing the Thorong La Pass and experiencing the rich culture of Manang and Mustang.",
        image: "https://images.unsplash.com/photo-1585938389612-a552a28d6914?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        location: "Nepal",
        duration: "18 Days",
        durationDays: 18,
        rating: 4.8,
        reviews: 150,
        price: 1100,
        difficulty: "Challenging",
        highlights: JSON.stringify(["Thorong La Pass", "Muktinath", "Manang", "Apple Pie Trail"]),
        itinerary: JSON.stringify([
            { day: 1, title: "Drive to Besisahar", description: "Start of the journey." },
            { day: 10, title: "Thorong La Pass", description: "Crossing the high pass at 5416m." },
            { day: 18, title: "Pokhara", description: "End of trek relaxation." }
        ]),
        inclusions: JSON.stringify([
            "Teahouse accommodation",
            "All meals",
            "Permits (ACAP & TIMS)",
            "Guide and porter",
            "Transport to start/end"
        ]),
        exclusions: JSON.stringify([
            "Drinks and snacks",
            "Hot showers",
            "Wifi charging",
            "Insurance"
        ]),
        bestTime: "Mar-May, Oct-Nov",
        tripType: "Circuit Trek",
        summitHeight: "5,416m (Thorong La)",
        region: "Annapurna Region",
        status: "active"
    }
]

async function main() {
    console.log('Start seeding ...')
    // Clear existing data to avoid duplicates or errors if we re-seed
    // Note: In a real prod app be careful with deleteMany!
    try {
        await prisma.trip.deleteMany()
    } catch (e) {
        // Ignore if table doesn't exist yet (first run)
    }

    for (const trip of TRIPS) {
        const t = await prisma.trip.create({
            data: trip,
        })
        console.log(`Created trip with id: ${t.id}`)
    }
    console.log('Seeding finished.')
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
