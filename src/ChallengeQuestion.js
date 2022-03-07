import React, { useState } from 'react';

function ChallengeQuestion({ arrayOfRiddles, handleTimesUp }) {
    const [answersObj, setAnswersObj] = useState({});
    const {id, question, answer} = arrayOfRiddles;

    const handleInput = (e) => {
        const userAnswer = e.target.value
        setAnswersObj(userAnswer)
    }

    const verdict = 
    (handleTimesUp && answersObj.toString().toLowerCase() === answer.toString().toLowerCase()) ? 
    'Correct!' : 
    `The correct answer is: ${answer}`


    return (
        <li className='challengeLI' id={id}>
            <span>{question}</span>
            <input
                name={id}
                onChange={handleInput}
                disabled={handleTimesUp} 
                placeholder={'Input your answer...'}>
            </input>
            <span>{handleTimesUp ? <p>{verdict}</p> : ''}</span>
        </li>
    );
}

export default ChallengeQuestion;