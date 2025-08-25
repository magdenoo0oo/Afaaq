import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, BookOpen, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100 sticky top-0 z-50 transition-all duration-300" dir="rtl">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3 space-x-reverse text-slate-800 hover:text-teal-600 transition-all duration-300 group">
            <div className="relative">
              <BookOpen className="h-9 w-9 text-teal-600 group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute -inset-1 bg-teal-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-teal-600 bg-clip-text text-transparent">آفاق</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 space-x-reverse">
            <Link to="/" className="px-4 py-2 text-slate-700 hover:text-teal-600 font-medium transition-all duration-300 rounded-lg hover:bg-teal-50">
              الرئيسية
            </Link>
            
            {/* Pages Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
                className="flex items-center px-4 py-2 text-slate-700 hover:text-teal-600 font-medium transition-all duration-300 rounded-lg hover:bg-teal-50"
              >
                الصفحات
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {isDropdownOpen && (
                <div
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                  className="absolute top-full right-0 mt-1 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50"
                >
                  <Link to="/categories" className="block px-4 py-2 text-slate-700 hover:text-teal-600 hover:bg-teal-50 transition-colors">
                    التصنيفات
                  </Link>
                  <Link to="/archive" className="block px-4 py-2 text-slate-700 hover:text-teal-600 hover:bg-teal-50 transition-colors">
                    الأرشيف
                  </Link>
                  <Link to="/authors" className="block px-4 py-2 text-slate-700 hover:text-teal-600 hover:bg-teal-50 transition-colors">
                    الكتّاب
                  </Link>
                  <Link to="/blog" className="block px-4 py-2 text-slate-700 hover:text-teal-600 hover:bg-teal-50 transition-colors">
                    جميع المقالات
                  </Link>
                  <Link to="/resources" className="block px-4 py-2 text-slate-700 hover:text-teal-600 hover:bg-teal-50 transition-colors">
                    الموارد
                  </Link>
                  <Link to="/faq" className="block px-4 py-2 text-slate-700 hover:text-teal-600 hover:bg-teal-50 transition-colors">
                    الأسئلة الشائعة
                  </Link>
                  <Link to="/newsletter" className="block px-4 py-2 text-slate-700 hover:text-teal-600 hover:bg-teal-50 transition-colors">
                    النشرة الإخبارية
                  </Link>
                </div>
              )}
            </div>
            
            <Link to="/about" className="px-4 py-2 text-slate-700 hover:text-teal-600 font-medium transition-all duration-300 rounded-lg hover:bg-teal-50">
              من نحن
            </Link>
            <Link to="/contact" className="px-4 py-2 text-slate-700 hover:text-teal-600 font-medium transition-all duration-300 rounded-lg hover:bg-teal-50">
              اتصل بنا
            </Link>
            <button className="p-3 text-slate-600 hover:text-teal-600 transition-all duration-300 rounded-lg hover:bg-teal-50 group">
              <Search className="h-5 w-5" />
            </button>
            <Link 
              to="/newsletter" 
              className="ml-4 bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              اشترك
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-3 text-slate-600 hover:text-teal-600 transition-all duration-300 rounded-lg hover:bg-teal-50"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-gray-100 bg-white/95 backdrop-blur-md" dir="rtl">
            <div className="flex flex-col space-y-1">
              <Link
                to="/"
                className="text-slate-700 hover:text-teal-600 font-medium transition-all duration-300 px-4 py-3 rounded-lg hover:bg-teal-50"
                onClick={() => setIsMenuOpen(false)}
              >
                الرئيسية
              </Link>
              <Link
                to="/categories"
                className="text-slate-700 hover:text-teal-600 font-medium transition-all duration-300 px-4 py-3 rounded-lg hover:bg-teal-50"
                onClick={() => setIsMenuOpen(false)}
              >
                التصنيفات
              </Link>
              <Link
                to="/archive"
                className="text-slate-700 hover:text-teal-600 font-medium transition-all duration-300 px-4 py-3 rounded-lg hover:bg-teal-50"
                onClick={() => setIsMenuOpen(false)}
              >
                الأرشيف
              </Link>
              <Link
                to="/about"
                className="text-slate-700 hover:text-teal-600 font-medium transition-all duration-300 px-4 py-3 rounded-lg hover:bg-teal-50"
                onClick={() => setIsMenuOpen(false)}
              >
                من نحن
              </Link>
              <Link
                to="/blog"
                className="text-slate-700 hover:text-teal-600 font-medium transition-all duration-300 px-4 py-3 rounded-lg hover:bg-teal-50"
                onClick={() => setIsMenuOpen(false)}
              >
                جميع المقالات
              </Link>
              <Link
                to="/resources"
                className="text-slate-700 hover:text-teal-600 font-medium transition-all duration-300 px-4 py-3 rounded-lg hover:bg-teal-50"
                onClick={() => setIsMenuOpen(false)}
              >
                الموارد
              </Link>
              <Link
                to="/faq"
                className="text-slate-700 hover:text-teal-600 font-medium transition-all duration-300 px-4 py-3 rounded-lg hover:bg-teal-50"
                onClick={() => setIsMenuOpen(false)}
              >
                الأسئلة الشائعة
              </Link>
              <Link
                to="/contact"
                className="text-slate-700 hover:text-teal-600 font-medium transition-all duration-300 px-4 py-3 rounded-lg hover:bg-teal-50"
                onClick={() => setIsMenuOpen(false)}
              >
                اتصل بنا
              </Link>
              <Link
                to="/newsletter"
                className="mt-4 bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold px-4 py-3 rounded-lg transition-all duration-300 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                اشترك في النشرة الإخبارية
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;