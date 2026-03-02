import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, Sparkles, Code, Image, FileText } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const AIDemo: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m your AI assistant, powered by advanced neural networks and machine learning algorithms. I can help you with coding, creative writing, data analysis, and much more. What would you like to explore today?',
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [activeTab, setActiveTab] = useState<'chat' | 'code' | 'creative'>('chat');

  const aiResponses = [
    "That's an excellent question! Based on my analysis of your request, I can see you're interested in exploring AI capabilities. Our neural networks have been trained on vast datasets to provide comprehensive solutions across multiple domains.",
    "I can definitely help you with that! Let me break this down into actionable steps. First, we'll analyze your requirements, then implement the optimal AI architecture for your specific use case.",
    "Great insight! The latest AI advancements show that this approach has a 95% success rate. Our models have been optimized for performance, accuracy, and scalability in enterprise environments.",
    "Let me generate a comprehensive solution for you. This will involve several key steps: data preprocessing, model selection, training optimization, and deployment strategies. Each phase is crucial for success."
  ];

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponses[Math.floor(Math.random() * aiResponses.length)],
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 2000);
  };

  const tabs = [
    { id: 'chat', label: 'Chat', icon: Bot },
    { id: 'code', label: 'Code', icon: Code },
    { id: 'creative', label: 'Creative', icon: FileText }
  ];

  const codeExamples = [
    { language: 'Python', code: 'def ai_model():\n    return "Hello, AI World!"' },
    { language: 'JavaScript', code: 'const aiModel = () => {\n    return "Hello, AI World!";\n};' },
    { language: 'TypeScript', code: 'const aiModel = (): string => {\n    return "Hello, AI World!";\n};' }
  ];

  return (
    <section id="demo" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-ai-blue/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center space-x-2 glass-effect rounded-full px-6 py-3 mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="h-5 w-5 text-ai-cyan" />
            <span className="text-sm font-medium">Interactive AI Demo</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Experience AI</span>
            <br />
            <span className="text-white">In Action</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Try our AI assistant right now. Ask questions, request code, explore creative possibilities, or get help with complex problems. Experience the future of human-AI collaboration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Chat Interface */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-effect rounded-3xl p-6 h-[600px] flex flex-col"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-ai-blue to-ai-purple flex items-center justify-center">
                <Bot className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">AI Assistant</h3>
                <p className="text-sm text-gray-400">Always online and ready to help</p>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex space-x-2 mb-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-ai-blue to-ai-purple text-white'
                      : 'glass-effect text-gray-300 hover:text-white'
                  }`}
                >
                  <tab.icon className="h-4 w-4" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto mb-4 space-y-4">
              <AnimatePresence>
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex items-start space-x-3 max-w-[80%] ${
                      message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                    }`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.sender === 'user' 
                          ? 'bg-gradient-to-r from-ai-purple to-ai-pink' 
                          : 'bg-gradient-to-r from-ai-blue to-ai-cyan'
                      }`}>
                        {message.sender === 'user' ? (
                          <User className="h-4 w-4 text-white" />
                        ) : (
                          <Bot className="h-4 w-4 text-white" />
                        )}
                      </div>
                      <div className={`glass-effect rounded-2xl px-4 py-3 ${
                        message.sender === 'user' ? 'bg-ai-purple/20' : 'bg-ai-blue/20'
                      }`}>
                        <p className="text-white text-sm">{message.text}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-ai-blue to-ai-cyan flex items-center justify-center">
                      <Bot className="h-4 w-4 text-white" />
                    </div>
                    <div className="glass-effect rounded-2xl px-4 py-3 bg-ai-blue/20">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-ai-blue rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-ai-blue rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-ai-blue rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input */}
            <div className="flex space-x-3">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask me anything..."
                className="flex-1 glass-effect rounded-full px-6 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-ai-blue"
              />
              <motion.button
                onClick={handleSendMessage}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full bg-gradient-to-r from-ai-blue to-ai-purple flex items-center justify-center"
              >
                <Send className="h-5 w-5 text-white" />
              </motion.button>
            </div>
          </motion.div>

          {/* Features Panel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-effect rounded-3xl p-6">
              <h3 className="text-2xl font-bold mb-4 text-gradient">AI Capabilities</h3>
              <div className="space-y-4">
                {[
                  { icon: Code, title: "Code Generation", description: "Generate clean, efficient code in any language" },
                  { icon: Image, title: "Image Analysis", description: "Understand and describe visual content" },
                  { icon: FileText, title: "Text Processing", description: "Analyze and generate human-like text" }
                ].map((capability, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white/5 transition-colors duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-ai-blue to-ai-purple flex items-center justify-center flex-shrink-0">
                      <capability.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{capability.title}</h4>
                      <p className="text-sm text-gray-300">{capability.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="glass-effect rounded-3xl p-6">
              <h3 className="text-2xl font-bold mb-4 text-gradient">Recent Activity</h3>
              <div className="space-y-3">
                {[
                  "Generated Python script for data analysis",
                  "Created responsive React component",
                  "Analyzed market trends report",
                  "Wrote creative marketing copy"
                ].map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors duration-300"
                  >
                    <div className="w-2 h-2 bg-ai-cyan rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-300">{activity}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AIDemo;
