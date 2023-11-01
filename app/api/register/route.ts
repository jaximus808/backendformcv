
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client'
import * as EmailValidator from 'email-validator';
import bcrypt from 'bcrypt';
import * as jsonwebtoken from "jsonwebtoken"
const prisma = new PrismaClient()

type accountData = {
    username: string, 
    password: string, 
    email: string 
}


export async function POST(request: Request){


    console.log("data rcieved!")
    const {username,password,email}: Partial<accountData> = await request.json();
    

    if(!username || !password ||!email)
    {
        
        return NextResponse.json({"fail":true, msg:"Missing Data",token:""}); 
    }
    //email format checker
    if(!EmailValidator.validate(email))
    {

        return NextResponse.json({"fail":true, msg:"Email Formatted Wrong",token:""}); 
    }
    
    const user = await prisma.user.findUnique
    ({
        where: {
            email: email
        },
    });

    if(user)
    {
        return NextResponse.json({"fail":true, msg:"You need a unique email",token:""}); 
    }

    try
    {
        const hashedPassword = await bcrypt.hash(password,10)
        const newUser = await prisma.user.create
        ({
            data: {
              username:username,
              hashedPassword:hashedPassword,
              email:email
    
            },
        })
        //login them in normally 

        const token = jsonwebtoken.sign({email:email},process.env.TOKEN_SECRET!);
        
       

        return NextResponse.json({"fail":false, msg:"", token:token}); 
    }
    catch(e)
    {
        console.log(e)
        return NextResponse.json({"fail":true, msg: "something went wrong", token:""}); 
    }

}