import React from 'react'

const Stats = () => {
    const stats = [
        {
            id: 1,
            title: 'LEVEL',
            text: 'Unlock the full potential of your face colour analysis product. Validate your Amazon',
        },
        {
            id: 2,
            title: 'LEVEL',
            text: 'Unlock the full potential of your face colour analysis product. Validate your Amazon',
        },
        {
            id: 3,
            title: 'LEVEL',
            text: 'Unlock the full potential of your face colour analysis product. Validate your Amazon',
        },
    ]
    return (
        <div className='bg-[#283462] py-8 border-y-2 border-[#bcbcbc]'>
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
                    {
                        stats.map(stat => (
                            <div key={stat.title} className="stats-item">
                                <div className="flex justify-start items-center gap-5">
                                    <div className="number text-[60px] text-white font-bold">
                                        0{stat.id}
                                    </div>
                                    <div className="line h-[70px] w-[4px] bg-white"></div>
                                    <div className="content">
                                        <h3 className='text-white font-bold text-2xl mb-1'>
                                            {stat.title}
                                        </h3>
                                        <p className="text-white text-sm ">
                                            {stat.text}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Stats