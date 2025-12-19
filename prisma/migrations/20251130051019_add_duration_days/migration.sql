-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Trip" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "durationDays" INTEGER NOT NULL DEFAULT 1,
    "rating" REAL NOT NULL,
    "reviews" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "difficulty" TEXT NOT NULL,
    "highlights" TEXT NOT NULL,
    "itinerary" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Trip" ("createdAt", "description", "difficulty", "duration", "highlights", "id", "image", "itinerary", "location", "price", "rating", "reviews", "title", "updatedAt") SELECT "createdAt", "description", "difficulty", "duration", "highlights", "id", "image", "itinerary", "location", "price", "rating", "reviews", "title", "updatedAt" FROM "Trip";
DROP TABLE "Trip";
ALTER TABLE "new_Trip" RENAME TO "Trip";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
