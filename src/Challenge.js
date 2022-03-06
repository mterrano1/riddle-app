import React, { useEffect, useState } from 'react';
import ChallengeQuestions from './ChallengeQuestions';

function Challenge() {
    const [timeLeft, setTimeLeft] = useState(0);
    const [disableBtn, setDisableBtn] = useState(false);

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
        setDisableBtn(true)
    }

    const handleTimesUp = timeLeft === 0 ? true : false

    return (
        <div>
            <h1>Challenge Page</h1>
            <hr />
            <button disabled={disableBtn} onClick={handleClick}>Click to begin</button>
            {timeLeft ? <h4>{timeLeft} seconds remaining!</h4> : <h4>100 seconds remaining!</h4>}
            <ChallengeQuestions handleTimesUp={handleTimesUp} />
        </div>
    );
}

export default Challenge;