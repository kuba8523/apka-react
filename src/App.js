import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Schedule from './components/Schedule';
import Info from './components/Info';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/schedule" element={<Schedule />} />
          <Route exact path="/info" element={<Info />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
