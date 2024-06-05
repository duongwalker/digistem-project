import banner from "../../assets/banner.png";
import "./MultiplierEvents.css";

export const MultiplierEvents = () => {
  return (
    <div className="relative">
        <img src={banner} className="min-w-full "></img>

        <div className="me-contentholder">
            <h1>Multiplier Events</h1>
            <div className="me-udln1"></div>

            <br />
            <div className="me-left">
                <div className="me-left1">
                    <div className="me-left-date gradient-text">April 2022</div>
                </div>

                <div className="me-left2">
                    <div className="me-left-title">Eye on TAMK event</div>
                    <div className="me-left-link"><a href="https://www.tuni.fi/en/news/welcome-eye-tamk-2022-multidisciplinary-international-week">Welcome to Eye on TAMK 2022 Multidisciplinary International Week | Tampere universities (tuni.fi)</a></div>
                </div>
                <div className="me-left-line"></div>
            </div>

            <br />

            <div className="me-right">
                <div className="me-right2">
                    <div className="me-right-title">Math, physics and chemistry teacher days (MaFyKe2022)</div>
                    <div className="me-right-link">
                        <a href="https://events.tuni.fi/mafyke2022/">Matematiikan, fysiikan ja kemian opettajapäivät (MaFyKe) 2022 | Tampereen korkeakouluyhteisö (tuni.fi)</a>
                    </div>
                </div>

                <div className="me-right1">
                    <div className="me-right-date gradient-text">May 2022</div>
                </div>

                <div className="me-right-line"></div>
            </div>

        </div>

        <br /><br /><br /><br />
    </div>


    );
};
