import React, { useState } from 'react';
import './Chatbot.css';
import banner from "./assets/banner.png";



const Chatbot = () => {
    const [sentence, setSentence] = useState('');
    const [result, setResult] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/ask', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ sentence }),
        });
        const data = await response.json();
        setResult(data.result);
    };

    return (
        <div className="chatbot-container">
        <img src={banner} class="courses-img" alt="Tampere University Building"></img>

      <div className="chatbot-style">
            <h1>Courses</h1>
            </div>
            <div className="chatbot-underline"></div>

<br />
            <div className="chatbot-intro">Hi and welcome to our course page, if you have any questions about the courses, feel free to ask our chatbot on this page, and if not, feel free to continue to Moodle and happy learning!</div>
            <a href="http://vps218.cesvima.upm.es/moodle/" class= "combined-class" target="_blank" rel="noopener noreferrer">Go to courses</a>
            <div className="chatbot-underline"></div>

<br />
<div className="chatbot-style">

            <h1>Hi I'm Digi Chatbot</h1>
            </div>
            <div className="chatbot-intro">Before you go to the courses, feel free to ask me anything!</div>
            <p><i>*none of your questions or inputs are recorded or used in any way shape or form</i></p>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="sentence"
                    value={sentence}
                    onChange={(e) => setSentence(e.target.value)}
                    required
                />
                <button type="submit">Ask away</button>
            </form>
            {result && (
                <>
                    <h2>The answer:</h2>
                    <div className="chatbot-intro">{result}</div>
                </>
            )}

        </div>
    );
};

export default Chatbot;
