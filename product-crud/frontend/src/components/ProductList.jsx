import React from 'react';

function ProductList({ products, onEdit, onDelete }) {
  if (products.length === 0) {
    return <p className="empty-state">No products yet — add your first one above.</p>;
  }

  return (
    <table className="product-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Qty</th>
          <th aria-label="Actions"></th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product._id}>
            <td>{product.name}</td>
            <td className="description-cell">{product.description}</td>
            <td>${Number(product.price).toFixed(2)}</td>
            <td>{product.quantity}</td>
            <td className="actions">
              <button className="btn btn-small" onClick={() => onEdit(product)}>
                Edit
              </button>
              <button
                className="btn btn-small btn-danger"
                onClick={() => onDelete(product._id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ProductList;
