import React, {useState} from 'react';

const List = ({idVideo, title, desc, handleID}) => {

    return (
        <li className={`list__item`} onClick={() => {
            handleID(idVideo, title)
            }}>

            <h2 className={`list__title`}>{title}</h2>
            <p className={`list__desc`}>{desc}</p>
        </li>
    )
}

export default List