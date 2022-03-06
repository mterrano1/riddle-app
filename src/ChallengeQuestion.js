import React, { useState } from 'react';

function ChallengeQuestion({ arrayOfRiddles, handleTimesUp }) {
    const [answers, setAnswers] = useState([]);
    const {id, question, answer} = arrayOfRiddles;

    const handleInput = (e) => {
        const userInput = {
            id: id,
            answer: e.target.value
        }
        setAnswers(userInput)
        console.log(answers)
    }


    return (
        <li className='challengeLI' id={id}>
            <span>{question}</span>
            <input
                name={id}
                onChange={handleInput}
                disabled={handleTimesUp} 
                placeholder={'Input your answer...'}>
            </input>
        </li>
    );
}

export default ChallengeQuestion;