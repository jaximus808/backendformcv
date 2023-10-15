
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client'
import * as EmailValidator from 'email-validator';
import bcrypt from 'bcrypt';
import * as jsonwebtoken from "jsonwebtoken"
const prisma = new PrismaClient()

type accountData = {
    token: string, 
    lift: number
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


    const {token,lift}: Partial<accountData> = await request.json();
    

    if(!token||!lift)
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
    const liftArray:Array<number> = await JSON.parse( user.recentFiveLifts);

    if(!liftArray)
    {
        return NextResponse.json({"fail":true, msg:"something went very wrong"}); 
        
    }
    if(liftArray.length < 5)
    {
        liftArray.push(lift); 
    }
    else{
        liftArray.shift();
        liftArray.push(lift);
    }
    const stringArr = JSON.stringify(liftArray);
    const updateData = {
        recentFiveLifts:stringArr

    }
    try
    {
        const modUser = await prisma.user.update
        ({
            where: {
                email: email
            },
            data:updateData
        });
        return NextResponse.json({"fail":false, username: modUser.username, lifts: modUser.recentFiveLifts}); 
    }
    catch(e)
    {
        console.log(e)
        return NextResponse.json({"fail":true, msg: "something went wrong"}); 
    }

}