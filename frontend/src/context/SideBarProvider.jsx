import React, { createContext, useState } from 'react'
export const SideBarContext=createContext();
const SidebarProvider = ({children}) => {
    const [isSidebarOpen,setIsSidebarOpen]=useState(false)
  return (
    <SideBarContext.Provider value={{isSidebarOpen,setIsSidebarOpen}}>
      {children}
    </SideBarContext.Provider>
  )
}

export default SidebarProvider
