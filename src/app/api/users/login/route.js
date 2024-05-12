import connectDB from "@/database/config/DBconfig";
import { User } from "@/database/models/userSchema";
import { NextResponse } from "next/server";
// const CryptoJS = require('crypto-js');
import jwt from 'jsonwebtoken';

export async function  POST(req, res){
    connectDB();
    try {
        const {email, password} = await req.json();
        console.log(email, password);

        if( !email || !password){ 
            return new Response("Username and Password is required", { status: 401 });
        }

        let user = await User.findOne({ email: email });
        if (!user) {
            return new Response("Username does not exist", { status: 400 });
        }

        if(user){

            // let bytes  = CryptoJS.AES.decrypt(user.password, 'key');
            // let hashedPassword = bytes.toString(CryptoJS.enc.Utf8);
    
            if (email == user.email && password == user.password) {
                let token = jwt.sign({ email: user.email, user: user._id}, process.env.JWT_SECRET, { expiresIn: '2d' });
                const response = NextResponse.json({ message: "Login successfull", token: token });
        
                response.cookies.set("token", token, { httpOnly: true });
                return response;
            }else{
                console.log(error);
                return new Response("Internal Server Error",{ status :500 });
            }
        }
        else{
            console.log(error);
            return new Response("Internal Server Error",{ status :500 });
        }
        
    } catch (error) {
        console.log("Error", error.message);
        return new Response("Something went wrong ", { status: 500 });
    }
    
    
    
}