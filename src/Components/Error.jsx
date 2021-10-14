import React from 'react'
import icon from '../icon/sprite.svg'
import '../assets/css/Error.css'

const Error = () => {
    return (
        <div className="error404">
            <svg className='error404__icon'>
                <use xlinkHref={`${icon}#icon-404`}></use>
            </svg>
            <div className="error404__massageBox">
                <h2 className="error404__heading">Oops, nothing found here..</h2>
                <a href="/" className="error404__link">go back</a>
            </div>
        </div>
    )
}

export default Error