// Listen for changes from the other player
import { Choice, Player, PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export type ChoiceApiResponse = Choice & {
    player: Player
}

export default async (
    req: NextApiRequest,
    res: NextApiResponse<ChoiceApiResponse[]>
): Promise<void> => {
    const instanceId = req.query.instance as string
    const playerId = req.query.playerId as string

    const choices = await prisma.choice.findMany({
        where: {
            instanceId,
            NOT: {
                playerId
            }
        },
        include: {
            player: true
        }
    })
    res.status(200).json(choices)
}
