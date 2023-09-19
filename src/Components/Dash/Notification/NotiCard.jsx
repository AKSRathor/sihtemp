import React from 'react'



const NotiCard = (props) => {
    return (
        <div class="relative flex w-100 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            
            <div class="p-6">
                <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {props.topic}
                </h5>
                <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                    {props.desc}
                </p>
            </div>
            <div class="p-6 pt-0">
                <button data-ripple-light="true" type="button" class="PrfUpdateBtn3 select-none rounded-lg  py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md  transition-all hover:shadow-lgfocus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                    Read More
                </button>
            </div>
        </div>
    )
}

export default NotiCard