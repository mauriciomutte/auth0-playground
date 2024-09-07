export const LoginButton = ({ size }: { size: 'small' | 'large' }) => {
  const baseClasses =
    'bg-[#FFDD04] hover:opacity-80 font-bold rounded duration-200'
  const hoverEffect =
    'hover:scale-x-[1.021] hover:scale-y-[1.041] hover:perspective-[1px]'
  const sizeClasses =
    size === 'large' ? 'py-2 px-12 text-lg' : 'py-2 px-4 text-sm'

  return (
    <button className={`${baseClasses} ${sizeClasses} ${hoverEffect}`}>
      Login
    </button>
  )
}
