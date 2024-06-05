import banner from '/src/assets/banner.png'
import TeamPhotoKmr from '/src/assets/teamphotos/kmr.jpeg';
import TeamPhotoCbp from '/src/assets/teamphotos/cbp.jpg';
import TeamPhotoImm from '/src/assets/teamphotos/imm.jpg';
import TeamPhotoDv from '/src/assets/teamphotos/dv.jpg';
import './OurTeamPage.css'

const teamMembers = [
    {
        name: 'Kirsi-Maria Rinneheimo',
        organization: 'TAMK',
        image: TeamPhotoKmr,
        bio: 'Kirsi-Maria Rinneheimo (M.Sc.) is a Senior Lecturer of Mathematics and has over 20 years experience of engineering mathematics’ teaching in different engineering disciplines. Ms. Rinneheimo has a long and extensive experience in working on national and international educational projects. She has worked e.g. on EU funded projects MALog, 2009-2012 (KA3 ICT-505326) and FutureMath (2015-2018, Erasmus+ KA2 Strategic Partnership) as a project manager. In addition, she is researching engineering students’ mathematics learning and teaching and has written and contributed to an extensive range of conferences, scientific papers and publications. She has also developed e.g. digital study materials for mathematics studies, lecture notes, web-based learning materials and videos for teaching.',
        additionalMembers: <ul>
        <h3>Team members</h3>
        <li>Hanna Kinnari-Korpela</li>
        <li>Hanna Teras</li>
        <li>Jaana Hannikainen</li>
        <li>Laura Ortiz-Martín</li>
        <li>Marianna Leikomaa</li>
        <li>Mikko Ukonaho</li>
        <li>Noora Erkkila</li>
        <li>Petteri Jekunen</li>
        <li>Sami Suhonen</li>
    </ul>
    },
    {
        name: 'César Benavente-Peces',
        organization: 'UPM',
        image: TeamPhotoCbp,
        bio: 'César Benavente Peces (Ph.D.) has been an associate professor at the Universidad Politécnica de Madrid over more than 20 years. Currently he is with the Department of Signal Theory and Communications at the Telecommunications Faculty. He is currently Vice-dean for Research and Doctorate and he is the responsible of the research activity as well as the PhD. and MSc. Programs in Systems and Services Engineering for the Information Society. He is also with the Radio Engineering Research Group with the Industrial Electronic Centre. He has leaded and collaborated in a number of research projects funded by the EU, national government and regional government. Additionally he has leaded and collaborated in contracts with the industry. His research interests include communication systems, location based systems, applications and services integration, new ICT and integration, education innovation. He is author of a number of papers in international journals and conferences proceedings as well as book chapters.',
        additionalMembers: <ul>
        <h3>Team members</h3>
        <li>David Luengo-García</li>
        <li>David Osés-del-Campo</li>
        <li>Eugenia Rosado</li>
        <li>Jesús Encabo-Puente</li>
        <li>Luis Arriero-Encinas</li>
    </ul>
    },
    {
        name: 'Ion Mierluș-Mazilu',
        organization: 'UTCB',
        image: TeamPhotoImm,
        bio: 'Ion Mierluș-Mazilu (Ph.D) is an associate professor of Mathematics and Informatics at the Technical University of Civil Engineering, Bucharest, Romania. He completed his bachelor, master and doctorate degree in Mathematics and Informatics at the Bucharest University. He has participated in several European and national projects and was the coordinator and leading researcher national projects. He is the author of several books and scientific papers.',
        additionalMembers: <ul>
        <h3>Team members</h3>
        <li>Alice-Dagmar Anghelescu</li>
        <li>Cristina Vaduva</li>
        <li>Gianni Flamaropol</li>
        <li>Ileana Bucur</li>
        <li>Lucian Nita</li>
        <li>Luminita Anghel</li>
        <li>Stefania Constantinescu</li>
    </ul>
    },
    {
        name: 'Daniela Velichová',
        organization: 'STUBA',
        image: TeamPhotoDv,
        bio: 'Daniela Velichová (doc. RNDr. CSc.) is the member of the SEFI Mathematics Working Group Steering Committee, involved in activities connected to organisation of bi-annual seminars for mathematics educators at the European Technical Universities, co-author of the published book “A Framework for Mathematics Curricula in Engineering Education”. She has participated in many European and national projects related to mathematics in engineering coordinator and leading researcher. As a senior lecturer of mathematics at technical university for 40 years and strongly experienced researcher she has been introducing innovative methods in teaching mathematics, and she has developed many educational tools as printed books and lecture notes, electronic books and numerous other web-based learning materials, RLO (re-usable learning objects), applets and other novel instructional resources supported by ICT.',
        additionalMembers: <ul>
        <h3>Team members</h3>
        <li>Daniela Richtáriková</li>
        <li>Jana Gabkova</li>
        <li>Jozef Leja</li>
        <li>Leena Katto</li>
        <li>Peter Letavaj</li>
    </ul>
    },

]

const OurTeamPage = () => {

    return (

        <div className="our-team-container">

            <header>
                <img src={banner} alt="Tampere University Building"></img>
            </header>
            <main>

                <section className='team-members'>
                    <h1>Our Team</h1>
                    <hr className="rounded" />
                    {teamMembers.map(member => (
                        <div className="member" key={member.name}>
                            <div className="profile">
                                <img src={member.image} alt={member.name} />
                                <div className="profile-text">
                                    <h2>{member.organization}</h2>
                                    <h3>{member.name}</h3>
                                    <p>{member.bio}</p>
                                    <p>{member.additionalMembers}</p>
                                </div>
                            </div>
                            <hr className="rounded" />
                            </div>
                        ))}
                </section>
            </main>
        </div>
    )
}
export default OurTeamPage