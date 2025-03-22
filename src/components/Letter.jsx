import React, { useEffect, useState } from 'react';

const Letter = () => {
  const phrases = ["Awesome", "Fun", "Challenging", "Fantastic"];
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting && letterIndex < currentPhrase.length) {
        setDisplayText(currentPhrase.slice(0, letterIndex + 1));
        setLetterIndex(letterIndex + 1);
      } else if (isDeleting && letterIndex > 0) {
        setDisplayText(currentPhrase.slice(0, letterIndex - 1));
        setLetterIndex(letterIndex - 1);
      } else {
        setIsDeleting(!isDeleting);
        if (!isDeleting) {
          setPhraseIndex((phraseIndex + 1) % phrases.length);
        }
      }
    }, isDeleting ? 100 : 200);

    return () => clearTimeout(timeout);
  }, [letterIndex, isDeleting, phraseIndex, phrases]);

  return (
    <div style={styles.container}>
      <div style={styles.textContainer}>
        <h1>English is {displayText}</h1>
      </div>
    </div>
  );
};

const styles = {
  container: {
    // backgroundColor:'#6058e9',
    height: '80vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: '"Poppins", sans-serif',
    color: 'white',
    overflow: 'hidden',
  },
  textContainer: {
    textAlign: 'center',
    fontSize: '2rem',
  },
};

export default Letter;