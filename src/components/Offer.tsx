import React from 'react'
import Image from 'next/image'
import Countdown from './Countdown'

const Offer = () => {
  return (
    <div className='bg-black h-screen flex flex-col md:flex-row md:justify-between'>
     <div className='flex-1 flex flex-col  justify-center items-center'>
      <h1 className=' text-white g-8 p-6 text-5xl lg:text-6xl font-bold'>Delicious Burger</h1>
      <p className=' text-white text-3xl'>A good burger is worth its weight in gold</p>
      <Countdown />
      <button className='bg-red-700 text-white rounded-xl px-6 py-3 mt-5'>Order Now</button>
     </div>
     <div className='flex-1 w-full relative rounded-2xl md:h-full'>
      <Image className='object-contain' src="https://img.freepik.com/free-photo/burger-hamburger-cheeseburger_505751-3697.jpg?t=st=1716088063~exp=1716091663~hmac=c587579578fda1a89ad549b184bb7c6492e3739f66461bd1345475293ffcd2e6&w=740" alt="" fill/>
     </div>
    </div>
  )
}

export default Offer
