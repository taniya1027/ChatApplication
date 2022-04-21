import { useState } from "react";
import axios from "axios";

const LoginForm = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = { 'project-Id': "f952b7fe-7e01-4455-b308-2541bc7b3257", 'User-Name': username, 'User-Secret': password }

        try {
            await axios.get("https://api.chatengine.io/chats", { headers: authObject });

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();

        } catch (error) {
            setError("Oops, Wrong Credentials..Try again")
        }

    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title" > Chat Application </h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" required placeholder="Username" />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" required placeholder="Password" />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                </form>
                <div className="error">{error}</div>
            </div>
        </div>
    );
}

export default LoginForm
