import React, { Suspense } from 'react'
import UserTable from './UserTable'
import Link from 'next/link';


interface Props {

    searchParams: { sortOrder : string;}
}

const UsersPage =  ({searchParams: {sortOrder}} : Props) => {
    

    

  return (
    <div>
      <h1>Users</h1>
      <Link href='/users/new' className='btn btn-primary'>New User</Link>
      <p>{new Date().toLocaleTimeString()}</p>
      <UserTable sortOrder={sortOrder}></UserTable>


    </div>
  ) 
}

export default UsersPage
