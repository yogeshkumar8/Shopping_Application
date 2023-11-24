import { IoCartOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const {cart} = useSelector((state) => state)
  return (
    <div>
      <nav className="flex justify-between items-center h-[50px] max-w-6xl mx-auto">
      <NavLink to="/">
      <div className="ml-5">
        <img src="../logo.png" className="h-[40px]"/>
      </div>
      </NavLink>

      <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
          <NavLink to="/">
            <p>Home</p>   
        
          </NavLink>
          <NavLink to="/cart">
              <div className="relative">
                  <IoCartOutline className="text-3xl"/>
                  {
                    cart.length > 0 &&
                    <span className="absolute -top-1 -right-2 bg-green-500 text-xs w-5 h-5 flex
                    justify-center items-center animate-bounce rounded-full text-white">{cart.length}</span>
                  } 
                  
              </div>
                
          </NavLink>

      </div>
          



      </nav>

    </div>
  )
};

export default Navbar;