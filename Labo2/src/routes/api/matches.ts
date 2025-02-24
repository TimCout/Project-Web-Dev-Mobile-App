import type { APIEvent } from '@solidjs/start/server'
import { addMatch, getMatches } from '~/lib/match'

export async function GET(event: APIEvent) {
  return await getMatches()
}

export async function POST(event: APIEvent) {
  return await addMatch(await event.request.formData())
}