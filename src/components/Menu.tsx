"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CartIcon from './CartIcon'

const links = [
  {id : 1, title : "Homepage" , url: "/"},
  {id : 2, title : "Menu" , url: "/"},
  {id : 3, title : "Working Hours" , url: "/"},
  {id : 4, title : "Contact" , url: "/"},

]

const Menu = () => {
  const [open , setOpen] = useState(false)
  const user = false; 

  return (
    <div >
      {!open ? <Image src="https://png.pngtree.com/png-vector/20190120/ourmid/pngtree-menu-vector-icon-png-image_470444.jpg" alt="image" width={20} height={20} onClick={() => setOpen(true)} /> :
      <Image src="https://t3.ftcdn.net/jpg/03/64/30/82/360_F_364308273_cV9OrZrqUpZ8En9rC8KxBqaxkVg95ZTY.jpg" alt="image" width={20} height={20} onClick={() => setOpen(false)} />}
      

      { open && (<div className='bg-orange-500 text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col gap-8   justify-center text-3xl z-10'>
     {links.map((item) => <Link href={item.url} key={item.id} onClick={() => setOpen(false)}> {item.title}</Link>)}

     {!user ? (
      <Link href="/login" onClick={() => setOpen(false)}> Login </Link>
    ) : (
      <Link href="/orders"  onClick={() => setOpen(false)}> Orders</Link>
    )}
    <Link href="/cart" onClick={() => setOpen(false)}>
      <CartIcon />
    </Link>

    </div> )}

    
    </div>
    
  )
}

export default Menu
