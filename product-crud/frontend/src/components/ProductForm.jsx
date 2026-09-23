import React, { useState, useEffect } from 'react';

const emptyForm = { name: '', description: '', price: '', quantity: '' };

function ProductForm({ onSubmit, editingProduct, onCancel }) {
  const [form, setForm] = useState(emptyForm);

  useEffect(() => {
    if (editingProduct) {
      setForm({
        name: editingProduct.name || '',
        description: editingProduct.description || '',
        price: editingProduct.price ?? '',
        quantity: editingProduct.quantity ?? '',
      });
    } else {
      setForm(emptyForm);
    }
  }, [editingProduct]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || form.price === '') return;

    onSubmit({
      ...form,
      price: Number(form.price),
      quantity: Number(form.quantity) || 0,
    });

    if (!editingProduct) setForm(emptyForm);
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h2>{editingProduct ? 'Edit product' : 'Add a product'}</h2>

      <label>
        Name
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="e.g. Wireless mouse"
          required
        />
      </label>

      <label>
        Description
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Optional details"
          rows="2"
        />
      </label>

      <div className="form-row">
        <label>
          Price
          <input
            type="number"
            step="0.01"
            min="0"
            name="price"
            value={form.price}
            onChange={handleChange}
            placeholder="0.00"
            required
          />
        </label>

        <label>
          Quantity
          <input
            type="number"
            min="0"
            name="quantity"
            value={form.quantity}
            onChange={handleChange}
            placeholder="0"
          />
        </label>
      </div>

      <div className="form-actions">
        <button type="submit" className="btn btn-primary">
          {editingProduct ? 'Save changes' : 'Add product'}
        </button>
        {editingProduct && (
          <button type="button" className="btn btn-secondary" onClick={onCancel}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default ProductForm;
