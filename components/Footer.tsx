import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer id="contact" className="w-full pt-20 pb-10 relative">
      <div className="absolute inset-0 -z-10">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 object-cover"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw] text-center">
          ¿Listo para llevar <span className="text-purple">tu </span> 
          presencia digital al siguiente nivel?
        </h1>
         
        <p className="text-white-200 md:mt-10 my-5 text-center max-w-2xl">
          Contáctame hoy mismo y hablemos sobre cómo puedo ayudarte a alcanzar tus objetivos.
        </p>

        <a href="mailto:angelemilioaquino6@gmail.com">
          <MagicButton
            title="Contáctame"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      {/* Copyright + redes */}
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center w-full max-w-7xl mx-auto px-5">
        <p className="md:text-base text-sm md:font-normal font-light text-center md:text-left">
          © {new Date().getFullYear()} Angel E. Aquino. Todos los derechos reservados.
        </p>

        <div className="flex items-center md:gap-3 gap-6 mt-5 md:mt-0">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              onClick={() => window.open(info.url, "_blank")}
            >
              <img src={info.img} alt="icon" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

