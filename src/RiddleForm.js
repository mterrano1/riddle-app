import React, { useState } from 'react';

function RiddleForm() {
    const [title, setTitle] = useState('');
    const [question, setQuestion] = useState('');
    const [hint, setHint] = useState('');
    const [answer, setAnswer] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('clicked')
    }

    return (
        <section className='form'>
            <h3>Add new riddle!</h3>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                    <br />
                    <input type='text' value={title} onChange={e => setTitle(e.target.value)} placeholder='Input title...'/>
                    <br />
                    <br />
                <label>Question</label>
                    <br />
                    <input type='text' value={question} onChange={e => setQuestion(e.target.value)} placeholder='Input riddle...'/>
                    <br />
                    <br />
                <label>Hint</label>
                    <br />
                    <input type='text' value={hint} onChange={e => setHint(e.target.value)} placeholder='Input hint...'/>
                    <br />
                    <br />
                <label>Answer</label>
                    <br />
                    <input type='text' value={answer} onChange={e => setAnswer(e.target.value)} placeholder='Input answer...'/>
                    <br />
                    <br />
                <button>Submit</button>
            </form>
        </section>
    );
}

export default RiddleForm;