import React, { useEffect, useState } from 'react';

function Challenge() {
    const [timeLeft, setTimeLeft] = useState(0);

    useEffect(() => {
        if (timeLeft === 0) {
            return;
        }

        const timer = setTimeout(() => {
            setTimeLeft(timeLeft => timeLeft - 1);
        }, 1000);

        return function () {
            clearTimeout(timer);
        }

    }, [timeLeft]);

    const handleClick = () => {
        setTimeLeft(60)
    }

    return (
        <div>
            <h1>Challenge Page</h1>
            <hr />
            <button onClick={handleClick}>Click to begin</button>
            {timeLeft ? <h4>{timeLeft} seconds remaining!</h4> : <h4>60 seconds remaining!</h4>}  
        </div>
    );
}

export default Challenge;