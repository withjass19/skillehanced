'use client'
import React from 'react'
import {Button} from "@nextui-org/react";
import Image from "next/image";
import { BsArrowUpLeftCircleFill } from "react-icons/bs";
import { FaCircleUser } from "react-icons/fa6";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="grid grid-rows-1 grid-cols-12 p-32" ref={ref}>
      <div className="col-span-6 flex flex-col justify-center items-start gap-5 ps-24 pe-10">
        <p 
          className='text-5xl font-extrabold'
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
          }}
        >
          Education is the best way to refrom people.
        </p>
        <p 
          className='mb-5'
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s"
          }}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed perspiciatis labore ducimus modi enim! Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, tempora?
        </p>
        <Button 
          radius="full" 
          className="bg-gradient-to-tr from-black to-slate-500 text-white shadow-lg px-6"
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s"
          }}
        >
          View Courses
        </Button>
      </div>
      <div className="col-span-6 flex justify-center items-center">
        <Image 
          className="w-[400px] rounded-2xl" 
          src="/assets/images/hero.png" 
          width={400} 
          height={100} 
          alt='img'
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
          }}
        />
        <div>
          <div 
            className='01 flex items-center px-4 py-3 rounded-lg gap-2 relative left-[-29rem] top-[10rem] backdrop-blur-lg bg-black/5'
            style={{
              transform: isInView ? "none" : "translateX(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s"
            }}
          >
            <div>
              <BsArrowUpLeftCircleFill className='text-3xl'/>
            </div>
            <div>
              <p className='font-bold text-xl'>50+</p>
              <p className='font-medium text-sm'>Online Courses</p>
            </div>
          </div>

          <div 
            className='02 flex items-center backdrop-blur-lg bg-black/5 px-4 py-3 rounded-lg gap-2 relative -left-28 -top-28'
            style={{
              transform: isInView ? "none" : "translateX(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s"
            }}
          >
            <div>
              <FaCircleUser className='text-3xl'/>
            </div>
            <div>
              <p className='font-bold text-xl'>50+</p>
              <p className='font-medium text-sm'>Online Courses</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
