import React, {useState} from 'react';

const Stage = ({id, title, handleClick}) => {


    return (
        <div className="stage__container" onClick={() => handleClick(id, title)}>
            <h1 className="stage__heading">{title}</h1>
        </div>
    )
}

export default Stage