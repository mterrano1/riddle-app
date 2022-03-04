import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function RiddleAnswer() {
    const [riddle, setRiddle] = useState(null);
    const params = useParams();

    useEffect(() => {
        fetch(`http://localhost:3001/riddles/${params.id}`)
        .then(r => r.json())
        .then(riddleObject => setRiddle(riddleObject))
    }, [params.id])

    if (!riddle) return <h2>Loading...</h2>

    
    return (
        <ul className='cards'>
            <li className= 'card' >
                <h4>{riddle.title}</h4>
                <hr />
                <p>{riddle.question}</p>
                <hr />
                <p>Answer: {riddle.answer}</p>
            </li>
        </ul>
    );
}

export default RiddleAnswer;