import {query,action} from "@solidjs/router"
import { db } from './db'
import {z} from 'zod'

export const getMatches = query(async () => {
  'use server'
  return db.task.findMany()
}, 'getMatches')

const schema = z.object({
    date: z.date(),
    place: z.string(),
    level: z.string(),
    playerRegistered: z.number(),
    playerNeeded: z.number(),
})

export const addMatch = async (formData: FormData)=>{
 'use server'
  const data = schema.parse({
    date: new Date(formData.get('date') as string),
    place: formData.get('place'),
    level: formData.get('level'),
    playerRegistered: formData.get('registeredPlayer'),
    playerNeeded: formData.get('neededPlayer'),
  })
  await db.matches.create({ data })
}

export const addMatchAction = action(addMatch)