import React from 'react';
import { useParams } from 'react-router-dom';

function RiddleAnswer() {
    const params = useParams();
    console.log(params)
    
    return (
        <div>
            <h1>Riddle Answer Page</h1>
            <hr/>
        </div>
    );
}

export default RiddleAnswer;