import { TAMK, STU, UTCB, PUOM, MISSIONS, partner_desc } from "../../utils/constants";
import { homepage_desc1 } from "../../utils/constants";
import usePersistantState from "../persistantStateHook";
import en from "../../assets/united-kingdom.png"
import sk from "../../assets/slovakia.png"
import fi from "../../assets/finland.png"
import es from "../../assets/spain.png"
import ro from "../../assets/romani.png"

const images = [
  { src: en, alt: "en" },
  { src: fi, alt: "fi" },
  { src: es, alt: "es" },
  { src: sk, alt: "sk" },
  { src: ro, alt: "ro" }
];

const Homepage = () => {
  const [lang, setLang] = usePersistantState("lang", "en")

  return (
    <div className="mt-2">
      <div className="bg-banner bg-no-repeat bg-cover bg-center w-full min-h-96 ">
        <div className="text-white font-bold font-montserrat ml-60 pt-32">
          <div className="text-5xl">DigiSTEM</div>
          <div className="text-2xl mt-6">Connecting smart minds</div>
          <div className="text-[#EC963F] text-2xl mt-16 bg-white text-center h-14 max-w-lg rounded-3xl flex items-center justify-center cursor-pointer">
            <a
              href="http://vps218.cesvima.upm.es/moodle/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learning STEM subjects on MOODLE
            </a>
          </div>
        </div>
      </div>

      <div className="bg-[#F6F6F8] ml-10 mr-10 pl-4 min-h-96 mb-14 rounded-2xl mt-10">
        <div className="flex justify-between">
          <div className="font-montserrat text-4xl font-bold text-[#EE8332] pt-4 mission underline">
            Introduction
          </div>
          <div className="flex justify-end pt-4">
            {images.map((image, index) => (
              <img key={index} src={image.src} alt={image.alt} onClick={() => setLang(image.alt)} className="w-10 h-10 mx-2 cursor-pointer"></img>
            ))}
          </div>
        </div>
        <div className="pt-8 pl-10 text-xl text-justify pr-10">
          <div className="font-helvetica-neue" dangerouslySetInnerHTML={{ __html: homepage_desc1[lang as keyof typeof homepage_desc1] }}></div>
        </div>
      </div>

      <div className="font-montserrat font-bold ">
        <div className="ml-14 text-left text-3xl mt-8 ">
          {partner_desc[lang as keyof typeof partner_desc]}
        </div>
        <ul className="font-medium py-7 ml-64 text-2xl list-disc">
          <li className="font-helvetica-neue">{TAMK[lang as keyof typeof TAMK]}</li>

          <li className="font-helvetica-neue">{STU[lang as keyof typeof STU]}</li>
          <li className="font-helvetica-neue">{UTCB[lang as keyof typeof UTCB]}</li>
          <li className="font-helvetica-neue">{PUOM[lang as keyof typeof PUOM]}</li>
        </ul>
      </div>

      <div className="bg-[#F6F6F8] ml-10 mr-10 pl-4 min-h-96 mb-24 rounded-2xl pb-1 ">
        <div className="flex justify-between">
          <div className="font-montserrat text-4xl font-bold text-[#EE8332] pt-4 mission underline">
            Our mission
          </div>
        </div>

        <div className="pt-8 pl-10 text-xl text-justify pr-10">
          <div className="font-helvetica-neue " dangerouslySetInnerHTML={{ __html: MISSIONS[lang as keyof typeof MISSIONS] }}></div>
        </div>
        <div className="group font-helvetica-neue mt-14 w-full text-center text-xl font-bold max-w-fit rounded-full ml-auto mr-auto bg-gradient-to-r from-[#9F005D] via-[#C13F51] to-[#F09640] mb-10">
          <div className=" flex items-center justify-center min-w-64 h-14 px-10 py-1 w-56 rounded-full text-white group-hover:bg-[#9F005D]">
            <a
              href="http://vps218.cesvima.upm.es/moodle/"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              Join us on Moodle
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
