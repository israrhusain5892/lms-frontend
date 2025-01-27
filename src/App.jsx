import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUpPage from "./components/SignUpPage/SignUpPage";
import SuccessPage from "./components/SignUpPage/SuccessPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SignUpPage />} />
                <Route path="/home" element={<SuccessPage />} />
            </Routes>
        </Router>
    );
}

export default App;
