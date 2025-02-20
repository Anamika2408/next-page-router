import React from 'react';

export default function Products({ products }) {
  return (
    <div>
      <h1>Products</h1>
      <table style={{ width: '100%', border: '1px solid #ddd', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ padding: '8px', textAlign: 'left' }}>ID</th>
            <th style={{ padding: '8px', textAlign: 'left' }}>Title</th>
            <th style={{ padding: '8px', textAlign: 'left' }}>Description</th>
            <th style={{ padding: '8px', textAlign: 'left' }}>Category</th>
            <th style={{ padding: '8px', textAlign: 'left' }}>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td style={{ padding: '8px' }}>{product.id}</td>
              <td style={{ padding: '8px' }}>{product.title}</td>
              <td style={{ padding: '8px' }}>{product.description}</td>
              <td style={{ padding: '8px' }}>{product.category}</td>
              <td style={{ padding: '8px' }}>${product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch('https://dummyjson.com/products');
  const data = await res.json();
  const products = data.products.slice(0, 10);

  return {
    props: {
      products,
    },
  };
}
