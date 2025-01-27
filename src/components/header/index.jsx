import React from 'react'
import { Link } from 'react-router-dom'
import GradButton from '../grad-button'

import leftTop from "../../assets/img/top-left.png"
import rightTop from "../../assets/img/top-right.png"

import robotImg from "../../assets/img/hero-robot.png"
import userImg from "../../assets/img/user.png"
import { FaStar } from 'react-icons/fa'

const Header = () => {
    const reviews = [
        {
            id: 1,
            name: "Sophia R.",
            review: "This product changed the way I shop for clothes and makeup! The color analysis was spot on, and....",
            img: userImg,
            rating: 5
        },
        {
            id: 1,
            name: "Sophia R.",
            review: "This product changed the way I shop for clothes and makeup! The color analysis was spot on, and....",
            img: userImg,
            rating: 5
        },
        {
            id: 1,
            name: "Sophia R.",
            review: "This product changed the way I shop for clothes and makeup! The color analysis was spot on, and....",
            img: userImg,
            rating: 5
        },
        {
            id: 1,
            name: "Sophia R.",
            review: "This product changed the way I shop for clothes and makeup! The color analysis was spot on, and....",
            img: userImg,
            rating: 5
        },
    ]
    return (
        <header className='py-6 relative'>
            <img src={leftTop} className='left-top absolute top-0 left-0 z-[-1]' alt="" />
            <img src={rightTop} className='right-top absolute top-0 right-0 z-[-1]' alt="" />
            <div className="max-w-7xl mx-auto px-3">
                <div className="flex justify-between items-center gap-3">
                    <div className="logo w-3/12">
                        <Link to="/" className='text-white font-bold text-[40px]'>
                            AKARI\COLOR
                        </Link>
                    </div>
                    <div className="menu w-6/12">
                        <div className="flex justify-center items-center gap-16">
                            <Link to="/" className='text-white font-normal text-xl'>
                                Home
                            </Link>
                            <Link to="/buy" className='text-white font-normal text-xl'>
                                Buy
                            </Link>
                            <Link to="/analysis" className='text-white font-normal text-xl'>
                                Analysis
                            </Link>
                            <Link to="/about" className='text-white font-normal text-xl'>
                                About
                            </Link>
                        </div>
                    </div>
                    <div className="action w-3/12">
                        <GradButton text='Shop on Amazon' link={"/"} />
                    </div>
                </div>
            </div>

            {/* banner */}
            <div className="max-w-7xl mx-auto px-3 py-24">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 items-center grid-cols-1 gap-5">
                    <div className="item">
                        <h1 className='text-white font-bold text-[50px] lh-50'>
                            Discover Your Perfect Colours
                        </h1>
                        <p className="text-white text-lg mt-4 mb-8">
                            Unlock the full potential of your face colour analysis product. Validate your Amazon purchase, upload your photo, and receive personalized results to enhance your beauty and style.
                        </p>
                        <GradButton text='Start Your Analysis' link={"/"} />
                    </div>
                    <div className="item">
                        <img src={robotImg} alt="" />
                    </div>
                    <div className="item reviews flex flex-col gap-5">
                        {
                            reviews.map(review => (
                                <div key={review.id} className="gradient-border">
                                    <div className="review bg-glass py-4 px-6 rounded-lg">
                                        <p className='text-sm text-white font-semibold mb-4'>
                                            {review.review}
                                        </p>
                                        <div className="flex justify-between items-center gap-3">
                                            <div className="flex justify-start items-center gap-3">
                                                <img src={review.img} alt="" />
                                                <div>
                                                    <h3 className='italic text-white font-bold'>
                                                        {review.name}
                                                    </h3>

                                                </div>
                                            </div>
                                            <div className="rating flex justify-end items-center gap-2">
                                                {
                                                    Array.from({ length: review.rating }, (_, i) => (
                                                        <FaStar key={i} className='text-[#FFD700]' />
                                                    ))
                                                }
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            {/* banner */}
        </header>
    )
}

export default Header