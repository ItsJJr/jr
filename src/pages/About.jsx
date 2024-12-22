function About() {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800 px-6 py-12">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-800">About Jr's Boutique</h1>
          <p className="mt-4 text-lg text-gray-700">
            Redefining elegance with carefully curated collections and unparalleled service.
          </p>
        </section>
  
        {/* Core Values Section */}
        <section className="mt-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Customer Excellence</h3>
              <p className="text-gray-700">
                We strive to deliver an exceptional experience tailored to your unique preferences.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Premium Quality</h3>
              <p className="text-gray-700">
                Each item in our collection is meticulously crafted and inspected for superior standards.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Integrity & Trust</h3>
              <p className="text-gray-700">
                Upholding honesty and transparency as the cornerstone of our boutique's values.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  export default About;
  