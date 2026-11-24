
import React from "react";
import "./App.css";

const products = [
  { id: 1, name: "Wireless Headphones", price: "₹1,499", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30d?w=400" },
  { id: 2, name: "Smart Watch", price: "₹1,999", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400" },
  { id: 3, name: "Running Shoes", price: "₹2,499", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400" },
  { id: 4, name: "Backpack", price: "₹899", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400" },
  { id: 5, name: "Camera", price: "₹24,999", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400" },
  { id: 6, name: "Sunglasses", price: "₹699", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400" }
];

function Header() {
  return (
    <header className="header">
      <h1>ShopKart<span>.</span></h1>
      <input type="text" placeholder="Search for products..." />
      <button>Login</button>
      <a href="#products">Products</a>
      <a href="#footer">Contact</a>
      <a href="#products">🛒 Cart</a>
    </header>
  );
}

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Categories</h2>
      {["Electronics", "Fashion", "Mobiles", "Watches", "Footwear", "Beauty", "Home & Kitchen"].map(category => (
        <a href="#products" key={category}>{category}</a>
      ))}
    </aside>
  );
}

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <h2>{product.price}</h2>
      <p>Special Offer Available</p>
      <button onClick={() => alert(product.name + " added to cart!")}>
        Add to Cart
      </button>
    </div>
  );
}

function App() {
  return (
    <>
      <Header />

      <section className="hero">
        <h1>Big Shopping Days!</h1>
        <p>Discover amazing deals on your favourite products.</p>
        <button onClick={() => document.getElementById("products").scrollIntoView()}>
          Shop Now
        </button>
      </section>

      <div className="main-container">
        <Sidebar />

        <main className="content" id="products">
          <h1>Best Deals For You</h1>
          <p>Explore our latest collections</p>

          <div className="product-grid">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </main>
      </div>

      <footer id="footer">
        <h2>ShopKart.</h2>
        <p>Your one-stop destination for online shopping.</p>
        <div className="footer-links">
          <a href="#products">About Us</a>
          <a href="#products">Help Centre</a>
          <a href="#products">Privacy Policy</a>
          <a href="#products">Contact Us</a>
        </div>
        <p>© 2026 ShopKart. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default App;
