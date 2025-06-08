import type { APIEvent } from '@solidjs/start/server'
import { getUser, login } from '~/lib/user'

export async function GET() {
  const user = await getUser()
  return user ?? { loggedIn: false }
}

export async function POST(event: APIEvent) {
    await login(await event.request.formData())
    const user = await getUser()
    return { success: user !== null}
  }