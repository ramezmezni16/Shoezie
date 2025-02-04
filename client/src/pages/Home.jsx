import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="p-6">
      {/* Welcome Section */}
      <section className="text-center my-10">
        <h1 className="text-4xl font-bold">Welcome to Shoezie</h1>
        <p className="text-lg text-gray-600 mt-2">Find the perfect pair for every occasion.</p>
      </section>

      {/* Discount Banner */}
      <section className="bg-blue-600 text-white text-center py-4 rounded-lg my-6">
        <h2 className="text-2xl font-bold">Limited Time Offer!</h2>
        <p className="text-lg">Get up to 50% off on selected shoes.</p>
      </section>

      {/* Shoe Categories */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        <Link to="/category/sneakers" className="bg-gray-200 p-4 rounded-lg text-center hover:bg-gray-300 transition">
          <h3 className="text-xl font-semibold">Sneakers</h3>
          <p className="text-gray-600">Trendy and comfortable sneakers.</p>
        </Link>

        <Link to="/category/running" className="bg-gray-200 p-4 rounded-lg text-center hover:bg-gray-300 transition">
          <h3 className="text-xl font-semibold">Running Shoes</h3>
          <p className="text-gray-600">Performance-driven shoes for athletes.</p>
        </Link>

        <Link to="/category/casual" className="bg-gray-200 p-4 rounded-lg text-center hover:bg-gray-300 transition">
          <h3 className="text-xl font-semibold">Casual Shoes</h3>
          <p className="text-gray-600">Perfect for everyday wear.</p>
        </Link>
      </section>
    </div>
  );
};

export default Home;