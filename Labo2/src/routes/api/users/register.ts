import type { APIEvent } from '@solidjs/start/server'
import { getUser, register } from '~/lib/user'

export async function GET() {
  const user = await getUser()
  return user ?? { loggedIn: false }
}

export async function POST(event: APIEvent) {
    await register(await event.request.formData())
    return { success: true}
  }