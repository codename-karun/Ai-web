import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowRight, Search, Filter, TrendingUp, Brain, Zap, Shield } from 'lucide-react';

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts', icon: Brain },
    { id: 'ai-news', name: 'AI News', icon: TrendingUp },
    { id: 'tutorials', name: 'Tutorials', icon: Zap },
    { id: 'research', name: 'Research', icon: Shield }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI: What to Expect in 2025',
      excerpt: 'Explore the groundbreaking AI advancements set to transform industries in 2025, from quantum computing to autonomous systems.',
      author: 'Dr. Sarah Chen',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'ai-news',
      image: 'ai-future',
      featured: true,
      tags: ['AI Trends', 'Future Tech', 'Innovation']
    },
    {
      id: 2,
      title: 'Building Neural Networks: A Complete Guide',
      excerpt: 'Step-by-step tutorial on creating and training neural networks from scratch using modern frameworks and best practices.',
      author: 'Michael Rodriguez',
      date: '2024-01-12',
      readTime: '12 min read',
      category: 'tutorials',
      image: 'neural-networks',
      tags: ['Tutorial', 'Deep Learning', 'Neural Networks']
    },
    {
      id: 3,
      title: 'AI Ethics: Navigating the Moral Landscape',
      excerpt: 'An in-depth analysis of ethical considerations in AI development and deployment, with practical guidelines for responsible innovation.',
      author: 'Emily Johnson',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'research',
      image: 'ai-ethics',
      tags: ['Ethics', 'AI Safety', 'Responsibility']
    },
    {
      id: 4,
      title: 'Transforming Healthcare with AI',
      excerpt: 'How artificial intelligence is revolutionizing patient care, drug discovery, and medical diagnostics in the healthcare industry.',
      author: 'Dr. James Wilson',
      date: '2024-01-08',
      readTime: '10 min read',
      category: 'ai-news',
      image: 'healthcare-ai',
      tags: ['Healthcare', 'Medical AI', 'Innovation']
    },
    {
      id: 5,
      title: 'Optimizing AI Models for Production',
      excerpt: 'Best practices for deploying and optimizing machine learning models in production environments for maximum performance.',
      author: 'Alex Kumar',
      date: '2024-01-05',
      readTime: '15 min read',
      category: 'tutorials',
      image: 'production-ai',
      tags: ['Production', 'Optimization', 'MLOps']
    },
    {
      id: 6,
      title: 'The Rise of Generative AI',
      excerpt: 'Understanding the impact of generative AI on creative industries and how businesses can leverage this transformative technology.',
      author: 'Lisa Park',
      date: '2024-01-03',
      readTime: '7 min read',
      category: 'research',
      image: 'generative-ai',
      tags: ['Generative AI', 'Creativity', 'Business']
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-ai-cyan/10 via-ai-purple/10 to-ai-pink/10"></div>
        <div className="absolute top-32 right-32 w-80 h-80 bg-ai-blue/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 left-32 w-80 h-80 bg-ai-purple/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
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
            <span className="text-sm font-medium">AI Insights & Updates</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">AI Blog &</span>
            <br />
            <span className="text-white">Resources</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Stay updated with the latest AI trends, tutorials, and research from our team of experts. 
            Discover insights that shape the future of artificial intelligence.
          </p>
        </motion.div>

        {/* Featured Post */}
        {featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="glass-effect rounded-3xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 lg:p-12">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="bg-gradient-to-r from-ai-purple to-ai-pink text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400 text-sm">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-white mb-4">{featuredPost.title}</h2>
                  <p className="text-gray-300 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-ai-blue to-ai-purple flex items-center justify-center">
                        <User className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-semibold">{featuredPost.author}</p>
                        <p className="text-gray-400 text-sm">{featuredPost.readTime}</p>
                      </div>
                    </div>
                  </div>
                  
                  <motion.button
                    className="ai-button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="flex items-center space-x-2">
                      <span>Read Full Article</span>
                      <ArrowRight className="h-5 w-5" />
                    </span>
                  </motion.button>
                </div>
                
                <div className="h-64 lg:h-auto bg-gradient-to-br from-ai-blue/20 to-ai-purple/20 flex items-center justify-center">
                  <Brain className="h-32 w-32 text-ai-blue/50" />
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full glass-effect rounded-full pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-ai-blue"
              />
            </div>
            
            <div className="flex space-x-2">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-ai-blue to-ai-purple text-white'
                      : 'glass-effect text-gray-300 hover:text-white'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <category.icon className="h-4 w-4" />
                  <span>{category.name}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(99, 102, 241, 0.3)"
              }}
              className="glass-effect rounded-2xl overflow-hidden group"
            >
              <div className="h-48 bg-gradient-to-br from-ai-blue/20 to-ai-purple/20 flex items-center justify-center">
                <Brain className="h-24 w-24 text-ai-blue/50 group-hover:scale-110 transition-transform duration-300" />
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="flex items-center space-x-1 text-gray-400 text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-400 text-sm">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-ai-cyan transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-ai-blue to-ai-purple flex items-center justify-center">
                      <User className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-sm text-gray-300">{post.author}</span>
                  </div>
                  
                  <motion.button
                    className="text-ai-blue hover:text-ai-purple transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.button>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {post.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-ai-blue/20 text-ai-blue px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass-effect rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-ai-blue/10 to-ai-purple/10"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-gradient mb-6">Stay Updated with AI Insights</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Get the latest AI news, tutorials, and research delivered straight to your inbox. 
                Join thousands of AI enthusiasts and professionals.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 glass-effect rounded-full px-6 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-ai-blue"
                />
                <motion.button
                  className="ai-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
