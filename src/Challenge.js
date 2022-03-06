import React, { useEffect, useState } from 'react';
import ChallengeQuestions from './ChallengeQuestions';

function Challenge() {
    const [timeLeft, setTimeLeft] = useState(0);
    const [disableBtn, setDisableBtn] = useState(false);
    const [goodLuck, setGoodLuck] = useState(false);

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
        setGoodLuck(true)
        setTimeout(() => {
            setTimeLeft(100)
            setDisableBtn(true)
            setGoodLuck(false)
        }, 3000)
    }

    const handleTimesUp = timeLeft === 0 ? true : false

    return (
        <div>
            <h1>Challenge Page</h1>
            <hr />
            <p>Click the button below and you'll have 100 seconds to try and answer 10 riddles.</p>
            <button disabled={disableBtn} onClick={handleClick}>Click to begin</button>
            {timeLeft ? <h4>{timeLeft} seconds remaining!</h4> : <h4>100 seconds remaining!</h4>}
            {goodLuck ? <img src={'https://media.giphy.com/media/10AYkGR9M75nLW/giphy.gif'} /> : ''}
            {disableBtn ? <ChallengeQuestions handleTimesUp={handleTimesUp} /> : ''}
        </div>
    );
}

export default Challenge;