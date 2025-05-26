import img1 from '../images/img1.jfif'
 import img3 from '../images/img3.jpg'
  import img10 from '../images/img10.jpg'
   import img11 from '../images/img11.jpg'
   





function Gallery() {
    return (
      
<section className="max-w-7xl  mx-auto px-4 py-10  md:min-height: 100vh ">
  <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 border-b">Somos el mejor ShowRoom de la cuidad</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {/* <!-- Card 1 --> */}
    <div className="bg-white rounded-2xl shadow hover:shadow-lg overflow-hidden transition">
      <img
        src={img1}
        alt="Producto 1"
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">Nuestra Tienda</h3>
        
      </div>
    </div>

    {/* <!-- Card 2 --> */}
    <div className="bg-white rounded-2xl shadow hover:shadow-lg overflow-hidden transition">
      <img
        src={img10}
        alt="Producto 2"
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">Style Formal</h3>
       
      </div>
    </div>

    {/* <!-- Card 3 --> */}
    <div className="bg-white rounded-2xl shadow hover:shadow-lg overflow-hidden transition">
      <img
        src={img11}
        alt="Producto 3"
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">Style Urbano</h3>
       
      </div>
    </div>
  </div>
</section>





    )
    

}

export default Gallery;