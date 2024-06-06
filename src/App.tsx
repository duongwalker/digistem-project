import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { NavBar } from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import ProjectPage from "./components/ProjectPage/ProjectPage";
import EventsPage from "./components/EventsPage/EventsPage";
import ContactPage from "./components/ContactPage/ContactPage";
import OurTeamPage from "./components/OurTeamPage/OurTeamPage";
import { ProjectMeetings } from "./components/ProjectMeetings/ProjectMeetings";
import { MultiplierEvents } from "./components/MultiplierEvents/MultiplierEvents";
import { LTTActivities } from "./components/LTTActivities/LTTActivities";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="projects" element={<ProjectPage />} />
        <Route path="events" element={<EventsPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="ourteam" element={<OurTeamPage />} />
        <Route path="project-meetings" element={<ProjectMeetings />} />
        <Route path="multiplier-events" element={<MultiplierEvents />} />
        <Route path="activities" element={<LTTActivities />} />
      </Routes>
      /<Footer />
    </BrowserRouter>
  );
}

export default App;
