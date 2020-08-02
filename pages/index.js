import React from 'react'
import Container from '../components/container'
import Head from 'next/head'

function Index() {
    return (
        <div>
            <Head>
                <title>Next.js Project</title>
            </Head>
            <Container>
                <h1>Index</h1>
            </Container>
        </div>
    )
}

export default Index