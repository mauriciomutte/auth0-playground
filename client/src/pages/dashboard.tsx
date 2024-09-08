import { PropsWithChildren } from 'react'
import { useUser } from '@auth0/nextjs-auth0/client'

import { LogoutButton } from '@/components/logout-button'
import { Header } from '@/components/header'

const DashboardSection = ({
  title,
  children,
}: PropsWithChildren<{ title: string }>) => {
  return (
    <div className="bg-white rounded-md shadow p-8">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      {children}
    </div>
  )
}

export default function Dashboard() {
  const { user } = useUser()

  console.log(user)

  return (
    <div className="min-h-screen flex flex-col">
      <Header>
        <LogoutButton />
      </Header>

      <main className="flex flex-grow bg-gray-100">
        <div className="container mx-auto p-4">
          <h2 className="text-lg mb-4 p-2">
            You&apos;re logged as {user?.email}!
          </h2>
          <DashboardSection title="Dashboard"></DashboardSection>
        </div>
      </main>
    </div>
  )
}
