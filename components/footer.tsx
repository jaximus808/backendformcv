
import React, { useRef,Suspense,useEffect, useState } from 'react'

import Link from 'next/link'

export default function Footer()
{

    const [email, setEmail] = useState('');
    return (
        <div className='w-full h-[25rem] py-12  px-24 bg-[#141414] text-white grid grid-rows-4'>
            <div>
                <h3 className='font-bold text-3xl'>
                    VizFitness
                </h3>
            </div>
            
            <div className='w-full grid-span-3 grid grid-cols-3 '>
                <div className='grid grid-rows-5 gap-y-4'>
                    <h3 className='font-bold text-xl text-[#FFD700]'>Features</h3>
                    <Link href={"/"} className='hover:underline'>Deadlift Form Track</Link>
                    <Link href={"/"} className='hover:underline'>How It Works</Link>
                    <Link href={"/"} className='hover:underline'>Updates</Link>
                </div>
                <div className='grid grid-rows-5 gap-y-4'>
                    <h3 className='font-bold text-xl text-[#FFD700]'>About Us</h3>
                    <Link href={"/"} className='hover:underline'>Who We Are</Link>
                    <Link href={"/"} className='hover:underline'>Updates</Link>
                    <Link href={"/"} className='hover:underline'>Contact</Link>
                </div>
                <div className='grid grid-rows-5 gap-y-4'>
                    <h3 className='font-bold text-xl text-[#FFD700]'>Resources</h3>
                    <Link href={"/"} className='hover:underline'>Usuage Manual</Link>
                    <Link href={"/"} className='hover:underline'>Support</Link>
                    <Link href={"/"} className='hover:underline'>Privacy Policy</Link>
                    <Link href={"/"} className='hover:underline'>Legal</Link>
                </div>
                
            </div>

        </div>
    )
}