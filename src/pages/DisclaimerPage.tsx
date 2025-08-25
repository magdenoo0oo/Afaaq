import React from 'react';
import { AlertTriangle, Info, Shield, ExternalLink } from 'lucide-react';

const DisclaimerPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-teal-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AlertTriangle className="h-16 w-16 text-orange-400 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Disclaimer</h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            Important information about the content and services provided on InsightHub
          </p>
          <p className="text-slate-400 mt-4">Last updated: January 1, 2025</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Overview */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Important Notice</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-orange-50 rounded-lg">
                <Info className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                <h3 className="font-semibold text-slate-900 mb-2">Informational Content</h3>
                <p className="text-sm text-slate-600">Content is for educational and informational purposes only</p>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <Shield className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-slate-900 mb-2">No Professional Advice</h3>
                <p className="text-sm text-slate-600">Content does not constitute professional advice</p>
              </div>
              <div className="text-center p-6 bg-red-50 rounded-lg">
                <AlertTriangle className="h-8 w-8 text-red-600 mx-auto mb-3" />
                <h3 className="font-semibold text-slate-900 mb-2">Use at Your Own Risk</h3>
                <p className="text-sm text-slate-600">Users assume full responsibility for their actions</p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">General Information</h2>
            
            <p className="text-slate-600 mb-6">
              The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, 
              InsightHub excludes all representations, warranties, obligations, and liabilities arising out of or in 
              connection with the information provided on this website.
            </p>

            <p className="text-slate-600 mb-6">
              InsightHub makes no representations or warranties in relation to the information on this website, including 
              but not limited to the accuracy, completeness, currency, or reliability of such information.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12">Professional Advice Disclaimer</h2>
            
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Medical and Health Information</h3>
            <p className="text-slate-600 mb-4">
              The health and wellness information provided on InsightHub is for educational and informational purposes only. 
              It is not intended as a substitute for professional medical advice, diagnosis, or treatment.
            </p>
            <ul className="text-slate-600 mb-6 pl-6 space-y-2">
              <li>Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition</li>
              <li>Never disregard professional medical advice or delay in seeking it because of something you have read on this website</li>
              <li>If you think you may have a medical emergency, call your doctor or emergency services immediately</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">Financial and Investment Information</h3>
            <p className="text-slate-600 mb-4">
              Any financial or investment information provided on InsightHub is for educational purposes only and should not be considered as financial advice.
            </p>
            <ul className="text-slate-600 mb-6 pl-6 space-y-2">
              <li>We are not licensed financial advisors, brokers, or investment professionals</li>
              <li>All investment decisions should be made in consultation with qualified financial professionals</li>
              <li>Past performance does not guarantee future results</li>
              <li>All investments carry risk of loss</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">Legal Information</h3>
            <p className="text-slate-600 mb-6">
              Any legal information provided on InsightHub is for general informational purposes only and does not constitute legal advice. 
              We are not a law firm and do not provide legal services. For specific legal advice, please consult with a qualified attorney.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">Business and Career Advice</h3>
            <p className="text-slate-600 mb-6">
              Business strategies, career advice, and professional development content are based on general principles and may not be suitable for your specific situation. 
              Consider consulting with business professionals or career counselors for personalized advice.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12">Accuracy and Completeness</h2>
            
            <p className="text-slate-600 mb-4">
              While we strive to provide accurate and up-to-date information, we make no guarantees about the accuracy, completeness, or reliability of the information provided.
            </p>
            <ul className="text-slate-600 mb-6 pl-6 space-y-2">
              <li>Information may become outdated or inaccurate over time</li>
              <li>We may update or modify content without notice</li>
              <li>Technical errors or omissions may occur</li>
              <li>Information from third-party sources may not be verified</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12">Third-Party Content and Links</h2>
            
            <p className="text-slate-600 mb-4">
              InsightHub may contain links to third-party websites, products, or services. We do not endorse or assume responsibility for:
            </p>
            <ul className="text-slate-600 mb-6 pl-6 space-y-2">
              <li>The content, accuracy, or opinions expressed on third-party websites</li>
              <li>The privacy practices or policies of third-party sites</li>
              <li>The products or services offered by third parties</li>
              <li>Any damages or losses related to your use of third-party content</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12">Personal Responsibility</h2>
            
            <p className="text-slate-600 mb-6">
              By using InsightHub, you acknowledge and agree that:
            </p>
            <ul className="text-slate-600 mb-6 pl-6 space-y-2">
              <li>You are solely responsible for your use of the information provided</li>
              <li>You will not hold InsightHub liable for any decisions made based on our content</li>
              <li>You will conduct your own research and due diligence before making important decisions</li>
              <li>You understand the risks associated with implementing any strategies or advice</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12">Limitation of Liability</h2>
            
            <p className="text-slate-600 mb-6">
              To the maximum extent permitted by law, InsightHub and its authors, contributors, and affiliates shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of this website or its content.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12">Changes to This Disclaimer</h2>
            
            <p className="text-slate-600 mb-6">
              We reserve the right to modify this disclaimer at any time. Changes will be effective immediately upon posting to this page. 
              Your continued use of InsightHub after any changes constitutes acceptance of the updated disclaimer.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12">Contact Information</h2>
            
            <p className="text-slate-600 mb-4">
              If you have questions about this disclaimer, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-slate-600 mb-2"><strong>Email:</strong> legal@insighthub.com</p>
              <p className="text-slate-600 mb-2"><strong>Address:</strong> 123 Business Ave, Suite 100, New York, NY 10001</p>
              <p className="text-slate-600"><strong>Phone:</strong> +1 (555) 123-4567</p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-lg mt-8">
              <div className="flex items-start">
                <AlertTriangle className="h-6 w-6 text-red-400 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold text-red-800 mb-2">Important Reminder</h3>
                  <p className="text-red-700 text-sm">
                    This disclaimer is an integral part of our Terms of Service. By using InsightHub, 
                    you agree to be bound by both this disclaimer and our complete terms and conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DisclaimerPage;