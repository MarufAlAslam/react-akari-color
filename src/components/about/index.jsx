import React from 'react'
import GradButton from '../grad-button'
import uploaderImg from "../../assets/img/uploader.svg"
import { LuDownload } from 'react-icons/lu'

const About = () => {
    return (
        <div className='lg:py-32 py-10'>
            <div className="mx-auto max-w-7xl">
                <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-32 gap-10 items-start about-content">
                    <div className="left lg:col-span-2 col-span-1">
                        <div className="text-right mb-6">
                            <GradButton text='Download' link={"/"} icon={
                                <LuDownload className='mr-2' />
                            } />
                        </div>
                        <div className="card bg-white p-8 rounded-[20px] flex flex-col gap-3">
                            <p className="text-lg font-bold">
                                About Product
                            </p>
                            <p>
                                The e.l.f. Halo Glow Beauty Wand is a lightweight, creamy blush formula designed to deliver a natural, radiant glow to your cheeks. Perfect for everyday use or for adding a pop of color to your makeup routine, this beauty wand features a precision cushion-tip applicator for easy and mess-free application. The product blends seamlessly into the skin, offering a buildable, luminous finish that lasts all day without caking or settling into fine lines.
                            </p>
                            <ul className='list-disc list-inside pl-4'>
                                <li>Texture: Creamy and smooth</li>
                                <li>Finish: Luminous and glowy</li>
                                <li>Applicator: Cushion-tip for targeted application</li>
                                <li>Formula: Vegan and cruelty-free</li>
                            </ul>

                            <p className="text-lg font-bold mt-5">
                                Best-Suited Skin Tones
                            </p>
                            <p>
                                This specific shade of blush is designed to complement a range of skin tones.
                            </p>
                            <p className="text-lg font-bold mt-5">
                                1. Fair Skin Tones:
                            </p>
                            <ul className='list-disc list-inside pl-4'>
                                <li>Provides a soft, natural flush that mimics a healthy glow.</li>
                                <li>Works best when lightly applied and blended for a subtle effect.</li>
                            </ul>
                            <p className="text-lg font-bold mt-5">
                                2. Medium Skin Tones:
                            </p>
                            <ul className='list-disc list-inside pl-4'>
                                <li>Adds a warm, radiant pop of color to the cheeks.</li>
                                <li>Perfect for creating a sun-kissed or natural rosy look.</li>
                            </ul>
                            <p className="text-lg font-bold mt-5">
                                3. Deep Skin Tones:
                            </p>
                            <ul className='list-disc list-inside pl-4'>
                                <li>Enhances rich undertones with a bold and glowing finish.</li>
                                <li>Builds beautifully to create depth and dimension on the skin.</li>
                            </ul>
                            <p className="text-lg font-bold mt-5">
                                Why You'll Love It:
                            </p>
                            <ul className='list-disc list-inside pl-4'>
                                <li>Natural Glow: Infused with light-reflecting pigments for a radiant finish.</li>
                                <li>Buildable Formula: Suitable for both a natural and dramatic look.</li>
                                <li>Travel-Friendly: Compact and mess-free design, perfect for on-the-go touch-ups.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="right col-span-1">
                        <img src={uploaderImg} className='w-full' alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About