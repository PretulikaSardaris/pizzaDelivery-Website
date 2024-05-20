import React from 'react'
import Image from 'next/image'
import { singleProduct } from '@/data'
import Price from '@/components/Price'

const SingleProductPage = () => {
  return (
    <div className='p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-orange-500 md:flex-row md:items-center'>
      {/* imagecontainer  */}
      {singleProduct.img && (<div className='relative w-full h-1/2'>
        <Image src={singleProduct.img} className='object-contain' alt='img' fill></Image>
      </div>)}
      {/* text container  */}
      <div className='h-1/2 flex flex-col gap-4'>
        <h1 className='text-3xl font-bold uppercase'>{singleProduct.title}</h1>
        <p className=''>{singleProduct.desc}</p>
        <Price price={singleProduct.price} id={singleProduct.id} options={singleProduct.options}/>
        
      </div>
    </div>
  )
}

export default SingleProductPage
