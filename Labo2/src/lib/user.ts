import { query, action, redirect } from "@solidjs/router";
import { db } from "./db";
import { z } from "zod";
import { useSession } from "vinxi/http";
import bcrypt from "bcryptjs";

export const getUser = query(async () => {
  "use server";
  try {
    const session = await getSession();
    if (!session.data.username) {
      return null;
    }
    return await db.users.findUniqueOrThrow({
      where: { username: session.data.username },
    });
  } catch {
    return null;
  }
}, "getUser");

type SessionData = {
  username?: string;
};

export function getSession() {
  "use server";
  return useSession<SessionData>({
    password: import.meta.env.VITE_SESSION_SECRET,
  });
}

export const userSchema = z.object({
  username: z.string(),
  password: z.string().min(8),
});

export async function register(form: FormData) {
  "use server";
  const user = userSchema.parse({
    username: form.get("username"),
    password: form.get("password"),
  });
  user.password = await bcrypt.hash(user.password, 10);
  await db.users.create({ data: user });
}

export const registerAction = action(register);

export const login = async (form: FormData) => {
  "use server";
  const { username, password } = userSchema.parse({
    username: form.get("username"),
    password: form.get("password"),
  });
  const record = await db.users.findUniqueOrThrow({ where: { username } });
  const loggedIn = await bcrypt.compare(password, record.password);
  if (loggedIn) {
    const session = await getSession();
    await session.update({ username });
  }
};

export const loginAction = action(async (form: FormData) => {
  'use server'
  await login(form);
  throw redirect("/football");
});

export const logout = async () => {
  "use server";
  const session = await getSession();
  await session.clear();
};

export const logoutAction = action(async () => {
  'use server'
  await logout();
  throw redirect("/login");
});
