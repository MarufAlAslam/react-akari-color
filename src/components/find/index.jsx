import React from 'react'
import GradButton from '../grad-button'
const Find = () => {
    return (
        <div className='bg-[#283462] py-20 border-y-2 border-[#bcbcbc]' id='begin'>
            <div className="max-w-7xl mx-auto">
                <div className="text-center">
                    <h2 className='text-white font-bold text-[40px] md:text-[50px]'>
                        Begin Your Personalized Colour Analysis
                    </h2>
                    <p className="text-white text-lg mt-3 mb-6">
                        Discover the colors that complement you best with AI-powered precision. Upload your photo to unveil a personalized color palette and transform your style effortlessly!¸
                    </p>
                </div>

                <form acation="" className='lg:w-2/3 mx-auto'>
                    <input type="text" className='bg-white w-full p-3 rounded-lg' placeholder='Enter the Amazon order ID' name="" id="" />
                    <div className="text-center mt-6">
                        <GradButton text='Go for Analysis' link={"/upload"} />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Find