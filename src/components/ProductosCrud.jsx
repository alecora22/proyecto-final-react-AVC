import React, { useState, useEffect } from "react";

const API_URL = "https://687fe3d7f1dcae717b608da1.mockapi.io/productos";

const ProductosCrud = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState("create");
  const [currentItem, setCurrentItem] = useState({
    name: "",
    description: "",
    price: "",
    stock: ""
  });

  const getProductos = async () => {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error("Error al obtener items");
      const data = await res.json();
      setItems(data);
    } catch (error) {
      alert("Error cargando datos");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductos();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentItem({ ...currentItem, [name]: value });
  };

  const handleCreate = async () => {
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(currentItem),
      });
      if (!res.ok) throw new Error("Error al crear item");
      await getProductos();
      handleCloseModal();
    } catch (error) {
      alert("Error creando item");
      console.error(error);
    }
  };

  const handleUpdate = async () => {
    try {
      const res = await fetch(`${API_URL}/${currentItem.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(currentItem),
      });
      if (!res.ok) throw new Error("Error al actualizar item");
      await getProductos();
      handleCloseModal();
    } catch (error) {
      alert("Error actualizando item");
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("¿Seguro que quieres eliminar este item?")) {
      try {
        const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
        if (!res.ok) throw new Error("Error al eliminar item");
        await getProductos();
      } catch (error) {
        alert("Error eliminando item");
        console.error(error);
      }
    }
  };

  const openCreateModal = () => {
    setModalMode("create");
    setCurrentItem({ name: "", description: "", price: "", stock: "" });
    setShowModal(true);
  };

  const openEditModal = (item) => {
    setModalMode("edit");
    setCurrentItem(item);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentItem({ name: "", description: "", price: "", stock: "" });
  };

  const isFormValid =
    currentItem.name.trim() &&
    currentItem.description.trim().length >= 10 &&
    !isNaN(currentItem.price) &&
    Number(currentItem.price) > 0 &&
    !isNaN(currentItem.stock) &&
    Number(currentItem.stock) >= 0;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mb-4"
        onClick={openCreateModal}
      >
        Crear nuevo item
      </button>

      {loading ? (
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-blue-500 mx-auto mb-2" />
          <p>Cargando...</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border">ID</th>
                <th className="px-4 py-2 border">Nombre</th>
                <th className="px-4 py-2 border">Descripción</th>
                <th className="px-4 py-2 border">Precio</th>
                <th className="px-4 py-2 border">Stock</th>
                <th className="px-4 py-2 border">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {items.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-center p-4">
                    No hay items
                  </td>
                </tr>
              ) : (
                items.map((item) => (
                  <tr key={item.id}>
                    <td className="px-4 py-2 border">{item.id}</td>
                    <td className="px-4 py-2 border">{item.name}</td>
                    <td className="px-4 py-2 border">{item.description}</td>
                    <td className="px-4 py-2 border">${item.price}</td>
                    <td className="px-4 py-2 border">{item.stock}</td>
                    <td className="px-4 py-2 border space-x-2">
                      <button
                        onClick={() => openEditModal(item)}
                        className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500"
                      >
                        Editar
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">
              {modalMode === "create" ? "Crear nuevo item" : "Editar item"}
            </h2>

            <div className="mb-4">
              <label className="block mb-1 font-medium">Nombre</label>
              <input
                type="text"
                name="name"
                value={currentItem.name}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1 font-medium">Descripción</label>
              <textarea
                name="description"
                rows={3}
                value={currentItem.description}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              ></textarea>
            </div>

            <div className="mb-4">
              <label className="block mb-1 font-medium">Precio</label>
              <input
                type="number"
                name="price"
                value={currentItem.price}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1 font-medium">Stock</label>
              <input
                type="number"
                name="stock"
                value={currentItem.stock}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>

            <div className="flex justify-end space-x-2">
              <button
                onClick={handleCloseModal}
                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
              >
                Cancelar
              </button>
              <button
                onClick={modalMode === "create" ? handleCreate : handleUpdate}
                disabled={!isFormValid}
                className={`px-4 py-2 rounded text-white ${
                  modalMode === "create"
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-green-600 hover:bg-green-700"
                }`}
              >
                {modalMode === "create" ? "Crear" : "Actualizar"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductosCrud;

