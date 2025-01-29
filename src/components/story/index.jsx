import React from 'react'

import logo1 from '../../assets/img/logo1.svg'
import logo2 from '../../assets/img/logo2.svg'
import logo3 from '../../assets/img/logo3.svg'

const Story = () => {
    const data = [
        {
            id: 1,
            icon: logo1,
            title: "AI Logo",
            desc: 'Represents a sleek neural network with interconnected nodes and lines, showcasing artificial intelligence.'
        },
        {
            id: 1,
            icon: logo2,
            title: "Colour Palette logo",
            desc: 'A painter’s palette with vibrant multicolor circles, symbolizing creativity and color diversity.'
        },
        {
            id: 1,
            icon: logo3,
            title: "Image Processing Logo",
            desc: 'Features a camera lens with image editing elements like sliders or pixels, emphasizing photo manipulation and processing.'
        }
    ]
    return (
        <div className='py-52 story' id='about'>
            <div className="max-w-7xl mx-auto">
                <div className="text-center">
                    <h2 className='text-white font-bold text-[40px] md:text-[50px]'>
                        Our Story Empowering You with Confidence!
                    </h2>
                    <p className="text-white text-lg mt-3 mb-6">
                        At “AKARI\COLOR” we believe that everyone deserves to feel confident in their own skin. Discover how we’re transforming lives, one color palette at a time.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-10">
                    {
                        data.map(item => (
                            <div key={item.id} className="story-item text-center px-10 py-14 border-white border rounded-[20px] overflow-hidden">
                                <div className="icon">
                                    <img src={item.icon} className='w-[80px] h-[80px] block mx-auto mb-6' alt="" />
                                </div>
                                <div className="content">
                                    <h3 className='text-white font-bold text-2xl mb-1'>
                                        {item.title}
                                    </h3>
                                    <p className="text-white text-sm ">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Story