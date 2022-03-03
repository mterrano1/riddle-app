import React from 'react';
import { Link } from 'react-router-dom';

function Riddle({ listOfRiddles }) {
    const {id, title, question, hint, answer} = listOfRiddles;

    function hintAlert() {
        alert(hint)
    }

    return (
            <li className= 'card' id={id}>
                <h4>{title}</h4>
                <hr />
                <p>{question}</p>
                <button onClick={hintAlert}>Need a Hint</button>
                <Link to={`/riddles/${id}`}>
                <button>Answer</button>
                </Link>
            </li>
    );
}

export default Riddle;