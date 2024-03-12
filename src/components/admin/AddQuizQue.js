import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';


const database = firebase.database();

const AddQuizQue = () => {
  const [questionText, setQuestionText] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);
  const [correctOptionIndex, setCorrectOptionIndex] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new question object
    const newQuestion = {
      text: questionText,
      options: options,
      correctOptionIndex: correctOptionIndex
    };

    // Push the new question object to Firebase
    const newQuestionRef = database.ref('questions').push();
    newQuestionRef.set(newQuestion);

    // Reset the form
    setQuestionText('');
    setOptions(['', '', '', '']);
    setCorrectOptionIndex(0);
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="questionText">Question Text:</label><br />
      <input type="text" id="questionText" value={questionText} onChange={(e) => setQuestionText(e.target.value)} /><br />

      {options.map((option, index) => (
        <div key={index}>
          <label htmlFor={`option${index + 1}`}>Option {index + 1}:</label><br />
          <input type="text" id={`option${index + 1}`} value={option} onChange={(e) => handleOptionChange(index, e.target.value)} /><br />
        </div>
      ))}

      <label htmlFor="correctOptionIndex">Correct Option Index:</label><br />
      <input type="number" id="correctOptionIndex" value={correctOptionIndex} onChange={(e) => setCorrectOptionIndex(parseInt(e.target.value))} /><br />

      <button type="submit">Submit</button>
    </form>
  );
};

export default AddQuizQue;
