import React from "react";
import "../MultiplierEvents/MultiplierEvents.css";
import banner from "../../assets/banner.png";

type CardProps = {
  date: string;
  title: string;
  link: string;
  text: string;

};

const LeftCard:React.FC<CardProps> = ({ date, title, link, text }) => {
  return (
    <div className="me-left">
      <div className="me-left1">
        <div className="me-left-date gradient-text">{date}</div>
      </div>

      <div className="me-left2">
        <div className="me-left-title">{title}</div>
        <div className="me-left-text">{text}</div>
        <div className="me-left-link">
          <a href={link}>{link}</a>
        </div>
      </div>
      <div className="me-left-line"></div>
    </div>
  );
};


const RightCard:React.FC<CardProps> = ({ date, title, link, text }) => {
  return (
    <div className="me-right">
      <div className="me-right2">
        <div className="me-right-title">{title}</div>
        <div className="me-right-text">{text}</div>
        <div className="me-right-link">
          <a href={link}>{link}</a>
        </div>
      </div>

      <div className="me-right1">
        <div className="me-right-date gradient-text">{date}</div>
      </div>

      <div className="me-right-line"></div>
    </div>
  );
};

const EventsPage: React.FC = () => {
  return (
    <div className="relative">
        <img src={banner} className="min-w-full "></img>

        <div className="me-contentholder">
            <h1>Dissemination Events</h1>
            <div className="me-udln1"></div>

            <br />

            <div className="me-intro">Information about the project main goals and aims has been continuously presented at many events related to STEM education at the European Universities. Project team members inform consistently the community of STEM teachers in their countries about current achievements. Team strives to spread relevant information about the free MOOC platform developed as the main project result. MOOC will be available free to all STEM teachers interested in getting new ideas on how to improve own teaching practise and skills with use of digital technologies in STEM education. </div>

            <br />

            <RightCard
              date="  Oct 2024"
              title="The DigiSTEM International Conference: Innovating Education through Digital Transformation"
              link="https://dmi.utcb.ro/iedt/"
              text="The conference is held in the city of Bucharest (Romania). The conference is organized by Technical University of Civil Engineering Bucharest"></RightCard>

            <br />

            <LeftCard
              date="July 1-3, 2024"
              title="Edulearn2024 "
              link=""
              text="Poster presentation – Teachers Teaching Teachers"></LeftCard>

            <br />

            <RightCard
              date="May 12"
              title="Iniciative – celebrating women in mathematics"
              link=""
              text=""></RightCard>

            <br />
            <LeftCard
              date="May 15, 2024"
              title="Women teaching mathematics – Slovakia, Finland, Romania"
              text="Women from 3 countries cooperating in the Erasmus+ project DigiSTEM, on-line workshop on “Promoting Digital Learning in STEM Subjects”"
              link="https://may12.womeninmaths.org/node/1134"></LeftCard>

            <br />

            <RightCard
              date="June 2023"
              title="SEFI MSIG Seminar"
              text=""
              link="https://www.linkedin.com/posts/kirsi-mariarinneheimo_mathematics-highereducation-networking-activity-7074643426327060482-nfjX?utm_source=share&utm_medium=member_desktop "></RightCard>

            <br />

            <LeftCard
              date="Jan 25, 2023"
              title="DigiSTEM kick-off Webinar was organized via Teams"
              text="The webinar was a success with 52 participants"
              link="https://dmi.utcb.ro/digistem-promoting-digital-learning-in-stem-subjects/"></LeftCard>

            <br />

            <RightCard
              date="Jan 2023"
              title="Information seminar about progress in the work on the project was organized at the STUBA Institute of Mathematics and Physics"
              text=""
              link=""></RightCard>

            <br />

            <LeftCard
              date="May 2023"
              title="The 20th Hybrid Conference and Department Workshop on Mathematics, Computer Science and Technical Education – Bucharest"
              text="Ion Mierluș-Mazilu, Ștefania Constantinescu, Alice Anghelescu “STEM Education”"
              link="https://dmi.utcb.ro/workshop-on-mathematics-computer-science-technical-education/"></LeftCard>

            <br />

            <RightCard
              date="27-29 Oct, 2022"
              title="61 ANNUAL SCIENTIFIC CONFERENCE of Angel Kanchev University of Ruse and Union of Scientists - Ruse New Industries, Digital Economy, Society - Projections of the Future V"
              text="Ion Mierlus-Mazilu, Emiliya Velikova, “Stem: Science, Technology, Engineering and Mathematics"
              link="https://conf.uni-ruse.bg/en/index.php?cmd=dPage&pid=bp-2022"></RightCard>

            <br />

            <LeftCard
              date="Sept 2022"
              title="The SEFI Annual Conference"
              text=""
              link="https://sefi2022.eu/welcome_to_barcelona"></LeftCard>

            <br />

            <RightCard
              date="Sept 19-22, 2022"
              title="Information about the project was presented also at the SEFI Annual Conference"
              text="Barcelona, Spain, in the talk: Daniela Velichová, SEFI umbrella for teaching mathematics in engineering"
              link=" https://www.linkedin.com/feed/update/urn:li:activity:6978308164051968000/ "></RightCard>

            <br />

            <LeftCard
              date="Sept 12-15, 2022"
              title="Czech-Slovak Conference on Geometry and Graphics, Olomouc, Czech Republic: Presenting DigiSTEM project in brief "
              text=""
              link=""></LeftCard>

            <br />

            <RightCard
              date="June 11, 2022"
              title="The 19th Hybrid Conference and Department Workshop on Mathematics, Computer Science and Technical Education – Bucharest"
              text="Ion Mierluș-Mazilu, Ștefania Constantinescu, “Using E-Learning in STEM Education”"
              link="https://dmi.utcb.ro/workshop-on-mathematics-computer-science-technical-education/"></RightCard>

            <br />

            <LeftCard
              date="May 16, 2022"
              title="Project info for TAMK’s ICT Engineering Department (Staff)"
              text=""
              link=""></LeftCard>

            <br />

            <RightCard
              date="Mar 17, 2022"
              title="Project information was presented to the staff at the Institute of Mathematic and Physics, STU in Bratislava"
              text="About 10 participants were present at the event."
              link=""></RightCard>

            <br />

            <LeftCard
              date="Jan 20, 2022"
              title="The article about the DigiSTEM project was published in TAMK’s intra"
              text=" DigiSTEM-hanke tukee tekniikan alan korkeakouluopettajien ammatillista kehittymistä (tuni.fi) "
              link="https://www.tuni.fi/fi/ajankohtaista/digistem-hanke-tukee-tekniikan-alan-korkeakouluopettajien-ammatillista-kehittymista"></LeftCard>

        </div>

        <br /><br /><br /><br />
    </div>
  );
};

export default EventsPage;
