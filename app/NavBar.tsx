import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/users">Users</Link>
      <Link href="/products">Products</Link>

      <Link className='pl-5' href="/admin">Admin</Link>
    </div>
  );
}

export default NavBar