export default function CompareTable({ products }) {
  return (
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        background: "#fff",
      }}
    >
      <thead>
        <tr>
          <th style={{ border: "1px solid #ddd", padding: "10px" }}>
            Feature
          </th>

          {products.map((product) => (
            <th
              key={product.id}
              style={{
                border: "1px solid #ddd",
                padding: "10px",
              }}
            >
              {product.name}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        <tr>
          <td style={{ border: "1px solid #ddd", padding: "10px" }}>
            Price
          </td>

          {products.map((product) => (
            <td
              key={product.id}
              style={{
                border: "1px solid #ddd",
                padding: "10px",
              }}
            >
              ₹{product.price}
            </td>
          ))}
        </tr>

        <tr>
          <td style={{ border: "1px solid #ddd", padding: "10px" }}>
            Rating
          </td>

          {products.map((product) => (
            <td
              key={product.id}
              style={{
                border: "1px solid #ddd",
                padding: "10px",
              }}
            >
              {product.rating}
            </td>
          ))}
        </tr>

        <tr>
          <td style={{ border: "1px solid #ddd", padding: "10px" }}>
            Category
          </td>

          {products.map((product) => (
            <td
              key={product.id}
              style={{
                border: "1px solid #ddd",
                padding: "10px",
              }}
            >
              {product.category}
            </td>
          ))}
        </tr>

        <tr>
          <td style={{ border: "1px solid #ddd", padding: "10px" }}>
            Discount
          </td>

          {products.map((product) => (
            <td
              key={product.id}
              style={{
                border: "1px solid #ddd",
                padding: "10px",
              }}
            >
              {product.discount}%
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
}