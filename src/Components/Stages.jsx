import React from 'react';
import Stage from './Stage';
import StageMobile from './StageMobile';
import SidebarMain from './SidebarMain';
import '../assets/css/Stages.css'

const Stages = () => {

    return (
        <section className="stage">
            <SidebarMain />
            <Stage />
            <StageMobile />
        </section>
    )
}

export default Stages