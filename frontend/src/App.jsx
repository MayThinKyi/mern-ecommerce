import { useContext } from "react";
import Header from "./components/Header";
import Sidebar from "./components/ui/Sidebar";
import { SideBarContext } from "./context/SideBarProvider";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
function App() {
  const {isSidebarOpen}=useContext(SideBarContext)
  return (
    <div className="relative App">
      <Router>
      <Sidebar/>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
        <Footer/>
      </Router>
       
     
    </div>
  );
}

export default App;
