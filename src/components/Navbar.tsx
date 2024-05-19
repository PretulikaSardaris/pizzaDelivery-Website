import Link from 'next/link'
import React from 'react'
import Menu from './Menu'

import CartIcon from './CartIcon';
import Image from 'next/image';

const Navbar = () => {
  const user = false ;
  return (
    <div className="h-12 text-orange-700 p-4 flex items-center justify-between border-b-2 border-b-orange-500 uppercase md:h-24 lg:px-20 xl:px-40">
      <div className='hidden md:flex gap-4'>
        <Link href="/" >Homepage</Link>
        <Link href="/menu" >Menu</Link>
        <Link href="/" >Contact</Link>

      </div>
    <div className='text-xl font-bold'>
        <Link href="/"> Pizzeria Spontini </Link>
    </div>
   
    
<div className='md:hidden'> <Menu /> </div>
{/*Right links  */}
<div className='hidden md:flex gap-4 items-center'>
  <div className='flex items-center gap-2 cursor-pointer bg-orange-100 px-1 rounded-md'>
    <Image className='rounded-full' src="https://i.pinimg.com/originals/4e/d7/d0/4ed7d0a3ecfc73035ee03ff12dc98a65.jpg" alt="phoneImage" width={20} height={20} />
    <span> 123456789</span>
  </div>
        {
        !user ? (<Link href="/" >Login</Link>) :
       ( <Link href="/Menu" >Orders</Link> )
       }
       <CartIcon />

      </div>
    </div>
  )
}

export default Navbar
