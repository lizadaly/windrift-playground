import { C, R, Section, Chapter, Nav } from 'core/components'
import { BaseList as D } from 'core/components/widgets'
import Only from 'core/multiplayer/components/player-only'
import { PageType } from 'core/types'

export const Page: PageType = () => {
    const { player: playerIsVisible, chapterName } = { player: {}, chapterName: '' }
    return (
        <>
            <Chapter filename="foyer">
                <Section>
                    {/* <Only player={player}>
                        <p>
                            Hurrying through the rainswept November night, you're glad to see the
                            bright lights of the Opera House. It's surprising that there aren't more
                            people about but, hey, that's great, since you're a raccoon, and you
                            don't want any trouble...
                        </p>
                    </Only> */}

                    <h1>Foyer of the Opera House</h1>
                    <p>
                        You are in a spacious hall, splendidly decorated in red and gold, with
                        glittering chandeliers overhead. The entrance from the street is{' '}
                        <C options={[['back the way you came', null]]} tag="c1-back" widget={D} />,
                        and there are doorways east and <Nav text="west" next="cloakroom" />.
                    </p>
                    <R
                        tag="c1-back"
                        to={{
                            came: (
                                <p>
                                    You've only just arrived, and besides, the weather outside seems
                                    to be getting worse.
                                </p>
                            )
                        }}
                    />
                </Section>
            </Chapter>
            {playerIsVisible && chapterName == 'foyer' && (
                <p>There's a {playerIsVisible} here!! </p>
            )}
        </>
    )
}