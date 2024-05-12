'use client'
import Image from "next/image";
import React, {useState} from "react";
import { Input, Button } from "@nextui-org/react";
import { EyeFilledIcon } from "@/components/icons/EyeFilledIcon";
import { EyeSlashFilledIcon } from "@/components/icons/EyeSlashFilledIcon";
import Link from "next/link";
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter()

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) =>{
      e.preventDefault();
      // setErrors(validateValues(formData));
      // setSubmitting(true);
      try {
        const response = await axios.post('/api/users/login', formData); 
        console.log(response.data);
        if(response.data){
          localStorage.setItem('token', response.data.token);
        }
        if (response.status === 200) {
          router.push('/profile');
        }
        
        // Optionally, redirect the user to another page after successful sign-up
        // router.push('/profile')
        // if(success === true){
        //     router.push('/profile')
        // }
      } catch (error) {
        console.error('Sign-up error:', error);
        // Handle error (e.g., display error message to the user)
      }
    }

  return (
    <div className="w-[100%] h-[100vh] flex items-center justify-center px-72 py-40">
      <div className="grid grid-cols-12  w-[800px] h-[500px] rounded-md shadow-lg">
        <div className="bg-red-200 col-span-5 bg-[url('/assets/images/login-bg.jpg')] bg-no-repeat bg-cover rounded-s-md bg-center"></div>
        <div className=" col-span-7 flex flex-col items-center pt-10">
          <Image
            src="/assets/images/skillEnhanced.png"
            width={170}
            height={180}
            alt="logo"
          />
          <p className="text-3xl font-bold pt-3 pb-8">Welcome Back!</p>
          <form onSubmit={handleSubmit} className="flex flex-col items-center w-[75%] gap-6 pt-4">
            <Input type="email" name="email" value={formData.email} onChange={handleChange} variant="bordered" label="Email" />
            <Input
              label="Password"
              variant="bordered"
              // placeholder="Enter your password"
              endContent={
                <button
                  className="focus:outline-none flex justify-center self-center"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <EyeSlashFilledIcon className="text-3xl text-default-400 pointer-events-none" />
                  ) : (
                    <EyeFilledIcon className="text-3xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              type={isVisible ? "text" : "password"}
              className="flex justify-center"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <p className="flex self-end text-sm font-medium">Forget Password ?</p>
            <Button className="bg-gradient-to-tr from-black to-slate-500 text-white px-8 py-4 rounded-full mt-5" type="submit">Login</Button>
            <p className="text-sm">Do not have account?
              <Link className="ps-1.5" href='/signUp'>
                <span className="font-medium">Sign  Up</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
