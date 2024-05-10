import Link from 'next/link'
import React from 'react'
import UserTable from './userTable'

interface Props {
  searchParams: {
    sortOrder: string;
    sortType: string;
  };
}

const Page = async ({searchParams: {sortOrder, sortType} }:Props) => {
  return (
    <>
      <h1>User Page</h1>
      <Link href="/">Go to Home Page </Link>
      <hr></hr>

      <h3 className="pt-6 bold">
        User Data <span>(Fetch Data)</span>
      </h3>
      <UserTable sortOrder={sortOrder} sortType={sortType} />
    </>
  );
};

export default Page