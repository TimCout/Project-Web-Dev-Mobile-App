import { db } from "~/lib/db";
import { getUser } from "~/lib/user";

export async function GET() {
    const user = await getUser()
    if (!user) {
        throw new Error('Not Authorized')
    }
    const data = await db.matches.findMany({
        include: { users: { where: { userId: user.id }} }
    })
    return data.map(record => ({ id: record.id, joined: record.users.length > 0 }))
}