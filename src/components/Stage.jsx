import React, {useState} from 'react';

const Stage = ({id, title, handleClick}) => {


    return (
        <div className="bg-red-500 p-8 cursor-pointer" onClick={() => handleClick(id, title)}>
            <h1 className="text-center">{title}</h1>
        </div>
    )
}

export default Stage