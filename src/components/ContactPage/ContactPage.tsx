import teamphoto from "/src/assets/banner.png";
import tamkphoto from "/src/assets/teamphoto.jpg";
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
              <img src={tamkphoto} alt="Kirsi-Maria Rinneheimo"></img>
              <div className="contact-profile-text">
                <h3>TAMK</h3>
                <ul>
                  <li>Coordinating University</li>
                  <li>
                  Tampere University of Applied Sciences (TAMK) is one of the largest and most popular universities of applied sciences in Finland. Our strengths are multidisciplinary education, creativity, and a strong international dimension. TAMK is a higher education institution oriented towards working life and RDI co-operation.
</li>
                  <li>Current main contact for the DigiSTEM project.</li>
                  <li>Email: tamk@tuni.fi</li>
                  <li>Phone number: +358 (0)294 5222</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContactPage
