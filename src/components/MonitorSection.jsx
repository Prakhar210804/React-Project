import React from 'react'
import monitorCard from "../Assets/monitor-card.webp"

const MonitorSection = () => {
    return (
        <section className='max-w-7xl mx-auto px-4 py-16 md:py-24'>
            <div className='flex flex-col md:flex-row items-center justify-between gap-12 md:gaap-24'>
                {/* left */}
                 <div className='md:w-1/2 w-full'>
                    <p className='text-green-500 font-semibold'>MONITOR</p>
                    <h2 className='text-3xl md:text-4xl font-bold text-neutral-900 mt-4 mb-6'>Introducing best mobile carousels </h2>
                    <p className='text-gray-600 mb-8 '>Take control of your time and boost productivity with our
                        intelligent scheduling system. Automatic appoinments,
                        mangae team availability, and deliver exceptional customer experiences
                        through seamless calendar management.
                    </p>

                    <a href="#" className='text-blue-500 font-semibold flex items-center gap-2 hover:gap-4 transition-all'>
                        Learn more about monitoring <span className='h-5 w-5'>→</span>
                    </a>
                </div>
               


                {/* right */}
                 <div className='w-full md:w-1/2'>
                    <img src={monitorCard} alt="Schedule image  " className='w-full h-auto' />
                </div>
               
            </div>
        </section>
    )
}

export default MonitorSection
