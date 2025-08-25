import React from 'react';
import { Link } from 'react-router-dom';
import { User, BookOpen, Calendar, Award, ExternalLink, Twitter, Linkedin, Mail } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const AuthorPage: React.FC = () => {
  // الحصول على الكتاب الفريدين وعدد مقالاتهم
  const authors = [...new Set(blogPosts.map(post => post.author))].map(authorName => {
    const authorPosts = blogPosts.filter(post => post.author === authorName);
    return {
      name: authorName,
      posts: authorPosts,
      postCount: authorPosts.length,
      categories: [...new Set(authorPosts.map(post => post.category))],
      latestPost: authorPosts.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())[0]
    };
  });

  const getAuthorBio = (name: string) => {
    const bios: Record<string, { bio: string; expertise: string[]; credentials: string }> = {
      'د. سارة أحمد': {
        bio: 'خبيرة رائدة في الذكاء الاصطناعي والتعلم الآلي مع أكثر من 15 عاماً من الخبرة في هذا المجال. نشرت بحوثاً واسعة في مجلات رائدة وعملت في عدة شركات من قائمة فورتشن 500.',
        expertise: ['الذكاء الاصطناعي', 'التعلم الآلي', 'علم البيانات', 'استراتيجية التكنولوجيا'],
        credentials: 'دكتوراه في علوم الحاسوب، جامعة ستانفورد'
      },
      'محمد الخالدي': {
        bio: 'استشاري استراتيجية الأعمال ومدير تنفيذي سابق في شركات فورتشن 500 متخصص في استراتيجيات العمل عن بُعد والتحول الرقمي والتطوير التنظيمي.',
        expertise: ['استراتيجية الأعمال', 'العمل عن بُعد', 'التحول الرقمي', 'القيادة'],
        credentials: 'ماجستير إدارة أعمال من هارفارد، أكثر من 20 عاماً خبرة تنفيذية'
      },
      'أحمد البيئي': {
        bio: 'عالم بيئة ومدافع عن الاستدامة يساعد الأفراد والمؤسسات على تقليل تأثيرهم البيئي من خلال استراتيجيات عملية وقابلة للتطبيق.',
        expertise: ['الاستدامة', 'العلوم البيئية', 'العيش الأخضر', 'العمل المناخي'],
        credentials: 'ماجستير العلوم البيئية، جامعة كاليفورنيا بيركلي'
      },
      'د. فاطمة النوري': {
        bio: 'طبيبة نفسية مرخصة متخصصة في الصحة الرقمية وتحديات الصحة النفسية الحديثة. لديها خبرة واسعة في مساعدة الأفراد على التعامل مع التأثيرات النفسية للتكنولوجيا.',
        expertise: ['الصحة النفسية', 'الصحة الرقمية', 'علم النفس', 'العلاج'],
        credentials: 'دكتوراه علم النفس الإكلينيكي، طبيبة نفسية مرخصة'
      },
      'خالد الأمني': {
        bio: 'أخصائي تسويق رقمي مع أكثر من عقد من الخبرة في مساعدة الشركات الصغيرة على تنمية حضورها الإلكتروني من خلال استراتيجيات تسويقية فعالة من حيث التكلفة.',
        expertise: ['التسويق الرقمي', 'تحسين محركات البحث', 'استراتيجية المحتوى', 'الشركات الصغيرة'],
        credentials: 'محترف تسويق رقمي معتمد، خبير جوجل أناليتكس'
      },
      'د. ليلى الغذائية': {
        bio: 'طبيبة متخصصة في طب نمط الحياة والشيخوخة الصحية. تجمع بين الطب القائم على الأدلة والتدخلات العملية لنمط الحياة لمساعدة المرضى على تحقيق الصحة المثلى.',
        expertise: ['طب نمط الحياة', 'الشيخوخة الصحية', 'الرعاية الوقائية', 'العافية'],
        credentials: 'دكتوراه الطب الباطني، معتمدة في طب نمط الحياة'
      }
    };
    return bios[name] || { bio: 'مساهم خبير في آفاق.', expertise: [], credentials: '' };
  };

  const getAuthorColor = (index: number) => {
    const colors = [
      'from-blue-500 to-cyan-500',
      'from-green-500 to-emerald-500',
      'from-purple-500 to-pink-500',
      'from-orange-500 to-red-500',
      'from-teal-500 to-blue-500',
      'from-indigo-500 to-purple-500'
    ];
    return colors[index % colors.length];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white" dir="rtl">
      {/* قسم البطل */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-teal-500/20 backdrop-blur-sm border border-teal-400/30 rounded-full px-6 py-2 mb-8">
            <User className="h-4 w-4 text-teal-400 ml-2" />
            <span className="text-teal-300 text-sm font-medium">المساهمون الخبراء</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">كتابنا</h1>
          <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
            تعرف على المساهمين الخبراء وراء محتوى آفاق عالي الجودة. 
            كل كاتب يجلب عقوداً من الخبرة والخبرة العميقة في مجالاتهم المختصة.
          </p>
        </div>
      </section>

      {/* شبكة الكتاب */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {authors.map((author, index) => {
              const authorInfo = getAuthorBio(author.name);
              const colorClass = getAuthorColor(index);
              
              return (
                <div key={author.name} className="group">
                  <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2">
                    {/* رأس الكاتب */}
                    <div className={`bg-gradient-to-r ${colorClass} p-8 text-white relative overflow-hidden`}>
                      <div className="absolute top-0 left-0 w-32 h-32 opacity-10">
                        <User className="w-full h-full" />
                      </div>
                      <div className="relative z-10">
                        <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4">
                          <User className="h-10 w-10" />
                        </div>
                        <h2 className="text-3xl font-bold mb-2">{author.name}</h2>
                        <p className="text-white/90 text-sm font-medium mb-4">{authorInfo.credentials}</p>
                        
                        <div className="flex items-center space-x-6 space-x-reverse text-sm">
                          <div className="flex items-center space-x-1 space-x-reverse">
                            <BookOpen className="h-4 w-4" />
                            <span>{author.postCount} مقال</span>
                          </div>
                          <div className="flex items-center space-x-1 space-x-reverse">
                            <Calendar className="h-4 w-4" />
                            <span>الأحدث: {new Date(author.latestPost.publishDate).toLocaleDateString('ar-SA', { month: 'short', year: 'numeric' })}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* تفاصيل الكاتب */}
                    <div className="p-8">
                      <p className="text-slate-600 leading-relaxed mb-6">
                        {authorInfo.bio}
                      </p>

                      {/* مجالات الخبرة */}
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-slate-900 mb-3">مجالات الخبرة</h3>
                        <div className="flex flex-wrap gap-2">
                          {authorInfo.expertise.map((skill, skillIndex) => (
                            <span key={skillIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* التصنيفات */}
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-slate-900 mb-3">يكتب عن</h3>
                        <div className="flex flex-wrap gap-2">
                          {author.categories.map((category, catIndex) => (
                            <span key={catIndex} className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-semibold">
                              {category}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* أحدث مقال */}
                      <div className="border-t border-gray-100 pt-6">
                        <h3 className="text-lg font-semibold text-slate-900 mb-3">أحدث مقال</h3>
                        <Link 
                          to={`/blog/${author.latestPost.slug}`}
                          className="block group/article hover:bg-gray-50 rounded-lg p-4 transition-all duration-300"
                        >
                          <div className="flex items-start space-x-4 space-x-reverse">
                            <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden">
                              <img 
                                src={author.latestPost.image} 
                                alt={author.latestPost.title}
                                className="w-full h-full object-cover group-hover/article:scale-110 transition-transform duration-300"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-slate-900 group-hover/article:text-teal-600 transition-colors line-clamp-2 mb-2">
                                {author.latestPost.title}
                              </h4>
                              <p className="text-sm text-slate-600 line-clamp-2 mb-2">
                                {author.latestPost.excerpt}
                              </p>
                              <div className="flex items-center space-x-3 space-x-reverse text-xs text-slate-500">
                                <span>{author.latestPost.readTime}</span>
                                <span>•</span>
                                <span>{new Date(author.latestPost.publishDate).toLocaleDateString('ar-SA')}</span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>

                      {/* روابط التواصل الاجتماعي */}
                      <div className="border-t border-gray-100 pt-6 mt-6">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-slate-700">تواصل مع {author.name.split(' ')[0]}</span>
                          <div className="flex space-x-3 space-x-reverse">
                            <a href="#" className="p-2 bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-blue-600 rounded-full transition-all duration-300">
                              <Twitter className="h-4 w-4" />
                            </a>
                            <a href="#" className="p-2 bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-blue-700 rounded-full transition-all duration-300">
                              <Linkedin className="h-4 w-4" />
                            </a>
                            <a href="#" className="p-2 bg-gray-100 hover:bg-teal-100 text-gray-600 hover:text-teal-600 rounded-full transition-all duration-300">
                              <Mail className="h-4 w-4" />
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* زر عرض جميع المقالات */}
                      <div className="mt-6">
                        <button className={`w-full bg-gradient-to-r ${colorClass} text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                          عرض جميع مقالات {author.name.split(' ')[0]} ({author.postCount})
                        </button>
                      </div>
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
            <h2 className="text-3xl font-bold mb-4">إحصائيات الكتاب</h2>
            <p className="text-slate-300">فريقنا المتنوع من المساهمين الخبراء</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-400 mb-2">{authors.length}</div>
              <div className="text-slate-300">كاتب خبير</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-400 mb-2">{blogPosts.length}</div>
              <div className="text-slate-300">إجمالي المقالات</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-400 mb-2">4</div>
              <div className="text-slate-300">تصنيفات مغطاة</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-400 mb-2">50 ألف+</div>
              <div className="text-slate-300">قارئ شهرياً</div>
            </div>
          </div>
        </div>
      </section>

      {/* دعوة لتصبح كاتباً */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Award className="h-16 w-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">كن مساهماً</h2>
          <p className="text-xl text-teal-100 mb-8">
            شارك خبرتك مع جمهورنا المتفاعل من أكثر من 50,000 قارئ شهرياً
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center bg-white text-teal-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            تقدم للكتابة معنا
            <ExternalLink className="mr-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AuthorPage;