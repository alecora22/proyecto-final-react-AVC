

import ProductosCrud from "../components/ProductosCrud";


function Administracion() {

    return(
        <div className="mt-8"> 
        <section className="">
             <h2 className="text-center text-xl mt-8">Panel de Administracion</h2>
           <p className="text-center">Acceso exclusivo para usuarios autentificados.</p>
           <ProductosCrud/>
        </section>
           
        </div>
    )
    
}

export default Administracion;