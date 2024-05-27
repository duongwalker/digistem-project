import teamphoto from "/src/assets/teamphoto.jpg";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <div className="contact-our-team-container">
      <header className="contact-header">
        <img src={teamphoto} alt="Tampere University Building"></img>
      </header>
      <main>
        <section className="contact-team-members">
          <h1>CONTACT</h1>
          <div className="contact-member">
            <div className="contact-profile">
              <img src={teamphoto} alt="Kirsi-Maria Rinneheimo"></img>
              <div className="contact-profile-text">
                <h3>Kirsi-Maria Rinneheimo</h3>
                <p>M.Sc.</p>
                <ul>
                  <li>Senior Lecturer of Mathematics</li>
                  <li>
                    Over 20 years experience of engineering mathematics'
                    teaching in different engineering disciplines
                  </li>
                  <li>
                    Long and extensive experience in working on national and
                    international educational projects as project manager:
                    <ul>
                      <li>
                        EU funded projects MALog, 2009-2012 (KA3 ICT-505326)
                      </li>
                      <li>
                        FutureMath (2015-2018, Erasmus+ KA2 Strategic
                        Partnership)
                      </li>
                    </ul>
                  </li>
                  <li>Current main contact for the DigiSTEM project.</li>
                  <li>Email: something@something.something</li>
                  <li>Phone: work phone number</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContactPage;
