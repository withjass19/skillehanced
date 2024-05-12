import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import { SiFacebook } from "react-icons/si";
import { AiOutlineInstagram } from "react-icons/ai";
import { RiWhatsappLine } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

export default function Footer() {
  return (
    <div className='pt-20'>
      <div className='grid grid-cols-12 w-[100%] h-[400px] p-10 bg-slate-900 text-white'>
        <div className='col-span-3 flex flex-col justify-cente items-cente gap-4 px-10'>
          <p className='text-xl font-bold'>About</p>
          <p className='text-cente text-sm'>At numeroussight we SkillEnhance trust everyone should have the liberty to build progress through technical knowledge and enhance the skills of upcoming world With determination, elearning paths and courses tailerd by working experienced industry experts.Our platform helps businesses and individuals benchmark expertise across roles, speed up release cycles and build reliable, secure products.</p>
        </div>
        <div className='col-span-3 flex flex-col justify-cente items-cente gap-4 px-10 '>
            <p className='text-xl font-bold'>Quick links</p>
            <ul className="list-none">
                <li>links</li>
                <li>links</li>
                <li>links</li>
                <li>links</li>
                <li>links</li>
            </ul>
        </div>
        <div className='col-span-3 flex flex-col justify-cente items-cente gap-4 px-10'>
            <p className='text-xl font-bold'>Popular Courses</p>
            <ul className="list-none">
                <li>links</li>
                <li>links</li>
                <li>links</li>
                <li>links</li>
                <li>links</li>
            </ul>
        </div>
        <div className='col-span-3 flex flex-col justify-cente items-cente gap-4 px-10 '>
            <p className='text-xl font-bold'>Contact</p>
            <p>Noida Sector-63 Block-B Uttar Pardesh 201301, India</p>
            <p>+91 7303346031 <br />info@skillenhanced.com</p>
        </div>
        <div className='col-span-12 grid grid-cols-12 grid-rows-1'>
          <div className='col-span-9 w-[100%] h-[100%] flex justify-cente items-center'>
            <p className='text-sm text-gray-400 ps-10'>
              Copyright @ 2024 
              <Link href="/">Skill Enhanced. </Link> 
               All rights reserved.
            </p>
          </div>
          <div className='col-span-3 w-[100%] h-[100%] text-2xl flex justify-end items-center pe-20 gap-3'>
            <SiFacebook />
            <AiOutlineInstagram />
            <RiWhatsappLine />
            <FaLinkedin />
            <MdOutlineMailOutline />
          </div>
        </div>
      </div>
    </div>
  )
}
