import Head from 'next/head'

import styles from 'public/styles/Index.module.scss'

function Index(): JSX.Element {
    return (
        <>
            <Head>
                <title lang="en">Welcome to the Windrift Playground</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto+Slab&family=Roboto+Condensed&family=Smythe&family=Orbitron&family=Noto+Sans+Cuneiform&family=Macondo+Swash+Caps&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <header className={styles.header}>
                <nav>
                    <div></div>
                    <h1>Welcome to the Windrift Playground!</h1>
                    <div> </div>
                </nav>
            </header>
            <main className={styles.main} lang="en">
                <nav className={styles.left}></nav>
                <article className={styles.story}>
                    <p>
                        This is the Windrift Playground, where demo stories extending the
                        capabilities of the{' '}
                        <a href="https://github.com/lizadaly/windrift">Windrift</a> hypertext
                        framework are deployed.
                    </p>
                    <p>
                        Source code for all stories is free for exploration and use at{' '}
                        <a href="https://github.com/lizadaly/windrift-playground">
                            https://github.com/lizadaly/windrift-playground
                        </a>
                        .
                    </p>
                    <ul>
                        <li>
                            <p>
                                <a href="/time-machine">Trapped in Your Time Machine!</a>—a brief
                                mutable story demonstrating changing text and images in-place in
                                response to user input.
                            </p>
                        </li>
                        <li>
                            <p>
                                <a href="/visual-story">A Visual Story</a>—using Windrift choices to
                                drive a largely visual story, with extensive use of animation.
                            </p>
                        </li>
                        <li>
                            <p>
                                <a href="/house-of-dust">House of Dust</a>—an implementation of a
                                classic generative digital poem.
                            </p>
                        </li>
                    </ul>
                </article>
                <nav className={styles.right}></nav>
            </main>
        </>
    )
}

export default Index
