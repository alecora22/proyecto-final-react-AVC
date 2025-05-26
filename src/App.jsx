import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import Home from './pages/Home';
import Productos from './pages/Productos';
import Contactos from './pages/Contactos';
import Footer from "./components/Footer";
import Header2 from "./components/Header2";
import Login from "./pages/Login";


function App() {


  return (
    <>
    <Router>
      <Header2/>
      <div>
        <Routes>
          <Route path="/"element={<Home/>}/>
          <Route path="/Productos"element={<Productos/>}/>
          <Route path="/Contactos"element={<Contactos/>}/>
          <Route path="/Login" element={<Login/>}/>
        </Routes>
      </div>
    </Router> 
    <Footer/>
    
    </>
  )
}

export default App
