// USE THIS TO VIEW YOUR COMPONENT RENDER
// Step 1: import your component here
import QuizPage from "./pages/QuizPage/QuizPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

function App() {
  return (
    <>
      {/* Step 2: Use it here */}
      <>
   
   <Router>
     <Routes>
       <Route path="/" element={<AssignmentCarousel />} />
       <Route path="/next-page" element={<NextPage />} />
       <Route path="/quiz-page" element={<QuizPage/>} />
     </Routes>
   </Router>
   </>
      

    </>
  );
}



export default App;
