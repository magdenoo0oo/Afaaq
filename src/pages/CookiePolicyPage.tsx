import React, { useState } from 'react';
import { Cookie, Settings, Shield, Info, Check, X } from 'lucide-react';

const CookiePolicyPage: React.FC = () => {
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true,
    analytics: true,
    marketing: false,
    preferences: true
  });

  const handlePreferenceChange = (type: keyof typeof cookiePreferences) => {
    if (type === 'necessary') return; // Necessary cookies cannot be disabled
    
    setCookiePreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const cookieTypes = [
    {
      name: 'Necessary Cookies',
      key: 'necessary' as const,
      description: 'Essential for the website to function properly. These cannot be disabled.',
      examples: ['Session management', 'Security features', 'Basic functionality'],
      required: true
    },
    {
      name: 'Analytics Cookies',
      key: 'analytics' as const,
      description: 'Help us understand how visitors interact with our website.',
      examples: ['Google Analytics', 'Page views', 'User behavior tracking'],
      required: false
    },
    {
      name: 'Marketing Cookies',
      key: 'marketing' as const,
      description: 'Used to deliver personalized advertisements and track campaign effectiveness.',
      examples: ['Ad targeting', 'Social media integration', 'Conversion tracking'],
      required: false
    },
    {
      name: 'Preference Cookies',
      key: 'preferences' as const,
      description: 'Remember your settings and preferences for a better user experience.',
      examples: ['Language settings', 'Theme preferences', 'Layout customization'],
      required: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-teal-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Cookie className="h-16 w-16 text-orange-400 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Cookie Policy</h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            Learn how we use cookies to improve your experience on InsightHub
          </p>
          <p className="text-slate-400 mt-4">Last updated: January 1, 2025</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Overview */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">What Are Cookies?</h2>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg mb-8">
              <div className="flex items-start">
                <Info className="h-6 w-6 text-blue-400 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold text-blue-800 mb-2">Quick Definition</h3>
                  <p className="text-blue-700">
                    Cookies are small text files that are stored on your device when you visit a website. 
                    They help websites remember information about your visit, making your next visit easier and more useful.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Cookie Preferences */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Manage Your Cookie Preferences</h2>
            <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Settings className="h-6 w-6 text-teal-600 mr-3" />
                <h3 className="text-xl font-semibold text-slate-900">Cookie Settings</h3>
              </div>
              
              <div className="space-y-6">
                {cookieTypes.map((type) => (
                  <div key={type.key} className="border border-gray-100 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-slate-900 mb-2">{type.name}</h4>
                        <p className="text-slate-600 mb-3">{type.description}</p>
                        <div className="text-sm text-slate-500">
                          <strong>Examples:</strong> {type.examples.join(', ')}
                        </div>
                      </div>
                      <div className="ml-6">
                        <button
                          onClick={() => handlePreferenceChange(type.key)}
                          disabled={type.required}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 ${
                            cookiePreferences[type.key] 
                              ? 'bg-teal-600' 
                              : 'bg-gray-200'
                          } ${type.required ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              cookiePreferences[type.key] ? 'translate-x-6' : 'translate-x-1'
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                    {type.required && (
                      <div className="flex items-center text-sm text-orange-600">
                        <Shield className="h-4 w-4 mr-1" />
                        <span>Required for website functionality</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">
                    <Check className="h-5 w-5 mr-2" />
                    Save Preferences
                  </button>
                  <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-slate-700 px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">
                    <X className="h-5 w-5 mr-2" />
                    Reject All (Except Necessary)
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Information */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">How We Use Cookies</h2>
            
            <p className="text-slate-600 mb-6">
              InsightHub uses cookies to enhance your browsing experience, analyze site traffic, and understand where our visitors are coming from. 
              We use both first-party cookies (set by our website) and third-party cookies (set by external services).
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">Types of Cookies We Use</h3>

            <h4 className="text-lg font-semibold text-slate-900 mb-3">1. Strictly Necessary Cookies</h4>
            <p className="text-slate-600 mb-4">
              These cookies are essential for the website to function and cannot be switched off. They are usually only set in response to actions made by you, such as:
            </p>
            <ul className="text-slate-600 mb-6 pl-6 space-y-2">
              <li>Setting your privacy preferences</li>
              <li>Logging in or filling in forms</li>
              <li>Maintaining your session while browsing</li>
              <li>Enabling core website functionality</li>
            </ul>

            <h4 className="text-lg font-semibold text-slate-900 mb-3">2. Performance and Analytics Cookies</h4>
            <p className="text-slate-600 mb-4">
              These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously:
            </p>
            <ul className="text-slate-600 mb-6 pl-6 space-y-2">
              <li><strong>Google Analytics:</strong> Tracks page views, session duration, and user behavior</li>
              <li><strong>Performance monitoring:</strong> Helps us identify and fix technical issues</li>
              <li><strong>Content optimization:</strong> Shows us which articles are most popular</li>
            </ul>

            <h4 className="text-lg font-semibold text-slate-900 mb-3">3. Functionality Cookies</h4>
            <p className="text-slate-600 mb-4">
              These cookies enable enhanced functionality and personalization:
            </p>
            <ul className="text-slate-600 mb-6 pl-6 space-y-2">
              <li>Remembering your preferences and settings</li>
              <li>Providing personalized content recommendations</li>
              <li>Enabling social media features</li>
              <li>Improving user interface based on your behavior</li>
            </ul>

            <h4 className="text-lg font-semibold text-slate-900 mb-3">4. Targeting and Advertising Cookies</h4>
            <p className="text-slate-600 mb-6">
              These cookies may be set through our site by advertising partners to build a profile of your interests and show you relevant ads on other sites. 
              They work by uniquely identifying your browser and device.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12">Third-Party Cookies</h2>
            
            <p className="text-slate-600 mb-4">
              We work with several third-party services that may set cookies on your device:
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h4 className="font-semibold text-slate-900 mb-3">Google Services</h4>
              <ul className="text-slate-600 space-y-2">
                <li><strong>Google Analytics:</strong> Website traffic analysis and user behavior tracking</li>
                <li><strong>Google AdSense:</strong> Displaying relevant advertisements</li>
                <li><strong>Google Fonts:</strong> Loading custom fonts for better typography</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h4 className="font-semibold text-slate-900 mb-3">Social Media Platforms</h4>
              <ul className="text-slate-600 space-y-2">
                <li><strong>Social sharing buttons:</strong> Enable sharing content on social platforms</li>
                <li><strong>Embedded content:</strong> Videos, posts, or widgets from social media</li>
                <li><strong>Social login:</strong> If available, allows login through social accounts</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12">Managing Cookies</h2>
            
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Browser Settings</h3>
            <p className="text-slate-600 mb-4">
              Most web browsers allow you to control cookies through their settings. You can:
            </p>
            <ul className="text-slate-600 mb-6 pl-6 space-y-2">
              <li>View what cookies are stored on your device</li>
              <li>Delete existing cookies</li>
              <li>Block cookies from specific sites</li>
              <li>Block third-party cookies</li>
              <li>Delete all cookies when you close your browser</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">Browser-Specific Instructions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-slate-900 mb-2">Chrome</h4>
                <p className="text-sm text-slate-600">Settings → Privacy and Security → Cookies and other site data</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-slate-900 mb-2">Firefox</h4>
                <p className="text-sm text-slate-600">Options → Privacy & Security → Cookies and Site Data</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-slate-900 mb-2">Safari</h4>
                <p className="text-sm text-slate-600">Preferences → Privacy → Manage Website Data</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-slate-900 mb-2">Edge</h4>
                <p className="text-sm text-slate-600">Settings → Cookies and site permissions → Cookies and site data</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12">Impact of Disabling Cookies</h2>
            
            <p className="text-slate-600 mb-4">
              While you can browse our website with cookies disabled, some features may not work properly:
            </p>
            <ul className="text-slate-600 mb-6 pl-6 space-y-2">
              <li>Personalized content recommendations may not be available</li>
              <li>Your preferences and settings won't be remembered</li>
              <li>Some interactive features may not function correctly</li>
              <li>We won't be able to improve our website based on usage data</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12">Updates to This Policy</h2>
            
            <p className="text-slate-600 mb-6">
              We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. 
              We will notify you of any material changes by posting the updated policy on this page.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12">Contact Us</h2>
            
            <p className="text-slate-600 mb-4">
              If you have any questions about our use of cookies, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-slate-600 mb-2"><strong>Email:</strong> privacy@insighthub.com</p>
              <p className="text-slate-600 mb-2"><strong>Address:</strong> 123 Business Ave, Suite 100, New York, NY 10001</p>
              <p className="text-slate-600"><strong>Phone:</strong> +1 (555) 123-4567</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicyPage;