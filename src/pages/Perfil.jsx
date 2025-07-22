// src/pages/Perfil.jsx
import { useParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Perfil() {
  const { id } = useParams();
  const { logout } = useAuth();

  return (
    <div className="p-10 text-center">
      <h1 className="text-2xl mb-4">Bienvenido, usuario {id}</h1>
      <button
        onClick={logout}
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-800"
      >
        Cerrar sesión
      </button>
    </div>
  );
}

export default Perfil;
