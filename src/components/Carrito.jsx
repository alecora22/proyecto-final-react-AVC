// components/CarritoIcono.js
import { useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext';
import { FaCartShopping } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

function Carrito() {
  const { carrito } = useContext(CarritoContext);
  const navigate = useNavigate();

  const total = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  return (
    <div className="relative cursor-pointer" onClick={() => navigate('/carrito')}>
      <FaCartShopping className="w-6 h-6 text-white" />
      {total > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1">
          {total}
        </span>
      )}
    </div>
  );
}

export default Carrito;

