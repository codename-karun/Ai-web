import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Users, Lightbulb, Target, Award, TrendingUp, Globe, Shield } from 'lucide-react';

const About: React.FC = () => {
  const timeline = [
    {
      year: '2020',
      title: 'The Beginning',
      description: 'Founded with a vision to democratize AI technology for businesses of all sizes.',
      icon: Lightbulb
    },
    {
      year: '2021',
      title: 'Breakthrough',
      description: 'Launched our first neural network model with 95% accuracy rate.',
      icon: Brain
    },
    {
      year: '2022',
      title: 'Global Expansion',
      description: 'Expanded to 50+ countries and served over 1 million users worldwide.',
      icon: Globe
    },
    {
      year: '2023',
      title: 'Innovation Leader',
      description: 'Recognized as the leading AI platform with 1000+ enterprise models.',
      icon: Award
    },
    {
      year: '2024',
      title: 'Future Forward',
      description: 'Pioneering next-generation AI with quantum computing integration.',
      icon: TrendingUp
    }
  ];

  const values = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with AI technology, constantly exploring new frontiers and breakthrough applications.'
    },
    {
      icon: Users,
      title: 'Human-Centric',
      description: 'Our AI is designed to augment human potential, creating partnerships between people and intelligent systems.'
    },
    {
      icon: Shield,
      title: 'Ethical AI',
      description: 'We prioritize privacy, security, and ethical considerations in every AI model we develop and deploy.'
    },
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'Our focus is on delivering tangible business outcomes and measurable ROI for our clients.'
    }
  ];

  const stats = [
    { value: '500+', label: 'AI Experts', icon: Users },
    { value: '$50M+', label: 'Funding Raised', icon: TrendingUp },
    { value: '100+', label: 'Patents Filed', icon: Lightbulb },
    { value: '24/7', label: 'Global Support', icon: Globe }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-ai-purple/10 via-ai-blue/10 to-ai-cyan/10"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-ai-blue/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-ai-purple/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center space-x-2 glass-effect rounded-full px-6 py-3 mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <Brain className="h-5 w-5 text-ai-cyan" />
            <span className="text-sm font-medium">Our Story</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">Pioneering the</span>
            <br />
            <span className="text-white">AI Revolution</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            From a bold vision to a global leader in artificial intelligence, 
            we've been transforming businesses and empowering innovation since 2020. 
            Our journey is fueled by passion, expertise, and an unwavering commitment to excellence.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-effect rounded-2xl p-6 text-center group"
            >
              <motion.div
                className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-ai-blue to-ai-purple flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <stat.icon className="h-8 w-8 text-white" />
              </motion.div>
              <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-gradient">Our Journey</span>
          </h2>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-ai-blue to-ai-purple"></div>
            
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
              >
                <div className="w-1/2"></div>
                <motion.div
                  className="w-12 h-12 rounded-full bg-gradient-to-r from-ai-blue to-ai-purple flex items-center justify-center z-10"
                  whileHover={{ scale: 1.2 }}
                >
                  <item.icon className="h-6 w-6 text-white" />
                </motion.div>
                <motion.div
                  className="w-1/2 px-8"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="glass-effect rounded-2xl p-6">
                    <div className="text-2xl font-bold text-ai-cyan mb-2">{item.year}</div>
                    <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-gradient">Our Core Values</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
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
                className="glass-effect rounded-2xl p-8 group"
              >
                <div className="flex items-start space-x-4">
                  <motion.div
                    className="w-16 h-16 rounded-2xl bg-gradient-to-r from-ai-blue to-ai-purple flex items-center justify-center flex-shrink-0"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <value.icon className="h-8 w-8 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="glass-effect rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-ai-blue/10 to-ai-purple/10"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-gradient mb-6">Join Our Mission</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Be part of the AI revolution. Whether you're a developer, researcher, or business leader, 
                there's a place for you in our journey to shape the future of artificial intelligence.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.button
                  className="ai-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Careers
                </motion.button>
                <motion.button
                  className="glass-effect px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Partner With Us
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
