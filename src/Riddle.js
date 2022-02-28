import React from 'react';

function Riddle({ riddle }) {
    const {id, title, question, hint, answer} = riddle;


    return (
            <li id={id}>
                <h4>{title}</h4>
                <p>{question}</p>
                <button>Need a Hint</button>
                <button>Answer</button>
            </li>
    );
}

export default Riddle;