import React, { useState, useEffect } from 'react';


const Quiz = () => {
    const [questions, setQuestions] = useState([
        {
            "text": "What is the capital of France?",
            "options": ["Paris", "London", "Berlin", "Madrid"],
            "correctOptionIndex": 0
        },
        {
            "text": "What is 2 + 2?",
            "options": ["3", "4", "5", "6"],
            "correctOptionIndex": 1
        }
        // Add more questions here as needed
    ]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswers, setUserAnswers] = useState({});
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const handleAnswer = (answerIndex) => {
        const isCorrect = answerIndex === questions[currentQuestion].correctOptionIndex;
        setUserAnswers({
            ...userAnswers,
            [currentQuestion]: {
                selected: answerIndex,
                correct: isCorrect,
            }
        });
        setScore(score + (isCorrect ? 1 : 0));

        // Automatically move to the next question after 2 seconds
        setTimeout(() => {
            if (currentQuestion < questions.length - 1) {
                setCurrentQuestion(currentQuestion + 1);
            } else {
                setShowResult(true);
            }
        }, 2000);
    };

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setUserAnswers({});
        setScore(0);
        setShowResult(false);
    };

    return (
        <div className="container mt-5">
            {showResult ? (
                <div>
                    <h2>Quiz Result</h2>
                    <p>Your score: {score}</p>
                    <ul>
                        {questions.map((question, index) => (
                            <li key={index}>
                                Question {index + 1}: {question.text}
                                <br />
                                Your Answer: {question.options[userAnswers[index]?.selected]}
                                <br />
                                Correct Answer: {question.options[question.correctOptionIndex]}
                            </li>
                        ))}
                    </ul>
                    <button className="btn btn-primary" onClick={resetQuiz}>Restart Quiz</button>
                </div>
            ) : (
                <div>
                    <h2>Question {currentQuestion + 1}</h2>
                    <p>{questions[currentQuestion]?.text}</p>
                    <ul className="list-group">
                        {questions[currentQuestion]?.options.map((option, index) => (
                            <li
                                key={index}
                                className={`list-group-item ${userAnswers[currentQuestion]?.selected === index ? (index === questions[currentQuestion].correctOptionIndex ? 'bg-primary text-light' : 'bg-primary text-light') : ''}`}
                                onClick={() => handleAnswer(index)}
                                style={{ cursor: 'pointer' }}
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Quiz;
