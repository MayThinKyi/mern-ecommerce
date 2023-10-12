import { useContext } from "react";
import Header from "./components/Header";
import Sidebar from "./components/ui/Sidebar";
import { SideBarContext } from "./context/SideBarProvider";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Shop from "./pages/Shop";
import Cart from './pages/Cart';
import OrderHistory from "./pages/OrderHistory";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
function App() {
  const {isSidebarOpen}=useContext(SideBarContext)
  return (
    <div className="relative App">
      <Router>
      <Sidebar/>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/order-history" element={<OrderHistory/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />

        </Routes>
        <Footer/>
      </Router>
       
     
    </div>
  );
}

export default App;
