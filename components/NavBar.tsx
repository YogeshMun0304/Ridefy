"use client"
import Image from 'next/image'
import React from 'react'
import { UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/clerk-react";
function NavBar() {
  const { isSignedIn, user, isLoaded } = useUser();
  return isSignedIn&&(
    <div className='flex justify-between items-center
     p-3 px-10 border-b-[1px] shadow-md'>
        <div className='flex gap-10 items-center'>
            <Image src='/ridefy-logos.jpeg'
            alt='logo'
            width={120}
            height={30}
            className='rounded-md -ml-2'
            />
            <div className='hidden md:flex gap-6'>
                <h2 className='hover:bg-gray-100 p-2
                rounded-md cursor-pointer transition-all'>Home</h2>
                <h2 className='hover:bg-gray-100 p-2
                rounded-md cursor-pointer transition-all'>History</h2>
                <h2 className='hover:bg-gray-100 p-2
                rounded-md cursor-pointer transition-all'>Help</h2>
            </div>
        </div>
        <UserButton afterSignOutUrl="/"/>
    </div>
  )
}

export default NavBar