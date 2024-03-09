import React, { useState } from 'react';
import Filter from 'bad-words';
import data from '../assets/dataset/dataset.json';
// import fs from 'fs';



{/**
::::::::::::Test Input::::::::::

 ['son of a bitch', 'what do you want?' , 'son of a dog' , 'how the hell can you say that' , 'fuck it']

*/}

function Test() {
  // const [value, setValue] = useState(0);

  // const increase = () => {
  //   if (value === 0) {
  //     setValue(1);
  //   }else if(value===-1){
  //     setValue(0);
  //   }
    
  // };

  // const decrease = () => {
  //   if (value === 1) {
  //     setValue(0);
  //   } else if (value === 0) {
  //     setValue(-1);
  //   }
  // };
  const [text,setText]=useState();
  const filter = new Filter();
  // console.log(data)
  var words=[]

  data.forEach(
    (i)=>
    {
     words.push(i)
    }
  )
// console.log(words)

  //rermove words
  // let removeWords = ['hells', 'sadist'];
  // filter.removeWords(...removeWords);

  // var newBadWords = ['some', 'bad', 'word'];

  // const customWords = JSON.parse(data);
  // console.log(customWords)
  filter.addWords(...words);

// Check if a string contains abusive language

if (filter.isProfane(text)) {
    console.log("Text contains abusive language.");
} else {
    console.log("Text is clean.");
}

  return (
    <div>
      {/* <p>{value}</p>
      <button onClick={increase} disabled={value === 1}>Up</button>
      <button onClick={decrease} disabled={value === -1}>Down</button> */}
      <input type="text" value={text} onChange={(e)=>{
        setText(e.target.value);
        
      }} />
    </div>
  );
}

export default Test;
