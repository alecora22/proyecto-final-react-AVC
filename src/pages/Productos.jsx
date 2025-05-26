
import { useEffect, useState } from "react";


 function Productos() {
 const emojiCheck = String.fromCodePoint(0x2713)

  const handelClik = ()=>{
    alert(`su producto fue agregado al carrito `,{emojiCheck})
  }

     const [productos, setProductos] = useState([]);
     const [cargando, setCargando] = useState(true);
     const [error, setError] = useState(null); 


     useEffect(() => {
       fetch("https://fakestoreapi.com/products")
         .then((res) => res.json())

         .then((data) => {
           setProductos(data);
           
           setCargando(false);
         })

         .catch((err) => {
           setError("Hubo un problema al cargar los productos.",err);
           setCargando(false);
         });
     },[]);                                                                   

     if (cargando) return <p className="text-2xl flex justify-center items-center text-center mt-20">Cargando productos...</p>;
     if (error) return <p>{error}</p>; 




   
  return (
    <section>
       <h3 className="text-center mt-8 text-2xl text-bond">Todos los Productos </h3>

       <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" >
     
      {productos.map((items) => (
        <div className="grid grid-col-1 gap-8 m-4 md:grid-col-4 gap-4 ">
            <div key={items.id} >
          <div className= "border overflow-hidden flex flex-col">
            <img
              src={items.image}
              alt="Producto 1"
               className="object-contain  h-50 p-5 ms-8 overflow-hidden flex flex-col"
            />
            <div className="p-4 ">
              <h3 className="text-lg font-bold text-gray-800 text-center">
                {items.title}
              </h3>
              <div className="flex justify-between mt-5">
                 <p className="text-yellow-500 font-bold mt-2 text-xl ">$ {items.price}</p>
                 <button className="bg-gray-800 text-yellow-400 p-3 rounded-lg" onClick={handelClik}> Comprar</button>
              </div>
             
            </div>

          </div>
        </div>
        </div>
      
      ))}
    </div>
    </section>
   
  );
} 
 

    
 

 export default Productos;