import { db } from './db'

export const getTasks = query(async () => {
  'use server'
  return await db.task.findMany()
}, 'getTasks')