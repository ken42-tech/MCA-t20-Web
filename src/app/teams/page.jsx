import AboutT2C from '@/components/home/aboutT2C/aboutT2C'
import Hero from '@/components/teams/hero/Hero'
import MeetMyTeam from '@/components/teams/meetMyTeam/MeetMyTeam'
import React from 'react'

const Teams = () => {
  return (
    <div>
      <Hero/>
      <MeetMyTeam/>
      <AboutT2C/>
    </div>
  )
}

export default Teams