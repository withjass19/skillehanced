import connectDB from "@/database/config/DBconfig";
import { User } from "@/database/models/userSchema";
import { NextResponse } from "next/server";
// const CryptoJS = require('crypto-js');

export async function POST(req, res){
    connectDB()

    const { email, password} = await req.json();

    // const hashedPassword = CryptoJS.AES.encrypt(password, 'key').toString();

    const data = new User({
        email, 
        password,
    });
    const result = await data.save()
    console.log(result);


    return NextResponse.json({success: true})
} 