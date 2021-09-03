import React from 'react'
import SidebarComp from './SidebarComp'

const Home = () => {
    return (
        <main className="main">
            <SidebarComp />
            <a href="/stages" className='main__cta'>Let's Start Our Journey</a>
        </main>
    )
}

export default Home