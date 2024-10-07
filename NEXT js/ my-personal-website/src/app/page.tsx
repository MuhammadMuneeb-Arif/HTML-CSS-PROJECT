import Image from "next/image";

export default function Home() {
  return (
   
    <div className="bg-gray-100 text-gray-800">

    {/* Navbar */}
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Muneeb's Website</h1>
        <ul className="flex space-x-4">
          <li><a href="#home" className="hover:text-gray-400">Home</a></li>
          <li><a href="#about" className="hover:text-gray-400">About</a></li>
          <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
        </ul>
      </div>
    </nav>

    {/* Home Section */}
    <div id="home" className="h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url('https://source.unsplash.com/1600x900/?nature')` }}>
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white">Hello, I'm Muneeb</h1>
        <p className="text-lg text-gray-300 mt-4">A passionate web and mobile app developer</p>
        <a href="#contact" className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Contact Me</a>
      </div>
    </div>

    {/* About Section */}
    <section id="about" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          I'm Muneeb, a first-year pre-engineering student at Scholars College. I specialize in web and mobile app development, and have a solid foundation in coding languages such as JavaScript, TypeScript, Node.js, Next.js, HTML, CSS, and Tailwind CSS.
        </p>
        <p className="text-lg text-gray-700 mt-4">
          I've completed grades 1 to 8 at The Educators Schools, Nazimabad Campus 6, and grades 9 to 10 at New Jilani Public Secondary School. I am also certified in cloud technologies and recently completed the 'Certified Cloud Applied Generative AI' course at Governor House Sindh.
        </p>
      </div>
    </section>

    {/* Projects Section */}
    <section id="projects" className="py-16 bg-gray-200">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="https://source.unsplash.com/400x300/?website" alt="Portfolio Project" className="rounded-md mb-4" />
            <h3 className="text-xl font-semibold">Portfolio Website</h3>
            <p className="text-gray-600 mt-2">A modern and responsive portfolio website to showcase my skills and projects using Next.js and Tailwind CSS.</p>
          </div>
          {/* Project 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="https://source.unsplash.com/400x300/?code" alt="Login Page Design" className="rounded-md mb-4" />
            <h3 className="text-xl font-semibold">Login Page Themes</h3>
            <p className="text-gray-600 mt-2">Created multiple login page themes with unique designs using different color combinations and typography.</p>
          </div>
          {/* Project 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="https://source.unsplash.com/400x300/?app" alt="Game Development" className="rounded-md mb-4" />
            <h3 className="text-xl font-semibold">Game Development</h3>
            <p className="text-gray-600 mt-2">Developed interactive games using TypeScript, HTML, and CSS for enhanced user engagement and learning.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Contact Section */}
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <form className="max-w-md mx-auto">
          <input type="text" placeholder="Your Name" className="w-full p-3 mb-4 border border-gray-300 rounded-lg" required />
          <input type="email" placeholder="Your Email" className="w-full p-3 mb-4 border border-gray-300 rounded-lg" required />
          <textarea placeholder="Your Message" className="w-full p-3 mb-4 border border-gray-300 rounded-lg" required></textarea>
          <button type="submit" className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Send Message</button>
        </form>
      </div>
    </section>
  </div>
  );
}
