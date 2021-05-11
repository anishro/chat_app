import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';


const App = () => {
  return(
    <ChatEngine
        height="100vh"
        projectID="a0622e12-c1a3-410c-9df0-65ce5940ad82"
        userName="Anish"
        userSecret="123"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
    />
  );
}

export default App;