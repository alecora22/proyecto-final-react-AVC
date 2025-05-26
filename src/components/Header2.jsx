import { Link } from "react-router-dom";
import { useState } from 'react';
import { AiOutlineAlignCenter } from "react-icons/ai";
import { FaCartShopping } from "react-icons/fa6";

 function Header2 () {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-gray-300 p-4 relative font-serif">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold"><Link to="/" >ShowRoomBsso</Link></div>
        
        {/* Botón hamburguesa */}
       
            <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
            <div className="flex me-2">
                <AiOutlineAlignCenter className="w-10 h-10 me-2"/>
          <FaCartShopping className="w-8 h-8 mt-1"/>
            </div>
        
        </button>
     
        
        
        {/* Menú horizontal para pantallas grandes */}
        <ul className="hidden md:flex space-x-6 items-center">
          <li><Link to="/" className="hover:text-yellow-300">Home</Link></li>
          <li><Link to="/Productos" className="hover:text-yellow-300">Productos</Link></li>
          <li><Link to="/Contactos" className="hover:text-yellow-300">Contacto</Link></li>
          <div className="hidden md:flex space-x-6">
            <button className=" border-b rounded-b hover:text-yellow-300 "><Link to="login">Inicio Sesion</Link></button>
          <button className="hover:text-yellow-300">Registrate</button>
            <FaCartShopping className="w-8 h-8"/>
          </div>
        </ul>
      </div>

      {/* Menú desplegable vertical (solo en móviles) */}
      {isOpen && (
        <ul className="absolute right-4 top-full mt-2 bg-black rounded shadow-md w-40 text-left md:hidden">
          <li className="border-b border-white-200">
            <Link to="/"className="block px-4 py-2 hover:text-yellow-300">Home</Link>
          </li>
          <li className="border-b border-white-200">
            <Link to="/Productos" className="block px-4 py-2 hover:text-yellow-300">Productos</Link>
          </li>
          <li className="border-b border-white-200">
            <Link to="/Contactos" className="block px-4 py-2 hover:text-yellow-300">Contacto</Link>
          </li>
          <div className="flex flex-col border-b border-white-200">
            <button className="block px-4 py-2 hover:text-yellow-300 border-b border-white-200 text-left"><Link to="/Login">Inicio Sesion</Link> </button>
          <button className="block px-4 py-2 hover:text-yellow-300 border-b border-white-200 text-left">Registrate</button>
        

          </div>
          
        </ul>
       
      )}
    </nav>
  );
}
export default Header2;
