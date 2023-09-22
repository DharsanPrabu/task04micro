 "use client"
import {SlArrowRight} from "react-icons/sl"
import {AiOutlineArrowRight} from "react-icons/ai" 

import Link from 'next/link';
import { useState } from "react";



function Nav(){

    
const [btnHover6, setBtnHover6] =useState(false)

const handleMouseEnter6 = () => {
    setBtnHover6(true)
}
const handleMouseLeave6 = () => {
    setBtnHover6(false)
}
    return(
        <div className=' mt-10'>
            <div className='flex justify-between  '>
                <div className='flex   w-[500px]'>
                <div className='pl-10 rounded-lg pb-10  '>
                    <img src="/micro.svg" alt='' width="100px" />
                </div>
        
                <div className=" w-50 pl-8 flex  "style={{width:"500px"}}>
                    <div className='text-sm text-white px-16 font-semibold'>
                        <Link  href="/vettings">Vetting Process</Link>
                        </div>&nbsp;
                        <div  className='text-sm text-white pl-20 font-semibold'>
                        <Link href="/about">About Us</Link>
                        </div>
                </div>

                </div>
                <div className=' mr-6 pl-4 py-4 relative rounded-full font-bold sm:text-xl text-sm text-white hireBtn cursor-pointer flex w-80' onMouseEnter={handleMouseEnter6} onMouseLeave={handleMouseLeave6}>
            <p>Hire a Top Engineer </p>
            {btnHover6 ? 
                <p className='px-5 py-4 rounded-full  hireIcon absolute right-5 mt-0'style={{bottom:"7px"}}><AiOutlineArrowRight style={{width: "20px", height: "20px"}}/></p>
            :
                <p className='px-5 py-4 rounded-full  hireIcon absolute right-5 mt-0'style={{bottom:"7px"}}><SlArrowRight style={{width: "20px", height: "20px"}} /></p>
            }
        </div>
                </div>
 </div>
    )
}

export default Nav

