
import dbconnect from "@/utils/database";
import { NextRequest, NextResponse } from "next/server";

dbconnect();


export const POST = async (req:NextRequest, res:NextResponse) => {
    try{
        const { username, password } = await req.json();
        console.log(username, password);

    }catch(err){
        console.error(err);
    }

}




