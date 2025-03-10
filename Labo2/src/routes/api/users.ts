import type { APIEvent } from '@solidjs/start/server'
import { addUsers, getUsers } from '~/lib/user'

export async function GET(event: APIEvent) {
  return await getUsers()
}

export async function POST(event: APIEvent) {
  return await addUsers(await event.request.formData())
}