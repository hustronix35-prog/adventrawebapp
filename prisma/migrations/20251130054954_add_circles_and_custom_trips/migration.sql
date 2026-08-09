-- CreateTable
CREATE TABLE "Circle" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT,
    "ownerId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Circle_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CircleMember" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "circleId" TEXT NOT NULL,
    "joinedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "CircleMember_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CircleMember_circleId_fkey" FOREIGN KEY ("circleId") REFERENCES "Circle" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Trip" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT,
    "location" TEXT NOT NULL,
    "duration" TEXT,
    "durationDays" INTEGER NOT NULL DEFAULT 1,
    "rating" REAL NOT NULL DEFAULT 0,
    "reviews" INTEGER NOT NULL DEFAULT 0,
    "price" INTEGER NOT NULL DEFAULT 0,
    "difficulty" TEXT NOT NULL DEFAULT 'Moderate',
    "highlights" TEXT,
    "itinerary" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "creatorId" TEXT,
    "circleId" TEXT,
    CONSTRAINT "Trip_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Trip_circleId_fkey" FOREIGN KEY ("circleId") REFERENCES "Circle" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Trip" ("createdAt", "description", "difficulty", "duration", "durationDays", "highlights", "id", "image", "itinerary", "location", "price", "rating", "reviews", "title", "updatedAt") SELECT "createdAt", "description", "difficulty", "duration", "durationDays", "highlights", "id", "image", "itinerary", "location", "price", "rating", "reviews", "title", "updatedAt" FROM "Trip";
DROP TABLE "Trip";
ALTER TABLE "new_Trip" RENAME TO "Trip";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "CircleMember_userId_circleId_key" ON "CircleMember"("userId", "circleId");
