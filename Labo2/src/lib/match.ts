import { query, action } from "@solidjs/router";
import { db } from "./db";
import { z } from "zod";
import { getUser } from "./user";

export const getMatches = query(async () => {
  "use server";
  return db.matches.findMany();
}, "getMatches");

const schema = z.object({
  date: z.date(),
  place: z.string(),
  level: z.string(),
  registeredPlayer: z.coerce.number(),
  neededPlayer: z.coerce.number(),
});

export const addMatch = async (formData: FormData) => {
  "use server";
  const data = schema.parse({
    date: new Date(formData.get("date") as string),
    place: formData.get("place"),
    level: formData.get("level"),
    registeredPlayer: formData.get("registeredPlayer"),
    neededPlayer: formData.get("neededPlayer"),
  });
  await db.matches.create({ data });
};
export const addMatchAction = action(addMatch);

export async function joinMatch(matchId: number) {
  "use server";
  const user = await getUser();
  if (!user) {
    throw new Error("User not logged in");
  }
  const match = await db.matches.findUnique({ where: { id: matchId } });
  if (match) {
    await db.participation.create({ data: { userId: user.id, matchId } });
    await db.matches.update({
      where: { id: matchId },
      data: {
        registeredPlayer: match.registeredPlayer + 1,
      },
    });
  }
}

export const joinMatchAction = action(joinMatch);

export const hasJoined = query(async (matchId: number) => {
  "use server";
  const user = await getUser();
  if (!user) {
    throw new Error("User not logged in");
  }
  const participation = await db.participation.findFirst({
    where: { userId: user.id, matchId },
  });
  return participation ? true : false;
}, 'hasJoined')


export async function leaveMatch(matchId: number) {
  "use server";
  const user = await getUser();
  if (!user) {
    throw new Error("User not logged in");
  }
  const match = await db.matches.findUnique({ where: { id: matchId } });
  if (match) {
    await db.matches.update({
      where: { id: matchId },
      data: {
        registeredPlayer: match.registeredPlayer - 1,
      },
    });
    if (await hasJoined(matchId)) {
      await db.participation.deleteMany({
        where: { matchId, userId: user.id },
      });
    }
  }
}

export const leaveMatchAction = action(leaveMatch);
