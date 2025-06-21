import React from 'react';
import { User, Bot } from 'lucide-react';

const ChatMessage = ({ message }) => {
  return (
    <div className={`flex items-start space-x-3 ${message.isUser ? 'flex-row-reverse space-x-reverse' : ''} ${message.isUser ? 'chat-message-user' : 'chat-message-bot'}`}>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
        message.isUser ? 'bg-blue-100' : 'bg-purple-100'
      }`}>
        {message.isUser ? (
          <User className="h-4 w-4 text-blue-600" />
        ) : (
          <Bot className="h-4 w-4 text-purple-600" />
        )}
      </div>
      <div className={`flex-1 max-w-xs ${message.isUser ? 'text-right' : ''}`}>
        <div
          className={`inline-block p-3 rounded-lg text-sm ${
            message.isUser
              ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-br-none'
              : 'bg-gray-100 text-gray-900 rounded-bl-none'
          }`}
        >
          {message.content}
        </div>
        <div className={`text-xs text-gray-500 mt-1 ${message.isUser ? 'text-right' : ''}`}>
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage; 