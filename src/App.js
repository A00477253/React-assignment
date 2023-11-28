import MyTown from './components/MyTown';
import './App.css';
import AboutMe from './components/AboutMe';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';


function App() {
  return (
    <div>
      <h1>This is PRODUCTION</h1>
      <Router>
        <nav>
          <Link to="/about">About Me</Link>
          <br/>
          <Link to="/myTown">My Town</Link>
          <br/>
        </nav>
        <Routes>
          <Route path="/about" element={<AboutMe />} />
          <Route path="/myTown" element={<MyTown />} />
        </Routes>
      </Router>
    </div>
  );
}


export default App;
