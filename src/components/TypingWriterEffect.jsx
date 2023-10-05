import React, { useState, useEffect } from 'react';

const TypingWriterEffect = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDisplayText((prevDisplayText) => prevDisplayText + text[index]);
      setIndex((prevIndex) => prevIndex + 1);

      if (index === text.length) {
          setIndex(0)
          setDisplayText('')
          
        clearInterval(intervalId);
      }
    }, 600);

    return () => clearInterval(intervalId);
    //<span className=' font-orbitron max-h-8 h-8 bg-white/50 rounded-lg backdrop-blur-2xl  max-w-fit w-fit p-2  items-center flex'>{displayText}</span>;
  }, []);

  return<div>
<span className=' font-orbitron max-h-8 h-8 bg-white/50 rounded-lg backdrop-blur-2xl  max-w-fit w-fit p-2  items-center flex'>{displayText}</span>;
  </div> 
};

export default TypingWriterEffect;
