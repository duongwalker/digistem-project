import banner from '/src/assets/banner.png'
import TeamPhotoKmr from '/src/assets/teamphotos/kmr.jpeg';
import TeamPhotoCbp from '/src/assets/teamphotos/cbp.jpg';
import TeamPhotoImm from '/src/assets/teamphotos/imm.jpg';
import TeamPhotoDv from '/src/assets/teamphotos/dv.jpg';
import './OurTeamPage.css'

const OurTeamPage = () => {

    return (

        <div className="our-team-container">

            <header>
                <img src={banner} alt="Tampere University Building"></img>
            </header>
            <main>
                <section className="team-members">
                    <h1>Team Members</h1>
                    <div className="member">
                        <h2>TAMK</h2>
                        <hr className="rounded"></hr>
                        <div className="profile">
                            <img src={TeamPhotoKmr} alt="Kirsi-Maria Rinneheimo"></img>
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
                        

                        <h2>UPM</h2>
                        <hr className="rounded"></hr>
                        <div className="profile">
                            <img src={TeamPhotoCbp} alt="Kirsi-Maria Rinneheimo"></img>
                            <div className="profile-text">
                                <h3>César Benavente-Peces</h3>
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

                        <h2>UTCB</h2>
                        <hr className="rounded"></hr>
                        <div className="profile">
                            <img src={TeamPhotoImm} alt="Kirsi-Maria Rinneheimo"></img>
                            <div className="profile-text">
                                <h3>Ion Mierluș-Mazilu</h3>
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
                        <h2>STUBA</h2>
                        <hr className="rounded"></hr>
                        <div className="profile">
                            <img src={TeamPhotoDv} alt="Kirsi-Maria Rinneheimo"></img>
                            <div className="profile-text">
                                <h3>Daniela Velichová</h3>
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
                    </div>
                </section>
            </main>
        </div>
    )
}
export default OurTeamPage