
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import TestsSection from './components/TestsSection/TestsSection';
import QuizPage from './pages/QuizPage/QuizPage';  
import QuizResultPage from './pages/QuizResultPage/QuizResultPage';
import Popup from './components/PopUps/PopUps';
// import Loader from './components/Loader/Loader';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
<>

    <Router>
      <Header />
      <Routes>
        {/* Default route to testsection */}
        <Route path="/" element={<TestsSection />} />

        {/* Routes for QuizPage */}
        <Route path="/quiz" element={<QuizPage />} />

        <Route path="/QuizResultPage" element={<QuizResultPage />} />

        <Route path="/submitpopup" element={<Popup />} />
      </Routes>
      <Footer />
    </Router>

           {/* <Popup
      title="Are You Sure You Want To Leave?"
      description="You haven't completed this assignment yet. Are you sure you want to leave without submitting it?"
      onContinue={() => alert("You chose to continue!")}
    />
           <Popup
      title="Ready to Submit?"
      description="Are you sure you want to submit the test? Please double-check your answers before proceeding."
      onContinue={() => alert("You chose to continue!")}
    />

<Popup
  title="Missing or Invalid Answers"
  description="We detected some incomplete or invalid answers. Do you still want to submit this assessment?"
  status="wrong"
  onContinue={() => console.log("Continuing...")}
/> */}

    </>
  );
}

export default App;
