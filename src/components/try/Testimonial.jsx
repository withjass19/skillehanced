import React from 'react'
import { InfinitCard } from '../component/infinitCard'

export default function Testimonial() {
  return (
    <div className='bg-white py-14'>
        <div className='flex flex-col pb-10 pt-16 gap-2'>
            <p className='text-3xl font-bold text-center'>Students Testimonial</p>
            <p className='text-md text-center px-96'>Heres what our student to say about their transformative learning experience. Real stories, real growth. Discover firsthand the impact our courses have had on their lives.</p>
        </div>
      <InfinitCard className="bg-white"/>
    </div>
  )
}
