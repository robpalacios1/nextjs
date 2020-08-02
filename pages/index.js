import React from 'react'
import Container from '../components/container'
import Head from 'next/head'
import fetch from 'isomorphic-fetch'
import Users from '../components/Users'

function Index(props) {
    console.log(props)
    return (
        <div>
            <Head>
                <title>Next.js Project</title>
            </Head>
            <Container>
                <h1>Next</h1>
                <Users users={props.users}/>
            </Container>
        </div>
    )
}

Index.getInitialProps = async (ctx) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return {users: data}
}

export default Index