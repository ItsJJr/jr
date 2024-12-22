function HomePage() {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        {/* Hero Section */}
        <section className="text-center py-20">
          <h2
            className="text-5xl font-extrabold text-gray-800"
            style={{
              fontFamily: "'Playfair Display', serif",
            }}
          >
            Welcome to Jr's Boutique
          </h2>
          <p
            className="mt-4 text-lg text-gray-700"
            style={{
              fontFamily: "'Roboto', sans-serif",
            }}
          >
            Explore our elegant collections and experience the art of timeless fashion.
          </p>
          <a
            href="/products"
            className="mt-6 inline-block px-8 py-3 bg-gray-800 text-white font-semibold text-lg rounded-lg shadow-lg hover:bg-gray-900 transition"
            style={{
              fontFamily: "'Roboto', sans-serif",
            }}
          >
            Browse Collections
          </a>
        </section>
      </div>
    );
  }
  
  export default HomePage;
  