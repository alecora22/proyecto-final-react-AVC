
import { Link } from "react-router-dom";
function NavBar() {

    return (
      <nav className=" flex flex-cols mt-25 border  bg-red-300  cursor-pointer ">
        <ul
          className="flex flex-col z-50 lg:flex flex-row  w-full  m-6 " >
          <li className="me-4">
            <Link to="/">Home</Link>{" "}
          </li>
          <li className="me-4">
            <Link to="/Ofertas">Ofertas</Link>
          </li>
          <li className="me-4">
            <Link to="/Productos">Productos</Link>
          </li>
          <li className="me-4">
            <Link to="/Contactos">Contactos</Link>
          </li>
        </ul>
      </nav>
    );
    
}
export default NavBar;