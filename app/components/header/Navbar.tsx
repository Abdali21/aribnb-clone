import { GlobeAltIcon, MenuIcon, UserCircleIcon } from "@heroicons/react/solid"

const Navbar = () => {
  return (
    <div className='flex space-x-4 items-center justify-end text-gray-500'>
      <p className='hidden md:inline cursor-pointer font-semibold text-sm tracking-wide'>Airbnb your home</p>
        <GlobeAltIcon className='h-6 cursor-pointer' />
       <div className='hidden sm:flex space-x-2 border-2 p-2 rounded-full'>
         <MenuIcon className='h-6' />
         <UserCircleIcon className='h-6' />
       </div>
    </div>
  )
}
export default Navbar
