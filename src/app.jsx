import "../src/style.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css"
import { useState } from "react";
const App = () => {

    const [query, setQuery] = useState('');
    const [messages, setMessages] = useState([]);

    console.log(messages);

    const queryText = (e) => {
        setQuery(e.target.value)
    }

    const askQuestionToAI = (e) => {
        e.preventDefault();
        if (query.length == 0) {
            alert('Write Something First!')
        } else {
            fetch('http://localhost:5599/query', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    query
                })
            })
                .then(res => res.json())
                .then(res => {
                    setMessages([...messages, {
                        author: res.messages[0].content,
                        bot: res.candidates[0].content,
                    }])
                })
                .catch(error => console.error('Error:', error));

        }
    }

    return (
        <div className="chat_section">
            <div className="chat_heading">
                Chat Bot Using AI
            </div>
            <div className="chatAreaContainer">

                <div className="chat_history">
                    {messages.map((message, index) => (
                        <div className="message_block" key={index}>

                            <div className="user_query">
                                <i className="fa-regular fa-circle-user"></i>
                                <p>{message.author}</p>
                            </div>

                            <div className="reply_from_ai">
                                <i className="fa-solid fa-robot"></i>
                                <p>{message.bot}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="send_message">
                    <form onSubmit={askQuestionToAI}>
                        <input type="text" onChange={queryText} placeholder="Ask a question ..." />
                        <button><i className="fa-regular fa-paper-plane"></i></button>
                    </form>
                </div>

                <div className="author_credit">
                    Develop and Maintain By <a href="https://github.com/Ashfatul">Ashfatul</a>
                </div>
            </div>
        </div>
    );
};

export default App;