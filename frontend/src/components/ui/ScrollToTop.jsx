import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SideBarContext } from '../../context/SideBarProvider';

const ScrollToTop = ({ children }) => {
  const { pathname } = useLocation();
  const {isSidebarOpen,setIsSidebarOpen}=useContext(SideBarContext)

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsSidebarOpen(false)
  }, [pathname]);

  return children || null;
};

export default ScrollToTop;