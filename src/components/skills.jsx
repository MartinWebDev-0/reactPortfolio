import '../index.css';
import uxui from '../assets/ui-ux.png';
import responsive from '../assets/responsive-design.png';
import testing from '../assets/code-testing.png';

import TiltCard from './3dAnimation';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import TW from '../assets/tailwindcss.png';
import BT from '../assets/bootstrap-logo.svg';
import JS from '../assets/jslogo.png';
import REACT from '../assets/react.svg';
import GIT from '../assets/git.png';
import GITHUB from '../assets/github2.png';
import VSC from '../assets/vsc.png';
import Figma from '../assets/figma.png';

function Skills() {
  const cards = [
    { img: HTML, label: 'HTML', border: 'border-t-amber-500' },
    { img: CSS, label: 'CSS', border: 'border-t-sky-400' },
    { img: BT, label: 'BOOTSTRAP', border: 'border-t-purple-400' },
    { img: TW, label: 'TAILWIND', border: 'border-t-sky-400' },
    { img: JS, label: 'JAVASCRIPT', border: 'border-t-yellow-400' },
  ];

  const moreCards = [
    { img: REACT, label: 'REACT', border: 'border-t-sky-400' },
    { img: GIT, label: 'GIT', border: 'border-t-orange-500' },
    { img: GITHUB, label: 'GITHUB', border: 'border-t-gray-400' },
    { img: VSC, label: 'VS CODE', border: 'border-t-blue-500' },
    { img: Figma, label: 'FIGMA', border: 'border-t-red-500' },
  ];

  const duplicatedCards = [...cards, ...cards]; // 10 cards for first row
  const duplicateSecond = [...moreCards, ...moreCards];

  return (
    <>
      <div className="text-2xl flex justify-center p-5">
        <p>Tech Stack:</p>
      </div>

      {/* First Carousel Row */}
      <div className="carousel">
        <div className="carousel-track">
          {duplicatedCards.map((card, index) => (
            <TiltCard
             key={`row1-${index}`}
             className={`item border-2 border-t-6 hover:${card.border} ${card.border} rounded-md gap-2 overflow-hidden whitespace-nowrap`}
            >
              <img src={card.img} alt={card.label} className="w-16 h-16 object-contain" />
              <p className="cursor-default">{card.label}</p>
            </TiltCard>
          ))}
        </div>
      </div>

      {/* Second Carousel Row */}
      <div className="carousel">
        <div className="carousel-track2">
          {duplicateSecond.map((card, index) => (
            <TiltCard
              key={`row2-${index}`}
              className={`item border-2 border-t-6 hover:${card.border} ${card.border} rounded-md gap-2 overflow-hidden whitespace-nowrap`}
            >
              <img src={card.img} alt={card.label} className="w-16 h-16 object-contain" />
              <p className="cursor-default">{card.label}</p>
            </TiltCard>
          ))}
        </div>
      </div>

    <div className="flex justify-center items-center text-center mt-10">
      <h2 className=" font-bold text-2xl">Altro:</h2>
    </div>

   <section className="sm:flex gap-8 justify-center m-10 pt-6">

    <div class="flex flex-col justify-center items-center text-center">
    <img src={responsive} alt="responsive-design" className="w-32"></img>
    <h3 class="text">RESPONSIVE DESIGN:</h3>
    <p>Realizzazione di interfacce responsive che garantiscono
      un'esperienza ottimale su tutti i dispositivi.
    </p>
   </div>

    <div class="flex flex-col justify-center items-center text-center pt-2">
    <img src={uxui} alt="ui-ux" className="w-32"></img>
    <h3>ESPERIENZA UTENTE:</h3>
    <p id="Portfolio" >Realizzazione di pagine seguendo direttive di esperienza utente,
      accessibilità e facilità di navigazione.
    </p>
    </div>

    <div class="flex flex-col justify-center items-center text-center">
    <img src={testing} alt="ui-ux" className="w-32"></img>
    <h3>CODE TESTING:</h3>
    <p id="Portfolio"> Testing del codice con strumenti come JEST e VITEST per verificarne il corretto funzionamento.
    </p>
    </div>

   </section>
    
    
    </>
  );
}

export default Skills;



