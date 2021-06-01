import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';
import Loginform from './components/LoginForm'

const App = () => {

   if(!localStorage.getItem('username')) return <Loginform/>

  return(
    <ChatEngine
        height="100vh"
        projectID="a0622e12-c1a3-410c-9df0-65ce5940ad82"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
    />
  );
}

export default App;