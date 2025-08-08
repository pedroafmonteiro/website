
const Home = () => {
    return (
        <>
            <main className="flex flex-col justify-between" style={{ minHeight: 'calc(var(--vh, 1vh) * 100)' }}>
                <div className="flex-1 flex items-center justify-center">
                    <div className="w-min">
                        <h1 className="text-white text-4xl whitespace-nowrap select-none">Pedro Monteiro</h1>
                        <h2 className="text-gray-400 text-2xl select-none">Mobile Developer</h2>
                    </div>
                </div>
                <footer className="mb-4 flex justify-around">
                    <a href="https://github.com/pedroafmonteiro" className="text-gray-400">GitHub</a>
                    <a href="https://linkedin.com/in/pedro10monteiro" className="text-gray-400">Linkedin</a>
                </footer>
            </main>
        </>
    )
}

export default Home;