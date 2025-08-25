import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, Tag, ArrowRight, TrendingUp, Star, Users, BookOpen } from 'lucide-react';
import { getFeaturedPosts, getRecentPosts } from '../data/blogPosts';

const HomePage: React.FC = () => {
  const featuredPosts = getFeaturedPosts();
  const recentPosts = getRecentPosts();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white" dir="rtl">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 text-white py-16 sm:py-20 lg:py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-teal-500/20 backdrop-blur-sm border border-teal-400/30 rounded-full px-6 py-2 mb-8">
              <Star className="h-4 w-4 text-teal-400 mr-2" />
              <span className="text-teal-300 text-xs sm:text-sm font-medium">موثوق من قبل أكثر من 50,000 قارئ حول العالم</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              رؤى <span className="text-teal-400">مهمة</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
              اكتشف التحليل المتعمق ووجهات النظر الخبيرة والرؤى القابلة للتطبيق في مجالات التكنولوجيا 
              والأعمال والصحة ونمط الحياة التي تشكل عالمنا.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/categories" className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 text-base sm:text-lg transform hover:scale-105 shadow-xl hover:shadow-2xl">
                استكشف المقالات
              </Link>
              <Link to="/newsletter" className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 text-base sm:text-lg transform hover:scale-105">
                اشترك في النشرة
              </Link>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 mt-12 sm:mt-16 lg:mt-20">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-teal-400 mb-2">50K+</div>
              <div className="text-slate-300 text-sm sm:text-base">قارئ شهرياً</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-teal-400 mb-2">200+</div>
              <div className="text-slate-300 text-sm sm:text-base">مقال منشور</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-teal-400 mb-2">15+</div>
              <div className="text-slate-300 text-sm sm:text-base">كاتب خبير</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-teal-400 mb-2">98%</div>
              <div className="text-slate-300 text-sm sm:text-base">معدل الرضا</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-orange-100 text-orange-800 rounded-full px-4 py-2 mb-6">
              <TrendingUp className="h-4 w-4 mr-2" />
              <span className="text-sm font-semibold">المحتوى المميز</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6">المقالات المميزة</h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              محتوانا الأكثر شعبية وتأثيراً، منتقى بعناية لتحقيق أقصى قيمة
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {featuredPosts.map((post) => (
              <article key={post.id} className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2">
                <div className="aspect-video bg-gradient-to-r from-teal-100 to-blue-100 relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-6 left-6">
                    <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-teal-600 transition-colors duration-300">
                    <Link to={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 mb-6 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                    <div className="flex items-center space-x-2 sm:space-x-4 space-x-reverse">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span className="font-medium text-xs sm:text-sm">{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span className="text-xs sm:text-sm">{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 2).map((tag, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="text-teal-600 hover:text-teal-700 font-bold flex items-center space-x-2 space-x-reverse group-hover:translate-x-1 transition-transform duration-300 text-sm"
                    >
                      <span>اقرأ المزيد</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-6">
              <BookOpen className="h-4 w-4 mr-2" />
              <span className="text-sm font-semibold">أحدث المحتوى</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6">أحدث المقالات</h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              ابق على اطلاع بأحدث رؤانا وتحليلاتنا
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {recentPosts.map((post) => (
              <article key={post.id} className="group cursor-pointer bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden transform hover:-translate-y-1">
                <div className="aspect-video bg-gradient-to-r from-slate-100 to-gray-100 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 sm:p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="bg-gradient-to-r from-teal-100 to-blue-100 text-teal-800 px-3 py-1 rounded-full text-xs font-bold">
                      {post.category}
                    </span>
                    <span className="text-xs text-slate-500 font-medium hidden sm:block">{post.readTime}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-teal-600 transition-colors duration-300 leading-tight line-clamp-2">
                    <Link to={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                    <span className="text-xs sm:text-sm text-slate-600 font-medium">{post.author}</span>
                    <span className="text-xs text-slate-400">
                      {new Date(post.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/archive" className="inline-block bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base">
              عرض جميع المقالات
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-teal-600 via-blue-600 to-purple-600 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-2 mb-8">
            <Users className="h-4 w-4 text-white mr-2" />
            <span className="text-white text-xs sm:text-sm font-medium">انضم إلى أكثر من 50,000 مشترك</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">ابق على اطلاع</h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
            احصل على رؤى أسبوعية تُسلم مباشرة إلى صندوق بريدك. لا رسائل مزعجة، ألغِ الاشتراك في أي وقت.
          </p>
          <div className="flex flex-col sm:flex-row max-w-lg mx-auto gap-4 px-4">
            <input
              type="email"
              placeholder="أدخل عنوان بريدك الإلكتروني"
              className="flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-xl border-0 focus:ring-4 focus:ring-white/50 focus:outline-none text-base sm:text-lg shadow-lg"
            />
            <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold transition-all duration-300 whitespace-nowrap transform hover:scale-105 shadow-lg hover:shadow-xl text-base sm:text-lg">
              اشترك الآن
            </button>
          </div>
          <p className="text-white/70 text-xs sm:text-sm mt-6">
            ✨ مجاني إلى الأبد • 📧 ملخص أسبوعي • 🚫 لا رسائل مزعجة • ✅ ألغِ الاشتراك في أي وقت
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;