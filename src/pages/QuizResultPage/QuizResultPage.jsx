Link/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */

import './quiz-result-page.css';
import { GoArrowLeft } from "react-icons/go";
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
const QuizResultPage = () => {


    const questions = [

        {
            id: 1,
            question: 'What is the primary purpose of analytical thinking?',
            options: ['To memorize information',
                'To break down complex information into smaller parts for better understanding',
                'To repeat information without understanding it',
                'To guess the outcome without data'
            ],
            ans: 'To guess the outcome without data',
            result: 'correct'
        },
        {
            id: 2,
            question: 'Which of the following are key components of analytical thinking?',
            options: ['Observation',
                'Analysis',
                'Inference',
                'Memorization'
            ],
            ans: 'Inference',
            result: 'wrong'
        },
        {
            id: 3,
            question: 'What is the primary purpose of analytical thinking?',
            options: ['To memorize information',
                'To break down complex information into smaller parts for better understanding',
                'To repeat information without understanding it',
                'To guess the outcome without data'
            ],
            ans: 'To guess the outcome without data',
            result: 'correct'
        },
        {
            id: 4,
            question: 'Which of the following are key components of analytical thinking?',
            options: ['Observation',
                'Analysis',
                'Inference',
                'Memorization'
            ],
            ans: 'Inference',
            result: 'wrong'
        }

    ]







    return (
        <div className='mt-4 main mb-4'>
            {/* header page */}
            <div className='headerContainer d-flex justify-content-between'>
                <div className='leftPart d-flex align-items-center gap-3'>
                 <Link to="/"> <button className='backBtn'><GoArrowLeft className='backIcon' /> Back</button>  </Link>
                    <div>
                        <p className='quiz'>Quiz 1:Data Structure & Algorithms</p>
                        <p className='quizAssign'>Assignment 1 . 30 min</p>
                    </div>
                </div>
                <div className='rightPart d-flex gap-3'>
                
                    <p>Due </p> <span> Dec 22, 11.30AM +04</span>
                </div>
            </div>
            <div className='resultSection d-flex justify-content-between align-items-center'>
                <div className='result'>
                    <p>Your Grade: <span>35.89%</span></p>
                    <h6>You need at least 74% to pass. We keep your highest score.</h6>
                </div>
                <button>Back</button>
            </div>
            <form className='quizContainer' >

                {/* questions container */}
                <div className='questionStore'>

                    {
                        questions?.map((question, index) => {
                            return <div className='questionContainer d-flex align-items-start justify-content-between '>
                                <div className='question'>
                                    <p>{question.id}. {question.question}</p>
                                    <div className="mt-4">
                                        {
                                            question.options?.map((option, index) => {
                                                return <><label key={index}>
                                                    <input type="radio"
                                                        name={`question-${question.id}`} // Unique name per question
                                                        value={option}
                                                        // Controlled input
                                                        // Update state on change
                                                        checked={option === question.ans}
                                                    />
                                                    {option}
                                                </label><br />  </>
                                            })
                                        }

                                    </div>

                                    {
                                        question.result == "correct" ? <div className='correctCard'>

                                            <svg width="30" height="30" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.1254 0C26.5769 0 34.2508 7.67388 34.2508 17.1254C34.2508 26.5769 26.5769 34.2508 17.1254 34.2508C7.67388 34.2508 0 26.5769 0 17.1254C0 7.67388 7.67388 0 17.1254 0Z" fill="#27AE60" />
                                                <path d="M9.78516 17.3428L14.5323 22.0183L24.4626 12.2324" stroke="white" stroke-width="2.44648" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg><span >&nbsp; correct</span>

                                            <p>To break down complex information into smaller parts for better understanding</p>
                                        </div> :

                                            <div className='wrongCard'>
                                                <svg width="30" height="30" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M17.1254 0.374634C26.5769 0.374634 34.2508 8.04852 34.2508 17.5C34.2508 26.9515 26.5769 34.6254 17.1254 34.6254C7.67388 34.6254 0 26.9515 0 17.5C0 8.04852 7.67388 0.374634 17.1254 0.374634Z" fill="#DC2626" />
                                                    <path d="M22.8245 21.2061C23.3758 21.7574 23.3758 22.651 22.8245 23.2023C22.5498 23.477 22.1886 23.6162 21.8274 23.6162C21.4661 23.6162 21.1049 23.4789 20.8302 23.2023L17.1239 19.4959L13.4175 23.2023C13.1428 23.477 12.7816 23.6162 12.4203 23.6162C12.0591 23.6162 11.6979 23.4789 11.4232 23.2023C10.872 22.651 10.872 21.7574 11.4232 21.2061L15.1296 17.4998L11.4232 13.7934C10.872 13.2421 10.872 12.3485 11.4232 11.7972C11.9745 11.246 12.8681 11.246 13.4194 11.7972L17.1257 15.5036L20.8321 11.7972C21.3834 11.246 22.277 11.246 22.8283 11.7972C23.3795 12.3485 23.3795 13.2421 22.8283 13.7934L19.1219 17.4998L22.8283 21.2061H22.8245Z" fill="#FECACA" />
                                                </svg><span >&nbsp; wrong</span>
                                                <p>Analysis. Review ways to integrate diverse knowledge in the "Keys to Innovation" video.</p>
                                            </div>


                                    }



                                </div>
                                <button>{question.result=='correct' ? '1/1' : '0/1'} Point</button>
                            </div>
                        })
                    }



                </div>



                <Link to="/quiz"><button type="submit" className='submitBtn'>Retry</button></Link>
            </form>
        </div>
    )
}


export default QuizResultPage;