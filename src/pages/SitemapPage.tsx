import React from 'react';
import { Link } from 'react-router-dom';
import { Map, Home, User, BookOpen, Mail, Shield, FileText, Archive, Users, Rss } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const SitemapPage: React.FC = () => {
  const categories = [...new Set(blogPosts.map(post => post.category))];
  const recentPosts = blogPosts.slice(0, 10);

  const siteStructure = [
    {
      title: 'Main Pages',
      icon: Home,
      links: [
        { name: 'Home', path: '/', description: 'Homepage with featured articles and latest content' },
        { name: 'About', path: '/about', description: 'Learn about InsightHub and our mission' },
        { name: 'Contact', path: '/contact', description: 'Get in touch with our team' },
        { name: 'Categories', path: '/categories', description: 'Browse articles by topic' },
        { name: 'Archive', path: '/archive', description: 'Complete archive of all articles' },
        { name: 'Authors', path: '/authors', description: 'Meet our expert contributors' },
        { name: 'Newsletter', path: '/newsletter', description: 'Subscribe to our weekly newsletter' }
      ]
    },
    {
      title: 'Legal Pages',
      icon: Shield,
      links: [
        { name: 'Privacy Policy', path: '/privacy-policy', description: 'How we protect your privacy' },
        { name: 'Terms of Service', path: '/terms-of-service', description: 'Terms and conditions of use' },
        { name: 'Disclaimer', path: '/disclaimer', description: 'Important disclaimers and limitations' },
        { name: 'Cookie Policy', path: '/cookie-policy', description: 'How we use cookies on our site' }
      ]
    },
    {
      title: 'Utility Pages',
      icon: FileText,
      links: [
        { name: 'Sitemap', path: '/sitemap', description: 'Complete site structure and navigation' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-teal-500/20 backdrop-blur-sm border border-teal-400/30 rounded-full px-6 py-2 mb-8">
            <Map className="h-4 w-4 text-teal-400 mr-2" />
            <span className="text-teal-300 text-sm font-medium">SITE NAVIGATION</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Sitemap</h1>
          <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
            Find everything on InsightHub quickly and easily. This comprehensive sitemap shows 
            all our pages, articles, and resources in one organized location.
          </p>
        </div>
      </section>

      {/* Main Site Structure */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {siteStructure.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <div key={index} className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-teal-100 to-blue-100 p-3 rounded-xl mr-4">
                      <IconComponent className="h-6 w-6 text-teal-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">{section.title}</h2>
                  </div>
                  
                  <div className="space-y-4">
                    {section.links.map((link, linkIndex) => (
                      <Link
                        key={linkIndex}
                        to={link.path}
                        className="block group hover:bg-gray-50 rounded-lg p-4 transition-all duration-300"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className="font-semibold text-slate-900 group-hover:text-teal-600 transition-colors mb-1">
                              {link.name}
                            </h3>
                            <p className="text-sm text-slate-600 leading-relaxed">
                              {link.description}
                            </p>
                          </div>
                          <div className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-6">
              <BookOpen className="h-4 w-4 mr-2" />
              <span className="text-sm font-semibold">CONTENT CATEGORIES</span>
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Browse by Category</h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Explore our content organized by topic and expertise area
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => {
              const categoryPosts = blogPosts.filter(post => post.category === category);
              const colors = [
                'from-blue-500 to-cyan-500',
                'from-green-500 to-emerald-500',
                'from-red-500 to-pink-500',
                'from-orange-500 to-yellow-500'
              ];
              const colorClass = colors[index % colors.length];

              return (
                <div key={category} className="group">
                  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1">
                    <div className={`bg-gradient-to-r ${colorClass} p-6 text-white`}>
                      <h3 className="text-xl font-bold mb-2">{category}</h3>
                      <p className="text-white/90 text-sm">{categoryPosts.length} articles</p>
                    </div>
                    <div className="p-6">
                      <div className="space-y-3">
                        {categoryPosts.slice(0, 3).map((post) => (
                          <Link
                            key={post.id}
                            to={`/blog/${post.slug}`}
                            className="block text-sm text-slate-700 hover:text-teal-600 transition-colors line-clamp-1"
                          >
                            • {post.title}
                          </Link>
                        ))}
                        {categoryPosts.length > 3 && (
                          <p className="text-xs text-slate-500">
                            +{categoryPosts.length - 3} more articles
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-orange-100 text-orange-800 rounded-full px-4 py-2 mb-6">
              <Archive className="h-4 w-4 mr-2" />
              <span className="text-sm font-semibold">RECENT CONTENT</span>
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Latest Articles</h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Our most recently published content
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recentPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="group flex items-start space-x-4 p-4 hover:bg-gray-50 rounded-lg transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="bg-teal-100 text-teal-800 px-2 py-1 rounded text-xs font-semibold">
                        {post.category}
                      </span>
                      <span className="text-xs text-slate-500">
                        {new Date(post.publishDate).toLocaleDateString()}
                      </span>
                    </div>
                    <h3 className="font-semibold text-slate-900 group-hover:text-teal-600 transition-colors line-clamp-2 mb-1">
                      {post.title}
                    </h3>
                    <p className="text-sm text-slate-600">By {post.author}</p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-8 pt-8 border-t border-gray-100">
              <Link 
                to="/archive"
                className="inline-flex items-center bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <Archive className="h-5 w-5 mr-2" />
                View Complete Archive
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-teal-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Site Statistics</h2>
            <p className="text-slate-300">Everything you can find on InsightHub</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-teal-400 mb-2">{blogPosts.length}</div>
              <div className="text-slate-300">Total Articles</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-teal-400 mb-2">{categories.length}</div>
              <div className="text-slate-300">Categories</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-teal-400 mb-2">12</div>
              <div className="text-slate-300">Total Pages</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-teal-400 mb-2">6</div>
              <div className="text-slate-300">Expert Authors</div>
            </div>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users className="h-16 w-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">Need Help Finding Something?</h2>
          <p className="text-xl text-teal-100 mb-8">
            Can't find what you're looking for? Our team is here to help you navigate our content.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center bg-white text-teal-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Mail className="h-5 w-5 mr-2" />
            Contact Support
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SitemapPage;