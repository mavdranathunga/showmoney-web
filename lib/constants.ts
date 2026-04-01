/**
 * Global Site Configuration
 * 
 * Edit these values to update contact information, social links, 
 * and SEO metadata across the entire website.
 */

export const SITE_CONFIG = {
  name: 'ShowMoney Pro',
  baseUrl: 'https://showmoneypro.vercel.app', // Update this after final deployment

  contact: {
    email: 'hello@showmoneypro.com',
    phone: {
      display: '+94 70 234 5678',
      url: '+94702345678',
    },
    whatsapp: {
      number: '94702345678',
      link: 'https://wa.me/94702345678',
      defaultMessage: "Hi, I'm interested in your Show Money service.",
    },
    address: 'Colombo, Sri Lanka',
    timezone: 'Asia/Colombo',
    timezoneLabel: 'Sri Lanka Standard Time (UTC+5:30)',
  },

  social: {
    facebook: 'https://facebook.com/showmoneypro',
    instagram: 'https://instagram.com/showmoneypro',
    messenger: 'https://m.me/showmoneypro',
  },

  metadata: {
    title: {
      default: 'ShowMoney Pro — Expert Visa Financial Documentation',
      template: '%s | ShowMoney Pro',
    },
    description: 'Expert proof-of-funds and show money documentation for Sri Lankan travelers. Get your bank statements and financial records embassy-ready in 24-48 hours.',
    keywords: [
      'show money sri lanka',
      'visa financial documentation',
      'proof of funds letter',
      'bank statement assistance colombo',
      'schengen visa show money',
      'us visa bank requirements',
      'japan visa financial docs',
    ],
  },

  stats: {
    clients: '5,000+',
    rating: '4.9★',
  }
};
