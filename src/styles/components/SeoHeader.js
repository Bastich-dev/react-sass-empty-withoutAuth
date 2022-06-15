import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import routes from './routes'
import EvanisLogo from '@/public/android-chrome-512x512.png'
import { FRONT_URL } from './constants'
export default function Helmet() {
    const router = useRouter()

    const origin = FRONT_URL
    const prefix = 'Evanis Admin'

    const title = routes.find((e) => router.asPath.includes(e.path))?.name
    const titlePage = prefix + (title ? ' - ' + title : '')

    const logo = EvanisLogo

    return (
        <Head>
            <title>{titlePage}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />

            <meta name="twitter:title" content={titlePage} />
            <meta property="og:title" content={titlePage} />

            <meta name="description" content={titlePage} />
            <meta name="twitter:description" content={titlePage} />
            <meta property="og:description" content={titlePage} />

            <meta property="og:site_name" content={prefix} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={origin + router.asPath} />
            <meta property="og:image" content={logo.src} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image" content={logo.src} />
            <link rel="apple-touch-icon" href={logo.src} />
        </Head>
    )
}
