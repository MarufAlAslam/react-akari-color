import React from 'react'
import GradButton from '../grad-button'
import groupImg from '../../assets/img/group.svg'

const Personalized = () => {
    return (
        <div className='personalized py-14'>
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center">
                    <div className="left lg:w-7/12 w-full">
                        <h1 className='text-white font-bold text-[50px] lh-50'>
                            Your Personalized Color Analysis Awaits!
                        </h1>
                        <p className="text-white text-lg mt-4 mb-8">
                            Experience the power of AI to uncover your unique color palette. Shop now and begin your journey to discovering your best shades!
                        </p>
                        <GradButton text='Buy Now on Amazon' link={"/"} />
                    </div>
                    <div className="right lg:w-4/12 w-full">
                        <img src={groupImg} className='w-full' alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Personalized