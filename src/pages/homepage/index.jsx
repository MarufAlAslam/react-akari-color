import React from 'react'
import Header from '../../components/header'
import Stats from '../../components/stats'
import Personalized from '../../components/personalized'

const Homepage = () => {
    return (
        <main>
            <Header />
            <Stats />
            <Personalized />
        </main>
    )
}

export default Homepage