import React from 'react'
import { Link } from 'react-router-dom'

const GradButton = ({ text, link }) => {
    return (
        <Link to={link} className='bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] text-white font-semibold text-xl py-4 px-14 rounded-full inline-flex'>
            {text}
        </Link>
    )
}

export default GradButton