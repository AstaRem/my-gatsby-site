import * as React from 'react'
import Layout from '../components/layout'


const AboutPage = () => {
    return (
        <main>
            <Layout pageTitle='About me'>
                <p>I am learning to create a full stack project with Gatsby.</p>
            </Layout>
        </main>
    )
}

export const Head = () => <title>About me</title>

export default AboutPage