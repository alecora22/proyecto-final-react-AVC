import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";


function Footer() {
    return(
          <footer className="bg-black text-gray-300 py-4 ">
      <div className="container mx-auto px-4 flex  md:flex-row justify-between items-center gap-6 xl:margin-top:auto ">
        
        {/* Contacto */}
        <div className="text-center md:  justify-center">
          <h3 className="text-2xl font-bold">Contacto</h3>
          <p>Email: showRoomBsso@gmail.com</p>
          <p>Teléfono: +123 456 7890</p>
        </div>
        <div className="text-center ">
          <h3>by Alejandro Victor Cora</h3>
        </div>

        {/* Redes Sociales */}
        <div className="flex flex-col space-x-6 text-2xl">
          <h3 className="text-2xl font-bold mb-2">Seguinos en Redes</h3>
          <div className="flex justify-center me-4">
             <FaInstagramSquare className="hover:text-pink-500 transition duration-300 me-3" />
            <FaFacebook className="hover:text-blue-500 transition duration-300" />
          </div>
           
        </div>

      </div>
    </footer>
    )
    

}

export default Footer;