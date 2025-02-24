-- CreateTable
CREATE TABLE "Matches" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" DATETIME NOT NULL,
    "place" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "playerRegistered" INTEGER NOT NULL,
    "playerNeeded" INTEGER NOT NULL
);
