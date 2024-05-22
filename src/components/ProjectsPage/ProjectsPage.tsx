
const container = {
  padding: '20px',
  lineHeight: '1.5',
  maxWidth: '50ch',
};

const title = {
  color: 'orange',
  fontSize: '3em',
  
};

const ProjectsPage = () => {
  return (



    <div style = {container}>
      <div>
        <h4 style = {title}>DigiSTEM</h4>
          <p>DigiSTEM is the evolution of FutureMath. The set of these projects and those coming afterwards, constitute a long-life pedagogy innovation challenge by energizing the Scientific, Technological and Engineering development through powerful innovative pedagogies supporting the teaching /learning  process in Mathematics.</p>
        <h4 style = {title}>Project description</h4>
          <p>The primary context of the DigiSTEM project is STEM education. The main target group of the project is engineering education professionals that teach STEM or other similar subjects. However, the project results can be applied also for other similar subjects.
          The aim of the project is to increase digital and pedagogical competence of HEI educators and availability of digital resources in STEM subjects in European HEIs. By increasing such competences of educators, it gives them tools and knowledge to redesign their teaching and implement digital resources and activities (e.g. learning analytics, digital languaging, screencasts, visualizations and intelligent assessment).
          The objective of the project is to promote innovative utilization of educational technology, learning analytics and use of open educational resources (OERs) in online, classroom and blended learning, especially in HEIs STEM subjects. The project aims to support professional development of HEI educators by increasing their technological and pedagogical skills and competence. The objective is to build HEI educators' competence of such instructional design that improves students’ active learning, self-regulated learning and learning engagement with the help of educational technology and learning analytics. </p>
        <h4 style={title}>Main steps of the project</h4>
          <ul>
            <li>Educational research work and needs analysis</li>
            <li>Development of DigiSTEM Methodolofy (PR1)</li>
            <li>Setting up and maintaining DigiSTEM Platform (PR2)</li>
            <li>Giving guideline for using digital tools and resources in STEM education (PR3)</li>
            <li>Development of MOOC</li>
            <li>LTT activities, multiplier events and other activites</li>
          </ul>
      </div>

      <div style={{backgroundColor: 'orange'}}>
        <p>The scope of the DigiSTEM project is to develop educational resources for teaching STEM subjects/courses in European higher education institutions (HEIs). The objective is to promote innovative utilization of educational technology, learning analytics and use of open educational resources (OERs) in online, classroom and blended learning scenarios, especially in HEIs STEM subjects. The project aims to support professional development of HEI educators by increasing their technological and pedagogical skills, and competence.
            The project is funded by EU under the Erasmus+ Program with reference 2021-1-FI01-KA220-HED-000027535.</p>
      </div>

    </div>
  )
}




export default ProjectsPage