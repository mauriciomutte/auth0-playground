import { LogOut } from 'lucide-react'

export const LogoutButton = () => {
  return (
    <a
      className="flex items-center gap-1 text-sm font-bold px-6 py-3 relative btn-hover-bg"
      href={`/api/auth/logout`}
    >
      <LogOut size={18} />
      Logout
    </a>
  )
}
