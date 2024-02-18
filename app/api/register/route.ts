
import dbconnect from "@/utils/database";
import { NextRequest, NextResponse } from "next/server";
import user from "@/models/user.model";
import bcrypt from 'bcrypt';

dbconnect();

export const POST = async (req:NextRequest,res:NextResponse) => {
    try{
        const { username, password } = await req.json();
        const Existinguser = await user.findOne({username});
        if(Existinguser){
            console.log('user already exists')
            return NextResponse.json({message:'user already exists'});
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        const newUser = new user({
            username,
            password:hashedPassword
        });
        await newUser.save();
        console.log('user registered successfully')
        return NextResponse.json({message:'success!'});
    }catch(err:any){
        console.log('Error while registering user',err.message)
        return NextResponse.json({message:err.message});
    }
    
}
