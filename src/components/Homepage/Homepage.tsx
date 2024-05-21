import slide1 from '../../assets/slide1.svg'
import slide2 from '../../assets/slide2.svg'
import slide3 from '../../assets/slide3.svg'
import { Slider } from '../Slider/Slider'
import { TAMK, STU, UTCB, PUOM, MISSIONS } from '../../utils/constants'

const Homepage = () => {
  const IMAGES = [
    { url: slide1, alt: "slide one" },
    { url: slide2, alt: "slide two" },
    { url: slide3, alt: "slide three" },
  ]
  return (
    <div className='flex-col'
      style={{
        width: "100%",
        height: "91vh",
        aspectRatio: "5/2",
        margin: "0 auto",
      }}
    >
      <Slider images={IMAGES} />
      <div className='font-montserrat font-bold '>
        <div className='ml-14 text-left text-3xl mt-8 '>
          DigiSTEM Promoting Digital Learning in STEM Subjects. This project is a cooperation of four European universites:
        </div>
        <ul className='font-medium py-7 ml-64 text-2xl list-disc'>
          <li className='font-helvetica-neue'>
            {TAMK}
          </li>

          <li className='font-helvetica-neue'>
            {STU}
          </li>
          <li className='font-helvetica-neue'>
            {UTCB}
          </li>
          <li className='font-helvetica-neue'>
            {PUOM}
          </li>
        </ul>
      </div>

      <div className='bg-[#F6F6F8] ml-10 mr-10 pl-4 min-h-96 mb-24 rounded-2xl'>
        <div className='font-montserrat text-4xl font-bold text-[#EE8332] pt-4 mission underline'>
          Our mission
        </div>
        <div className='pt-8 pl-10 text-xl italic pr-10'>
          <div className='font-helvetica-neue '>
            {MISSIONS}
          </div>

          <div className='font-helvetica-neue pt-2'>
            If you want to be part of it ...
          </div>
        </div>
        <div className='font-helvetica-neue mt-14 w-full text-center text-xl font-bold max-w-fit ml-auto mr-auto '>
          <div className='flex items-center justify-center  min-w-64 h-14 px-10 py-1 w-56 bg-[#446AA2] rounded-full text-white hover:underline'>
            <a href='http://vps218.cesvima.upm.es/moodle/' target='_blank' rel='noopener noreferrer'>Join us on Moodle</a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Homepage