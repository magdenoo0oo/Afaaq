import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Briefcase, Heart, Coffee, TrendingUp, Users, Clock, ArrowRight, ArrowLeft } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const CategoriesPage: React.FC = () => {
  const categories = [
    {
      name: 'التكنولوجيا',
      icon: Cpu,
      description: 'أحدث الاتجاهات في الذكاء الاصطناعي وتطوير البرمجيات والابتكار الرقمي',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-700',
      posts: blogPosts.filter(post => post.category === 'التكنولوجيا')
    },
    {
      name: 'الأعمال',
      icon: Briefcase,
      description: 'رؤى استراتيجية وريادة الأعمال والنمو المهني',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      textColor: 'text-green-700',
      posts: blogPosts.filter(post => post.category === 'الأعمال')
    },
    {
      name: 'الصحة',
      icon: Heart,
      description: 'الصحة والعافية والصحة النفسية ورؤى الطب الوقائي',
      color: 'from-red-500 to-pink-500',
      bgColor: 'bg-red-50',
      textColor: 'text-red-700',
      posts: blogPosts.filter(post => post.category === 'الصحة')
    },
    {
      name: 'نمط الحياة',
      icon: Coffee,
      description: 'العيش المستدام والإنتاجية والتطوير الشخصي',
      color: 'from-orange-500 to-yellow-500',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-700',
      posts: blogPosts.filter(post => post.category === 'نمط الحياة')
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white" dir="rtl">
      {/* قسم البطل */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-teal-500/20 backdrop-blur-sm border border-teal-400/30 rounded-full px-6 py-2 mb-8">
            <TrendingUp className="h-4 w-4 text-teal-400 ml-2" />
            <span className="text-teal-300 text-sm font-medium">استكشف حسب الموضوع</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">التصنيفات</h1>
          <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
            اكتشف المحتوى المنظم حسب اهتماماتك. من التكنولوجيا المتطورة إلى العافية الشخصية، 
            اعثر على ما تبحث عنه بالضبط.
          </p>
        </div>
      </section>

      {/* شبكة التصنيفات */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <div key={category.name} className="group">
                  <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2">
                    {/* رأس التصنيف */}
                    <div className={`bg-gradient-to-r ${category.color} p-8 text-white relative overflow-hidden`}>
                      <div className="absolute top-0 left-0 w-32 h-32 opacity-10">
                        <IconComponent className="w-full h-full" />
                      </div>
                      <div className="relative z-10">
                        <IconComponent className="h-12 w-12 mb-4" />
                        <h2 className="text-3xl font-bold mb-3">{category.name}</h2>
                        <p className="text-white/90 leading-relaxed">{category.description}</p>
                        <div className="flex items-center mt-4 space-x-4 space-x-reverse">
                          <div className="flex items-center space-x-1 space-x-reverse">
                            <Users className="h-4 w-4" />
                            <span className="text-sm">{category.posts.length} مقال</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* المقالات الحديثة */}
                    <div className="p-8">
                      <h3 className="text-xl font-bold text-slate-900 mb-6">المقالات الحديثة</h3>
                      <div className="space-y-4">
                        {category.posts.slice(0, 3).map((post) => (
                          <Link
                            key={post.id}
                            to={`/blog/${post.slug}`}
                            className="block group/post hover:bg-gray-50 rounded-lg p-4 transition-all duration-300"
                          >
                            <div className="flex items-start space-x-4 space-x-reverse">
                              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden">
                                <img 
                                  src={post.image} 
                                  alt={post.title}
                                  className="w-full h-full object-cover group-hover/post:scale-110 transition-transform duration-300"
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="text-sm font-semibold text-slate-900 group-hover/post:text-teal-600 transition-colors line-clamp-2 mb-2">
                                  {post.title}
                                </h4>
                                <div className="flex items-center space-x-3 space-x-reverse text-xs text-slate-500">
                                  <span>{post.author}</span>
                                  <span>•</span>
                                  <div className="flex items-center space-x-1 space-x-reverse">
                                    <Clock className="h-3 w-3" />
                                    <span>{post.readTime}</span>
                                  </div>
                                </div>
                              </div>
                              <ArrowLeft className="h-4 w-4 text-slate-400 group-hover/post:text-teal-600 group-hover/post:-translate-x-1 transition-all duration-300" />
                            </div>
                          </Link>
                        ))}
                      </div>

                      {category.posts.length > 3 && (
                        <div className="mt-6 pt-6 border-t border-gray-100">
                          <button className={`w-full ${category.bgColor} ${category.textColor} py-3 rounded-lg font-semibold hover:shadow-md transition-all duration-300`}>
                            عرض جميع مقالات {category.name} ({category.posts.length})
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* قسم الإحصائيات */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-teal-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">إحصائيات المحتوى</h2>
            <p className="text-slate-300">مكتبتنا المتنامية من الرؤى الخبيرة</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {categories.map((category) => (
              <div key={category.name} className="text-center">
                <div className="text-4xl font-bold text-teal-400 mb-2">
                  {category.posts.length}
                </div>
                <div className="text-slate-300">مقالات {category.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* دعوة للاشتراك في النشرة */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">لا تفوت أي تحديث</h2>
          <p className="text-xl text-teal-100 mb-8">
            احصل على إشعار عند نشر محتوى جديد في التصنيفات المفضلة لديك
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

export default CategoriesPage;