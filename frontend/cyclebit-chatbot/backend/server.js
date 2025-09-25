import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection with better error handling
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/cyclebit')
  .then(() => console.log('✅ MongoDB connected successfully'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// Basic route to test server
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running!' });
});

// Simple in-memory storage for demo (remove when MongoDB works)
const chatSessions = new Map();

// Socket.io connection handling
io.on('connection', (socket) => {
  console.log('✅ User connected:', socket.id);

  socket.on('start_chat', (data) => {
    chatSessions.set(socket.id, {
      userType: data.userType || 'general',
      messages: []
    });
    
    const welcomeMessage = getWelcomeMessage(data.userType);
    socket.emit('chat_message', {
      type: 'assistant',
      content: welcomeMessage,
      timestamp: new Date()
    });
  });

  socket.on('send_message', async (data) => {
    const session = chatSessions.get(socket.id);
    if (!session) return;

    // Add user message
    session.messages.push({
      type: 'user',
      content: data.message,
      timestamp: new Date()
    });

    // Process and respond
    const response = await processMessage(data.message, session.userType);
    
    // Add assistant response
    session.messages.push({
      type: 'assistant',
      content: response,
      timestamp: new Date()
    });

    // Send response
    socket.emit('chat_message', {
      type: 'assistant',
      content: response,
      timestamp: new Date()
    });

    // Text-to-speech if enabled
    if (data.ttsEnabled) {
      socket.emit('tts_trigger', { text: response });
    }
  });

  socket.on('disconnect', () => {
    console.log('❌ User disconnected:', socket.id);
    chatSessions.delete(socket.id);
  });
});

// Message processing functions
function getWelcomeMessage(userType) {
  const messages = {
    'buyer': "Welcome to CycleBit! I'm here to help you find quality refurbished electronics. What type of device are you looking for?",
    'seller': "Hello! Ready to turn your e-waste into value? Tell me about the device you'd like to sell.",
    'government': "Welcome government partner. How can I assist with regulatory compliance or reporting today?",
    'general': "Hi! I'm CycleBit, your e-waste management assistant. Are you looking to buy, sell, or learn about responsible e-waste disposal?"
  };
  return messages[userType] || messages.general;
}

async function processMessage(message, userType) {
  const lowerMessage = message.toLowerCase();
  
  // Predefined responses for e-waste management
  const responses = {
    'buy': "We offer certified refurbished electronics including smartphones, laptops, and tablets. All devices come with warranty and quality assurance.",
    'sell': "We provide free pickup service and fair pricing for your e-waste. What type of device do you want to sell?",
    'government': "CycleBit complies with all environmental regulations and provides detailed reporting for government oversight.",
    'about': "CycleBit is a platform connecting consumers, businesses, and recyclers for sustainable e-waste management.",
    'recycle': "We partner with certified recycling facilities that follow environmentally responsible practices.",
    'price': "Pricing depends on device type, condition, and market value. We offer free valuation services.",
    'how to sell': "1. Tell us about your device 2. Get instant valuation 3. Schedule free pickup 4. Receive payment",
    'environment': "Proper e-waste recycling prevents toxic materials from polluting our environment and conserves natural resources."
  };

  // Find matching response
  for (const [key, response] of Object.entries(responses)) {
    if (lowerMessage.includes(key)) {
      return response;
    }
  }

  // Default AI-like response
  return "I specialize in e-waste management. I can help you with buying/selling devices, recycling information, or government compliance. What would you like to know?";
}

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📱 Frontend should connect to: http://localhost:${PORT}`);
});