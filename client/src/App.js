import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/index';
import About from './components/about';
import Contact from './components/contact';
import Projects from './components/projects';
import Team from './components/team';

function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </Router>
  );
}

export default App;
