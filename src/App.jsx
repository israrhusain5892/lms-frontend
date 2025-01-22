
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import TestsSection from './components/TestsSection/TestsSection';
import QuizPage from './pages/QuizPage/QuizPage';  
import QuizResultPage from './pages/QuizResultPage/QuizResultPage';
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

        

        
      </Routes>
      <Footer />
    </Router>

    </>
  );
}

export default App;
