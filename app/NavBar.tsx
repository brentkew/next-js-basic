'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link'
import React from 'react'

const NavBar = () => {

  const {status, data: session} = useSession()

  return (
    <div className='space-x-3'>
      <Link href="/">Home</Link>
      <Link href="/users">Users</Link>
      <Link href="/products">Products</Link>
      <Link className='' href="/admin">Admin</Link>
      
      {status==='unauthenticated' && <Link className='' href="/api/auth/signin">Login</Link> }      
      {status ==='authenticated' && <div className='d-inline float-right'>
        {session.user!.name}
        <Link className='ml-3' href='/api/auth/signout'>Sign Out</Link>
      </div>
      }
    </div>
  );
}

export default NavBar