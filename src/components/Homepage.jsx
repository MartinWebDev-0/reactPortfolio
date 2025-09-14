import githubIcon from '../assets/github.png';
import linkedinIcon from '../assets/linkedin.svg';

function Homepage() {
 
   const handleScroll = () => {
    window.scrollBy({
      top: window.innerHeight,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Section 1 */}
      <section className="flex text-center justify-center items-center h-screen relative">
        <div className="mb-10">
          <h1 className="font-bold text-5xl sm:text-7xl hover:text-[#50C878] transition">
            Benvenuto.
          </h1>
          <p className="text-xl sm:text-2xl">Sono Martin, web developer.</p>
  
         <div className="flex gap-6 justify-center items-center mt-6">
          <a href="https://github.com/MartinWebDev-0" target="_blank">
            <img
              className="invert w-8 hover:scale-110 transition"
              src={githubIcon}
              alt="github"
            />
          </a>

          <a href="https://www.linkedin.com/in/martin-di-lascio-130110328/"
          target="_blank">
            <img
              className="invert w-8 hover:scale-110 transition"
              src={linkedinIcon}
              alt="github"
            />
          </a>
          </div>

          <div className="pt-10">
            <a href="#Contatti">
              <button
                className="bg-green-900 rounded hover:border-[#50C878] hover:text-[#50C878]
              delay-150 cursor-pointer p-2 border-2 border-white
             transition-transform transform active:scale-90"
              >
                CONTATTAMI!
              </button>
            </a>
          </div>
        </div>

        <svg
        onClick={handleScroll}
          id="scroll-animation"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-8 absolute left-1/2 transform -translate-x-1/2 bottom-1 mb-14 cursor-pointer
         hover:text-[#50C878] transition delay-150 animate-bounce"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
          />
        </svg>


      </section>
    </>
  );
}

export default Homepage;
