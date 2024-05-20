import React from 'react'
type Props = {
    price:number;
    id:number;
    options? : {title: string; 
        additionalPrice: number
    } []
}

const Price = ({price, id, options} : Props) => {
  return (
    <div className='flex flex-col gap-4 '>
      <h2 className='font-bold text-2xl'>${price}</h2>
      <div className='flex gap-4'>
        {options?.map(option =>(
          <button className='p-2 ring-2 ring-orange-500 rounded-md hover:bg-orange-500 hover:text-white' key={option.title}>{option.title}</button>
        ))}
      </div>
      {/* quantity and button container  */}
      <div className='flex justify-between items-center gap-4'>
      <div className='flex justify-between w-full ring-2 ring-orange-500 rounded-sm p-3 hover:bg-fuchsia-50'>
        <span>Quantity</span>
        <div className='flex gap-2 items-center'>
          <button>{'<'}</button>
          <span>1</span>
          <button>{'>'}</button>
        </div>
      </div>
      <button className='uppercase w-56 bg-orange-500 text-white p-3 ring-2 ring-orange-600 rounded-sm'>Add to cart</button>
      </div>
    </div>
  )
}

export default Price
