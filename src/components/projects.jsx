import ageApp from "../assets/P-image/agecalcapp.png";
import diz from "../assets/P-image/dictionaryapp.png";
import ecommerce from "../assets/P-image/ecommerce.png";
import tesla from "../assets/P-image/tesla.png";
import netflix from "../assets/P-image/netflix.png";
import portfolio from "../assets/P-image/portfolioreact.png";

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JS from '../assets/jslogo.png';
import TW from '../assets/tailwindcss.png';
import reactIcon from "../assets/react.svg";






function Projects() {
    return (
        <>
        
        <div id="Portfolio" className="pb-2 scroll-smooth"></div>

        <div className="text-2xl flex justify-center mt-5 pt-10 p-5">
          <h3>Progetti:</h3>
        </div>

        {/*Project showcase */}
          <div className="bg-green-900 flex flex-col items-center text-center md:flex-row md:items-center md:text-left gap-8 p-10 m-10 rounded-md">
            <img className="w-60 rounded-md" src={ageApp} alt="" />
            <div className="flex flex-col">
            <p className="text-2xl">Age calculator app:</p>
            <p className="text-lg">Una web app per calcolare l'età in base all'anno di nascita.</p>
             <div className="flex flex-row justify-center text-center md:justify-start md:text-left gap-2.5">
            <img className="w-10 pt-2" src={HTML} alt="" />
            <img className="w-10 pt-2" src={CSS} alt="" />
            <img className="w-10 pt-2" src={JS} alt="" />
             </div>
                <div className="flex flex-row justify-center text-center md:justify-start md:text-left gap-4 pt-2">
                <a href="https://github.com/MartinWebDev-0/Age-Calculator" target="_blank" className="px-4 py-2 bg-white text-green-900 font-semibold rounded-md shadow hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-900 transition">Codice</a>

                <a href="https://martinwebdev-0.github.io/Age-Calculator/" target="_blank" className="px-4 py-2 bg-white text-green-900 font-semibold rounded-md shadow hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-900 transition">Versione live</a>
                </div>

            </div>
          </div>

          <div className="bg-green-900 flex flex-col items-center text-center md:flex-row md:items-center md:text-left gap-8 p-10 m-10 rounded-md">
            <img className="w-60 rounded-md" src={diz} alt="dictionaryApp" />
            <div className="flex flex-col">
            <p className="text-2xl">Dizionario on-line:</p>
            <p className="text-lg">Una web-app per consultare il dizionario on-line(con API)</p>
             <div className="flex flex-row justify-center text-center md:justify-start md:text-left gap-2.5">
            <img className="w-10 pt-2" src={HTML} alt="" />
            <img className="w-10 pt-2" src={CSS} alt="" />
            <img className="w-10 pt-2" src={JS} alt="" />
             </div>
                <div className="flex flex-row justify-center text-center md:justify-start md:text-left gap-4 pt-2">
                <a href="https://github.com/MartinWebDev-0/dictionaryApp" target="_blank" className="px-4 py-2 bg-white text-green-900 font-semibold rounded-md shadow hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-900 transition">Codice</a>

                <a href="https://martinwebdev-0.github.io/dictionaryApp/" target="_blank" className="px-4 py-2 bg-white text-green-900 font-semibold rounded-md shadow hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-900 transition">Versione live</a>
                </div>

            </div>
          </div>


          <div className="bg-green-900 flex flex-col items-center text-center md:flex-row md:items-center md:text-left gap-8 p-10 m-10 rounded-md">
            <img className="w-60 rounded-md" src={ecommerce} alt="E-commerce" />
            <div className="flex flex-col">
            <p className="text-2xl">E-commerce:</p>
            <p className="text-lg">Sito e-commerce di elettronica</p>
             <div className="flex flex-row justify-center text-center md:justify-start md:text-left gap-2.5">
            <img className="w-10 pt-2" src={HTML} alt="" />
            <img className="w-10 pt-2" src={TW} alt="" />
            <img className="w-10 pt-2" src={JS} alt="" />
             </div>
                <div className="flex flex-row justify-center text-center md:justify-start md:text-left gap-4 pt-2">
                <a href="https://github.com/MartinWebDev-0/E-commerce" target="_blank" className="px-4 py-2 bg-white text-green-900 font-semibold rounded-md shadow hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-900 transition">Codice</a>

                <a href="https://martinwebdev-0.github.io/E-commerce/" target="_blank" className="px-4 py-2 bg-white text-green-900 font-semibold rounded-md shadow hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-900 transition">Versione live</a>
                </div>

            </div>
          </div>


          <div className="bg-green-900 flex flex-col items-center text-center md:flex-row md:items-center md:text-left gap-8 p-10 m-10 rounded-md">
            <img className="w-60 rounded-md" src={tesla} alt="tesla-car" />
            <div className="flex flex-col">
            <p className="text-2xl">Tesla car configurator:</p>
            <p className="text-lg">Landing page per configurazione auto di tesla</p>
             <div className="flex flex-row justify-center text-center md:justify-start md:text-left gap-2.5">
            <img className="w-10 pt-2" src={HTML} alt="" />
            <img className="w-10 pt-2" src={TW} alt="" />
            <img className="w-10 pt-2" src={JS} alt="" />
             </div>
                <div className="flex flex-row justify-center text-center md:justify-start md:text-left gap-4 pt-2">
                <a href="https://github.com/MartinWebDev-0/Car-configurator" target="_blank" className="px-4 py-2 bg-white text-green-900 font-semibold rounded-md shadow hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-900 transition">Codice</a>

                <a href="https://martinwebdev-0.github.io/Car-configurator/" target="_blank" className="px-4 py-2 bg-white text-green-900 font-semibold rounded-md shadow hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-900 transition">Versione live</a>
                </div>

            </div>
          </div>

           <div className="bg-green-900 flex flex-col items-center text-center md:flex-row md:items-center md:text-left gap-8 p-10 m-10 rounded-md">
            <img className="w-60 rounded-md" src={netflix} alt="netflix landing page" />
            <div className="flex flex-col">
            <p className="text-2xl">Netflix landing page:</p>
            <p className="text-lg">Netflix landing page con javascript.</p>
             <div className="flex flex-row justify-center text-center md:justify-start md:text-left gap-2.5">
            <img className="w-10 pt-2" src={HTML} alt="" />
            <img className="w-10 pt-2" src={CSS} alt="" />
            <img className="w-10 pt-2" src={JS} alt="" />
             </div>
                <div className="flex flex-row justify-center text-center md:justify-start md:text-left gap-4 pt-2">
                <a href="https://github.com/MartinWebDev-0/NetflixClone" target="_blank" className="px-4 py-2 bg-white text-green-900 font-semibold rounded-md shadow hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-900 transition">Codice</a>

                <a href="https://martinwebdev-0.github.io/NetflixClone/" target="_blank" className="px-4 py-2 bg-white text-green-900 font-semibold rounded-md shadow hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-900 transition">Versione live</a>
                </div>

            </div>
          </div>

          <div className="bg-green-900 flex flex-col items-center text-center md:flex-row md:items-center md:text-left gap-8 p-10 m-10 rounded-md">
            <img className="w-60 rounded-md" src={portfolio} alt="portfolio" />
            <div className="flex flex-col">
            <p className="text-2xl">Potfolio website:</p>
            <p className="text-lg">Questo portfolio realizzato con React/Tailwind.</p>
             <div className="flex flex-row justify-center text-center md:justify-start md:text-left gap-2.5">
            <img className="w-10 pt-2" src={HTML} alt="" />
            <img className="w-10 pt-2" src={TW} alt="" />
            <img className="w-10 pt-2" src={reactIcon} alt="" />
             </div>

            </div>
          </div>


        

        </>
    ); 
}

export default Projects;