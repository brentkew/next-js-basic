"use client";

import { useRouter } from 'next/navigation';
import React from 'react'

const NewUserPage = () => {

  const router = useRouter();

  return (
    <>
      <button className='btn btn-secondary' onClick={() => router.push("/users")}>Add New User</button>
    </>
  );
}

export default NewUserPage;