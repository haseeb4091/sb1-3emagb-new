import React, { useState } from 'react';
import { Search, Phone, Video, MoreVertical, Send } from 'lucide-react';

const ChatScreen = () => {
  const [activeChat, setActiveChat] = useState(1);
  const [inputMessage, setInputMessage] = useState('');
  const [showChatList, setShowChatList] = useState(true);

  // ... (keep existing conversations and other state)

  const toggleView = () => {
    setShowChatList(!showChatList);
  };

  return (
    <div className="flex h-[calc(100vh-4rem)] lg:h-screen mt-16 lg:mt-0">
      {/* Chat List */}
      <div className={`
        w-full lg:w-80 border-r border-gray-200 bg-white
        ${showChatList ? 'block' : 'hidden'} lg:block
      `}>
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <input
              type="text"
              placeholder="Search messages"
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-indigo-500"
            />
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
          </div>
        </div>

        <div className="overflow-y-auto h-[calc(100vh-8rem)] lg:h-[calc(100vh-73px)]">
          {conversations.map((chat) => (
            <div
              key={chat.id}
              onClick={() => {
                setActiveChat(chat.id);
                setShowChatList(false);
                if (chat.unread > 0) {
                  chat.unread = 0;
                }
              }}
              className={`flex items-center gap-3 p-4 cursor-pointer border-b border-gray-100 transition-colors
                ${activeChat === chat.id ? 'bg-indigo-50' : 'hover:bg-gray-50'}`}
            >
              <div className="relative">
                <img
                  src={chat.avatar}
                  alt={chat.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                {chat.online && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-medium text-gray-900 truncate">{chat.name}</h3>
                  <span className="text-xs text-gray-500">{chat.time}</span>
                </div>
                <p className="text-sm text-gray-500 truncate">{chat.lastMessage}</p>
              </div>
              {chat.unread > 0 && (
                <div className="w-5 h-5 bg-indigo-600 rounded-full flex items-center justify-center">
                  <span className="text-xs text-white">{chat.unread}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      {activeConversation && (
        <div className={`
          flex-1 flex flex-col bg-gray-50
          ${!showChatList ? 'block' : 'hidden'} lg:block
        `}>
          {/* Chat Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white">
            <div className="flex items-center gap-3">
              <button
                onClick={toggleView}
                className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <img
                src={activeConversation.avatar}
                alt={activeConversation.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h2 className="font-medium text-gray-900">{activeConversation.name}</h2>
                <p className="text-sm text-green-500">
                  {activeConversation.online ? 'Online' : 'Offline'}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Phone className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Video className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <MoreVertical className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4">
            <div className="space-y-4">
              {activeConversation.messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex items-end gap-2 ${
                    message.sent ? 'justify-end' : ''
                  }`}
                >
                  {!message.sent && (
                    <img
                      src={activeConversation.avatar}
                      alt={activeConversation.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  )}
                  <div
                    className={`${
                      message.sent
                        ? 'bg-indigo-600 text-white rounded-lg rounded-br-none'
                        : 'bg-white rounded-lg rounded-bl-none'
                    } p-3 max-w-[75%] shadow-sm`}
                  >
                    <p>{message.text}</p>
                    <span
                      className={`text-xs ${
                        message.sent ? 'text-indigo-200' : 'text-gray-500'
                      } mt-1`}
                    >
                      {message.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Message Input */}
          <div className="p-4 border-t border-gray-200 bg-white">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Type a message..."
                className="flex-1 p-2 border border-gray-200 rounded-lg focus:outline-none focus:border-indigo-500"
              />
              <button
                onClick={handleSendMessage}
                className="p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatScreen;