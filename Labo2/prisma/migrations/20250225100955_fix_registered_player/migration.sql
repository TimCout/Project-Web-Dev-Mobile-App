/*
  Warnings:

  - You are about to drop the column `playerNeeded` on the `Matches` table. All the data in the column will be lost.
  - You are about to drop the column `playerRegistered` on the `Matches` table. All the data in the column will be lost.
  - Added the required column `neededPlayer` to the `Matches` table without a default value. This is not possible if the table is not empty.
  - Added the required column `registeredPlayer` to the `Matches` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Matches" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" DATETIME NOT NULL,
    "place" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "registeredPlayer" INTEGER NOT NULL,
    "neededPlayer" INTEGER NOT NULL
);
INSERT INTO "new_Matches" ("date", "id", "level", "place") SELECT "date", "id", "level", "place" FROM "Matches";
DROP TABLE "Matches";
ALTER TABLE "new_Matches" RENAME TO "Matches";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
