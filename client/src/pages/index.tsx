import { LoginButton } from '@/components/login-button'
import { Header } from '@/components/header'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header>
        <LoginButton size="small" />
      </Header>

      <main className="flex-grow flex flex-col items-center justify-center text-center bg-[#faf8f0]">
        <div className="text-lg flex justify-center items-center gap-2 mb-4">
          <span className="">⭐️⭐⭐⭐️⭐️</span>
          <p className="text-gray-300">Loved by 1000+ users</p>
        </div>
        <h1 className="text-5xl sm:text-7xl font-bold mb-4 max-w-4xl text-center">
          Welcome to Auth0 Playground
        </h1>
        <p className="text-lg mb-8">
          Explore and demonstrate various authentication mechanisms and
          strategies.
        </p>
        <LoginButton size="large" />
      </main>
    </div>
  )
}
