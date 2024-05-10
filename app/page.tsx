import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './product/product-card'

export default function Home() {

  return (
    <main>
      <h1>Home Page</h1>
      <Link href="/users">User Page </Link>
      <ProductCard />
    </main>
  )
}
