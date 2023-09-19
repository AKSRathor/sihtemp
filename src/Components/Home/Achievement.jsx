import React from 'react'
import { achievement } from './assets'
import {SlGraduation} from 'react-icons/sl'
import {FiVideo} from 'react-icons/fi'
import {SlPeople} from 'react-icons/sl'

const Achievement = () => {
  return (
    <div className='w-full bg-[#e9f8f3] py-14 px-6'>
        <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]  px-4 md:px-0'>
            
            <div className='flex flex-col justify-center '>
                <h1 className='md:leading-[72px] text-3xl font-bold text-center'>Our <span className='text-[#20B486]'>Achievements</span></h1>
                <p className='text-lg text-gray-600 mx-10'>We have taken a few steps ahead. Rest let's take together.</p>
                
                <div className='grid grid-cols-2 py-16 px-4'>
                    <div className='py-6 flex'>
                        <div className='p-4 bg-[#E9F8F3] rounded-xl'>
                            <SlGraduation 
                                size={30}
                                style={{color:'#1A906B'}}
                            />
                        </div>
                        <div className='px-3'>
                            <h1 className='text-2xl font-semibold'>3000+</h1>
                            <p className='text-[#6D737A]'>pickups</p>
                        </div>

                    </div>
                    <div className='py-6 flex'>
                        <div className='p-4 bg-[#FFFAF5] rounded-xl'>
                            <FiVideo 
                                size={30}
                                style={{color:'#FFC27A'}}
                            />
                        </div>
                        <div className='px-3'>
                            <h1 className='text-2xl font-semibold'>100+</h1>
                            <p className='text-[#6D737A]'>Comapanies</p>
                        </div>

                    </div>
                    <div className='py-6 flex'>
                        <div className='p-4 bg-[#FFEEF0] rounded-xl'>
                            <SlGraduation 
                                size={30}
                                style={{color:'#ED4459'}}
                            />
                        </div>
                        <div className='px-3'>
                            <h1 className='text-2xl font-semibold'>200kg+</h1>
                            <p className='text-[#6D737A]'>waste Recycled</p>
                        </div>

                    </div>
                    <div className='py-6 flex'>
                        <div className='p-4 bg-[#F0F7FF] rounded-xl'>
                            <SlPeople 
                                size={30}
                                style={{color:'#0075FD'}}
                            />
                        </div>
                        <div className='px-3'>
                            <h1 className='text-2xl font-semibold'>200+</h1>
                            <p className='text-[#6D737A]'>Users</p>
                        </div>

                    </div>

                </div>
           </div>
            
             
             <img  src={achievement} className="m-auto md:order-last  order-first w-3/5 h-9/10" />




        </div>
        

    </div>
  )
}

export default Achievement