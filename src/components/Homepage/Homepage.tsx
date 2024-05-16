import slide1 from '../../assets/slide1.svg'
import slide2 from '../../assets/slide2.svg'
import slide3 from '../../assets/slide3.svg'
import { Slider } from '../Slider/Slider'

const Homepage = () => {
    const IMAGES = [
        { url: slide1, alt: "slide one" },
        { url: slide2, alt: "slide two" },
        { url: slide3, alt: "slide three" },
      ]
  return (
    <div
        style={{
          width: "100%",
          maxHeight: "500px",
          aspectRatio: "5/2",
          margin: "0 auto",
        }}
      >
        <Slider images={IMAGES} />
      </div>
  )
}

export default Homepage