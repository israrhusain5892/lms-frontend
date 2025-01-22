/* eslint-disable no-unused-vars */
import './quiz-page.css';
import { GoArrowLeft } from "react-icons/go";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Popup from '../../components/PopUps/PopUps'; // Import your Popup component

const QuizPage = () => {
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
      question: 'What is the primary purpose of analytical thinking?',
      options: [
        'To memorize information',
        'To break down complex information into smaller parts for better understanding',
        'To repeat information without understanding it',
        'To guess the outcome without data',
      ],
    },
    {
      id: 4,
      question: 'Which of the following are key components of analytical thinking?',
      options: ['Observation', 'Analysis', 'Inference', 'Memorization'],
    },
  ];

  const [elapsedSeconds, setElapsedSeconds] = useState(1);
  const [formattedTime, setFormattedTime] = useState("00:00:01");

  const [selectedOptions, setSelectedOptions] = useState({});
  const [errors, setErrors] = useState({});
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState("");
  const [showPopup, setShowPopup] = useState(false); // State to control popup visibility

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
    setError("");
  };

  const handleOptionChange = (questionId, selectedOption) => {
    setSelectedOptions((prevState) => ({
      ...prevState,
      [questionId]: selectedOption,
    }));
    setErrors((prevState) => ({
      ...prevState,
      [questionId]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let validationErrors = {};
    questions.forEach((question) => {
      if (!selectedOptions[question.id]) {
        validationErrors[question.id] = "You Haven't answered this question";
      }
    });

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    } else if (!isChecked) {
      setError("You must acknowledge the terms before submitting.");
      return;
    } else {
      // If validation passes, show the confirmation popup
      setShowPopup(true);
    }
  };

  // Handle "Continue" action from the popup
  const handleContinue = () => {
    setShowPopup(false);
    alert("Quiz submitted!");
    // Add logic to handle quiz submission (e.g., send data to server)
  };

  // Handle "Cancel" action from the popup
  const handleCancel = () => {
    setShowPopup(false);
  };

  return (
    <div className='mt-4 main'>
      <div className='headerContainer d-flex justify-content-between'>
        <div className='leftPart d-flex align-items-center gap-3'>
          <Link to="/">
            <button className='backBtn'><GoArrowLeft className='backIcon' /> Back</button>
          </Link>
          <div>
            <p className='quiz'>Quiz 1: Data Structure & Algorithms</p>
            <p className='quizAssign'>Assignment 1 . 30 min</p>
          </div>
        </div>
        <div className='rightPart d-flex gap-3'>
          <p>Created Date: </p> <span>Dec 10, 12.30AM</span>
          <p>Due </p> <span>Dec 22, 11.30AM</span>
        </div>
      </div>

      <form className='quizContainer' onSubmit={handleSubmit}>
        <p className='timer'>{formattedTime}</p>
        <div className='questionStore'>
          {questions.map((question) => (
            <div className='questionContainer d-flex align-items-start justify-content-between' key={question.id}>
              <div className='question'>
                <p>{question.id}. {question.question}</p>
                <div className="mt-4">
                  {question.options.map((option, index) => (
                    <label key={index}>
                      <input type="radio"
                             name={`question-${question.id}`}
                             value={option}
                             checked={selectedOptions[question.id] === option}
                             onChange={() => handleOptionChange(question.id, option)} />
                      {option}
                    </label>
                  ))}
                </div>

                {errors[question.id] && (
                  <div style={{ color: "red" }}>
                    {errors[question.id]}
                  </div>
                )}
              </div>
              <button>1 Point</button>
            </div>
          ))}
        </div>

        <label className='checkbox mt-4'>
          <input type="checkbox"
                 name="exampleCheckbox"
                 value="checkbox"
                 className="mt--4"
                 checked={isChecked}
                 onChange={handleCheckboxChange} />
          <span> I, <span className='name'>Muhammed Fadil</span>, acknowledge that submitting work that is not my own may lead to permanent failure of this course or the deactivation of my Learnpro account.</span>
        </label>
        {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}
        <p className='last'>You must select the checkbox in order to submit the assignment</p>
        <button type="submit" className='submitBtn'>Submit</button>
      </form>

      {/* Show the popup if validation passes */}
      {showPopup && (
        <Popup
          title="Ready to Submit?"
          description="Are you sure you want to submit the test? Please double-check your answers before proceeding."
          onContinue={handleContinue}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
};

export default QuizPage;
