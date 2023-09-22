"use client"
import React, { useState } from "react"
import {RiAccountPinBoxLine} from "react-icons/ri"
import {IoHardwareChipOutline} from "react-icons/io5"
import Nav from "../../../components/nav"
import {BiSolidMessageSquareDetail} from "react-icons/bi" 
import {AiOutlineArrowRight} from "react-icons/ai"
import {SlArrowRight} from "react-icons/sl"
import {LuMonitorDown} from "react-icons/lu"
import {TbHeartRateMonitor} from "react-icons/tb"
import {BiMessageMinus} from "react-icons/bi"
import {BiBrain} from "react-icons/bi"
import {TiSocialLinkedinCircular} from "react-icons/ti"
import {AiFillTwitterCircle} from "react-icons/ai"


    
function Page(){

    const [btnHover, setBtnHover] =useState(false)

    const handleMouseEnter = () => {
        setBtnHover(true)
    }
    const handleMouseLeave = () => {
        setBtnHover(false)
    }

    const [btnHover0, setBtnHover0] =useState(false)

    const handleMouseEnter0 = () => {
        setBtnHover0(true)
    }
    const handleMouseLeave0 = () => {
        setBtnHover0(false)
    }
    return (

        <div className="pt-4 sm:pt-8 md:pt-12 lg:pt-16 xl:pt-20">

        {/* Navigation */}
        <Nav />

        <div>
            <h1 className='font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-center text-white pt-4 sm:pt-8 md:pt-12 lg:pt-16 800'>Our Robust Vetting Process</h1>
            <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl text-center pt-4 sm:pt-8 md:pt-12 lg:pt-16 line-height-6'>Every engineer that joins our talent pool goes through our gpt-vetting, 2-3 manual <br/>interviews, and takes an AI-Powered engineer course.</p>
        </div>

        <div>
            <div className='mt-8 sm:mt-12 md:mt-16 lg:mt-20 m-auto pl-4 sm:pl-10 py-4 sm:py-6 relative rounded-full font-bold text-lg sm:text-xl text-sm text-white hireBtn cursor-pointer flex w-60 sm:w-80' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <p>Hire a Top Engineer</p>
                {btnHover ? 
                    <p className='px-4 sm:px-5 py-3 sm:py-4 rounded-full bottom-2 sm:bottom-3 hireIcon absolute right-3 sm:right-5 mt-0'><AiOutlineArrowRight style={{width: "16px", height: "16px"}} /></p>
                :
                    <p className='px-4 sm:px-5 py-3 sm:py-4 rounded-full bottom-2 sm:bottom-3 hireIcon absolute right-3 sm:right-5 mt-0'><SlArrowRight style={{width: "16px", height: "16px"}} /></p>
                }
            </div>
        </div>

        <div>
            <div className="pt-12 sm:pt-16 md:pt-20 lg:pt-24">
                <h1 className='font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-center text-white 800'>How We Hire?</h1>
            </div>
        </div>

        <div className="sm:flex sm:justify-center md:pt-8 lg:pt-12 xl:pt-16">
            <div className="pt-8 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-24 sm:flex sm:pt-0">
                <div className="pt-8 pl-4 sm:pl-20 md:pl-32 lg:pl-48 xl:pl-64">
                    <div className="one">1</div>
                </div>
            
                <div className="pl-4 sm:pl-20 md:pl-32 lg:pl-48 xl:pl-64 flex">
                    <div className="microlabs numcards flex border rounded-full p-6">
                        <div className='border rounded-full p-6'>
                            <IoHardwareChipOutline style={{width: "60px", height:"60px"}} />
                        </div>

                        <div>
                            <div className="pl-8" style={{width:"800px"}}>
                                <h3 className='text-2xl text-white font-black text-3xl'>gpt-vetting</h3>
                            </div>
                            <div className="pt-6 pl-8">
                                <p className="text-lg font-medium">A gpt-4 powered test deeply pre-screens the technical knowledge of all candidates.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="sm:flex sm:justify-center md:pt-8 lg:pt-12 xl:pt-16">
            <div className="pt-8 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-24 sm:flex sm:pt-0">
                <div className="pt-8 pl-4 sm:pl-20 md:pl-32 lg:pl-48 xl:pl-64">
                    <div className="one">2</div>
                </div>
            
                <div className="pl-4 sm:pl-20 md:pl-32 lg:pl-48 xl:pl-64 flex">
                    <div className="microlabs numcards flex border rounded-full p-6">
                        <div className='border rounded-full p-6'>
                            <BiSolidMessageSquareDetail style={{width: "60px", height:"60px"}} />
                        </div>

                        <div>
                            <div className="pl-8" style={{width:"800px"}}>
                                <h3 className='text-2xl text-white font-black text-3xl'>Screening</h3>
                            </div>
                            <div className="pt-6 pl-8">
                                <p className="text-lg font-medium">We then conduct 1-2 technical rounds by senior engineers in our core team.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Repeat the above pattern for other sections (3, 4, 5) */}
        
        <div>
            <div className='card flex justify-center pt-24 sm:pt-32 md:pt-40 lg:pt-48 xl:pt-56'>
                <div className='percentage'>
                    <div className='textvalue pt-14'>
                        <div className='border rounded-full p-6'>
                            <BiBrain style={{width: "60px", height:"60px"}} />
                        </div>
                        <p className="textvalue font-black text-3xl">Top 1% engineer</p>
                    </div>
                </div>
            </div>
        </div>

        <div className='pt-24 sm:pt-32 md:pt-40 lg:pt-48 xl:pt-56 ml-4 sm:ml-8 md:ml-12 lg:ml-16 xl:ml-20'>
            <div className='team justify-center'>
                <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white pl-4 sm:pl-8 md:pl-12 lg:pl-16 xl:pl-20 justify-center'>Hire a world-class engineering team easily</h2>
                <p className='text-base sm:text-lg md:text-xl lg:text-2xl text-center pt-4 sm:pt-8 md:pt-12 lg:pt-16 xl:pt-20 justify-center'>Compliance, global payroll, and benefits, all handled by us.</p>
                <div className='justify-center'>
                    <div className='flex pt-8 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-24 justify-center'>
                        <div className='mt-8 sm:mt-10 md:mt-12 lg:mt-16 xl:mt-20 m-auto pl-4 sm:pl-10 py-4 sm:py-6 relative rounded-full font-bold text-lg sm:text-xl text-sm text-white hireBtn cursor-pointer flex w-60 sm:w-80' onMouseEnter={handleMouseEnter0} onMouseLeave={handleMouseLeave0}>
                            <p>Hire a Top Engineer</p>
                            {btnHover0 ? 
                                <p className='px-4 sm:px-5 py-3 sm:py-4 rounded-full bottom-2 sm:bottom-3 hireIcon absolute right-3 sm:right-5 mt-0'><AiOutlineArrowRight style={{width: "16px", height: "16px"}} /></p>
                            :
                                <p className='px-4 sm:px-5 py-3 sm:py-4 rounded-full bottom-2 sm:bottom-3 hireIcon absolute right-3 sm:right-5 mt-0'><SlArrowRight style={{width: "16px", height: "16px"}} /></p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='footer pt-24 sm:pt-32 md:pt-40 lg:pt-48 xl:pt-56 flex justify-between ml-4 sm:ml-8 md:ml-12 lg:ml-16 xl:ml-20'>
            <div className='pl-4 sm:pl-8 md:pl-12 lg:pl-16 xl:pl-20 rounded-lg pb-10'>
                <img src="/micro.svg" alt='' width="100px" />
            </div>
            <div className='flex px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20'>
                <p className='pl-4'>Vetting Process</p>
                <p className='pl-4'>How it works</p>
                <p className='pl-4'>About us</p>
                <p className='pl-4'>Blog</p>
                <p className='pl-4'>Sitemap</p>
            </div>
        </div>

        <div className='foot flex justify-between ml-4 sm:ml-8 md:ml-12 lg:ml-16 xl:ml-20'>
            <div className='pl-4'>
                <p>Copyright © 2023 micro1 Inc. All rights reserved. | Privacy policy | Terms & conditions</p>
            </div>
            <div className='icons flex'>
                <TiSocialLinkedinCircular style={{width: "40px", height:"40px"}} />
                <AiFillTwitterCircle style={{width: "40px", height:"40px"}} />
            </div>
        </div>
    </div>
 

    )
}
export default Page