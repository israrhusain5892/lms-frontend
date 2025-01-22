
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import TestsSection from './components/TestsSection/TestsSection';
import QuizPage from './pages/QuizPage/QuizPage';  // Import your QuizPage component

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Default route */}
        <Route path="/" element={<TestsSection />} />

        {/* Route for QuizPage */}
        <Route path="/quiz" element={<QuizPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
