"use client";
import { useSession } from 'next-auth/react';
import Link from 'next/link'
import React from 'react'

const NavBar = () => {

  const {status, data: session} = useSession();

  
  return (
    <div className='flex bg-slate-200 p-5 space-x-3'>
        <Link href="/" className='mr-5'>Next.js</Link>
        <Link href="/users">Users</Link>
        {status==="unauthenticated" && <Link href="/api/auth/signin" >Log in</Link>}
        {status === "authenticated" &&<> <div>{session.user!.name}</div> <div><Link href="/api/auth/signout">Sign out</Link></div></>}
      
    </div>
  )
}

export default NavBar
