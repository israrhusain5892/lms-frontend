/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */

import './quiz-page.css';
import { GoArrowLeft } from "react-icons/go";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Popup from '../../components/PopUps/PopUps'; // Import your Popup component
import Loader from '../../components/Loader/Loader';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

const QuizPage = () => {
  const navigate = useNavigate();

  const questions = [
    {
      id: 1,
      question: 'What is the primary purpose of analytical thinking?',
      options: [
        'To memorize information',
        'To break down complex information into smaller parts for better understanding',
        'To repeat information without understanding it',
        'To guess the outcome without data',
      ],
    },
    {
      id: 2,
      question: 'Which of the following are key components of analytical thinking?',
      options: ['Observation', 'Analysis', 'Inference', 'Memorization'],
    },
    {
      id: 3,
      question: 'What is the role of data structures in programming?',
      options: [
        'To beautify UI',
        'To store and organize data efficiently',
        'To increase the code length',
        'To define coding styles',
      ],
    },
    {
      id: 4,
      question: 'Which of the following is a non-linear data structure?',
      options: ['Array', 'Linked List', 'Tree', 'Queue'],
    },
  ];

  const [elapsedSeconds, setElapsedSeconds] = useState(1); // Start from 1 second
  const [formattedTime, setFormattedTime] = useState("00:00:01");
  const [selectedOptions, setSelectedOptions] = useState({});
  const [errors, setErrors] = useState({});
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [backpopup, setbackpopup] = useState(false);
  const [isEvaluating, setIsEvaluating] = useState(false); // Loader state

  useEffect(() => {
    const updateClock = () => {
      const hours = String(Math.floor(elapsedSeconds / 3600)).padStart(2, "0");
      const minutes = String(Math.floor((elapsedSeconds % 3600) / 60)).padStart(2, "0");
      const seconds = String(elapsedSeconds % 60).padStart(2, "0");
      setFormattedTime(hours === "00" ? `${minutes}:${seconds}` : `${hours}:${minutes}:${seconds}`);
    };

    updateClock();
    const timer = setInterval(() => setElapsedSeconds((prev) => prev + 1), 1000);
    return () => clearInterval(timer);
  }, [elapsedSeconds]);

  const handleOptionChange = (questionId, selectedOption) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [questionId]: selectedOption,
    }));
    setErrors((prev) => ({
      ...prev,
      [questionId]: "",
    }));
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    questions.forEach((question) => {
      if (!selectedOptions[question.id]) {
        validationErrors[question.id] = "You haven't answered this question.";
      }
    });

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (!isChecked) {
      setError("You must acknowledge the terms before submitting.");
      return;
    }

    setShowPopup(true);
   
  };

  const handleContinue = () => {
    setShowPopup(false)
    setIsEvaluating(true)
    
    setTimeout(() => {
      setIsEvaluating(false);
      // window.location="/QuizResultPage"
      navigate('/QuizResultPage')
      // setShowPopup(true);
    }, 2000);
   ;
  };

  const handleCancel = () => {
    setShowPopup(false);
    
  };

  const backHandle = () => {
    setbackpopup(false);
    navigate('/quiz');
  };

  const backCancel = () => {
    setbackpopup(false);
  };

  return (
    <>
    <Header/>
   
    <div className='mt-4 mainQuiz'>
      {isEvaluating && <Loader />}
      <div className='headContainer d-flex justify-content-between'>
        <div className='leftPart d-flex align-items-center gap-3'>
          <button className='backBtn' onClick={() => setbackpopup(true)}>
            <GoArrowLeft className='backIcon' /> <span>Back</span>
          </button>
          {backpopup && (
            <Popup
              title="Are You Sure You Want To Leave?"
              description="You haven't completed this assignment yet. Are you sure you want to leave without submitting it?"
              onContinue={backHandle}
              onCancel={backCancel}
            />
          )}
          <div>
            <p className='quiz'>Quiz 1: Data Structure & Algorithms</p>
            <p className='quizAssign'>Assignment 1 . 30 min</p>
          </div>
        </div>
        <div className='rightPart d-flex gap-3 '>
          <p>Created Date:</p> <span>Dec 10, 12:30 AM</span>
          <p>Due:</p> <span>Dec 22, 11:30 AM</span>
        </div>
      </div>
      <div className='rightPartmobile d-flex gap-3 block md:hidden '>
          <p>Created Date:</p> <span>Dec 10, 12:30 AM</span>
          <p>Due:</p> <span>Dec 22, 11:30 AM</span>
        </div>
      <form className='quizContainer' onSubmit={handleSubmit}>
        <p className='timer'>{formattedTime}</p>
        <br></br>
        <div className='questionStore'>
          {questions.map((question) => (
            <div key={question.id} className='questionContainer d-flex align-items-start justify-content-between'>
              <div className='question'>
                <p>{question.id}. {question.question}</p>
                <div className="mt-4">
                  {question.options.map((option, index) => (
                    <label key={index} className="quizOptions">
                      <input
                        type="radio"
                        name={`question-${question.id}`}
                        value={option}
                        checked={selectedOptions[question.id] === option}
                        onChange={() => handleOptionChange(question.id, option)}
                      />
                      {option}
                    </label>
                  ))}
                </div>
                {errors[question.id] && <div className="error" style={{ color: "red" }}>{errors[question.id]}</div>}
              </div>
              <button className="marks">1 Point</button>
            </div>
          ))}
        </div>
        <label className='checkbox mt-4'>
          <input
            type="checkbox"
            name="Checkbox"
            value="checkbox"
            className="mt--4"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <span className="agree">
            I, <span className='name'>Muhammed Fadil</span>, acknowledge that submitting work that is not my own may lead to permanent failure of this course or the deactivation of my Learnpro account.
          </span>
        </label>
        {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}
        <p className='last'>You must select the checkbox in order to submit the assignment</p>
        <button  type="submit" className='submitBtn'>Submit</button>
      </form>
      {showPopup && (
        <Popup
          title="Ready to Submit?"
          description="Are you sure you want to submit the test? Please double-check your answers before proceeding."
          onContinue={handleContinue}
          onCancel={handleCancel}
        />
      )}
    </div>
    <Footer/>
    </>
  );
};

export default QuizPage;
