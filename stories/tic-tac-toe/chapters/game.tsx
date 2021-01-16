import { RootState } from 'core/reducers'
import { useSelector } from 'react-redux'
import { usePresenceChannel } from '@harelpls/use-pusher'

import { Section, Chapter } from 'core/components'
import { PageType } from 'core/types'
import Board from '../components/board'

export const Page: PageType = () => {
    const { player, channelName } = useSelector((state: RootState) =>
        state.multiplayer)
    const { members } = usePresenceChannel(channelName)
    const log = useSelector((state: RootState) =>
        state.log
    )
    let currentPlayer = 1
    if (log.length > 0) {
        const last = log[log.length - 1]
        currentPlayer = last.player === 1 ? 2 : 1
    }
    const char = player === 1 ? "X" : "O"
    return <Chapter filename="game">
        <Section>
            <style global jsx>{`
                span.selected {
                    display: none !important;
                }
            `}
            </style>

            <h1>Tic-Tac-Toe</h1>

            <p>
                It is {currentPlayer === player ? "your" : "the other player's"} turn.
            </p>


            {Object.entries(members).length < 2 &&
                <p>
                    Both players need to be online to continue the game. Click the
                    "Share channel with {player === 1 ? 1 : 2}" button at the top to
                    put the channel name in your clipboard, then send that to a friend.
                </p>
            }
            {Object.entries(members).length === 2 &&
                <Board char={char} myTurn={player === currentPlayer} />
            }



        </Section>

    </Chapter >
}
