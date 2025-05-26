 import { useState } from "react";



function Login() {
    
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación básica
    if (!email || !password) {
      setError("Por favor completa todos los campos.");
      return;
    }

    // Lógica para enviar al backend
    console.log("Login con:", { email, password });
    setError("");
  };
    return(
       




    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-black text-gray-300 p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h2>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full border bg-white rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Contraseña</label>
            <input
              type="password"
              className="w-full bg-white border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full  bg-gray-500 hover:text-yellow-300 text-white font-bold py-2 rounded-lg  transition"
          >
            Iniciar sesión
          </button>
        </form>
        <p className="text-sm text-center mt-4 text-gray-600">
          ¿No tenés cuenta? <a href="#" className="text-blue-600 hover:underline">Registrate</a>
        </p>
      </div>
    </div>
  );
}


        
    
    

export default Login;