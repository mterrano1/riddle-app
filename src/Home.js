import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>Home Page</h1>
            <hr/>

            <h3>Riddle me this:</h3>
            <p>Do you have what it takes to solve these brain teasers? If so, click the button below!</p>
            <img src='https://media.giphy.com/media/h0Xez8ow1UOVq/giphy.gif' />
            <br />

            <Link to={'/riddles'}>
                <button>Get started</button>
            </Link>
        </div>
    );
}

export default Home;