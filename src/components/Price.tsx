
"use client"
import React, { useEffect, useState } from 'react'
type Props = {
    price:number;
    id:number;
    options? : {title: string; 
        additionalPrice: number
    } []
}

const Price = ({price, id, options} : Props) => {
const [total, setTotal] = useState(price);
const[quantity , setQuantity] = useState(1);
const[selected, setSelected] = useState(0);

useEffect (() => {
setTotal(
  quantity * (options ? price + options[selected].additionalPrice : price)
)
} , [quantity , selected , price , options])


  return (
    <div className='flex flex-col gap-4 '>
      <h2 className='font-bold text-2xl'>${total.toFixed(2)}</h2>
      <div className='flex gap-4'>
        {options?.map((option , index) =>(
          <button className='min-w-[6rem] p-2 ring-2 ring-orange-500 rounded-md '
          style={{
            background: selected === index ? "rgb(249 115 22)" : "white",
            color: selected === index ? " white" : "orange"
          }}
          onClick={() => setSelected(index)}
          key={option.title}>{option.title}</button>
        ))}
      </div>
      {/* quantity and button container  */}
      <div className='flex justify-between items-center gap-4'>
      <div className='flex justify-between w-full ring-2 ring-orange-500 rounded-sm p-3 hover:bg-fuchsia-50'>
        <span>Quantity</span>
        <div className='flex gap-2 items-center'>
          <button onClick={ () => setQuantity(prev => (prev > 1 ? prev - 1 : 1))}>{'<'}</button>
          <span>{quantity}</span>
          <button onClick={ () => setQuantity(prev => (prev < 9 ? prev + 1 : 9))}>{'>'}</button>
        </div>
      </div>
      <button className='uppercase w-56 bg-orange-500 text-white p-3 ring-2 ring-orange-600 rounded-sm'>Add to cart</button>
      </div>
    </div>
  )
}

export default Price
