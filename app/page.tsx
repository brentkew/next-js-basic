import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './product/product-card'
import { getServerSession } from 'next-auth'
import { GoogleAuthOptions } from './api/auth/[...nextauth]/route';




export default async function Home() {

  const session = await getServerSession(GoogleAuthOptions);


  return (
    <main>

      <div className='home-msg m-10'>
        <h1>Hy, Hello {session && session.user!.name}</h1>
      </div>
      <ProductCard />
    </main>
  )
}
