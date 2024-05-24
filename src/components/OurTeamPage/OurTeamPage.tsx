import teamphoto from '/src/assets/teamphoto.jpg';
import './OurTeamPage.css'



const OurTeamPage = () => {

    return (

        <div className="our-team-container">

            <header>
                <img src={teamphoto} alt="Tampere University Building"></img>
            </header>
            <main>
                <section className="team-members">
                    <h1>Team Members</h1>
                    <div className="member">
                        <h2>TAMK</h2>
                        <div className="profile">
                            <img src={teamphoto} alt="Kirsi-Maria Rinneheimo"></img>
                            <div className="profile-text">
                                <h3>Kirsi-Maria Rinneheimo</h3>
                                <p>M.Sc.</p>
                                <ul>
                                    <li>Senior Lecturer of Mathematics</li>
                                    <li>Over 20 years experience of engineering mathematics' teaching in different engineering disciplines</li>
                                    <li>Long and extensive experience in working on national and international educational projects as project manager:
                                        <ul>
                                            <li>EU funded projects MALog, 2009-2012 (KA3 ICT-505326)</li>
                                            <li>FutureMath (2015-2018, Erasmus+ KA2 Strategic Partnership)</li>
                                        </ul>
                                    </li>
                                    <li>She has written and contributed to an extensive range of conferences, scientific papers and publications, developed e.g. digital study materials for mathematics studies, lecture notes, web-based learning materials and videos for teaching.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="profile">
                            <img src={teamphoto} alt="Hanna Kinnari-Korpela"></img>
                            <div className="profile-text">
                                <h3>Hanna Kinnari-Korpela</h3>
                                <p>PhD. Technology</p>
                                <ul>
                                    <li>TAMK's Head of Degree Programme in ICT Engineering Department</li>
                                    <li>Over 20 year experience of ICT and engineering mathematics' teaching</li>
                                    <li>The research focus is on e.g. digital learning, data and learning analytics, self-regulated learning and active learning.</li>
                                    <li>Versatile international experience and strong expertise about national and international educational projects:
                                        <ul>
                                            <li>MALog (KA3 ICT-505326) - project coordinator</li>
                                            <li>FutureMath (KA203-009044) - project coordinator</li>
                                            <li>National ICT2015-project - project manager</li>
                                        </ul>
                                    </li>
                                    <li>Her PhD concentrated on Utilising Educational Technology and Promoting Active Learning.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* <header classNameName='our-team-header'>
                <div classNameName='project-image-container'>
                    <img src={teamphoto} alt={banner}></img>
                </div>
                <h1 classNameName='project-title'>Team Members</h1>
            </header>

            <section classNameName='our-team-section'>
                <h2 classNameName='project-title'>TAMK</h2>

                <div classNameName='profile'>
                    <img src={teamphoto} alt='Kirsi-Maria Rinneheimo'></img>
                    <div classNameName='profile-text'>
                        <h3>Kirsi-Maria Rinneheimo</h3>
                        <p>M.Sc.</p>
                        <ul>
                            <li>Senior Lecturer of Mathematics</li>
                            <li>Over 20 years experience of engineering mathematics' teaching in different engineering disciplines</li>
                            <li>Long and extensive experience in working on national and international educational projects as project manager:
                                <ul>
                                    <li>EU funded projects MALog, 2009-2012 (KA3 ICT-505326)</li>
                                    <li>FutureMath (2015-2018, Erasmus+ KA2 Strategic Partnership)</li>
                                </ul>
                            </li>
                            <li>She has written and contributed to an extensive range of conferences, scientific papers and publications, developed e.g. digital study materials for mathematics studies, lecture notes, web-based learning materials and videos for teaching.</li>
                        </ul>
                    </div>
                </div>
                <div classNameName='profile'>
                    <img src={teamphoto} alt='Kirsi-Maria Rinneheimo'></img>
                    <div classNameName='profile-text'>
                        <h3>Kirsi-Maria Rinneheimo</h3>
                        <p>M.Sc.</p>
                        <ul>
                            <li>Senior Lecturer of Mathematics</li>
                            <li>Over 20 years experience of engineering mathematics' teaching in different engineering disciplines</li>
                            <li>Long and extensive experience in working on national and international educational projects as project manager:
                                <ul>
                                    <li>EU funded projects MALog, 2009-2012 (KA3 ICT-505326)</li>
                                    <li>FutureMath (2015-2018, Erasmus+ KA2 Strategic Partnership)</li>
                                </ul>
                            </li>
                            <li>She has written and contributed to an extensive range of conferences, scientific papers and publications, developed e.g. digital study materials for mathematics studies, lecture notes, web-based learning materials and videos for teaching.</li>
                        </ul>
                    </div>
                </div>
            </section> */}
        </div>
    )
}

export default OurTeamPage