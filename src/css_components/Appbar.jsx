import { useNavigate } from "react-router-dom"
import { useState } from "react";
export default function Navbar() {
  const navigate=useNavigate()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return <nav className="bg-gray-800 p-4 md:p-6 lg:p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Title */}
        <div className="flex items-center">
        <img src="https://assetscdn1.paytm.com/images/catalog/view/305388/1707892437147.png" className="h-8" alt="Flowbite Logo" />
          <span className="text-white text-lg font-semibold">Paytm</span>
        </div>

        {/* Dropdown Button */}
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300"
          >
             <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
              <div className="py-1">
                <a href="#" onClick={()=>{
                  navigate('/signin')
                  localStorage.removeItem('token')
                }} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Sign Out</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>



}