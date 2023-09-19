import React from 'react';
import { companyLogo1, companyLogo2, companyLogo3, companyLogo4,companyLogo5 } from './assets';

const Companies = () => {
  return (
    <div className='w-full bg-white pt-8 pb-2'>
        <div className='md:max-w-[1280px] m-auto max-w-[600px]  px-4 md:px-0'>
            <h1 className='text-center text-4xl font-bold text-[#536E96] py-2'>Leading brands trust <span className='text-[#20B486]'>EcoNavi</span></h1>
            
            <div className='flex justify-center py-4 md:gap-8 '>
                <div className='grid md:grid-cols-5 grid-cols-2 gap-2'>
                <div class="col-lg-4 col-md-6 px-2 ">
                     <img className= 'w-3/4 h-1/2 my-16 mx-8' src={companyLogo1} />
                </div>
                <div class="col-lg-4 col-md-6 px-2">
                <img className= 'w-3/4 h-1/2 my-16 mx-8' src={companyLogo2} />
                </div >
                <div class="col-lg-4 col-md-6 px-2 ">
                <img className = 'my-10 w-7/8 h-2/3'src={companyLogo3} />
                </div>
                <div class="col-lg-4 col-md-6 px-2 ">
                <img className = 'my-28 w-3/4 h-1/4' src={companyLogo4} />
                </div>
                <div class="col-lg-4 col-md-6 px-2">
                <img className = 'my-20 w-3/4 h-1/2' src={companyLogo5} />
                </div>
                 
                 
                  
                </div>
            </div>
        
        </div>

    </div>
  )
}

export default Companies