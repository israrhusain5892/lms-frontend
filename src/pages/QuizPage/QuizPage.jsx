
import './quiz-page.css';
import { GoArrowLeft } from "react-icons/go";
import { useState, useEffect } from 'react';
const QuizPage = () => {


      const questions = [

            {
                  id: 1,
                  question: 'What is the primary purpose of analytical thinking?',
                  options: ['To memorize information',
                        'To break down complex information into smaller parts for better understanding',
                        'To repeat information without understanding it',
                        'To guess the outcome without data'
                  ]
            },
            {
                  id: 2,
                  question: 'Which of the following are key components of analytical thinking?',
                  options: ['Observation',
                        'Analysis',
                        'Inference',
                        'Memorization'
                  ]
            },
            {
                  id: 3,
                  question: 'What is the primary purpose of analytical thinking?',
                  options: ['To memorize information',
                        'To break down complex information into smaller parts for better understanding',
                        'To repeat information without understanding it',
                        'To guess the outcome without data'
                  ]
            },
            {
                  id: 4,
                  question: 'Which of the following are key components of analytical thinking?',
                  options: ['Observation',
                        'Analysis',
                        'Inference',
                        'Memorization'
                  ]
            }

      ]

      const [elapsedSeconds, setElapsedSeconds] = useState(1); // Start from 1 second
      const [formattedTime, setFormattedTime] = useState("00:00:01");

      useEffect(() => {
            const updateClock = () => {
                  const hours = String(Math.floor(elapsedSeconds / 3600)).padStart(2, "0");
                  const minutes = String(Math.floor((elapsedSeconds % 3600) / 60)).padStart(2, "0");
                  const seconds = String(elapsedSeconds % 60).padStart(2, "0");
                  if (hours == 0) {
                        setFormattedTime(`${minutes}:${seconds}`);
                  }
                  else {
                        setFormattedTime(`${hours}:${minutes}:${seconds}`);
                  }

            };

            updateClock(); // Initial update

            const timer = setInterval(() => {
                  setElapsedSeconds((prev) => prev + 1); // Increment elapsed seconds
            }, 1000);

            return () => clearInterval(timer); // Cleanup on unmount
      }, [elapsedSeconds]);


      const [selectedOptions, setSelectedOptions] = useState({});
      const [errors, setErrors] = useState({});

      const [isChecked, setIsChecked] = useState(false); // Track checkbox state
      const [error, setError] = useState(""); // Track validation error message

      const handleCheckboxChange = (e) => {
            setIsChecked(e.target.checked); // Update checkbox state
            setError(""); // Clear error when checkbox is toggled
      };

      // Handler to update selected options
      const handleOptionChange = (questionId, selectedOption) => {
            setSelectedOptions((prevState) => ({
                  ...prevState,
                  [questionId]: selectedOption,
            }));
            setErrors((prevState) => ({
                  ...prevState,
                  [questionId]: "", // Clear the error when a valid option is selected
            }));
      };

      // Form submission handler
      const handleSubmit = (e) => {
            e.preventDefault();

            let validationErrors = {};

            // Check if all questions are answered
            questions.forEach((question) => {
                  if (!selectedOptions[question.id]) {
                        validationErrors[question.id] = "You Haven’t answered this question";
                  }
            });

            if (Object.keys(validationErrors).length > 0) {
                  setErrors(validationErrors);
                  return;
            }

            else if (!isChecked) {
                  setError("You must acknowledge the terms before submitting.");
                  return;
            }
            else {
                  const data = Object.keys(selectedOptions).map(questionId => ({
                        question_id: parseInt(questionId),
                        selected_option: selectedOptions[questionId],
                  }))

                  console.log(data)

            }
      }




      return (
            <div className='mt-4 main'>
                  {/* header page */}
                  <div className='headerContainer d-flex justify-content-between'>
                        <div className='leftPart d-flex align-items-center gap-3'>
                              <button className='backBtn'><GoArrowLeft className='backIcon' /> Back</button>
                              <div>
                                    <p className='quiz'>Quiz 1:Data Structure & Algorithms</p>
                                    <p className='quizAssign'>Assignment 1 . 30 min</p>
                              </div>
                        </div>
                        <div className='rightPart d-flex gap-3'>
                              <p>Created Date: </p> <span>Dec 10, 12.30AM</span>
                              <p>Due </p> <span>Dec 22, 11.30AM</span>
                        </div>
                  </div>
                  <form className='quizContainer' onSubmit={handleSubmit}>
                        <p className='timer'> {formattedTime}</p>
                        {/* questions container */}
                        <div className='questionStore'>

                              {
                                    questions?.map((question, index) => {
                                          return <div className='questionContainer d-flex align-items-start justify-content-between '>
                                                <div className='question'>
                                                      <p>{question.id}. {question.question}</p>
                                                      <div class="mt-4">
                                                            {
                                                                  question.options?.map((option, index) => {
                                                                        return <><label key={index}>
                                                                              <input type="radio"
                                                                                    name={`question-${question.id}`} // Unique name per question
                                                                                    value={option}
                                                                                    checked={selectedOptions[question.id] === option} // Controlled input
                                                                                    onChange={() => handleOptionChange(question.id, option)} // Update state on change

                                                                              />
                                                                              {option}
                                                                        </label><br />  </>
                                                                  })
                                                            }

                                                      </div>

                                                      {errors[question.id] && (
                                                            <div style={{ color: "red", }}>
                                                                  {errors[question.id]}
                                                            </div>
                                                      )}


                                                </div>
                                                <button>1 Point</button>
                                          </div>
                                    })
                              }



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
            </div>
      )
}


export default QuizPage;