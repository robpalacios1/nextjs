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
                <h1 className="api__data">API DATA</h1>
                <Users users={props.users}/>
            </Container>
        </div>
    )
}

Index.getInitialProps = async (ctx) => {
    const res = await fetch('https://reqres.in/api/users');
    const resJSON = await res.json();
    return {users: resJSON.data}
}

export default Index