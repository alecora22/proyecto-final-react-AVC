


import { useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext';

function CarritoPage() {
  const { carrito, eliminarProducto, vaciarCarrito } = useContext(CarritoContext);

  const totalUnidades = carrito.reduce((acc, item) => acc + item.cantidad, 0);
  const totalPrecio = carrito.reduce((acc, item) => acc + item.price * item.cantidad, 0);

  return (
    <div className="p-6 bg-gray-100 min-h-screen font-serif">
      <h2 className="text-2xl font-bold mb-4">Tu carrito</h2>

      {carrito.length === 0 ? (
        <p className="text-gray-600">El carrito está vacío.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {carrito.map((item) => (
              <li
                key={item.id}
                className="bg-white p-4 rounded shadow flex items-center justify-between"
              >
                <div className="flex items-center">
                  <img src={item.image} alt={item.title} className="w-16 h-16 object-contain mr-4" />
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-sm text-gray-500">Cantidad: {item.cantidad}</p>
                    <p className="text-sm text-gray-600">Precio unitario: ${item.price.toFixed(2)}</p>
                  </div>
                </div>
                <button
                  onClick={() => eliminarProducto(item.id)}
                  className="text-red-500 hover:underline text-sm"
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-6 space-y-2">
            <p className="font-semibold">Total de productos: {totalUnidades}</p>
            <p className="font-semibold text-lg">Total a pagar: ${totalPrecio.toFixed(2)}</p>
            <button
              onClick={vaciarCarrito}
              className="mt-2 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Vaciar carrito
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CarritoPage;


