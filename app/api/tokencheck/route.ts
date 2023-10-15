
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client'
import * as EmailValidator from 'email-validator';
import bcrypt from 'bcrypt';
import * as jsonwebtoken from "jsonwebtoken"
const prisma = new PrismaClient()

type accountData = {
    token: string, 
}
declare module 'jsonwebtoken' {
    export interface EmailJwtPayload extends jsonwebtoken.JwtPayload {
        email: string
    }
}
const emailFromJWT = (jwtToken: string): string | undefined => {
    try {
        const { email } = <jsonwebtoken.EmailJwtPayload>jsonwebtoken.verify(jwtToken, process.env.TOKEN_SECRET || 'MISSING_SECRET')

        return email
    } catch (error) {
        return undefined
    }
}

export async function POST(request: Request){


    const {token}: Partial<accountData> = await request.json();
    

    if(!token)
    {
        
        return NextResponse.json({"fail":true, msg:"Missing Data"}); 
    }
    //email format checker
    var email = await emailFromJWT(token)
    if(!email)
    {

        return NextResponse.json({"fail":true, msg:"wrongtoken"}); 
    }

    const user = await prisma.user.findUnique
    ({
        where: {
            email: email
        },
    });


    if(!user)
    {
        return NextResponse.json({"fail":true, msg:"cannotFindUser"}); 
    }

    try
    {

        return NextResponse.json({"fail":false, username: user.username, email:user.email, performance: user.recentFiveLifts}); 
    }
    catch(e)
    {
        console.log(e)
        return NextResponse.json({"fail":true, msg: "something went wrong"}); 
    }

}