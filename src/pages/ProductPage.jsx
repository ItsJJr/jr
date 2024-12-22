import { useEffect, useState } from "react";

function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data); // Adjusted to match the structure of Fake Store API
      } catch (error) {
        console.error("Error fetching the products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1 className="text-2xl px-6 py-10">Our Products</h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="p-2 border-2 rounded-md">
            <img
              src={product.image || "https://via.placeholder.com/150"}
              alt={product.title}
              className="rounded-3xl"
            />
            <div className="truncate">{product.title}</div>
            <div className="text-lg font-medium text-blue-600">
              ${product.price}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
