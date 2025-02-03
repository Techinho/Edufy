import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitSuccess(false), 3000);
      }, 1500);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-gray-600 text-lg">
            We'd love to hear from you! Send us a message below.
          </p>
        </motion.div>

        {/* Form Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-12"
        >
          {/* Success Message */}
          {submitSuccess && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6"
            >
              Message sent successfully! 🎉
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.name ? 'border-red-500' : 'border-gray-200'
                } focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all`}
              />
              {errors.name && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-500 text-sm mt-1"
                >
                  {errors.name}
                </motion.p>
              )}
            </motion.div>

            {/* Email Field */}
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.email ? 'border-red-500' : 'border-gray-200'
                } focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all`}
              />
              {errors.email && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-500 text-sm mt-1"
                >
                  {errors.email}
                </motion.p>
              )}
            </motion.div>

            {/* Message Field */}
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.message ? 'border-red-500' : 'border-gray-200'
                } focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all`}
              />
              {errors.message && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-500 text-sm mt-1"
                >
                  {errors.message}
                </motion.p>
              )}
            </motion.div>

            {/* Submit Button */}
            <motion.div variants={itemVariants}>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 rounded-lg font-medium hover:shadow-lg transition-all disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1 }}
                      className="inline-block h-5 w-5 border-2 border-white border-t-transparent rounded-full mr-2"
                    />
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </motion.button>
            </motion.div>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Other Ways to Reach Us
          </h2>
          <div className="space-y-2 text-gray-600">
            <motion.p whileHover={{ scale: 1.02 }}>
              📧 Email:{" "}
              <a href="mailto:ilyassezzaouya4@gmail.com" className="text-blue-600 hover:underline">
                ilyassezzaouya4@gmail.com
              </a>
            </motion.p>
            <motion.p whileHover={{ scale: 1.02 }}>
              📱 Phone:{" "}
              <a href="tel:+212682146122" className="text-blue-600 hover:underline">
                +212 682 146 122
              </a>
            </motion.p>
            <motion.p whileHover={{ scale: 1.02 }}>
              📍 Address: Rabat,Morocco
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactUs;