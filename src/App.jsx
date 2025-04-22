import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import About from './pages/About';
// import Error from './pages/Error';
// import PropertyDetails from './pages/PropertyDetails';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/about" element={<About />} /> */}
      {/* <Route path="/error" element={<Error />} /> */}
      {/* <Route path="/logement/:id" element={<PropertyDetails />} /> */}
      {/* rajouter d'autres routes ici */}
    </Routes>
  );
}

export default App;
