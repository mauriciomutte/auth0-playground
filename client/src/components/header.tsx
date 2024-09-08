import { PropsWithChildren } from 'react'

export const Header = ({ children }: PropsWithChildren) => {
  return (
    <header className="bg-white border-b-2">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-xl font-bold">Auth0 Playground</div>
        {children}
      </div>
    </header>
  )
}