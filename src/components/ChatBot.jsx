import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import ChatMessage from './ChatMessage';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: '1',
      content: "Hey there! 👋 I'm the AI version of the portfolio owner. I'm here to chat about their work, experience, and answer any questions you might have. What would you like to know?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [showApiKeyInput, setShowApiKeyInput] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Check if API key exists in localStorage
    const savedApiKey = localStorage.getItem('openai_api_key');
    if (savedApiKey) {
      setApiKey(savedApiKey);
    } else {
      setShowApiKeyInput(true);
    }
  }, []);

  const handleApiKeySubmit = (key) => {
    setApiKey(key);
    localStorage.setItem('openai_api_key', key);
    setShowApiKeyInput(false);
  };

  const sendMessage = async () => {
    if (!inputValue.trim()) return;
    if (!apiKey) {
      setShowApiKeyInput(true);
      return;
    }

    const userMessage = {
      id: Date.now().toString(),
      content: inputValue,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            {
              role: 'system',
              content: `You are an AI assistant representing Siddharth Vinodkumar Sadhwani, a Computer Science student at University of Calgary. You should respond as if you are him, talking about his skills, experience, projects, and background.

Key Information:
- Name: Siddharth Vinodkumar Sadhwani
- Location: Calgary, Alberta, Canada
- Education: Bachelor of Science in Computer Science & Statistics (Co-op Program) at University of Calgary, expected graduation May 2027
- Contact: siddharth.sadhwani@ucalgary.ca, (587) 836-2116, LinkedIn: siddharth-vinodkumar-sadhwani

Experience:
- Software Developer Intern at Superlytics Technologies (May 2024 - Aug 2024): Built AI co-pilot for growth marketing, improved stock availability by 65%, developed authentication APIs

Projects:
- WildPulse: YOLOv8, Google APIs, Angular - Wildlife monitoring platform for endangered species
- VistaShare: React, Google Maps API, Node.js, MySQL - Location sharing platform for hikers
- ClubSync: Angular, PrimeNG, Node.js, MySQL - University club management platform
- Stock Predictor: Python, Scikit-Learn, Streamlit - ML model with 80%+ accuracy
- TaleThread: React, Django, PostgreSQL, AWS - Collaborative storytelling platform

Skills: React, Angular, Node.js, Python, MongoDB, Express, Scikit-Learn, AWS, Azure, Git, C++, Java, JavaScript, R

Be friendly, professional, and engaging. Keep responses concise but informative. Show enthusiasm for technology and problem-solving. Always maintain a personal touch as if the visitor is talking directly to Siddharth.`
            },
            ...messages.map(msg => ({
              role: msg.isUser ? 'user' : 'assistant',
              content: msg.content
            })),
            {
              role: 'user',
              content: inputValue
            }
          ],
          max_tokens: 150,
          temperature: 0.7,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get AI response');
      }

      const data = await response.json();
      const aiResponse = {
        id: (Date.now() + 1).toString(),
        content: data.choices[0].message.content,
        isUser: false,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, aiResponse]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage = {
        id: (Date.now() + 1).toString(),
        content: "Sorry, I'm having trouble connecting right now. Please try again later!",
        isUser: false,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg transition-all duration-300 hover:scale-110 z-50 flex items-center justify-center"
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[500px] bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col z-50 animate-in slide-in-from-bottom-2 duration-300">
          {/* Header */}
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-t-lg">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="font-medium">Chat with me!</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 h-8 w-8 p-0 rounded flex items-center justify-center transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* API Key Input */}
          {showApiKeyInput && (
            <div className="p-4 bg-yellow-50 border-b">
              <p className="text-sm text-gray-600 mb-2">Please enter your OpenAI API key to enable chat:</p>
              <div className="flex space-x-2">
                <input
                  type="password"
                  placeholder="sk-..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleApiKeySubmit(e.target.value);
                    }
                  }}
                />
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors text-sm"
                  onClick={(e) => {
                    const input = e.currentTarget.parentElement?.querySelector('input');
                    if (input?.value) {
                      handleApiKeySubmit(input.value);
                    }
                  }}
                >
                  Save
                </button>
              </div>
            </div>
          )}

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
            {isTyping && (
              <div className="flex items-center space-x-2 text-gray-500">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
                <span className="text-sm">Typing...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t bg-gray-50 rounded-b-lg">
            <div className="flex space-x-2">
              <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={isTyping}
              />
              <button
                onClick={sendMessage}
                disabled={!inputValue.trim() || isTyping}
                className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot; 