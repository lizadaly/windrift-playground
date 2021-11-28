import { Nav } from 'core/components'

interface SidebarProps {
    filename: string
}

export const Demos = (): JSX.Element => {
    return (
        <>
            <h4>Menu</h4>
            <ul>
                <li>
                    <a href="/time-machine">Trapped in Your Time Machine!</a>
                </li>
                <li>
                    <a href="/visual-story">A Visual Story</a>
                </li>
                <li>
                    <a href="/house-of-dust">The House of Dust</a>
                </li>
            </ul>
            <p>
                <a href="https://github.com/lizadaly/windrift-playground">Source code</a>
            </p>
        </>
    )
}
const Sidebar = ({ filename }: SidebarProps): JSX.Element => {
    switch (filename) {
        case 'time-machine':
            return (
                <aside>
                    <h4>Trapped in Your Time Machine!</h4>
                    <p>
                        One of Windrift's design principles is that it should support "mutable"
                        stories, with content that can shift, sometimes dramatically, in response to
                        user input. This can be complement linear storytelling (where the plot moves
                        forward in time) or entirely supplant it.
                    </p>
                    <p>
                        An extreme form of mutable story is{' '}
                        <a href="https://lizadaly.com/projects/the-ballroom/">The Ballroom</a>{' '}
                        (2019), developed using an earlier version of Windrift, where the entire
                        plot is present on-screen at all times but shifts in-place based on user
                        choice.
                    </p>
                    <p>
                        This short piece demonstrates a hybrid concept—the plot moves forward (and
                        backward!) through time, but can also be read end-to-end as a complete
                        narrative at each time step. Both the text content and the imagery are
                        responsive to the world state.
                    </p>
                    <Demos />
                </aside>
            )
        case 'house-of-dust':
            return (
                <aside>
                    <h4>The House of Dust</h4>
                    <p>
                        Windrift can be used as a generative text engine by virtue of its ability to
                        render text either in response to user input or, in this case, a simple
                        interval timer.
                    </p>

                    <p>
                        This adaptation of{' '}
                        <a href="https://www.centerforthehumanities.org/james-gallery/exhibitions/house-of-dust">
                            Alison Knowles‘ classic 1967 computer-generated poem
                        </a>{' '}
                        of the same name generates text on a timer and lays each successive poem out
                        in a grid. The source code for the original does not exist; this word list
                        was sourced from adaptations by{' '}
                        <a href="https://nickm.com/memslam/a_house_of_dust.html">Nick Montfort</a>{' '}
                        and <a href="http://zachwhalen.net/pg/dust/">Zach Whalen</a> and an original
                        transcript from the{' '}
                        <a href="https://zkm.de/en/artwork/house-of-dust">
                            Center for Art and Media Karlsruhle
                        </a>
                        .
                    </p>
                    <p>
                        A different implementation of <em>The House of Dust</em> was included with
                        Windrift 1.
                    </p>
                    <Demos />
                </aside>
            )
        case 'visual-story':
            return (
                <aside>
                    <h4>A Visual Story</h4>
                    <p>
                        Interactive fiction can take the form of digital comics or visual novels,
                        and the web platform is ideally suited to this. This silly story
                        demonstrates one way of adapting Windrift to visual storytelling:
                    </p>
                    <p>
                        - Enter/leave animations managed through a custom component. No{' '}
                        <code>Chapter</code> or <code>Section</code> components are used here;
                        instead a custom <code>Scene</code> component is created that watches for
                        changes to the Windrift section counter.
                    </p>
                    <p>
                        - <a href="https://react-spring.io/">react-spring</a>, bundled with
                        Windrift, renders the animations.
                    </p>
                    <p>
                        {' '}
                        - Extensive use of <code>ImageChoice</code> rather than text-based choice
                        links to register clicking on NPCs.
                    </p>
                    <Demos />
                </aside>
            )

        default:
            return null
    }
}

export default Sidebar
