
import './App.css'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import AssignmentCarousel from './Pages/loginpage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AssignmentCarousel />} />
        <Route path="/next-page" element={<NextPage />} />
      </Routes>
    </Router>
  );
}

const NextPage = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Welcome to the next page!</h1>
      <p>This is where you land after clicking the "Skip" button.</p>
    </div>
  );
};

export default App;
