import React from 'react'
import GradButton from '../grad-button'
import uploaderImg from "../../assets/img/uploader.svg"

const Uploader = () => {
    const [preview, setPreview] = React.useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setPreview(null);
        }
    };

    return (
        <div className='lg:py-32 py-10'>
            <div className="mx-auto max-w-7xl">
                <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-32 gap-10 items-center">
                    <div className="left">
                        <div className="flex flex-col justify-center items-center gap-5">
                            <input
                                type="file"
                                className='w-3/4 py-2 px-4 border-[#616885] hidden'
                                id='uploader'
                                accept="image/*"
                                onChange={handleFileChange}
                            />
                            <label htmlFor="uploader" className={`w-full bg-[#616885] relative text-xl text-white border-2 border-dashed border-[#fff] py-4 px-6 rounded-lg text-[#283462] text-center cursor-pointer`}>
                                {preview ? <>
                                    <img src={preview} alt="Preview" className='w-full py-2 px-4 border-[#616885]' />
                                    <span className='overlay-img'>Change Image</span>
                                </> : 'Upload Image'}
                            </label>
                            {/* {preview && } */}
                            {preview && (
                                <>
                                    <button
                                        onClick={() => setPreview(null)}
                                        className='mt-2 text-red-500 py-2 px-4 rounded-full text-xl font-bold px-8'
                                    >
                                        Remove Image
                                    </button>
                                </>
                            )}
                            <GradButton text='Analysis' link={"/about"} />
                        </div>
                    </div>
                    <div className="right">
                        <img src={uploaderImg} className='w-full' alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Uploader