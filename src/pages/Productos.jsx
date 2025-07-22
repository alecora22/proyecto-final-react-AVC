
import { useEffect, useState, useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

function Productos() {
  const { agregarAlCarrito } = useContext(CarritoContext);
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
      .catch(() => {
        setError("Hubo un problema al cargar los productos.");
        setCargando(false);
      });
  }, []);

  const handleClick = (producto) => {
    agregarAlCarrito(producto);
    alert("✅ Producto agregado al carrito");
  };

  if (cargando) return <p className="text-center mt-20 text-xl">Cargando productos...</p>;
  if (error) return <p className="text-red-500 text-center mt-10">{error}</p>;

  return (
    <section className="p-6">
      <h3 className="text-center mt-8 text-2xl font-bold">Todos los Productos</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {productos.map((item) => (
          <div key={item.id} className="border p-4 rounded shadow bg-white">
            <img
              src={item.image}
              alt={item.title}
              className="h-40 object-contain mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 text-center">{item.title}</h3>
            <div className="flex justify-between mt-4 items-center">
              <p className="text-yellow-500 font-bold text-xl">${item.price}</p>
              <button
                className="bg-gray-800 text-yellow-400 px-3 py-1 rounded hover:bg-gray-700"
                onClick={() => handleClick(item)}
              >
                Comprar
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Productos;
