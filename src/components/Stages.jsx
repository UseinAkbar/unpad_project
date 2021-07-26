import React, {useState} from 'react';

const Stages = () => {

    return (
        <div className="container mx-auto">
            <a className='stage__menu' href='/livestream'>Stage 1</a>
            <a className='stage__menu' href='/exhibition'>Stage 2</a>
            <a className='stage__menu' href='/stage3'>Stage 3</a>
        </div>
    )
}

export default Stages