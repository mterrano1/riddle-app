import React, { useEffect, useState } from 'react';

function Riddles() {

    useEffect(() => {
        fetch('http://localhost:3001/riddles')
        .then(r => r.json())
        .then(data => console.log(data))
    }, [])

    return (
        <div>
            <h1>Riddles Page</h1>
            <hr/>
        </div>
    );
}

export default Riddles;