import { ChatEngine } from "react-chat-engine";

import './App.css';
import ChatFeed from  './components/ChatFeed';
import LoginForm from "./components/LoginForm";

const App = () => {

    if(!localStorage.getItem('username')) return <LoginForm />
    return (
        <ChatEngine 
           height = "100vh"
           projectID = "f952b7fe-7e01-4455-b308-2541bc7b3257"
           userName = {localStorage.getItem('username')}
           userSecret = {localStorage.getItem('password')}
           renderChatFeed = {(ChatAppProps) => <ChatFeed {... ChatAppProps} />}
        />
    );
}

export default App;
