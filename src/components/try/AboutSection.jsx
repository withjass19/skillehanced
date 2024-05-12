import React from 'react'
import Image from "next/image";
import { FaGraduationCap } from "react-icons/fa";
import { IoBookOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { TbTriangleFilled } from "react-icons/tb";

export default function AboutSection() {
  return (
    <div className='w-full h-[100%] py-32'>
      <div className='grid grid-cols-12'>
        <div className='col-span-6 flex justify-center items-center w-full h-[100%]'>
          <Image className="w-[400px] rounded-2xl" src="/assets/images/about.jpg" width={400} height={100} alt='img'/>
        </div>
        <div className='col-span-6 flex flex-col gap-4 pe-40'>
          <div>
            <p className='text-3xl font-bold mb-4'>Benefits From Our Online Learning</p>
          </div>
          <div className='flex justify-center items-center gap-4 pb-3'>
            <div className='bg-[#6387FC] p-3 rounded-full'>
              <FaGraduationCap className='text-4xl'/>
            </div>
            <div className='flex flex-col gap-2'>
              <p className='text-lg font-medium'>Online Program</p>
              <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, aperiam! Aliquid ab laborum eius sequi.</p>
            </div>
          </div>

          <div className='flex justify-center items-center gap-4 pb-3'>
            <div className='bg-[#6387FC] p-3 rounded-full'>
              <IoBookOutline className='text-4xl'/>
            </div>
            <div className='flex flex-col gap-2'>
              <p className='text-lg font-medium'>Short Courses</p>
              <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, aperiam! Aliquid ab laborum eius sequi.</p>
            </div>
          </div>

          <div className='flex justify-center items-center gap-4 pb-3'>
            <div className='bg-[#6387FC] p-3 rounded-full'>
              <FaUser className='text-4xl'/>
            </div>
            <div className='flex flex-col gap-2'>
              <p className='text-lg font-medium'>Trainig From Experts</p>
              <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, aperiam! Aliquid ab laborum eius sequi.</p>
            </div>
          </div>

          <div className='flex justify-center items-center gap-4 pb-3'>
            <div className='bg-[#6387FC] p-3 rounded-full'>
              <TbTriangleFilled className='text-4xl'/>
            </div>
            <div className='flex flex-col gap-2'>
              <p className='text-lg font-medium'>1.5K+ Video Courses</p>
              <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, aperiam! Aliquid ab laborum eius sequi.</p>
            </div>
          </div>
          {/* <div></div>
          <div></div>
          <div></div> */}
        </div>
      </div>
    </div>
  )
}
