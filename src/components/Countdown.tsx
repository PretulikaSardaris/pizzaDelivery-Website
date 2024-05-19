"use client"
import React from 'react'
import Countdown from 'react-countdown'
const endingDate = new Date("2024-06-27")

const CountDown = () => {
  return (
    
     <Countdown className='p-5 m-3 text-5xl md:text-6xl font-bold text-yellow-300' date={endingDate}/>
   
  )
}

export default CountDown
