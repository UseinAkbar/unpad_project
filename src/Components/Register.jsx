import React, {useState} from 'react'

const Register = ({removeClass}) => {
    const [isDone, setDone] = useState(false)
    const [isHidden, setHidden] = useState(false)
    
    const handlePopIn = () => {
        setHidden(true)
        setDone(true)
    }

    const handleDone = () => {
        localStorage.setItem('clicked', true)
        window.location.reload()
    }

    return (
        <div className={`${removeClass} absenContainer`}>
            <div className={`absen animatedAbsen ${isHidden && 'hidden'}`}>
                <h2 className="absen__heading">Silakan absen terlebih dahulu.</h2>
                <a href="https://bit.ly/AbsensiPOA63" target='_blank' className="absen__btn" onClick={handlePopIn} rel="noreferrer">link</a>
            </div>

            {isDone && <div className='done'>
                <h2 className='done__heading'>Kamu telah Absen!</h2>
                <button className='done__btn' onClick={handleDone}>Ok</button>
            </div>}

            
        </div>
        
    )
}

export default Register