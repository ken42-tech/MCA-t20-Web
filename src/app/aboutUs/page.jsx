import AboutMCA from '@/components/aboutUs/aboutMCA/AboutMCA'
import AboutPS from '@/components/aboutUs/aboutPS/AboutPS'
import T20Mumbai from '@/components/aboutUs/t20Mumbai/T20Mumbai'
import Hero from '@/components/hero/Hero'
import React from 'react'

const page = () => {
  return (
    <div>
        <Hero imgUrl={"/images/teams/hero/bg.svg"} heading={"About us"}/>
        <div className='w-full px-32 py-20 bg-white flex flex-col gap-28'>
            <T20Mumbai/>
            <AboutMCA/>
            <AboutPS/>
        </div>
    </div>
  )
}

export default page