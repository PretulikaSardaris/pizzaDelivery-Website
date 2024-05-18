import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    
     <div className='h-12 md:h-24 p-4 lg:p-20 xl:p-40 text-orange-500 flex items-center justify-between'>     <Link className='font-bold text-xl' href="/">MASSIMO</Link>
      <p> © All Rights Reserved</p>
     </div>
    
  )
}

export default Footer
