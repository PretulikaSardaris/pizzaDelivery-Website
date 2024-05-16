import Link from 'next/link'
import React from 'react'
import Menu from './Menu'

const Navbar = () => {
  return (
    <div className="h-12 text-purple-500 p-4 flex items-center justify-between border-b-2 border-b-purple-500 uppercase">
    <div>
        <Link href="/"> Massimo </Link>
    </div>
<div> <Menu /> </div>
    </div>
  )
}

export default Navbar
