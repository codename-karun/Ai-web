import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Shield, Crown, Rocket } from 'lucide-react';

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for individuals and small projects',
      price: { monthly: 29, annual: 290 },
      icon: Rocket,
      color: 'from-ai-blue to-ai-cyan',
      features: [
        'Up to 1,000 AI requests/month',
        'Basic neural network models',
        'Email support',
        'API access',
        '5 user accounts',
        'Basic analytics',
        'Community access'
      ],
      notIncluded: [
        'Custom models',
        'Priority support',
        'Advanced analytics',
        'White-label options'
      ]
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses and teams',
      price: { monthly: 99, annual: 990 },
      icon: Zap,
      color: 'from-ai-purple to-ai-pink',
      popular: true,
      features: [
        'Up to 10,000 AI requests/month',
        'Advanced neural network models',
        'Priority email & chat support',
        'Full API access with webhooks',
        '25 user accounts',
        'Advanced analytics dashboard',
        'Custom model training',
        'Integration support',
        'SLA guarantee'
      ],
      notIncluded: [
        'Dedicated account manager',
        'On-premise deployment',
        'Custom development'
      ]
    },
    {
      name: 'Enterprise',
      description: 'Complete solution for large organizations',
      price: { monthly: 299, annual: 2990 },
      icon: Crown,
      color: 'from-ai-pink to-ai-cyan',
      features: [
        'Unlimited AI requests',
        'All neural network models',
        '24/7 dedicated support',
        'Enterprise API with advanced features',
        'Unlimited user accounts',
        'Real-time analytics & reporting',
        'Custom model development',
        'White-label solutions',
        'On-premise deployment',
        'Dedicated account manager',
        'Custom integrations',
        'Advanced security features',
        'Compliance certifications'
      ],
      notIncluded: []
    }
  ];

  const faqs = [
    {
      question: 'Can I change plans anytime?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and wire transfers for enterprise accounts.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes! We offer a 14-day free trial for all plans with full access to features.'
    },
    {
      question: 'Do you offer custom pricing?',
      answer: 'Yes, we provide custom pricing for organizations with specific needs. Contact our sales team.'
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-ai-purple/10 via-ai-blue/10 to-ai-cyan/10"></div>
        <div className="absolute top-40 left-40 w-96 h-96 bg-ai-blue/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-40 w-96 h-96 bg-ai-purple/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
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
            <Crown className="h-5 w-5 text-ai-cyan" />
            <span className="text-sm font-medium">Pricing Plans</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">Choose Your</span>
            <br />
            <span className="text-white">AI Journey</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Flexible pricing plans designed to scale with your business. 
            Start small and grow as your AI needs expand.
          </p>

          {/* Billing Toggle */}
          <motion.div
            className="inline-flex glass-effect rounded-full p-1"
            whileHover={{ scale: 1.05 }}
          >
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                billingCycle === 'monthly'
                  ? 'bg-gradient-to-r from-ai-blue to-ai-purple text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                billingCycle === 'annual'
                  ? 'bg-gradient-to-r from-ai-blue to-ai-purple text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Annual <span className="text-green-400 ml-1">Save 20%</span>
            </button>
          </motion.div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredPlan(plan.name)}
              onMouseLeave={() => setHoveredPlan(null)}
              className={`relative ${
                plan.popular ? 'scale-105' : ''
              }`}
            >
              {plan.popular && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                >
                  <div className="bg-gradient-to-r from-ai-purple to-ai-pink text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="h-4 w-4" />
                    <span>Most Popular</span>
                  </div>
                </motion.div>
              )}

              <motion.div
                className={`glass-effect rounded-3xl p-8 h-full ${
                  hoveredPlan === plan.name ? 'scale-105' : ''
                } transition-all duration-300 ${
                  plan.popular ? 'border-2 border-ai-purple' : ''
                }`}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 30px 60px rgba(99, 102, 241, 0.3)"
                }}
              >
                <div className="text-center mb-8">
                  <motion.div
                    className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${plan.color} flex items-center justify-center`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <plan.icon className="h-10 w-10 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">
                      ${billingCycle === 'annual' ? plan.price.annual / 12 : plan.price.monthly}
                    </span>
                    <span className="text-gray-300">/month</span>
                    {billingCycle === 'annual' && (
                      <div className="text-sm text-green-400 mt-2">
                        ${plan.price.annual} billed annually
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05, duration: 0.3 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3"
                    >
                      <Check className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                  
                  {plan.notIncluded.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3 opacity-50">
                      <div className="h-5 w-5 border border-gray-500 rounded flex-shrink-0"></div>
                      <span className="text-gray-500">{feature}</span>
                    </div>
                  ))}
                </div>

                <motion.button
                  className={`w-full py-4 rounded-full font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'ai-button'
                      : 'glass-effect hover:bg-white/20 text-white'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {plan.popular ? 'Start Free Trial' : 'Get Started'}
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
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

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="glass-effect rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-ai-blue/10 to-ai-purple/10"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-gradient mb-6">Not sure which plan is right for you?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Our team is here to help you find the perfect solution for your AI needs. 
                Get personalized recommendations based on your requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.button
                  className="ai-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule a Consultation
                </motion.button>
                <motion.button
                  className="glass-effect px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Free Trial
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
