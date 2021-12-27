import * as React from 'react'

import Grid from 'core/components/ui/layouts/grid'

import styles from 'public/styles/Index.module.scss'
import ResetButton from 'core/components/ui/reset-button'
import useChapter from 'core/hooks/use-chapter'

import Sidebar from 'stories/playground/sidebar'

const Index: React.FC = ({ children }) => {
    const chapter = useChapter()
    return (
        <Grid
            styles={styles}
            head={
                <>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Roboto+Slab&family=Roboto+Condensed&family=Smythe&family=Orbitron&family=Noto+Sans+Cuneiform&family=Macondo+Swash+Caps&display=swap"
                        rel="stylesheet"
                    />
                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:creator" content="@liza" />
                    <meta name="twitter:site" content="@liza" />
                    <meta
                        name="twitter:title"
                        content="Trapped in Your Time Machine! (a hypertext demo)"
                    />
                    <meta
                        name="twitter:description"
                        content="A demo multimedia interactive fiction hypertext story for the Windrift framework"
                    />

                    <meta
                        name="twitter:image"
                        content="https://playground.windrift.app/images/time-machine-logo.png"
                    />
                    <meta property="og:type" content="website" />
                    <meta
                        property="og:description"
                        content="A demo multimedia interactive fiction hypertext story for the Windrift framework"
                    />
                    <meta
                        property="og:image"
                        content="https://playground.windrift.app/images/time-machine-logo.png"
                    />
                    <meta
                        property="og:title"
                        content="Trapped in Your Time Machine! (a hypertext demo)"
                    />
                </>
            }
            header={<></>}
            right={
                <div>
                    <ResetButton />
                    <Sidebar filename={chapter.filename} />
                </div>
            }>
            {children}
        </Grid>
    )
}

export default Index
