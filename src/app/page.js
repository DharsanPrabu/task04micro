"use client"
import {SlArrowRight} from "react-icons/sl"
import {BiSolidMessageSquareDetail} from "react-icons/bi"
import {MdFormatListBulleted} from "react-icons/md"
import {AiTwotoneVideoCamera} from "react-icons/ai"
import {VscAccount} from "react-icons/vsc"
import {TiSocialLinkedinCircular} from "react-icons/ti"
import {AiFillTwitterCircle} from "react-icons/ai"
import {AiOutlineArrowRight} from "react-icons/ai"


import Faq from '../../components/faq'
import React, { useState } from 'react';
import Link from 'next/link';
import Nav from '../../components/nav'
import { RiHome4Fill } from "react-icons/ri"

function Home() {

  const [btnHover1, setBtnHover1] =useState(false)

  const handleMouseEnter1 = () => {
      setBtnHover1(true)
  }
  const handleMouseLeave1 = () => {
      setBtnHover1(false)
  }

  const [btnHover2, setBtnHover2] =useState(false)

  const handleMouseEnter2 = () => {
      setBtnHover2(true)
  }
  const handleMouseLeave2 = () => {
      setBtnHover2(false)
  }

  const [btnHover3, setBtnHover3] = useState(false)

    const handleMouseEnter3 = () => {
        setBtnHover3(true)
    }
    const handleMouseLeave3 = () => {
        setBtnHover3(false)
    }

    const [btnHover4, setBtnHover4] = useState(false)

    const handleMouseEnter4 = () => {
        setBtnHover4(true)
    }
    const handleMouseLeave4 = () => {
        setBtnHover4(false)
    }

    const [btnHover5, setBtnHover5] = useState(false)

    const handleMouseEnter5 = () => {
        setBtnHover5(true)
    }
    const handleMouseLeave5 = () => {
        setBtnHover5(false)
    }

  
  return (
    <div>
    <div className='mt-10'>

      {/* Navbar */}
      <Nav />

      <div>
        <div className='head'>
          <h1 className='font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center text-white pt-8'>How it works</h1>
          <p className='text-lg sm:text-xl md:text-2xl lg:text-2xl text-center pt-8 line-height-2 sm:line-height-3 md:line-height-4 lg:line-height-5'>4 easy steps to have a top 1% engineer onboarded.</p>
          <p className='text-lg sm:text-xl md:text-2xl lg:text-2xl text-center pt-8 font-bold'>This is done in 4 days on average.</p>
        </div>
      </div>

      {/* Main Cards */}
      <div className='maincard flex pt-10 sm:pt-20 pl-10 sm:pl-20 md:pl-40'>

        {/* Card 1 */}
        <div className='card flex'>
          <div className='numcard'>
            <div class="cardnum">1</div>
            <div className='textvalue'>
              <div className='border rounded-full p-6'>
                <BiSolidMessageSquareDetail className='' style={{ width: "60px", height: "60px" }} />
              </div>
              <p class="textvalue text-lg font-bold">Tell us your needs</p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className='card flex'>
          <div className='numcard'>
            <div class="cardnum">2</div>
            <div className='textvalue'>
              <div className='border rounded-full p-6'>
                <MdFormatListBulleted style={{ width: "60px", height: "60px" }} />
              </div>
              <p class="textvalue text-lg font-bold">Get recommendations</p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className='card flex'>
          <div className='numcard'>
            <div class="cardnum">3</div>
            <div className='textvalue'>
              <div className='border rounded-full p-6'>
                <AiTwotoneVideoCamera style={{ width: "60px", height: "60px" }} />
              </div>
              <p class="textvalue text-lg font-bold">Interview pre-vetted engineers</p>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className='card flex'>
          <div className='numcard'>
            <div class="cardnum">4</div>
            <div className='textvalue'>
              <div className='border rounded-full p-6'>
                <VscAccount style={{ width: "60px", height: "60px" }} />
              </div>
              <p class="textvalue text-lg font-bold">Pick a top 1% engineer</p>
            </div>
          </div>
        </div>

      </div>

      {/* Hire Button 1 */}
      <div className='place-content-center'>
        <div className='flex pt-10 sm:pt-20 justify-center'>
          <div className='mt-10 m-auto pl-5 sm:pl-10 py-3 sm:py-6 relative rounded-full font-bold text-sm sm:text-base text-white hireBtn cursor-pointer flex w-60 sm:w-80' onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}>
            <p>Hire a Top Engineer</p>
            {btnHover1 ?
              <p className='px-3 sm:px-5 py-2 sm:py-4 rounded-full bottom-1 sm:bottom-3 hireIcon absolute right-3 sm:right-5 mt-0'><AiOutlineArrowRight style={{ width: "15px", height: "15px" }} /></p>
              :
              <p className='px-3 sm:px-5 py-2 sm:py-4 rounded-full bottom-1 sm:bottom-3 hireIcon absolute right-3 sm:right-5 mt-0'><SlArrowRight style={{ width: "15px", height: "15px" }} /></p>
            }
          </div>
        </div>
      </div>

      {/* ... Other content ... */}

      <div className='pt-40 m-auto w-10/12 text-center'>

        {/* Microlabs */}
        <div className='microlabs '>
          <h2 className='text-4xl text-white'>Looking for a project-based engagement instead?</h2>
          <div className='place-content-center'>
            <div className='flex pt-12   justify-center'>
              <div className='mt-10 m-auto pl-10 py-6 relative rounded-full font-bold sm:text-xl text-sm text-white hireBtn cursor-pointer flex w-80' onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
                <p>Check out microlab</p>
                {btnHover2 ?
                  <p className='px-5 py-4 rounded-full bottom-3 hireIcon absolute right-5 mt-0'><AiOutlineArrowRight style={{ width: "20px", height: "20px" }} /></p>
                  :
                  <p className='px-5 py-4 rounded-full bottom-3 hireIcon absolute right-5 mt-0'><SlArrowRight style={{ width: "20px", height: "20px" }} /></p>
                }
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Pricing */}
      <div className='pricing'>
        <h1 className='font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center text-white pt-40'>Simple Pricing</h1>
      </div>

      {/* Price Cards */}
      <div className='pricecards flex pt-40 pl-10 sm:pl-20 md:pl-40'>

        {/* Talent Card */}
        <div className='cards '>
          <div className='cardprice'>
            <p class="pricecard text-left text-2xl text-white">Talent</p>
            <div className='textvalue pt-6'>
              <p class="textvalue text-left font-medium text-white-200 text-lg">The rate you see on the candidate profiles is the rate you pay. No extra fees. The average rate for an engineer is $34/hour.</p>
              <div className='place-content-center'>
                <div className='flex   '>
                  <div className='  m-auto pl-5 py-4 relative rounded-full font-bold  text-base text-white hireBtn cursor-pointer flex w-60' onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}>
                    <p>Hire a Top Engineer</p>
                    {btnHover3 ?
                      <p className='px-3 py-2 rounded-full bottom-1 sm:bottom-3 hireIcon absolute right-3 sm:right-5 mt-0'><AiOutlineArrowRight style={{ width: "15px", height: "15px" }} /></p>
                      :
                      <p className='px-3 py-2 rounded-full bottom-1 sm:bottom-3 hireIcon absolute right-3 sm:right-5 mt-0'><SlArrowRight style={{ width: "15px", height: "15px" }} /></p>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* microLab Card */}
        <div className='cards '>
          <div className='cardprice'>
            <div class="pricecard text-left text-2xl text-white">microLab</div>
            <div className='textvalue pt-6'>
              <p class="textvalue text-left font-medium text-white-200 text-lg">project-based work starting at $15k and typically more than $50k for most projects.</p>
              <div className=' '>
                <div className='flex  '>
                  <div className='mt-12 m-auto pl-5 py-4 relative rounded-full font-bold   text-white hireBtn cursor-pointer flex w-60' onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave4}>
                    <p>Tell about  project</p>
                    {btnHover4 ?
                      <p className='px-3 py-2 rounded-full bottom-1 sm:bottom-3 hireIcon absolute right-3 sm:right-5 mt-0'><AiOutlineArrowRight style={{ width: "15px", height: "15px" }} /></p>
                      :
                      <p className='px-3 py-2 rounded-full bottom-1 sm:bottom-3 hireIcon absolute right-3 sm:right-5 mt-0'><SlArrowRight style={{ width: "15px", height: "15px" }} /></p>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* COR Card */}
        <div className='cards '>
          <div className='cardprice'>
            <div class="pricecard text-left text-2xl text-white">COR</div>
            <div className='textvalue pt-6'>
              <p class="textvalue text-left font-medium text-white-200 text-lg">Compliance, global payroll, and benefits for your team for a fixed fee of $490/month per team member.</p>
              <div className='place-content-center'>
                <div className='flex  '>
                  <div className='mt-6 m-auto pl-5 py-4 relative rounded-full font-bold   text-white hireBtn cursor-pointer flex w-60' onMouseEnter={handleMouseEnter5} onMouseLeave={handleMouseLeave5}>
                    <p>Book a demo</p>
                    {btnHover5 ?
                      <p className='px-3 py-2 rounded-full bottom-1 sm:bottom-3 hireIcon absolute right-3 sm:right-5 mt-0'><AiOutlineArrowRight style={{ width: "15px", height: "15px" }} /></p>
                      :
                      <p className='px-3 py-2 rounded-full bottom-1 sm:bottom-3 hireIcon absolute right-3 sm:right-5 mt-0'><SlArrowRight style={{ width: "15px", height: "15px" }} /></p>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* ... Other content ... */}

      {/* Default state of work is remote */}
      <div className='pt-8 sm:pt-16'>
        <div>
          <h1 className='font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center text-white pt-8'>Default state of work is remote</h1>
          <p className='text-lg sm:text-xl md:text-2xl lg:text-2xl text-center pt-3 sm:pt-8'>With today's technology, a location constraint is completely unnecessary. We’re building tools to help <br />the future of remote work.</p>
        </div>
      </div>

      <div className='pricecards flex pt-8 sm:pt-16 pl-8 sm:pl-20 md:pl-40'>

        {/* More Content ... */}

      </div>

      {/* FAQs */}
      <div className='pt-8 sm:pt-16 ml-8 sm:ml-20'>
        <div>
          <h1 className='font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center text-white pt-8'>FAQs</h1>
        </div>
      </div>

      {/* FAQ Component */}
      <Faq />

      {/* More Content ... */}

      {/* Team */}
      <div className='pt-8 sm:pt-16 ml-8 sm:ml-20'>
        <div className='team justify-center'>
          <h2 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white pl-8 sm:pl-40 justify-center'>Hire a world-class engineering team easily</h2>
          <p className='text-lg sm:text-xl md:text-2xl lg:text-2xl text-center pt-3 sm:pt-8 justify-center'>Compliance, global payroll, and benefits, all handled by us.</p>
          <div className='justify-center'>
            <div className='flex pt-10 sm:pt-12 justify-center'>
              <div className='mt-10 m-auto pl-5 sm:pl-10 py-3 sm:py-6 relative rounded-full font-bold text-sm sm:text-base text-white hireBtn cursor-pointer flex w-60 sm:w-80' onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave4}>
                <p> Hire top Engineer</p>
                {btnHover4 ?
                  <p className='px-3 sm:px-5 py-2 sm:py-4 rounded-full bottom-1 sm:bottom-3 hireIcon absolute right-3 sm:right-5 mt-0'><AiOutlineArrowRight style={{ width: "20px", height: "20px" }} /></p>
                  :
                  <p className='px-3 sm:px-5 py-2 sm:py-4 rounded-full bottom-1 sm:bottom-3 hireIcon absolute right-3 sm:right-5 mt-0'><SlArrowRight style={{ width: "20px", height: "20px" }} /></p>
                }
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className='footer pt-8 sm:pt-16 flex justify-between ml-8 sm:ml-20'>
        <div className='pl-5 sm:pl-10 rounded-lg pb-5 sm:pb-10 '>
          <img src="/micro.svg" alt='' width="100px" />
        </div>
        <div className='flex px-5 sm:px-8'>
          <p className='pl-2 sm:pl-4'>Vetting Process</p>
          <p className='pl-2 sm:pl-4'>How it works</p>
          <p className='pl-2 sm:pl-4'>About us</p>
          <p className='pl-2 sm:pl-4'>Blog</p>
          <p className='pl-2 sm:pl-4'>Sitemap</p>
        </div>
      </div>

      {/* Copyright */}
      <div className='foot flex justify-between ml-8 sm:ml-20'>
        <div className='pl-5 sm:pl-8'>
          <p>Copyright © 2023 micro1 Inc. All rights reserved. | Privacy policy | Terms & conditions</p>
        </div>

        <div className='icons flex'>
          <TiSocialLinkedinCircular style={{ width: "40px", height: "40px" }} />
          <AiFillTwitterCircle style={{ width: "40px", height: "40px" }} />
        </div>
      </div>

    </div>
  </div>
 
 

 

    
  )
}
export default Home