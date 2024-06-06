import banner from "../../assets/banner.png";
import "./LTTActivities.css";
import calendar from "../../assets/calendar-icon.svg";
import location from "../../assets/location-icon.svg";
import img1 from "../../assets/meetings/2ndProjectMeeting_1.jpeg";
import img2 from "../../assets/meetings/4thProjectMeeting_5.jpeg";
import img3 from "../../assets/meetings/4thProjectMeeting_6.jpeg";


export const LTTActivities = () => {
  return (
    <div className="relative">
        <img src={banner} className="min-w-full "></img>

        <div className="ltt-contentholder">
            <h1>Learning, Teaching and Training Activities</h1>
            <div className="ltt-desc">Project will organize three learning, teaching and training sessions that are targeted to STEM educators in the partner organizations. The aim of these training events is to improve educators’ digital and pedagogical competence and increase participants’ awareness of technology enhanced education.</div>
            <div className="ltt-events">
                <div className="ltt-leftcard">
                    <div className="ltt-left1">
                        <img src={img1} alt="meeting image" className="ltt-leftimg" />
                        <div className="ltt-lefttitle">Training of the DigiSTEM Methodology</div>
                    </div>
                    <div className="ltt-left2">
                        <div className="ltt-leftdate">
                            <img src={calendar} alt="calendar icon" className="ltt-icon" />
                            <div className="ltt-leftdatetitle">22.-23.3.2023</div>
                        </div>
                        <div className="ltt-leftlocation">
                            <img src={location} alt="location icon" className="ltt-icon"/>
                            <div className="ltt-leftlocationtitle">Tampere, Finland</div>
                        </div>
                        <div className="ltt-leftcontent">
                        Training session's focus is on an effective use of digital tools and resources in education from both pedagogical and technological perspectives, concrete actions and examples of usability of technology according to the methodology.
                        <br />
                        DigiSTEM methodology encapsulates innovative pedagogies, best practices and concrete examples for implementing digital learning/teaching of STEM subjects.
                        </div>
                    </div>
                </div>

                {/* RIGHT CARD LAYOUT */}

                <br />
                <div className="ltt-rightcard">
                    <div className="ltt-right2">
                        <div className="ltt-rightdate">
                            <img src={calendar} alt="calendar icon" className="ltt-icon" />
                            <div className="ltt-rightdatetitle">October 2023</div>
                        </div>
                        <div className="ltt-rightlocation">
                            <img src={location} alt="location icon" className="ltt-icon"/>
                            <div className="ltt-rightlocationtitle">Madrid, Spain</div>
                        </div>
                        <div className="ltt-rightcontent">
                        Training session's focus is on an effective use of digital tools and resources in education from both pedagogical and technological perspectives, concrete actions and examples of usability of technology through the platform.
                        <br />
                        It is expected that STEM educators use the platform. The platform  offers new pedagogical ways to structure the organization of teaching/learning e.g. by helping educators to enable intelligent and automatic assessment of STEM subjects’ exercises and implement learning analytics.                        </div>
                    </div>
                    <div className="ltt-right1">
                        <img src={img2} alt="meeting image" className="ltt-rightimg" />
                        <div className="ltt-righttitle">Training of the DigiSTEM Platform</div>
                    </div>
                </div>


                <div className="ltt-leftcard">
                    <div className="ltt-left1">
                        <img src={img3} alt="meeting image" className="ltt-leftimg" />
                        <div className="ltt-lefttitle">Training of the Guidelines for using digital tools and resources in STEM education</div>
                    </div>
                    <div className="ltt-left2">
                        <div className="ltt-leftdate">
                            <img src={calendar} alt="calendar icon" className="ltt-icon" />
                            <div className="ltt-leftdatetitle">Spring 2024</div>
                        </div>
                        <div className="ltt-leftlocation">
                            <img src={location} alt="location icon" className="ltt-icon"/>
                            <div className="ltt-leftlocationtitle">Bratislava, Slovakia</div>
                        </div>
                        <div className="ltt-leftcontent ltt-open">
                        Training activity focuses on an effective use of digital tools and resources in education from both pedagogical and technological perspectives, concrete actions and examples of usability of technology according to the guidelines.
                        <br />
                        The guidelines include elements such as e.g. innovative pedagogies, implementing learning analytics, utilizing intelligent digital assessment, using short videos, promoting self-regulated learning and using online resources for STEM subjects’ learning purposes.
                        </div>
                    </div>
                </div>

            </div>
            <br />
            <div className="ltt-desc">LTT events will also finalize the piloting of the project results and MOOC which covers all tangible results of the project. MOOC will be freely available OER for European educators after the project lifetime. This increases the transferability and applicability of the project results.</div>

        </div>

    </div>
    );
};