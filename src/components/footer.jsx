import githubIcon from '../assets/github.png';
import linkedinIcon from '../assets/linkedin.svg';


 function Footer() {
    const currentYear = new Date().getFullYear();

    const handleScroll1 = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };


    return (
<>
<div className='bg-green-900 h-32'>
    
    <svg
    onClick={handleScroll1}
    xmlns="http://www.w3.org/2000/svg" 
    fill="currentColor" 
    class="bi bi-arrow-up" 
    viewBox="0 0 16 16"
    className="size-8 mt-2 absolute left-1/2 transform -translate-x-1/2 cursor-pointer
    hover:text-[#50C878] transition delay-150 animate-bounce">
    <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"/>
    </svg>
    
    <div className="flex gap-6 justify-center items-center pt-12">
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
    

                

            <div className='flex justify-center pt-6'>
                <p>© MartinWebDev {currentYear}. All rights reserved.</p>
            </div>

    </div>



</>
    );
}


export default Footer;