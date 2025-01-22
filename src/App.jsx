
import AssignmentCarousel from './Pages/OnBoarding/OnBoarding';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
   
    <Router>
      <Routes>
        <Route path="/" element={<AssignmentCarousel />} />
        {/* <Route path="/next-page" element={<NextPage />} /> */}
      </Routes>
    </Router>
    </>
  );
}



export default App;
