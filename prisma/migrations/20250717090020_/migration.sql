-- CreateTable
CREATE TABLE "Games" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "timed_played" TEXT NOT NULL,

    CONSTRAINT "Games_pkey" PRIMARY KEY ("id")
);
