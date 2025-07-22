import React, { createContext, useState } from 'react';


// Crear el contexto 
export const CarritoContext = createContext(); 
// Proveedor del contexto
export function CarritoProvider({ children }) { 
    const [carrito, setCarrito] = useState([]); 
 
    const agregarAlCarrito = (producto) => {
      setCarrito((prevCarrito) => {
        const existe = prevCarrito.find((item) => item.id === producto.id);
        if (existe) {
          return prevCarrito.map((item) =>
            item.id === producto.id
              ? { ...item, cantidad: item.cantidad + 1 }
              : item
          );
        }
        //si no existe,agragar cantidad 1
        return [...prevCarrito, { ...producto, cantidad: 1 }];
      });
    }; 
    const eliminarProducto = (id)=>{
        setCarrito((prevCarrito) => prevCarrito.filter(item => item.id !== id));
    }
 
    const vaciarCarrito = () => { 
        setCarrito([]); 
    }; 
 
    return ( 
        <CarritoContext.Provider value={{ carrito, agregarAlCarrito, setCarrito,eliminarProducto ,vaciarCarrito }}>
 
            {children} 
        </CarritoContext.Provider>
    );
}