import React from 'react'
import Header from '../../components/header'
import Stats from '../../components/stats'
import Personalized from '../../components/personalized'
import Find from '../../components/find'
import Story from '../../components/story'

const Homepage = () => {
    return (
        <main>
            <Header />
            <Stats />
            <Personalized />
            <Find />
            <Story />
        </main>
    )
}

export default Homepage