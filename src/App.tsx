import './App.css'
import { Footer } from './components/Footer/Footer'
import { NavBar } from './components/NavBar/NavBar'
// import { Footer } from './components/Footer/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './components/Homepage/Homepage'
import ProjectsPage from './components/ProjectsPage/ProjectsPage'
import EventsPage from './components/EventsPage/EventsPage'
import ContactPage from './components/ContactPage/ContactPage'
import OurTeamPage from './components/OurTeamPage/OurTeamPage';
import { ProjectMeetings } from './components/ProjectMeetings/ProjectMeetings';

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="events" element={<EventsPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="ourteam" element={<OurTeamPage />} />
        <Route path='project-meetings' element={<ProjectMeetings />}/>
      </Routes>
      /<Footer />
    </BrowserRouter>
  );
}

export default App