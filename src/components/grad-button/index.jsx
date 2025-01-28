import React from 'react'
// import { Link } from 'react-router-dom'

const GradButton = ({ text, link, icon }) => {
    return (
        <a href={link} className='bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] text-white font-semibold text-xl py-4 px-14 rounded-full inline-flex'>
            {icon && icon} {text}
        </a>
    )
}

export default GradButton