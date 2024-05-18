import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const CartIcon = () => {
  return (
    <div>
        <Link href="/cart " className='flex items-center gap-4'>
            <div className='relative w-8 h-8 md:w-5 md:h-5'>
                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6FZYZcMFbyPEqineZR2kaGBsxwhf8WrC5Mbtbwq-PBA&s" alt='Image of cart' fill ></Image>
            </div>
            <span> (3) </span>
        </Link>
      
    </div>
  )
}

export default CartIcon
