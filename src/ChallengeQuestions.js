import React, { useState, useEffect } from 'react';

function ChallengeQuestions({ handleTimesUp }) {
    const [riddles, setRiddles] = useState([]);


    useEffect(() => {
        fetch('http://localhost:3001/riddles')
        .then(r => r.json())
        .then(riddleArray => {
            const displayedRiddles = riddleArray.slice(10, 21)
            setRiddles(displayedRiddles)
        })
    }, [])


    return (
        <ul className='challengeUL'>
                {riddles.map((riddle) => (
                    <li key={riddle.id} className='challengeLI' id={riddles.id}>
                        <h4>Question</h4>
                        <p>{riddle.question}</p>
                        <input disabled={handleTimesUp} placeholder={'Input your answer...'}></input>
                        <br />
                    </li>
                ))}
        </ul>
    );
}

export default ChallengeQuestions;