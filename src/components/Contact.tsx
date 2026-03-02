import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Users, Clock, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: ['hello@airevolution.com', 'support@airevolution.com'],
      color: 'from-ai-blue to-ai-purple'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+1 (555) 123-4567', '+44 20 7123 4567'],
      color: 'from-ai-purple to-ai-pink'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['San Francisco, CA', 'London, UK', 'Tokyo, Japan'],
      color: 'from-ai-pink to-ai-cyan'
    }
  ];

  const departments = [
    {
      icon: Users,
      name: 'Sales Team',
      email: 'sales@airevolution.com',
      description: 'Interested in our AI solutions? Let\'s discuss how we can transform your business.',
      responseTime: 'Within 2 hours'
    },
    {
      icon: MessageSquare,
      name: 'Technical Support',
      email: 'support@airevolution.com',
      description: 'Need help with implementation or troubleshooting? Our experts are here 24/7.',
      responseTime: 'Within 30 minutes'
    },
    {
      icon: Users,
      name: 'Partnerships',
      email: 'partners@airevolution.com',
      description: 'Looking to integrate our AI technology? Let\'s explore collaboration opportunities.',
      responseTime: 'Within 4 hours'
    }
  ];

  const faqs = [
    {
      question: 'What industries do you serve?',
      answer: 'We serve healthcare, finance, retail, manufacturing, education, and technology sectors with specialized AI solutions.'
    },
    {
      question: 'How quickly can we implement your AI solutions?',
      answer: 'Most implementations are completed within 2-4 weeks, depending on complexity and integration requirements.'
    },
    {
      question: 'Do you offer custom AI development?',
      answer: 'Yes, we provide custom AI model development tailored to your specific business needs and requirements.'
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We offer 24/7 technical support, dedicated account managers, and comprehensive training programs.'
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-ai-cyan/10 via-ai-purple/10 to-ai-pink/10"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-ai-blue/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-ai-purple/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
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
            <MessageSquare className="h-5 w-5 text-ai-cyan" />
            <span className="text-sm font-medium">Get in Touch</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">Let's Build the</span>
            <br />
            <span className="text-white">Future Together</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Have questions about our AI solutions? Ready to transform your business? 
            Our team of experts is here to help you every step of the way.
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {contactInfo.map((info, index) => (
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
              className="glass-effect rounded-2xl p-8 text-center group"
            >
              <motion.div
                className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${info.color} flex items-center justify-center`}
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <info.icon className="h-10 w-10 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-4">{info.title}</h3>
              <div className="space-y-2">
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-300">{detail}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Form and Departments */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="glass-effect rounded-3xl p-8"
          >
            <h2 className="text-3xl font-bold text-gradient mb-6">Send Us a Message</h2>
            
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-300">We'll get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-white mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full glass-effect rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-ai-blue"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label className="block text-white mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full glass-effect rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-ai-blue"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-white mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full glass-effect rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-ai-blue"
                    placeholder="Acme Corp"
                  />
                </div>
                
                <div>
                  <label className="block text-white mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full glass-effect rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-ai-blue resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                
                <motion.button
                  type="submit"
                  className="ai-button w-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="flex items-center justify-center space-x-2">
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </span>
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Departments */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-gradient mb-6">Reach the Right Team</h2>
            
            {departments.map((dept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="glass-effect rounded-2xl p-6 group"
              >
                <div className="flex items-start space-x-4">
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-gradient-to-r from-ai-blue to-ai-purple flex items-center justify-center flex-shrink-0"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <dept.icon className="h-6 w-6 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{dept.name}</h3>
                    <p className="text-gray-300 mb-3">{dept.description}</p>
                    <div className="flex items-center justify-between">
                      <a href={`mailto:${dept.email}`} className="text-ai-blue hover:text-ai-purple transition-colors">
                        {dept.email}
                      </a>
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <Clock className="h-4 w-4" />
                        <span>{dept.responseTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-gradient">Frequently Asked Questions</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="glass-effect rounded-2xl p-6"
              >
                <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
