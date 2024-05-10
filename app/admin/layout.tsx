import React, { ReactNode } from 'react'
import SideBar from './sidebar/page';


interface Props {
    children: ReactNode
}

const AdminLayout = ( {children}:Props ) => {
  return (
    <div className='flex'>
      <div className='bg-slate-300'>
        <SideBar />
      </div>
      <div className='bg-white'>{children}</div>
    </div>
  );
}

export default AdminLayout;