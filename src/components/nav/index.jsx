import React, { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import GradButton from '../grad-button'

import leftTop from "../../assets/img/top-left.png"
import rightTop from "../../assets/img/top-right.png"

import togglerImg from "../../assets/img/toggler.svg"

const Nav = () => {
    const [menuVisible, setMenuVisible] = React.useState(true)

    useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.innerWidth > 1024) {
                setMenuVisible(true)
            }
            else {
                setMenuVisible(false)
            }
        })
    }, [])

    const toggleMobileMenu = () => {
        // check if the screen is mobile
        if (window.innerWidth <= 1024) {
            setMenuVisible(!menuVisible)
        }
    }

    // after 100 px scroll, add shadow to the navbar
    window.onscroll = () => {
        const nav = document.querySelector('.nav-holder')
        if (nav) {
            if (window.scrollY > 100) {
                nav.classList.add('floating')
            }
            else {
                nav.classList.remove('floating')
            }
        }
    }
    return (
        <>
            <img src={leftTop} className='left-top absolute top-0 left-0 z-[-1]' alt="" />
            <img src={rightTop} className='right-top absolute top-0 right-0 z-[-1]' alt="" />
            <div className="nav-holder">
                <nav className="max-w-7xl mx-auto px-3 sticky top-0 z-10 py-5">
                    <div className="flex lg:flex-row flex-col justify-between items-center gap-3">
                        <div className="logo lg:w-3/12 w-full flex lg:block justify-between items-center">
                            <Link to="/" className='text-white font-bold text-xl lg:text-[40px]'>
                                AKARI\COLOR
                            </Link>
                            <button className="toggler block lg:hidden" onClick={toggleMobileMenu}>
                                <img src={togglerImg} alt="" />
                            </button>
                        </div>

                        {
                            menuVisible && <div className="menu w-full lg:w-6/12">
                                <div className="logo lg:w-3/12 w-full flex lg:hidden justify-between items-center">
                                    <Link to="/" className='text-white font-bold text-xl lg:text-[40px]'>
                                        AKARI\COLOR
                                    </Link>
                                    <button className="toggler block lg:hidden" onClick={toggleMobileMenu}>
                                        <img src={togglerImg} alt="" />
                                    </button>
                                </div>
                                <div className="flex flex-2 justify-center items-center gap-16">
                                    <NavLink to="/" className='text-white font-bold md:font-normal text-3xl md:text-xl'>
                                        Home
                                    </NavLink>
                                    <NavLink to="/buy" className='text-white font-bold md:font-normal text-3xl md:text-xl'>
                                        Buy
                                    </NavLink>
                                    <NavLink to="/analysis" className='text-white font-bold md:font-normal text-3xl md:text-xl'>
                                        Analysis
                                    </NavLink>
                                    <NavLink to="/about" className='text-white font-bold md:font-normal text-3xl md:text-xl'>
                                        About
                                    </NavLink>
                                </div>
                            </div>
                        }

                        <div className="action w-full lg:w-3/12 hidden lg:flex justify-end items-center gap-5">
                            <GradButton text='Shop on Amazon' link={"/"} />
                        </div>
                    </div>
                </nav>
            </div>

        </>
    )
}

export default Nav