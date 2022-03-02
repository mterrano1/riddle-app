import React, { useEffect, useState } from 'react';
import Riddle from './Riddle';

function Riddles() {
    const [riddles, setRiddles] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/riddles')
        .then(r => r.json())
        .then(riddleArray => setRiddles(riddleArray))
    }, [])

    const displayedRiddles = riddles.filter(riddle => riddle.title)


    return (
        <div>
            <h1>Riddles Page</h1>
            <hr/>
            <ul className='cards'>
                {displayedRiddles.map((riddle) => (
                    <Riddle key={riddle.id} listOfRiddles={riddle} />
                ))}
            </ul>
        </div>
    );
}

export default Riddles;