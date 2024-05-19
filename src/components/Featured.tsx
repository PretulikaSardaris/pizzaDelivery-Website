import React from 'react'
import Image from 'next/image'
import { featuredProducts } from '@/data'

const Featured = () => {
  return (
    <div className='w-screen overflow-x-scroll text-orange-500'>
      <div className='w-max flex'>

     { 
      featuredProducts.map(item => (
     <div key={item.id} className='w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]'>
      <div className='relative flex-1 w-full hover:rotate-[60deg] transition-all duration-400'>
        <Image src={item.img} alt="" fill className='object-contain '></Image>

        </div>
        <div className='flex-1 flex flex-col items-center justify-center text-center gap-4'>
      <h1 className='text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl'>{item.title}</h1>
      <p className='p-4 2xl:p-8'>{item.desc}</p>
      <span className='text-xl font-bold'>{item.price}</span>
      <button className='bg-orange-700 text-white p-2 rounded-md'> Add To Cart</button>
      </div>
      </div>
      ))}
      </div>
      </div>
  
)}

export default Featured
