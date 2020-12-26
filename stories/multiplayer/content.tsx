import * as React from "react"
import { RootState } from '../../core/reducers'
import { useSelector } from 'react-redux'

import { useChannel, useEvent } from "@harelpls/use-pusher"
import { resetGame } from '../../core/util'
import { useDispatch } from 'react-redux'
import { updateInventory } from "../../core/actions"

import styles from '../../public/stories/multiplayer/Content.module.scss'

import { Tag } from "../../core/types"


interface IndexProps {
    children: React.ReactNode
}
interface ApiChoice {
    tag: Tag
    choice: string
}
const Content = ({ children }: IndexProps): JSX.Element => {
    const config = useSelector((state: RootState) => state.config)
    const { channelName, player } = useSelector((state: RootState) =>
        state.multiplayer)

    const dispatch = useDispatch()
    const channel = useChannel(channelName)
    useEvent(channel, "choose", ({ tag, choice }: ApiChoice) => {
        dispatch(updateInventory(tag, choice))
    })

    return (
        <>

            <header className={styles.header}>
                <nav>
                    <h1>
                        {config.title}
                    </h1>
                    <div className={styles.channel}>
                        {channelName}
                        <br />
                        Player {player}
                        { }
                    </div>
                    <div className={styles.controls}>

                        <button onClick={resetGame}>Reset</button>
                    </div>
                </nav>
            </header>
            <main className={styles.main} id="multiplayer-demo">
                <nav className={styles.left}>

                </nav>
                <article className={styles.article}>
                    {children}
                </article>
                <nav className={styles.right}>

                </nav>
            </main>
        </>
    )
}

export default Content
