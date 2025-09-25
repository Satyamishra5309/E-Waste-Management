import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [socket, setSocket] = useState(null);
  const messagesEndRef = useRef(null);

  // Mock responses like your original Phenoxi
  const mockResponses = {
    'open google': 'Opening Google for you!',
    'open youtube': 'Launching YouTube!',
    'play music': 'Playing your favorite music!',
    'tell me a joke': 'Why did the AI cross the road? To get to the other server!',
    'portfolio': 'Opening portfolio website!',
    'play shape': 'Playing Shape of You by Ed Sheeran!',
    'hello': 'Hello! How can I help you today?',
    'what can you do': 'I can open websites, play music, tell jokes, and have conversations with you!',
    'buy': 'Welcome to CycleBit! You can browse refurbished devices on our marketplace.',
    'sell': 'Great! We help you sell e-waste responsibly and get fair prices.',
    'government': 'CycleBit complies with all environmental regulations and government standards.',
    'about': 'CycleBit is an e-waste management platform promoting sustainable electronics disposal.'
  };

  useEffect(() => {
    // Simulate socket connection
    const newSocket = io('http://localhost:5000');
    setSocket(newSocket);

    return () => newSocket.close();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const speakMessage = (text) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  const sendMessage = () => {
    if (inputMessage.trim()) {
      // Add user message
      const newMessage = {
        type: 'user',
        content: inputMessage,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, newMessage]);
      
      // Process AI response
      setTimeout(() => {
        const response = processAIResponse(inputMessage);
        const botMessage = {
          type: 'assistant',
          content: response,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botMessage]);
        speakMessage(response);
      }, 1000);
      
      setInputMessage('');
    }
  };

  const processAIResponse = (message) => {
    const lowerMessage = message.toLowerCase();
    
    // Check predefined responses
    for (const [key, response] of Object.entries(mockResponses)) {
      if (lowerMessage.includes(key)) {
        return response;
      }
    }
    
    // Default response
    return "I'm CycleBit, your e-waste management assistant! I can help you with buying/selling devices, recycling information, or general queries. What would you like to know?";
  };

  const toggleListening = () => {
    if (!isListening && 'webkitSpeechRecognition' in window) {
      const recognition = new window.webkitSpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      
      recognition.onstart = () => setIsListening(true);
      recognition.onend = () => setIsListening(false);
      
      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInputMessage(transcript);
      };
      
      recognition.start();
    }
  };

  const quickActions = [
    { label: 'Buy Devices', command: 'buy' },
    { label: 'Sell E-Waste', command: 'sell' },
    { label: 'Govt Info', command: 'government' },
    { label: 'About CycleBit', command: 'about' }
  ];

  return (
    <div className="chatbot-container">
      {/* Chatbot Toggle Button */}
      <button 
        className="chatbot-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className="fas fa-robot"></i>
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="chatbot-window">
          {/* Header */}
          <div className="chatbot-header">
            <div className="chatbot-title">
              <div className="bot-avatar">
                <i className="fas fa-robot"></i>
              </div>
              <div>
                <h3>CycleBit Assistant</h3>
                <div className="status-indicator">
                  <span>Ready to help</span>
                  <div className="pulse-dot"></div>
                </div>
              </div>
            </div>
            <button 
              className="close-btn"
              onClick={() => setIsOpen(false)}
            >
              <i className="fas fa-times"></i>
            </button>
          </div>

          {/* Messages Area */}
          <div className="chatbot-messages">
            {messages.length === 0 ? (
              <div className="welcome-message">
                <div className="welcome-avatar">
                  <i className="fas fa-robot"></i>
                </div>
                <h2>Hello! I'm CycleBit</h2>
                <p>Your AI assistant for e-waste management and sustainable electronics.</p>
                
                <div className="quick-suggestions">
                  {quickActions.map((action, index) => (
                    <button
                      key={index}
                      className="suggestion-btn"
                      onClick={() => setInputMessage(action.command)}
                    >
                      {action.label}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              messages.map((msg, index) => (
                <div key={index} className={`message ${msg.type}-message`}>
                  <div className="avatar">
                    <i className={`fas ${msg.type === 'user' ? 'fa-user' : 'fa-robot'}`}></i>
                  </div>
                  <div className="bubble">
                    <p>{msg.content}</p>
                  </div>
                </div>
              ))
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="input-area">
            <div className="input-container">
              <div className="input-wrapper">
                <button className="attach-btn">
                  <i className="fas fa-paperclip"></i>
                </button>
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                  placeholder="Type your message or say 'CycleBit' to start..."
                />
                <button className="emoji-btn">
                  <i className="fas fa-smile"></i>
                </button>
              </div>
              <button 
                className="btn-send"
                onClick={sendMessage}
              >
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>

            {/* Voice Control */}
            <div className="voice-controls">
              <button 
                className={`btn-voice ${isListening ? 'listening' : ''}`}
                onClick={toggleListening}
              >
                <i className="fas fa-microphone"></i>
                <span>{isListening ? 'Listening...' : 'Click to Talk'}</span>
              </button>
            </div>

            {/* Quick Actions */}
            <div className="quick-actions">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  className="quick-btn"
                  onClick={() => {
                    setInputMessage(action.command);
                    sendMessage();
                  }}
                >
                  <i className={`fas ${
                    action.command === 'buy' ? 'fa-shopping-cart' :
                    action.command === 'sell' ? 'fa-money-bill-wave' :
                    action.command === 'government' ? 'fa-landmark' :
                    'fa-info-circle'
                  }`}></i>
                  <span>{action.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;