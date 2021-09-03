import React, {useState} from 'react'
import icon from '../icon/sprite.svg'
import rightArrow from '../icon/right-arrow.png'

const SidebarMain = () => {
    const iconList = ['#icon-home', '#icon-live', '#icon-info', '#icon-absent']
    const link = ['/', '/livestream', '/info', '#']
    const [deg, setDeg] = useState(180)
    const [isCLicked, setCLick] = useState(false)
   
    const handleCLick = () => {
        setCLick(!isCLicked)
        setDeg(prevValue => {
            return prevValue+180
        })
    }

    return (
        <div className={`sidebar ${isCLicked && 'moveLeft'}`}>
            {iconList.map((item, i) => {
                return (
                    <a key={i} href={`${link[i]}`} className='sidebar__link'>
                        <svg className={`sidebar__menu menu-${i+1}`}>
                            <use xlinkHref={`${icon}${item}`}></use>
                        </svg>
                    </a>
                )
            })}

            <span className='sidebar__toggle' onClick={handleCLick}>
                <img src={rightArrow} style={{transform: `rotate(${deg}deg)`}} className='sidebar__toggle-icon' alt="tonggle icon" />
            </span>
        </div>
    )
}

export default SidebarMain