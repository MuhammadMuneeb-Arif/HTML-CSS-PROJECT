

export default function Home() {
  return (
    <div>
      
      <nav className="flex flex-row gap-7 border  border-double ml-4 mr-4 mt-4 rounded-2xl bg-blue-700 ">
        <a href="#" className="border border-separate rounded-xl p-2 m-2 justify-center items-center gap-5">home</a>
        <a href="#" className="border border-separate rounded-xl p-2 m-2 justify-center items-center gap-5">products</a>
        <a href="#" className="border border-separate rounded-xl p-2 m-2 justify-center items-center gap-5">aboutus </a>
        <a href="#" className="border border-separate rounded-xl p-2 m-2 justify-center items-center gap-5">contact us </a>
        <a href="#" className="border border-separate rounded-xl p-2 m-2 justify-center items-center gap-5">privacy policy</a>
      </nav>
    </div>
  );
}
