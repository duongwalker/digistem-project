import { INTRODUCTION, OUR_MISSION, TAMK, STU, UTCB, PUOM, MISSIONS, PARTNER_DESC, COURSES_JOINING } from "../../utils/constants";
import { HOMEPAGE_DESC1 } from "../../utils/constants";
import usePersistantState from "../persistantStateHook";
import en from "../../assets/united-kingdom.png"
import sk from "../../assets/slovakia.png"
import fi from "../../assets/finland.png"
import es from "../../assets/spain.png"
import ro from "../../assets/romani.png"
import Tooltip from '@mui/material/Tooltip'

const images = [
  { src: en, alt: "en" },
  { src: fi, alt: "fi" },
  { src: es, alt: "es" },
  { src: ro, alt: "ro" },
  { src: sk, alt: "sk" },
];

const Homepage = () => {
  const [lang, setLang] = usePersistantState("lang", "en")

  return (
    <div className="mt-2">
      <div className="bg-banner bg-no-repeat bg-cover bg-center w-full min-h-96">
        <div className="text-white font-bold font-montserrat ml-10 md:ml-20 lg:ml-40 xl:ml-60 pt-32">
          <div className="text-3xl md:text-4xl lg:text-5xl">DigiSTEM</div>
          <div className="text-xl md:text-2xl mt-6">Connecting smart minds</div>
          <div className="text-[#EC963F] text-xl md:text-2xl mt-10 md:mt-16 bg-white text-center h-12 md:h-14 max-w-xs md:max-w-lg rounded-3xl flex items-center justify-center cursor-pointer mx-auto md:mx-0">
            <a
              href="http://vps218.cesvima.upm.es/moodle/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Courses for teaching STEM subjects
            </a>
          </div>
        </div>
      </div>

      <div className="bg-[#F6F6F8] mx-4 md:mx-10 p-4 min-h-96 mb-14 rounded-2xl mt-10">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="font-montserrat text-2xl md:text-3xl lg:text-4xl font-bold text-[#EE8332] pt-4 underline">
            {INTRODUCTION[lang as keyof typeof INTRODUCTION]}
          </div>
          <div className="flex justify-center md:justify-end pt-4">
            {images.map((image, index) => (
              <Tooltip title={image.alt} >
                <img key={index} src={image.src} alt={image.alt} onClick={() => setLang(image.alt)} className="w-8 h-8 md:w-10 md:h-10 mx-1 md:mx-2 cursor-pointer"></img>
              </Tooltip>
            ))}
          </div>
        </div>
        <div className="pt-8 px-4 md:px-10 text-base md:text-xl text-justify">
          <div className="font-helvetica-neue" dangerouslySetInnerHTML={{ __html: HOMEPAGE_DESC1[lang as keyof typeof HOMEPAGE_DESC1] }}></div>
        </div>
      </div>

      <div className="font-montserrat font-bold">
        <div className="ml-4 md:ml-14 text-left text-2xl md:text-3xl mt-8">
          {PARTNER_DESC[lang as keyof typeof PARTNER_DESC]}
        </div>
        <ul className="font-medium py-7 ml-10 md:ml-20 lg:ml-40 text-lg md:text-2xl list-disc">
          <li className="font-helvetica-neue">{TAMK[lang as keyof typeof TAMK]}</li>
          <li className="font-helvetica-neue">{STU[lang as keyof typeof STU]}</li>
          <li className="font-helvetica-neue">{UTCB[lang as keyof typeof UTCB]}</li>
          <li className="font-helvetica-neue">{PUOM[lang as keyof typeof PUOM]}</li>
        </ul>
      </div>

      <div className="bg-[#F6F6F8] mx-4 md:mx-10 p-4 min-h-96 mb-24 rounded-2xl pb-1">
        <div className="flex justify-between">
          <div className="font-montserrat text-2xl md:text-3xl lg:text-4xl font-bold text-[#EE8332] pt-4 underline">
            {OUR_MISSION[lang as keyof typeof OUR_MISSION]}
          </div>
        </div>

        <div className="pt-8 px-4 md:px-10 text-base md:text-xl text-justify">
          <div className="font-helvetica-neue" dangerouslySetInnerHTML={{ __html: MISSIONS[lang as keyof typeof MISSIONS] }}></div>
        </div>
        <div className="group font-helvetica-neue mt-14 w-full text-center text-lg md:text-xl font-bold max-w-fit rounded-full mx-auto bg-gradient-to-r from-[#9F005D] via-[#C13F51] to-[#F09640] mb-10">
          <div className="flex items-center justify-center min-w-48 md:min-w-64 h-12 md:h-14 px-6 md:px-10 py-1 rounded-full text-white group-hover:bg-[#9F005D]">
            <a
              href="http://vps218.cesvima.upm.es/moodle/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {COURSES_JOINING[lang as keyof typeof COURSES_JOINING]}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
