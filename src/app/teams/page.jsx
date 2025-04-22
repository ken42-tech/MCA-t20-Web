import AboutT2C from '@/components/home/aboutT2C'
import Hero from '@/components/hero/Hero'
import MeetMyTeam from '@/components/teams/meetMyTeam/MeetMyTeam'
import TeamSection from '@/components/teams/teamSec/TeamSection'
import React from 'react'

const Teams = () => {
  return (
    <div>
      <Hero imgUrl="/images/teams/hero/bg.svg" heading="T20 Mumbai teams" subheading="Aakash Tigers Mumbai Western Suburbs"/>
      <TeamSection/>
      <MeetMyTeam/>
      <AboutT2C/>
    </div>
  )
}

export default Teams