import { pizzas } from '@/data'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const CategoryPage = () => {
  return (
    <div className='flex flex-wrap text-red-400'>
      {pizzas.map((item) => (
      <Link className='w-full h-[60vh] border-r-2 border-b-2 border-orange-500 sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group ' href={`/product/${item.id} key={item.id}`}>
        {item.img && (
          <div className='relative h-[80%]'>
          <Image src={item.img || "https://img.freepik.com/free-photo/freshly-italian-pizza-with-mozzarella-cheese-slice-generative-ai_188544-12347.jpg"} alt="" fill className='object-contain text-white'/>
          </div>
        )}
        <div className='flex items-center justify-between font-bold '>
        <h1 className='text-2xl uppercase p-2'>{item.title}</h1>
        <h2 className='group-hover:hidden text-xl'>${item.price}</h2>
        <button className='hidden group-hover:block uppercase bg-orange-500 text-white p-2 rounded-lg'>Add To Cart</button>
      </div>
      </Link>
      )

      )}
      
    </div> 
  )
}

export default CategoryPage
