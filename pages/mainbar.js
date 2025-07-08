"use client"
import { useState } from 'react'
import React from 'react'
import { BorderBeam } from "@/components/magicui/border-beam";
import Link from 'next/link';
import Image from 'next/image';
import OnlinemeetingImag from '@/app/assets/OnlineMeeting.png';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import CreateRoom from '@/pages/CreateRoom'


const Homepage = ({setshowcreateroom}) => {
   
  return (
    <>
    
    
    <div className="relative h-[50vh] w-[90vw] overflow-hidden rounded-3xl shadow-lg mx-auto">

        <div className='w-full h-full flex flex-col sm:flex-row items-center justify-center bg-gradient-to-b from-slate-900 to-slate-700 text-white  font-bold'>
            <div className='sm:w-[50%] w-[100%] h-full flex flex-col items-center justify-center p-8 text-center space-x-0 space-y-2'>
                <h1 className='text-xl md:text-4xl '>Welcome to the Conference Platform</h1>
                <p className='mt-2 text-xs md:text-xl'>Join us for an immersive experience in video and audio conferencing.</p>
                <div className='mt-4  flex justify-evenly gap-2.5 items-center w-full max-w-md'>
                    
                    <ShimmerButton className='p-2 px-4 rounded-2xl  hover:bg-slate-600 transition-colors duration-300' onClick={() => { setshowcreateroom(e => !e)}}>
                       Create Room
                    </ShimmerButton>
                    

                    <Link href='/join-room' >
                    <ShimmerButton  className='p-2 px-4 rounded-2xl  hover:bg-slate-600 transition-colors duration-300'>
                        Join Room
                    </ShimmerButton>
                    </Link>
                  
                        </div>

            </div>
            <div className='w-[50%] h-full bg-purple-700-400'>
                <div className='flex items-center justify-center h-full'>
                    <Image src={OnlinemeetingImag} alt='Conference Image' width={500} height={500} className='rounded-lg shadow-lg' />
                </div>


            </div>


        </div>
        <BorderBeam size={100} borderWidth={2} />

    


      </div>
      </>
  )
}

export default Homepage