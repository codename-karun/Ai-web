import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Shield, Globe, Code, Database, Cpu, Sparkles } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "Neural Networks",
      description: "Advanced deep learning algorithms that mimic human brain functionality for complex problem-solving and pattern recognition.",
      gradient: "from-ai-blue to-ai-purple"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Process millions of data points in seconds with our optimized AI infrastructure and GPU-accelerated computing.",
      gradient: "from-ai-purple to-ai-pink"
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Enterprise-grade security with end-to-end encryption and GDPR compliance for all your AI interactions.",
      gradient: "from-ai-pink to-ai-cyan"
    },
    {
      icon: Globe,
      title: "Global Scale",
      description: "Deploy AI solutions worldwide with our distributed network spanning 50+ countries and 100+ data centers.",
      gradient: "from-ai-cyan to-ai-blue"
    },
    {
      icon: Code,
      title: "Code Generation",
      description: "Generate production-ready code in 50+ programming languages with AI-powered assistance and optimization.",
      gradient: "from-ai-blue to-ai-purple"
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Transform raw data into actionable insights with intelligent analysis algorithms and predictive modeling.",
      gradient: "from-ai-purple to-ai-pink"
    }
  ];

  const stats = [
    { value: "500%", label: "Productivity Increase", icon: Zap },
    { value: "99.9%", label: "Uptime Guarantee", icon: Shield },
    { value: "24/7", label: "AI Support", icon: Cpu },
    { value: "10M+", label: "Happy Users", icon: Sparkles },
    { value: "50+", label: "Countries", icon: Globe },
    { value: "1000+", label: "AI Models", icon: Brain }
  ];

  return (
    <section id="features" className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-ai-blue/5"></div>
      
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
            <span className="text-sm font-medium">Cutting-Edge Features</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Revolutionary AI</span>
            <br />
            <span className="text-white">Capabilities</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Harness the power of next-generation artificial intelligence with our comprehensive suite of tools and features. 
            From neural networks to natural language processing, we've got everything you need to transform your business.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(99, 102, 241, 0.3)"
              }}
              className="ai-card group"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              
              <div className="mt-6 flex items-center text-ai-blue group-hover:text-ai-purple transition-colors duration-300">
                <span className="font-medium">Learn more</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-effect rounded-3xl p-12"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-gradient">Trusted by Millions</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <motion.div
                  className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-ai-blue to-ai-purple flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className="h-8 w-8 text-white" />
                </motion.div>
                
                <div className="text-4xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
