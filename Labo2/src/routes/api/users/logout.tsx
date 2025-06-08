import type { APIEvent } from '@solidjs/start/server'
import { getUser, logout } from '~/lib/user'

export async function GET() {
  const user = await getUser()
  return user ?? { loggedIn: false }
}

export async function POST(event: APIEvent) {
    try {
        await logout()
        return {success: true}
    } catch {
        return {success: false}
    }
  }