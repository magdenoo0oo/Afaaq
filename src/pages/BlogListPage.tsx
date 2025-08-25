import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, Search, Filter, BookOpen, TrendingUp, Calendar } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const BlogListPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  const categories = [...new Set(blogPosts.map(post => post.category))];

  // تصفية وترتيب المقالات
  const filteredPosts = blogPosts
    .filter(post => {
      const matchesSearch = searchTerm === '' || 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.author.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'oldest':
          return new Date(a.publishDate).getTime() - new Date(b.publishDate).getTime();
        case 'popular':
          return b.featured ? 1 : -1;
        case 'newest':
        default:
          return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
      }
    });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white" dir="rtl">
      {/* قسم البطل */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-teal-500/20 backdrop-blur-sm border border-teal-400/30 rounded-full px-6 py-2 mb-8">
            <BookOpen className="h-4 w-4 text-teal-400 ml-2" />
            <span className="text-teal-300 text-sm font-medium">جميع المقالات</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">مقالات المدونة</h1>
          <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
            استكشف مجموعتنا الكاملة من الرؤى الخبيرة والتحليل المتعمق والنصائح القابلة للتطبيق 
            عبر مواضيع التكنولوجيا والأعمال والصحة ونمط الحياة.
          </p>
        </div>
      </section>

      {/* البحث والمرشحات */}
      <section className="py-12 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* البحث */}
            <div className="flex-1 relative">
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="ابحث في المقالات..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pr-12 pl-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 text-lg"
              />
            </div>

            {/* المرشحات */}
            <div className="flex gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-white border border-gray-200 rounded-xl px-6 py-4 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 cursor-pointer"
              >
                <option value="all">جميع التصنيفات</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white border border-gray-200 rounded-xl px-6 py-4 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 cursor-pointer"
              >
                <option value="newest">الأحدث أولاً</option>
                <option value="oldest">الأقدم أولاً</option>
                <option value="popular">الأكثر شعبية</option>
              </select>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-slate-600">
              عرض <span className="font-semibold text-teal-600">{filteredPosts.length}</span> مقال
              {searchTerm && ` يطابق "${searchTerm}"`}
              {selectedCategory !== 'all' && ` في ${selectedCategory}`}
            </p>
          </div>
        </div>
      </section>

      {/* شبكة المقالات */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">لم يتم العثور على مقالات</h3>
              <p className="text-slate-600 mb-8">جرب تعديل مصطلحات البحث أو المرشحات</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setSortBy('newest');
                }}
                className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                مسح جميع المرشحات
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden transform hover:-translate-y-1">
                  <div className="aspect-video bg-gradient-to-r from-slate-100 to-gray-100 overflow-hidden relative">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {post.featured && (
                      <div className="absolute top-4 right-4">
                        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center">
                          <TrendingUp className="h-3 w-3 ml-1" />
                          مميز
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-gradient-to-r from-teal-100 to-blue-100 text-teal-800 px-3 py-1 rounded-full text-xs font-bold">
                        {post.category}
                      </span>
                      <div className="flex items-center text-xs text-slate-500">
                        <Calendar className="h-3 w-3 ml-1" />
                        <time dateTime={post.publishDate}>
                          {new Date(post.publishDate).toLocaleDateString('ar-SA', { 
                            month: 'short', 
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </time>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-600 transition-colors duration-300 leading-tight mb-3 line-clamp-2">
                      <Link to={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="text-slate-600 line-clamp-3 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-slate-500 border-t border-gray-100 pt-4">
                      <div className="flex items-center space-x-1 space-x-reverse">
                        <User className="h-4 w-4" />
                        <span className="font-medium">{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1 space-x-reverse">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* دعوة للاشتراك في النشرة */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">ابق محدثاً</h2>
          <p className="text-xl text-teal-100 mb-8">
            احصل على إشعار عند نشر مقالات جديدة في مجالات اهتمامك
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="أدخل بريدك الإلكتروني"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:outline-none"
            />
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap">
              اشترك
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogListPage;