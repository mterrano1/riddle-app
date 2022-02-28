import React, { useEffect, useState } from 'react';
import Riddle from './Riddle';

function Riddles() {
    const [riddles, setRiddles] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/riddles')
        .then(r => r.json())
        .then(data => setRiddles(data))
    }, [])

    const riddleList = riddles.map((riddle) => (
        <Riddle key={riddle.id} riddle={riddle} />
    ))

    return (
        <div>
            <h1>Riddles Page</h1>
            <hr/>
            <ul>{riddleList}</ul>
        </div>
    );
}

export default Riddles;