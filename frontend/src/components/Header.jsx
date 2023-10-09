import React, { useContext } from 'react'
import SearchInput from './ui/SearchInput'
import Tooltip from './ui/Tooltip'
import { SideBarContext } from '../context/SideBarProvider'

const Header = () => {
  const {isSidebarOpen,setIsSidebarOpen}=useContext(SideBarContext)

  return (<div className='px-4 py-6 border-b z-1 sm:px-8'>
    <div className='flex items-center justify-between mb-3 cursor-pointer md:mb-0'>
      <div className='flex items-center gap-3 sm:gap-8'>
        <svg onClick={()=>setIsSidebarOpen(!isSidebarOpen)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
        </svg>
        <h1 className='tracking-[6px] sm:tracking-[12px] text-xl'>EMPRESS</h1>
      </div>
      <div className='flex items-center gap-4'> 
        <SearchInput displayProps={'hidden md:flex'} />
        <h1>Shop</h1>
        <div className='relative '>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
          </svg>
          <Tooltip/>
        </div>
      </div>

    </div>
    <SearchInput displayProps={'block md:hidden'} />
    </div>
  )
}

export default Header
