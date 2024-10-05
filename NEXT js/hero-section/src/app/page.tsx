import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Website</h1>
        <ul className="flex space-x-4">
          <li><a className="hover:underline">Home</a></li>
          <li><a className="hover:underline">About</a></li>
          <li><a className="hover:underline">Services</a></li>
          <li><a className="hover:underline">Contact</a></li>
        </ul>
      </div>
    </nav>


     <section className="bg-gray-100 text-center py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-4">Welcome to My Website</h2>
        <p className="text-xl mb-6">We provide amazing services to boost your business!</p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
          Get Started
        </button>
      </div>
    </section>
    </div>
  );
}
