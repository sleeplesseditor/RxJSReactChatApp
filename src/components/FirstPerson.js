import  React, { useLayoutEffect, useState } from  "react";
import chatStore from '../store/chat';

const FirstPerson = () => {
    const [chatState, setChatState] = useState(chatStore.initialState);

    useLayoutEffect(() => {
        chatStore.subscribe(setChatState);
        chatStore.init();
    },[]);

    return (
        <div className="container">
            <div className="chat-box">
                {chatState.data.map(message => (
                    <div>
                        <p className={message.person}>{message.text}</p>
                        <div className="clear"></div>
                    </div>
                ))}
            </div>
            <form id="messageForm">
                <input
                    type="text"
                    id="messageInput"
                    name="messageInput"
                    placeholder="Type here..."
                    required
                />
                <button type="submit">Send</button> <br />
            </form>
        </div>
    );
}

export default FirstPerson;