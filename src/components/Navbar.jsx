import animation from "../assets/animazione.png";



function Navbar() {
    return (
        <>
        <nav className="flex p-3 bg-green-900 text-[#FFFFF0] sticky top-0 z-10">
        <a href="index.html">
        <img src={animation} alt="logo" 
        className="w-10 bg-black border-1 border-gray-400 rounded-2xl" />
        </a>

        <div className="pl-2">
        <svg
            id="language-icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="mt-2 ml-2 size-7 hover:text-[#50C878] cursor-pointer hover:scale-110"
        >
            <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 
                1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 
                10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 
                8.495a18.023 18.023 0 0 1-3.827-5.802"
            />
        </svg>
        </div>

        {/* Menu lingua */}
        <div id="language-menu" className="absolute w-30 hidden">
        <ul className="list-none flex flex-col pt-4 gap-2">
            <a href="Eng.html">
            <li
                data-lang="en"
                className="text-lg p-2 rounded-lg cursor-pointer hover:text-[#50C878] hover:border-2 border-[#50C878]"
            >
                English
            </li>
            </a>
            <a href="index.html">
            <li
                data-lang="it"
                className="text-lg p-2 rounded-lg cursor-pointer hover:text-[#50C878] hover:border-2 border-[#50C878]"
            >
                Italiano
            </li>
            </a>
        </ul>
        </div>

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