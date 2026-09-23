import React, { useState, useEffect } from 'react';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import productService from './services/productService';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await productService.getProducts();
      setProducts(res.data.data);
      setError('');
    } catch (err) {
      setError('Could not load products. Is the backend server running on port 5000?');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleCreateOrUpdate = async (data) => {
    try {
      if (editingProduct) {
        await productService.updateProduct(editingProduct._id, data);
        setEditingProduct(null);
      } else {
        await productService.createProduct(data);
      }
      setError('');
      fetchProducts();
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong. Please try again.');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this product?')) return;
    try {
      await productService.deleteProduct(id);
      fetchProducts();
    } catch (err) {
      setError('Could not delete the product.');
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Product Manager</h1>
        <p>A simple CRUD demo — Node.js/Express/MongoDB (MVC) + React</p>
      </header>

      {error && <div className="alert">{error}</div>}

      <ProductForm
        onSubmit={handleCreateOrUpdate}
        editingProduct={editingProduct}
        onCancel={() => setEditingProduct(null)}
      />

      <section className="product-section">
        <h2 className="section-title">Products</h2>
        {loading ? (
          <p>Loading products…</p>
        ) : (
          <ProductList
            products={products}
            onEdit={setEditingProduct}
            onDelete={handleDelete}
          />
        )}
      </section>
    </div>
  );
}

export default App;
