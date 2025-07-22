import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { AiOutlineAlignCenter } from "react-icons/ai";
import { FaCartShopping } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
import Carrito from "./Carrito";

function Header2() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const isAuth = localStorage.getItem("auth") === "true";

  const cerrarSesion = () => {
    localStorage.removeItem("auth");
    setIsOpen(false); // cerrar el menú si está abierto
    navigate("/Login");
  };

  return (
    <nav className="bg-black text-gray-300 p-4 relative font-serif">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="/">ShowRoomBsso</Link>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <div className="flex items-center gap-2 transition-transform duration-300 ease-in-out">
            {isOpen ? (
              <AiOutlineClose className="w-8 h-8 text-white transform rotate-90 duration-300" />
            ) : (
              <AiOutlineAlignCenter className="w-10 h-10 text-white" />
            )}
            
          </div>
        </button>

        <ul className="hidden md:flex space-x-6 items-center">
          <li>
            <Link to="/" className="hover:text-yellow-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/Productos" className="hover:text-yellow-300">
              Productos
            </Link>
          </li>
          <li>
            <Link to="/Contactos" className="hover:text-yellow-300">
              Contacto
            </Link>
          </li>
          <li>
            <Link to="/Carrito" className="hover:text-yellow-300">
              <Carrito />
            </Link>
            
          </li>

          {isAuth && (
            <>
              <li>
                <Link to="/perfil/usuario123" className="hover:text-yellow-300">
                  Perfil
                </Link>
              </li>
              <li>
                <Link to="/admin" className="hover:text-yellow-300">
                  Admin
                </Link>
              </li>
            </>
          )}

          {!isAuth ? (
            <>
              <li>
                <Link to="/Login" className="hover:text-yellow-300">
                  Iniciar Sesión
                </Link>
              </li>
            </>
          ) : (
            <li>
              <button onClick={cerrarSesion} className="hover:text-yellow-300">
                Cerrar sesión
              </button>
            </li>
          )}
        </ul>
      </div>
      {/* menu movil  */}
      {isOpen && (
        <ul
          className="absolute right-4 top-full mt-2 bg-black rounded shadow-md w-40 text-left md:hidden z-50
               transition-all duration-300 ease-out transform scale-100 opacity-100"
        >
          <li className="border-b border-white-200">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 hover:text-yellow-300"
            >
              Home
            </Link>
          </li>
          <li className="border-b border-white-200">
            <Link
              to="/Productos"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 hover:text-yellow-300"
            >
              Productos
            </Link>
          </li>
          <li className="border-b border-white-200">
            <Link
              to="/Contactos"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 hover:text-yellow-300"
            >
              Contacto
            </Link>
          </li>
          <li className="border-b border-white-200">
            <div className="px-4 py-2">
              <Carrito />
            </div>
          </li>

          {isAuth && (
            <>
              <li className="border-b border-white-200">
                <Link
                  to="/perfil/usuario123"
                  className="block px-4 py-2 hover:text-yellow-300"
                >
                  Perfil
                </Link>
              </li>
              <li className="border-b border-white-200">
                <Link
                  to="/admin"
                  className="block px-4 py-2 hover:text-yellow-300"
                >
                  Admin
                </Link>
              </li>
              <li className="border-b border-white-200">
                <button
                  onClick={cerrarSesion}
                  className="block px-4 py-2 w-full text-left hover:text-yellow-300"
                >
                  Cerrar sesión
                </button>
              </li>
            </>
          )}

          {!isAuth && (
            <>
              <li className="border-b border-white-200">
                <Link
                  to="/Login"
                  className="block px-4 py-2 hover:text-yellow-300"
                >
                  Iniciar Sesión
                </Link>
              </li>
            </>
          )}
        </ul>
      )}
    </nav>
  );
}

export default Header2;
