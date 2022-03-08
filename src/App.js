import { ChatEngine } from "react-chat-engine";

import './App.css';
import ChatFeed from  './components/ChatFeed';
import LoginForm from "./components/LoginForm";

const App = () => {

    if(!localStorage.getItem('username')) return <LoginForm />
    return (
        <ChatEngine 
           height = "100vh"
           projectID = "7a704088-98dc-4203-a0f7-cc2159f81d85"
           userName = {localStorage.getItem('username')}
           userSecret = {localStorage.getItem('password')}
           renderChatFeed = {(ChatAppProps) => <ChatFeed {... ChatAppProps} />}
        />
    );
}

export default App;