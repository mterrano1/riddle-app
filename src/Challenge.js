import React, { useEffect, useState } from 'react';

function Challenge() {
    const [timeLeft, setTimeLeft] = useState(0);
    const [disable, setDisable] = useState(false);

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
        setTimeLeft(100)
        setDisable(true)
    }

    return (
        <div>
            <h1>Challenge Page</h1>
            <hr />
            <button disabled={disable} onClick={handleClick}>Click to begin</button>
            {timeLeft ? <h4>{timeLeft} seconds remaining!</h4> : <h4>100 seconds remaining!</h4>}  
        </div>
    );
}

export default Challenge;