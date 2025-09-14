import animation from "../assets/animazione.png";



function Navbar() {
    return (
        <>
        <nav className="flex p-3 bg-green-900 text-[#FFFFF0] sticky top-0 z-10">
        <a href="index.html">
        <img src={animation} alt="logo" 
        className="w-10 bg-black border-1 border-gray-400 rounded-2xl" />
        </a>

      

        <ul className="sm:flex flex flex-row ml-auto gap-4 items-center">
        <li className="hover:underline hover:text-[#50C878] transition delay-150 hover:scale-110">
            <a href="#">Home</a>
        </li>
        <li className="hover:underline hover:text-[#50C878] transition delay-150 hover:scale-110">
            <a href="#Portfolio">Portfolio</a>
        </li>
        <li className="hover:underline hover:text-[#50C878] transition delay-150 hover:scale-110">
            <a href="#Contatti">Contattami!</a>
        </li>
        </ul>
    </nav>
        </>
    )
}

export default Navbar;