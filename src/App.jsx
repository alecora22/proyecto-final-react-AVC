import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import Home from './pages/Home';
import Productos from './pages/Productos';
import Contactos from './pages/Contactos';
import Footer from "./components/Footer";
import Header2 from "./components/Header2";
import Login from "./pages/Login";
import CarritoPage from "./pages/CarritoPage"
import Perfil from "./pages/Perfil";
import Administracion from "./pages/Administracion";
import RutasProtegidas from "./components/RutasProtegidas";
import { useState } from "react";
import { CarritoProvider } from './context/CarritoContext';



function App() {

const [isAuthenticated,setIsAuthenticated] = useState(false)
  return (
    <>
    <CarritoProvider>

    
      <Router>
        <Header2 />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Productos" element={<Productos />} />
            <Route path="/Contactos" element={<Contactos />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Carrito" element={<CarritoPage />} />

            <Route
              path="/perfil/:id"
              element={
                <RutasProtegidas
                  isAuthenticated={localStorage.getItem("auth") === "true"}
                >
                  <Perfil />
                </RutasProtegidas>
              }
            />
            <Route
              path="/admin"
              element={
                <RutasProtegidas
                  isAuthenticated={localStorage.getItem("auth") === "true"}
                >
                  <Administracion />
                </RutasProtegidas>
              }
            />
          </Routes>
        </div>
      </Router>
      <Footer />

      </CarritoProvider>
    </>
    
  );
}

export default App
