import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Mail, MapPin, Phone, Twitter, Facebook, Instagram, Linkedin, Youtube, Rss } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden" dir="rtl">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 space-x-reverse mb-6 group">
              <div className="relative">
                <BookOpen className="h-10 w-10 text-teal-400 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute -inset-2 bg-teal-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-teal-400 bg-clip-text text-transparent">آفاق</span>
            </Link>
            <p className="text-slate-300 mb-6 max-w-md leading-relaxed">
              مصدرك الموثوق للمعرفة والرؤى المتعمقة في مجالات التكنولوجيا والأعمال والصحة ونمط الحياة. نقدم محتوى عالي الجودة يساعدك على اتخاذ قرارات مدروسة والبقاء في المقدمة.
            </p>
            
            {/* Social Media */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-4">تابعنا</h4>
              <div className="flex space-x-4">
                <a href="#" className="p-3 bg-slate-800 hover:bg-teal-600 rounded-full transition-all duration-300 transform hover:scale-110 group">
                  <Twitter className="h-5 w-5 text-slate-300 group-hover:text-white" />
                </a>
                <a href="#" className="p-3 bg-slate-800 hover:bg-blue-600 rounded-full transition-all duration-300 transform hover:scale-110 group">
                  <Facebook className="h-5 w-5 text-slate-300 group-hover:text-white" />
                </a>
                <a href="#" className="p-3 bg-slate-800 hover:bg-pink-600 rounded-full transition-all duration-300 transform hover:scale-110 group">
                  <Instagram className="h-5 w-5 text-slate-300 group-hover:text-white" />
                </a>
                <a href="#" className="p-3 bg-slate-800 hover:bg-blue-700 rounded-full transition-all duration-300 transform hover:scale-110 group">
                  <Linkedin className="h-5 w-5 text-slate-300 group-hover:text-white" />
                </a>
                <a href="#" className="p-3 bg-slate-800 hover:bg-red-600 rounded-full transition-all duration-300 transform hover:scale-110 group">
                  <Youtube className="h-5 w-5 text-slate-300 group-hover:text-white" />
                </a>
                <a href="#" className="p-3 bg-slate-800 hover:bg-orange-600 rounded-full transition-all duration-300 transform hover:scale-110 group">
                  <Rss className="h-5 w-5 text-slate-300 group-hover:text-white" />
                </a>
              </div>
            </div>
            
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-3 text-slate-300">
                <Mail className="h-4 w-4" />
                <span className="text-sm">contact@afaq.com</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+966 50 123 4567</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">روابط سريعة</h3>
            <div className="space-y-3">
              <Link to="/about" className="block text-slate-300 hover:text-teal-400 transition-all duration-300 hover:translate-x-1">
                من نحن
              </Link>
              <Link to="/categories" className="block text-slate-300 hover:text-teal-400 transition-all duration-300 hover:translate-x-1">
                التصنيفات
              </Link>
              <Link to="/archive" className="block text-slate-300 hover:text-teal-400 transition-all duration-300 hover:translate-x-1">
                الأرشيف
              </Link>
              <Link to="/authors" className="block text-slate-300 hover:text-teal-400 transition-all duration-300 hover:translate-x-1">
                الكتّاب
              </Link>
              <Link to="/blog" className="block text-slate-300 hover:text-teal-400 transition-all duration-300 hover:translate-x-1">
                جميع المقالات
              </Link>
              <Link to="/resources" className="block text-slate-300 hover:text-teal-400 transition-all duration-300 hover:translate-x-1">
                الموارد
              </Link>
              <Link to="/faq" className="block text-slate-300 hover:text-teal-400 transition-all duration-300 hover:translate-x-1">
                الأسئلة الشائعة
              </Link>
              <Link to="/contact" className="block text-slate-300 hover:text-teal-400 transition-all duration-300 hover:translate-x-1">
                اتصل بنا
              </Link>
              <Link to="/newsletter" className="block text-slate-300 hover:text-teal-400 transition-all duration-300 hover:translate-x-1">
                النشرة الإخبارية
              </Link>
            </div>
          </div>

          {/* Legal Pages */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">قانوني</h3>
            <div className="space-y-3">
              <Link to="/privacy-policy" className="block text-slate-300 hover:text-teal-400 transition-all duration-300 hover:translate-x-1">
                سياسة الخصوصية
              </Link>
              <Link to="/terms-of-service" className="block text-slate-300 hover:text-teal-400 transition-all duration-300 hover:translate-x-1">
                شروط الخدمة
              </Link>
              <Link to="/disclaimer" className="block text-slate-300 hover:text-teal-400 transition-all duration-300 hover:translate-x-1">
                إخلاء المسؤولية
              </Link>
              <Link to="/cookie-policy" className="block text-slate-300 hover:text-teal-400 transition-all duration-300 hover:translate-x-1">
                سياسة ملفات تعريف الارتباط
              </Link>
              <Link to="/sitemap" className="block text-slate-300 hover:text-teal-400 transition-all duration-300 hover:translate-x-1">
                خريطة الموقع
              </Link>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="max-w-md mx-auto text-center mb-8">
            <h3 className="text-xl font-semibold mb-4 text-white">ابق على اطلاع</h3>
            <p className="text-slate-300 mb-6">احصل على أحدث الرؤى في صندوق بريدك</p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="flex-1 px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
              />
              <button className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                اشترك
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 text-center">
          <p className="text-slate-400 mb-4">
            © 2025 آفاق. جميع الحقوق محفوظة. | 
            <Link to="/privacy-policy" className="hover:text-teal-400 transition-colors ml-1 mr-1">
              سياسة الخصوصية
            </Link> | 
            <Link to="/terms-of-service" className="hover:text-teal-400 transition-colors ml-1 mr-1">
              شروط الخدمة
            </Link> | 
            <Link to="/disclaimer" className="hover:text-teal-400 transition-colors ml-1">
              إخلاء المسؤولية
            </Link>
          </p>
          <p className="text-slate-500 text-sm">
            صُنع بـ ❤️ لباحثي المعرفة في جميع أنحاء العالم
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;