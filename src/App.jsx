import './styles/App.scss'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import AccomodationDetails from './pages/AccomodationDetails';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/error" element={<Error />} />
      <Route path="/logement/:logementId" element={<AccomodationDetails />} />
    </Routes>
  );
}

export default App;
