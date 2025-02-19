import React from 'react'
import laptop from '../assets/laptop.jpg'
const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
     <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
< img className='w-[500px] mx-auto my-4' src={laptop} alt="/" />
<div className='flex flex-col justify-center'>
<p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
<p className='font-bold md:text-4xl sm:text-3xl text-2xl py-2'>Manage Data Analytics Centrally</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae fuga, doloremque similique iste distinctio quod facere quia consequuntur magnam voluptatum harum deserunt veniam deleniti odio nostrum repudiandae sit debitis tempora!</p>
<button className='text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 bg-black md:mx-0'>Get Started</button>
</div>
     </div>
    </div>
  )
}

export default Analytics
