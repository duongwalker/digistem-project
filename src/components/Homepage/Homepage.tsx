import { TAMK, STU, UTCB, PUOM, MISSIONS } from "../../utils/constants";
import { homepage_desc1 } from "../../utils/constants";
const Homepage = () => {
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
              {" "}
              Learning STEM subjects on MOODLE
            </a>
          </div>
        </div>
      </div>

      <div className="bg-[#F6F6F8] ml-10 mr-10 pl-4 min-h-96 mb-14 rounded-2xl mt-10">
        <div className="font-montserrat text-4xl font-bold text-[#EE8332] pt-4 mission underline">
          Introduction
        </div>
        <div className="pt-8 pl-10 text-xl text-justify pr-10">
          <div className="font-helvetica-neue" dangerouslySetInnerHTML={{ __html: homepage_desc1 }}></div>
        </div>

      </div>




      <div className="font-montserrat font-bold ">
        <div className="ml-14 text-left text-3xl mt-8 ">
          DigiSTEM Promoting Digital Learning in STEM Subjects. This project is
          a cooperation of four European universites:
        </div>
        <ul className="font-medium py-7 ml-64 text-2xl list-disc">
          <li className="font-helvetica-neue">{TAMK}</li>

          <li className="font-helvetica-neue">{STU}</li>
          <li className="font-helvetica-neue">{UTCB}</li>
          <li className="font-helvetica-neue">{PUOM}</li>
        </ul>
      </div>

      <div className="bg-[#F6F6F8] ml-10 mr-10 pl-4 min-h-96 mb-24 rounded-2xl pb-1">
        <div className="font-montserrat text-4xl font-bold text-[#EE8332] pt-4 mission underline">
          Our mission
        </div>
        <div className="pt-8 pl-10 text-xl text-justify pr-10">
          <div className="font-helvetica-neue " dangerouslySetInnerHTML={{ __html: MISSIONS }}></div>

          <div className="font-helvetica-neue pt-2">
            If you want to be part of it ...
          </div>
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
