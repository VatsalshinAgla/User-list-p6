import React from 'react'
import '../Avtar/avtar.css'
function Avatar({ avatar }) {
    return (
        <img className="avtar-border" src={avatar} alt="avtar" />
    )
}

export default Avatar