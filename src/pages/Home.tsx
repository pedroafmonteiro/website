import NavBar from "../components/NavBar/NavBar";

const Home = () => {
  return (
    <>
      <div className="fixed w-full z-1 flex justify-center">
        <NavBar />
      </div>
      <main className="flex flex-col items-center justify-center min-h-screen w-full">
        <div>
          <h1 className="text-white text-4xl select-none">Pedro Monteiro</h1>
          <h2 className="text-gray-400 text-2xl select-none text-start">
            Frontend Developer
          </h2>
        </div>
        <footer className="fixed bottom-0 left-0 w-full flex justify-center gap-8 mb-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/pedroafmonteiro"
            className="text-gray-400 select-none"
          >
            GitHub
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://linkedin.com/in/pedro10monteiro"
            className="text-gray-400 select-none"
          >
            Linkedin
          </a>
        </footer>
      </main>
    </>
  );
};

export default Home;
