import "../src/style.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css"
const App = () => {
    return (
        <div className="chat_section">
            <div className="chat_heading">
                Chat Bot Using AI
            </div>
            <div className="chatAreaContainer">

                <div className="chat_history">
                    <div className="reply_from_ai">
                        <i className="fa-solid fa-robot"></i>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, velit.</p>
                    </div>
                    <div className="user_query">
                        <i className="fa-regular fa-circle-user"></i>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, velit.</p>
                    </div>
                </div>
                <div className="send_message">
                    <form>
                        <input type="text" placeholder="Ask a question ..." />
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