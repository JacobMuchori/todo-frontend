import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <nav>
        <Link href="/login">Login</Link>
      </nav>
      <h1>Welcome to the best task creating app ever!!!</h1>
    </div>
  )
}
