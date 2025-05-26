import { useState } from "react";

function Contactos() {

const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías enviar los datos a una API o mostrar un mensaje
    alert(`Formulario enviado:\n${JSON.stringify(formData, null, 2)}`);
  };





    return (
  

<div className="bg-black py-10 px-6 md:px-12 rounded-lg shadow-md max-w-3xl mx-auto mt-5 mb-2">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">Contáctanos</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-300 font-medium mb-1">Nombre</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            className="w-full bg-white px-4 py-2 border border-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />
        </div>
        <div>
          <label className="block text-gray-300 font-medium mb-1">Apellido</label>
          <input
            type="text"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
            required
            className="w-full bg-white px-4 py-2 border border-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />
        </div>
        <div>
          <label className="block text-gray-400 font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-white px-4 py-2 border border-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />
        </div>
        <textarea className="w-full bg-white px-4 py-2 border border-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300" name="text" id="descripcion"></textarea>
        <button
          type="submit"
          className="w-full  bg-gray-500 hover:text-yellow-400 text-white font-bold py-2 px-4 rounded-md transition duration-300"
        >
          Enviar
        </button>
      </form>
    </div>







    );
     
       
    


}

export default Contactos;