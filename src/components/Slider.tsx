"use client"
import React from 'react'
import Image from 'next/image';
import { useEffect , useState } from 'react';
const data = [
  
    {
      id:1,
      title: "In crust, we trust.",
      image: "https://t4.ftcdn.net/jpg/01/71/94/67/360_F_171946786_jSVQwYBk4LmUjqdeKGjLQX9kXKA028db.jpg",
    },
    {
      id:2,
      title: " Love is all you knead.",
      image: "https://img.freepik.com/premium-photo/photograph-mouthwatering-whole-pizza-capturing-its-irresistible-appeal_894855-6096.jpg",
    },
    {
      id:3,
      title: " The only circle of trust you should have.",
      image: "https://img.freepik.com/premium-photo/pizza-with-olives-cheese-it_582637-3351.jpg",
    },
    {
      id:4,
      title: " Life is a combination of magic and pizza.",
      image: "https://otpizza.net/wp-content/uploads/2023/06/Old-Town-Pizza-The-Best-Pizza-in-the-Sacramento-Area-1190x740.jpg",
    },
    {
      id:5,
      title: " The only thing better than a pizza is... another pizza!",
      image: "https://static.india.com/wp-content/uploads/2014/08/pizza2.jpg?impolicy=Medium_Resize&w=1200&h=800",
    },
]

const Slider = () => {
const [currentSlide, setCurrentSlide] = useState(0);

 useEffect (() => {
  const interval = setInterval(
    () => 
      setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1 )), 
    3000
  )
  return () => clearInterval(interval);
 } , []);

  return (
    <div className='flex  flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh - 9rem)] lg:flex-row bg-fuchsia-100'>
      <div className='flex-1 flex items-center justify-center flex-col gap-8 text-orange-500 font-bold lg:h-full lg:w-1/2'>
        <h1 className='text-5xl text-center  uppercase p-4 md:p-10 md:text-6xl xl:text-7xl'> {data[currentSlide].title}</h1>
        <button className='bg-orange-600 text-white py-4 px-8 rounded-md'> Order Now</button>
        </div>
      <div className='w-full flex-1 relative lg:h-full lg:w-1/2'>
        <Image src={data[currentSlide].image} alt='pizza' fill className='object-cover'></Image>
      </div>
    </div>
  )
}

export default Slider
