import MessageForm from './MessageForm';
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';

const ChatFeed = () => {
const {chats, activeChat, userName, message} =props;

const chat = chats && chats[activeChat];

const renderMessages = () => {
    const keys =Object.keys(message);

    console.log(keys);
}

    renderMessages();

return(
    <div>
        ChatFeed
    </div>
);
}

export default ChatFeed;