import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Clock, User, Tag, ArrowLeft, Share2, Bookmark, Heart, 
  MessageCircle, Eye, Calendar, ChevronRight, Facebook, 
  Twitter, Linkedin, Copy, Check, Star, ThumbsUp, 
  ArrowUp, Menu, X, Search, Filter
} from 'lucide-react';
import { getPostBySlug, blogPosts } from '../data/blogPosts';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : null;
  
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(Math.floor(Math.random() * 100) + 50);
  const [views] = useState(Math.floor(Math.random() * 1000) + 500);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showTableOfContents, setShowTableOfContents] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [readingProgress, setReadingProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Related posts
  const relatedPosts = post ? 
    blogPosts
      .filter(p => p.id !== post.id && p.category === post.category)
      .slice(0, 3) : [];

  // Reading progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setReadingProgress(progress);
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(prev => isLiked ? prev - 1 : prev + 1);
  };

  const handleShare = async (platform: string) => {
    const url = window.location.href;
    const title = post?.title || '';
    
    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'copy':
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        break;
    }
    setShowShareMenu(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center" dir="rtl">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
            <Search className="h-12 w-12 text-gray-400" />
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-4">المقال غير موجود</h1>
          <p className="text-slate-600 mb-8 leading-relaxed">
            عذراً، المقال الذي تبحث عنه غير متوفر أو قد يكون تم حذفه.
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            <ArrowLeft className="h-5 w-5 ml-2" />
            العودة للرئيسية
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-teal-500 to-blue-500 transition-all duration-300"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-gray-100 py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 space-x-reverse text-sm text-slate-500 mb-8">
            <Link to="/" className="hover:text-teal-600 transition-colors">الرئيسية</Link>
            <ChevronRight className="h-4 w-4" />
            <Link to="/blog" className="hover:text-teal-600 transition-colors">المقالات</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-slate-700">{post.category}</span>
          </nav>

          {/* Category Badge */}
          <div className="mb-6">
            <span className="inline-flex items-center bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 px-4 py-2 rounded-full text-sm font-bold">
              <Tag className="h-4 w-4 ml-2" />
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-slate-500 mb-8">
            <div className="flex items-center space-x-2 space-x-reverse">
              <User className="h-5 w-5" />
              <span className="font-medium">{post.author}</span>
            </div>
            <div className="flex items-center space-x-2 space-x-reverse">
              <Calendar className="h-5 w-5" />
              <time dateTime={post.publishDate}>
                {new Date(post.publishDate).toLocaleDateString('ar-SA', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </div>
            <div className="flex items-center space-x-2 space-x-reverse">
              <Clock className="h-5 w-5" />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center space-x-2 space-x-reverse">
              <Eye className="h-5 w-5" />
              <span>{views.toLocaleString()} مشاهدة</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={handleLike}
              className={`flex items-center space-x-2 space-x-reverse px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                isLiked 
                  ? 'bg-red-100 text-red-600 hover:bg-red-200' 
                  : 'bg-gray-100 text-slate-700 hover:bg-gray-200'
              }`}
            >
              <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
              <span>{likes}</span>
            </button>

            <button
              onClick={() => setIsBookmarked(!isBookmarked)}
              className={`flex items-center space-x-2 space-x-reverse px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                isBookmarked 
                  ? 'bg-blue-100 text-blue-600 hover:bg-blue-200' 
                  : 'bg-gray-100 text-slate-700 hover:bg-gray-200'
              }`}
            >
              <Bookmark className={`h-4 w-4 ${isBookmarked ? 'fill-current' : ''}`} />
              <span>حفظ</span>
            </button>

            <div className="relative">
              <button
                onClick={() => setShowShareMenu(!showShareMenu)}
                className="flex items-center space-x-2 space-x-reverse bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300"
              >
                <Share2 className="h-4 w-4" />
                <span>مشاركة</span>
              </button>

              {showShareMenu && (
                <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-20 min-w-[200px]">
                  <button
                    onClick={() => handleShare('facebook')}
                    className="flex items-center space-x-3 space-x-reverse w-full px-4 py-2 text-slate-700 hover:bg-gray-50 transition-colors"
                  >
                    <Facebook className="h-4 w-4 text-blue-600" />
                    <span>فيسبوك</span>
                  </button>
                  <button
                    onClick={() => handleShare('twitter')}
                    className="flex items-center space-x-3 space-x-reverse w-full px-4 py-2 text-slate-700 hover:bg-gray-50 transition-colors"
                  >
                    <Twitter className="h-4 w-4 text-blue-400" />
                    <span>تويتر</span>
                  </button>
                  <button
                    onClick={() => handleShare('linkedin')}
                    className="flex items-center space-x-3 space-x-reverse w-full px-4 py-2 text-slate-700 hover:bg-gray-50 transition-colors"
                  >
                    <Linkedin className="h-4 w-4 text-blue-700" />
                    <span>لينكد إن</span>
                  </button>
                  <button
                    onClick={() => handleShare('copy')}
                    className="flex items-center space-x-3 space-x-reverse w-full px-4 py-2 text-slate-700 hover:bg-gray-50 transition-colors"
                  >
                    {copied ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
                    <span>{copied ? 'تم النسخ!' : 'نسخ الرابط'}</span>
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => setShowTableOfContents(!showTableOfContents)}
              className="flex items-center space-x-2 space-x-reverse bg-gray-100 hover:bg-gray-200 text-slate-700 px-4 py-2 rounded-lg font-medium transition-all duration-300 lg:hidden"
            >
              <Menu className="h-4 w-4" />
              <span>فهرس المحتوى</span>
            </button>
          </div>
        </div>
      </section>

      {/* Article Image */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="aspect-video bg-gradient-to-r from-slate-100 to-gray-100 rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Table of Contents - Desktop */}
          <div className="hidden lg:block">
            <div className="sticky top-24">
              <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl p-6 border border-teal-100">
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                  <Menu className="h-5 w-5 ml-2 text-teal-600" />
                  فهرس المحتوى
                </h3>
                <nav className="space-y-2">
                  <a href="#introduction" className="block text-slate-600 hover:text-teal-600 transition-colors py-1 text-sm">
                    المقدمة
                  </a>
                  <a href="#main-content" className="block text-slate-600 hover:text-teal-600 transition-colors py-1 text-sm">
                    المحتوى الرئيسي
                  </a>
                  <a href="#conclusion" className="block text-slate-600 hover:text-teal-600 transition-colors py-1 text-sm">
                    الخلاصة
                  </a>
                </nav>
              </div>

              {/* Author Card */}
              <div className="bg-white rounded-xl shadow-lg p-6 mt-6 border border-gray-100">
                <div className="flex items-center space-x-4 space-x-reverse mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full flex-shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-slate-900">{post.author}</h4>
                    <p className="text-sm text-slate-600">كاتب خبير</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  خبير في مجال {post.category} مع سنوات من الخبرة في الكتابة والبحث.
                </p>
                <Link 
                  to="/authors"
                  className="text-teal-600 hover:text-teal-700 text-sm font-medium flex items-center"
                >
                  عرض الملف الشخصي
                  <ArrowLeft className="h-3 w-3 mr-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="lg:col-span-3">
            <article className="bg-white rounded-xl shadow-lg p-6 lg:p-8">
              <div 
                className="prose prose-lg max-w-none prose-slate prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-700 prose-p:leading-relaxed prose-a:text-teal-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-900 prose-ul:text-slate-700 prose-li:text-slate-700 prose-blockquote:border-teal-500 prose-blockquote:bg-teal-50 prose-blockquote:p-4 prose-blockquote:rounded-lg"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center space-x-2 space-x-reverse mb-4">
                  <Tag className="h-5 w-5 text-slate-500" />
                  <span className="text-lg font-bold text-slate-900">الكلمات المفتاحية:</span>
                </div>
                <div className="flex flex-wrap gap-3">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-gray-100 to-gray-200 hover:from-teal-100 hover:to-blue-100 text-slate-700 hover:text-teal-700 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer transform hover:scale-105"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Article Rating */}
              <div className="mt-8 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border border-yellow-200">
                <h3 className="text-lg font-bold text-slate-900 mb-4">قيم هذا المقال</h3>
                <div className="flex items-center space-x-2 space-x-reverse mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      className="text-yellow-400 hover:text-yellow-500 transition-colors"
                    >
                      <Star className="h-6 w-6 fill-current" />
                    </button>
                  ))}
                  <span className="text-slate-600 mr-2">(4.8 من 5)</span>
                </div>
                <p className="text-sm text-slate-600">
                  ساعدنا في تحسين المحتوى من خلال تقييمك للمقال
                </p>
              </div>
            </article>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <section className="mt-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
                  <ThumbsUp className="h-6 w-6 ml-3 text-teal-600" />
                  مقالات ذات صلة
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {relatedPosts.map((relatedPost) => (
                    <article key={relatedPost.id} className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1">
                      <div className="aspect-video bg-gradient-to-r from-slate-100 to-gray-100 overflow-hidden">
                        <img 
                          src={relatedPost.image} 
                          alt={relatedPost.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-xs font-bold mb-3 inline-block">
                          {relatedPost.category}
                        </span>
                        <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-600 transition-colors mb-3 line-clamp-2">
                          <Link to={`/blog/${relatedPost.slug}`}>
                            {relatedPost.title}
                          </Link>
                        </h3>
                        <p className="text-slate-600 text-sm line-clamp-2 mb-4">
                          {relatedPost.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-xs text-slate-500">
                          <span>{relatedPost.author}</span>
                          <span>{relatedPost.readTime}</span>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )}

            {/* Comments Section */}
            <section className="mt-12 bg-white rounded-xl shadow-lg p-6 lg:p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                <MessageCircle className="h-6 w-6 ml-3 text-teal-600" />
                التعليقات (12)
              </h2>
              
              {/* Comment Form */}
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">اترك تعليقاً</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="الاسم"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                    <input
                      type="email"
                      placeholder="البريد الإلكتروني"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                  <textarea
                    rows={4}
                    placeholder="اكتب تعليقك هنا..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                  />
                  <button
                    type="submit"
                    className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    نشر التعليق
                  </button>
                </form>
              </div>

              {/* Sample Comments */}
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-6">
                  <div className="flex items-start space-x-4 space-x-reverse">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex-shrink-0"></div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 space-x-reverse mb-2">
                        <h4 className="font-semibold text-slate-900">أحمد محمد</h4>
                        <span className="text-xs text-slate-500">منذ يومين</span>
                      </div>
                      <p className="text-slate-700 leading-relaxed">
                        مقال رائع ومفيد جداً! استفدت كثيراً من النصائح المذكورة وسأطبقها في عملي.
                      </p>
                      <button className="text-teal-600 hover:text-teal-700 text-sm font-medium mt-2">
                        رد
                      </button>
                    </div>
                  </div>
                </div>

                <div className="border-b border-gray-200 pb-6">
                  <div className="flex items-start space-x-4 space-x-reverse">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex-shrink-0"></div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 space-x-reverse mb-2">
                        <h4 className="font-semibold text-slate-900">فاطمة أحمد</h4>
                        <span className="text-xs text-slate-500">منذ 3 أيام</span>
                      </div>
                      <p className="text-slate-700 leading-relaxed">
                        شكراً لك على هذا المحتوى القيم. هل يمكنك كتابة مقال آخر حول نفس الموضوع؟
                      </p>
                      <button className="text-teal-600 hover:text-teal-700 text-sm font-medium mt-2">
                        رد
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">أعجبك هذا المقال؟</h2>
          <p className="text-xl text-teal-100 mb-8">
            اشترك في نشرتنا الإخبارية للحصول على رؤى أسبوعية تُسلم إلى صندوق بريدك.
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

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 left-8 bg-teal-600 hover:bg-teal-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-40"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}

      {/* Mobile Table of Contents */}
      {showTableOfContents && (
        <div className="fixed inset-0 bg-black/50 z-50 lg:hidden">
          <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-xl">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-slate-900">فهرس المحتوى</h3>
                <button
                  onClick={() => setShowTableOfContents(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="space-y-3">
                <a href="#introduction" className="block text-slate-600 hover:text-teal-600 transition-colors py-2">
                  المقدمة
                </a>
                <a href="#main-content" className="block text-slate-600 hover:text-teal-600 transition-colors py-2">
                  المحتوى الرئيسي
                </a>
                <a href="#conclusion" className="block text-slate-600 hover:text-teal-600 transition-colors py-2">
                  الخلاصة
                </a>
              </nav>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPost;