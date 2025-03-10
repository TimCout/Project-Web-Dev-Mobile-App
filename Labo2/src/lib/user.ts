import { query, action } from "@solidjs/router";
import { db } from "./db";
import { z } from "zod";

export const getUsers = query(async () => {
    "use server";
    return db.users.findMany(); 
  }, "getUsers");

  const schema = z.object({
    username: z.string(),
    password: z.string(),
  });
  
  export const addUsers = async (formData: FormData) => {
    "use server";
    const data = schema.parse({
      username: formData.get("username"),
      password: formData.get("password"),
    });
    await db.users.create({ data });
  };
  export const addUserAction = action(addUsers);
