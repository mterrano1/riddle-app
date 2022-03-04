import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RiddleForm() {
    const [title, setTitle] = useState('');
    const [question, setQuestion] = useState('');
    const [hint, setHint] = useState('');
    const [answer, setAnswer] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = { title, question, hint, answer }
        fetch('http://localhost:3001/riddles', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(r => r.json())
        navigate(-1)
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