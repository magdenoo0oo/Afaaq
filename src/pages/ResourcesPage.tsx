import React from 'react';
import { Link } from 'react-router-dom';
import { Download, BookOpen, Video, FileText, ExternalLink, Star, Users, Zap } from 'lucide-react';

const ResourcesPage: React.FC = () => {
  const resources = [
    {
      id: 1,
      title: 'مجموعة أدوات التسويق الرقمي',
      description: 'مجموعة كاملة من القوالب والقوائم المرجعية والأدلة لنجاح التسويق الرقمي',
      type: 'حزمة PDF',
      size: '15 ميجابايت',
      downloads: '2.3 ألف',
      rating: 4.9,
      category: 'التسويق',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg',
      featured: true
    },
    {
      id: 2,
      title: 'دليل إنتاجية العمل عن بُعد',
      description: 'دليل شامل لتحقيق أقصى استفادة من الإنتاجية أثناء العمل من المنزل',
      type: 'كتاب إلكتروني',
      size: '8 ميجابايت',
      downloads: '1.8 ألف',
      rating: 4.8,
      category: 'الإنتاجية',
      image: 'https://images.pexels.com/photos/4173624/pexels-photo-4173624.jpeg',
      featured: false
    },
    {
      id: 3,
      title: 'قائمة مراجعة الأمن السيبراني',
      description: 'التدابير الأمنية الأساسية التي يجب على كل شركة صغيرة تنفيذها',
      type: 'قائمة مراجعة',
      size: '2 ميجابايت',
      downloads: '3.1 ألف',
      rating: 4.7,
      category: 'الأمان',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg',
      featured: true
    },
    {
      id: 4,
      title: 'مذكرة الأكل الواعي',
      description: 'تتبع عادات الأكل وتطوير علاقة صحية مع الطعام',
      type: 'قالب',
      size: '5 ميجابايت',
      downloads: '1.2 ألف',
      rating: 4.6,
      category: 'الصحة',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
      featured: false
    },
    {
      id: 5,
      title: 'جدول التخطيط المالي',
      description: 'جدول بيانات شامل لوضع الميزانية وتتبع الاستثمارات للشباب',
      type: 'قالب إكسل',
      size: '3 ميجابايت',
      downloads: '2.7 ألف',
      rating: 4.8,
      category: 'المالية',
      image: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg',
      featured: false
    },
    {
      id: 6,
      title: 'دليل إعداد المكتب المنزلي',
      description: 'دليل كامل لإنشاء مساحة عمل منزلية مريحة ومنتجة',
      type: 'دليل PDF',
      size: '12 ميجابايت',
      downloads: '1.9 ألف',
      rating: 4.9,
      category: 'نمط الحياة',
      image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg',
      featured: true
    }
  ];

  const categories = [...new Set(resources.map(resource => resource.category))];
  const featuredResources = resources.filter(resource => resource.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white" dir="rtl">
      {/* قسم البطل */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-teal-500/20 backdrop-blur-sm border border-teal-400/30 rounded-full px-6 py-2 mb-8">
            <Download className="h-4 w-4 text-teal-400 ml-2" />
            <span className="text-teal-300 text-sm font-medium">موارد مجانية</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">مكتبة الموارد</h1>
          <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
            احصل على مجموعتنا من القوالب والأدلة والقوائم المرجعية والأدوات المجانية المصممة لمساعدتك 
            على تطبيق الاستراتيجيات والرؤى من مقالاتنا.
          </p>
        </div>
      </section>

      {/* الموارد المميزة */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-orange-100 text-orange-800 rounded-full px-4 py-2 mb-6">
              <Star className="h-4 w-4 ml-2" />
              <span className="text-sm font-semibold">الموارد المميزة</span>
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">الأكثر تحميلاً</h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              مواردنا الأكثر تحميلاً وتقييماً
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredResources.map((resource) => (
              <div key={resource.id} className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden transform hover:-translate-y-1">
                <div className="aspect-video bg-gradient-to-r from-slate-100 to-gray-100 overflow-hidden relative">
                  <img 
                    src={resource.image} 
                    alt={resource.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      مميز
                    </span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-black/70 text-white px-2 py-1 rounded text-xs">
                      {resource.type}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-xs font-bold">
                      {resource.category}
                    </span>
                    <div className="flex items-center text-yellow-500">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-sm text-slate-600 mr-1">{resource.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2">
                    {resource.title}
                  </h3>
                  
                  <p className="text-slate-600 line-clamp-2 mb-4 leading-relaxed">
                    {resource.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                    <span>{resource.size}</span>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 ml-1" />
                      <span>{resource.downloads} تحميل</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                    <Download className="h-5 w-5 ml-2" />
                    تحميل مجاني
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* جميع الموارد */}
      <section className="py-16 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">جميع الموارد</h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              تصفح مجموعتنا الكاملة من الموارد المجانية
            </p>
          </div>

          {/* مرشح التصنيفات */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="bg-teal-600 text-white px-6 py-2 rounded-full font-semibold">
              جميع التصنيفات
            </button>
            {categories.map((category) => (
              <button key={category} className="bg-white text-slate-700 hover:bg-teal-50 hover:text-teal-600 px-6 py-2 rounded-full font-semibold transition-colors border border-gray-200">
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource) => (
              <div key={resource.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-bold">
                      {resource.category}
                    </span>
                    <span className="text-xs text-slate-500">{resource.type}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    {resource.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                    {resource.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 fill-current ml-1" />
                      <span>{resource.rating}</span>
                    </div>
                    <span>{resource.downloads} تحميل</span>
                  </div>
                  
                  <button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-lg font-semibold transition-colors flex items-center justify-center">
                    <Download className="h-4 w-4 ml-2" />
                    تحميل
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* قسم الأدوات */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-6">
              <Zap className="h-4 w-4 ml-2" />
              <span className="text-sm font-semibold">أدوات إلكترونية</span>
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">أدوات مجانية عبر الإنترنت</h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              استخدم أدواتنا المستندة إلى الويب لتطبيق الاستراتيجيات من مقالاتنا
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-gradient-to-r from-blue-100 to-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">حاسبة العائد على الاستثمار</h3>
              <p className="text-slate-600 mb-6">احسب العائد على الاستثمار لحملاتك التسويقية ومبادراتك التجارية.</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center mx-auto">
                استخدم الأداة
                <ExternalLink className="h-4 w-4 mr-2" />
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-gradient-to-r from-green-100 to-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">مخطط المحتوى</h3>
              <p className="text-slate-600 mb-6">خطط ونظم تقويم المحتوى الخاص بك باستخدام أداة التخطيط التفاعلية.</p>
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center mx-auto">
                استخدم الأداة
                <ExternalLink className="h-4 w-4 mr-2" />
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Video className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">متتبع الميزانية</h3>
              <p className="text-slate-600 mb-6">تتبع نفقاتك وأدر ميزانيتك باستخدام أداتنا المالية سهلة الاستخدام.</p>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center mx-auto">
                استخدم الأداة
                <ExternalLink className="h-4 w-4 mr-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* دعوة للاشتراك في النشرة */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">احصل على إشعار بالموارد الجديدة</h2>
          <p className="text-xl text-teal-100 mb-8">
            كن أول من يعلم عندما نطلق قوالب وأدلة وأدوات جديدة
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

export default ResourcesPage;