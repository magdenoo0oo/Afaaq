import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, Search, Filter, Archive, ChevronDown } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const ArchivePage: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  // الحصول على السنوات والتصنيفات الفريدة
  const years = [...new Set(blogPosts.map(post => new Date(post.publishDate).getFullYear().toString()))].sort().reverse();
  const categories = [...new Set(blogPosts.map(post => post.category))];

  // تصفية المقالات
  const filteredPosts = blogPosts.filter(post => {
    const matchesYear = selectedYear === 'all' || new Date(post.publishDate).getFullYear().toString() === selectedYear;
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesYear && matchesCategory && matchesSearch;
  });

  // تجميع المقالات حسب الشهر والسنة
  const groupedPosts = filteredPosts.reduce((acc, post) => {
    const date = new Date(post.publishDate);
    const monthYear = date.toLocaleDateString('ar-SA', { year: 'numeric', month: 'long' });
    
    if (!acc[monthYear]) {
      acc[monthYear] = [];
    }
    acc[monthYear].push(post);
    
    return acc;
  }, {} as Record<string, typeof blogPosts>);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white" dir="rtl">
      {/* قسم البطل */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-teal-500/20 backdrop-blur-sm border border-teal-400/30 rounded-full px-6 py-2 mb-8">
            <Archive className="h-4 w-4 text-teal-400 ml-2" />
            <span className="text-teal-300 text-sm font-medium">المجموعة الكاملة</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">أرشيف المقالات</h1>
          <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
            تصفح مجموعتنا الكاملة من المقالات المنظمة حسب التاريخ والتصنيف. 
            اعثر على ما تبحث عنه بالضبط باستخدام أدوات البحث والتصفية القوية.
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
                placeholder="ابحث في المقالات والكتاب والمواضيع..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pr-12 pl-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 text-lg"
              />
            </div>

            {/* المرشحات */}
            <div className="flex gap-4">
              <div className="relative">
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="appearance-none bg-white border border-gray-200 rounded-xl px-6 py-4 pl-12 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 cursor-pointer"
                >
                  <option value="all">جميع السنوات</option>
                  {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
                <ChevronDown className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400 pointer-events-none" />
              </div>

              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="appearance-none bg-white border border-gray-200 rounded-xl px-6 py-4 pl-12 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 cursor-pointer"
                >
                  <option value="all">جميع التصنيفات</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                <ChevronDown className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* عدد النتائج */}
          <div className="mt-6 text-center">
            <p className="text-slate-600">
              عرض <span className="font-semibold text-teal-600">{filteredPosts.length}</span> مقال
              {searchTerm && ` يطابق "${searchTerm}"`}
              {selectedYear !== 'all' && ` من ${selectedYear}`}
              {selectedCategory !== 'all' && ` في ${selectedCategory}`}
            </p>
          </div>
        </div>
      </section>

      {/* المقالات حسب الشهر */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {Object.keys(groupedPosts).length === 0 ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">لم يتم العثور على مقالات</h3>
              <p className="text-slate-600 mb-8">جرب تعديل مصطلحات البحث أو المرشحات</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedYear('all');
                  setSelectedCategory('all');
                }}
                className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                مسح جميع المرشحات
              </button>
            </div>
          ) : (
            <div className="space-y-12">
              {Object.entries(groupedPosts)
                .sort(([a], [b]) => new Date(b + ' 1').getTime() - new Date(a + ' 1').getTime())
                .map(([monthYear, posts]) => (
                  <div key={monthYear}>
                    <div className="flex items-center mb-8">
                      <Calendar className="h-6 w-6 text-teal-600 ml-3" />
                      <h2 className="text-3xl font-bold text-slate-900">{monthYear}</h2>
                      <div className="flex-1 h-px bg-gradient-to-l from-teal-200 to-transparent mr-6"></div>
                      <span className="text-slate-500 font-medium">{posts.length} مقال</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {posts.map((post) => (
                        <article key={post.id} className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden transform hover:-translate-y-1">
                          <div className="aspect-video bg-gradient-to-r from-slate-100 to-gray-100 overflow-hidden">
                            <img 
                              src={post.image} 
                              alt={post.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                          <div className="p-6">
                            <div className="flex items-center justify-between mb-4">
                              <span className="bg-gradient-to-r from-teal-100 to-blue-100 text-teal-800 px-3 py-1 rounded-full text-xs font-bold">
                                {post.category}
                              </span>
                              <time className="text-xs text-slate-500">
                                {new Date(post.publishDate).toLocaleDateString('ar-SA', { 
                                  month: 'short', 
                                  day: 'numeric' 
                                })}
                              </time>
                            </div>
                            
                            <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-600 transition-colors duration-300 leading-tight mb-3 line-clamp-2">
                              <Link to={`/blog/${post.slug}`}>
                                {post.title}
                              </Link>
                            </h3>
                            
                            <p className="text-sm text-slate-600 line-clamp-2 mb-4 leading-relaxed">
                              {post.excerpt}
                            </p>
                            
                            <div className="flex items-center justify-between text-xs text-slate-500 border-t border-gray-100 pt-4">
                              <div className="flex items-center space-x-1 space-x-reverse">
                                <User className="h-3 w-3" />
                                <span className="font-medium">{post.author}</span>
                              </div>
                              <div className="flex items-center space-x-1 space-x-reverse">
                                <Clock className="h-3 w-3" />
                                <span>{post.readTime}</span>
                              </div>
                            </div>
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
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

export default ArchivePage;