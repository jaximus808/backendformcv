import type { NextApiRequest, NextApiResponse } from 'next'

import {Prisma, PrismaClient} from "@prisma/client"
import * as bcrypt from "bcrypt";
import * as jsonwebtoken from "jsonwebtoken"
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic' 
type accountData = {
    email:string,
    password: string
}

const prisma = new PrismaClient()

export async function POST(request: Request){

    const {email,password}: Partial<accountData> = await request.json();

    if( !password ||!email)
    {
        
        return NextResponse.json({"fail":true, msg:"Missing Data"}); 
    }
    const user = await prisma.user.findUnique
    ({
        where: {
            email: email
        },
    });
    if(!user)
    {
        return NextResponse.json({"fail":true, msg:"Incorrect Credentials"}); 
    }
    const pass = await bcrypt.compare(password,user.hashedPassword)

    if(!pass)
    {
        return NextResponse.json({"fail":true, msg:"Incorrect Credentials"}); 
    }

    try
    {
        

        const token = jsonwebtoken.sign({email:email},process.env.TOKEN_SECRET!);
        

        return NextResponse.json({"fail":false}); 
    }
    catch(e)
    {
        console.log(e)
        return NextResponse.json({"fail":true, msg: "something went wrong"}); 
    }
}