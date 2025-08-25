import React, { useState } from 'react';
import { Mail, Check, Star, Users, Calendar, Gift, Shield, Zap } from 'lucide-react';

const NewsletterPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [selectedFrequency, setSelectedFrequency] = useState('weekly');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    setIsSubscribed(true);
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  const benefits = [
    {
      icon: Zap,
      title: 'محتوى حصري',
      description: 'احصل على الوصول لمقالات ورؤى حصرية للمشتركين قبل نشرها للعامة'
    },
    {
      icon: Star,
      title: 'ملخص أسبوعي منتقى',
      description: 'تلقى أفضل مقالاتنا والمواضيع الرائجة كل أسبوع'
    },
    {
      icon: Gift,
      title: 'موارد مجانية',
      description: 'حمل أدلة وقوالب وأدوات حصرية للمشتركين فقط'
    },
    {
      icon: Shield,
      title: 'وعد بعدم الإزعاج',
      description: 'نحترم صندوق بريدك. ألغ الاشتراك في أي وقت بنقرة واحدة'
    }
  ];

  const testimonials = [
    {
      name: 'سارة أحمد',
      role: 'مديرة تسويق',
      content: 'نشرة آفاق الإخبارية هي أبرز ما في أسبوعي. المحتوى المنتقى يوفر عليّ ساعات من البحث.',
      rating: 5
    },
    {
      name: 'داود محمد',
      role: 'رائد أعمال تقني',
      content: 'جودة الرؤى استثنائية. طبقت عدة استراتيجيات من مقالاتهم.',
      rating: 5
    },
    {
      name: 'مريم خالد',
      role: 'مدربة صحة',
      content: 'توازن مثالي بين العمق وسهولة الفهم. محتوى الصحة والعافية مبني على الأدلة وعملي.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white" dir="rtl">
      {/* قسم البطل */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 text-white py-24 relative overflow-hidden">
        {/* نمط الخلفية */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center bg-teal-500/20 backdrop-blur-sm border border-teal-400/30 rounded-full px-6 py-2 mb-8">
            <Mail className="h-4 w-4 text-teal-400 ml-2" />
            <span className="text-teal-300 text-sm font-medium">انضم لأكثر من 50,000 مشترك</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            ابق <span className="text-teal-400">متقدماً</span> على المنحنى
          </h1>
          
          <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-12">
            احصل على أحدث الرؤى والتحليل الخبير والاستراتيجيات القابلة للتطبيق مباشرة في صندوق بريدك. 
            انضم لآلاف المهنيين الذين يثقون بآفاق لجرعتهم الأسبوعية من المعرفة.
          </p>

          {/* نموذج الاشتراك */}
          <div className="max-w-2xl mx-auto">
            {isSubscribed ? (
              <div className="bg-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-2xl p-8 text-center">
                <Check className="h-16 w-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">مرحباً بك في آفاق!</h3>
                <p className="text-green-100">تحقق من بريدك الإلكتروني للحصول على رابط التأكيد لإكمال اشتراكك.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
                <div className="flex flex-col lg:flex-row gap-4 mb-6">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="أدخل عنوان بريدك الإلكتروني"
                    required
                    className="flex-1 px-6 py-4 bg-white/90 border-0 rounded-xl text-slate-900 placeholder-slate-500 focus:ring-4 focus:ring-white/50 focus:outline-none text-lg"
                  />
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg whitespace-nowrap"
                  >
                    اشترك مجاناً
                  </button>
                </div>

                {/* اختيار التكرار */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <label className="flex items-center space-x-2 space-x-reverse cursor-pointer">
                    <input
                      type="radio"
                      name="frequency"
                      value="weekly"
                      checked={selectedFrequency === 'weekly'}
                      onChange={(e) => setSelectedFrequency(e.target.value)}
                      className="text-teal-500 focus:ring-teal-500"
                    />
                    <span className="text-white">ملخص أسبوعي</span>
                  </label>
                  <label className="flex items-center space-x-2 space-x-reverse cursor-pointer">
                    <input
                      type="radio"
                      name="frequency"
                      value="daily"
                      checked={selectedFrequency === 'daily'}
                      onChange={(e) => setSelectedFrequency(e.target.value)}
                      className="text-teal-500 focus:ring-teal-500"
                    />
                    <span className="text-white">تحديثات يومية</span>
                  </label>
                </div>

                <p className="text-white/70 text-sm mt-6">
                  ✨ مجاني إلى الأبد • 📧 لا رسائل مزعجة • 🚫 ألغ الاشتراك في أي وقت
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* قسم الفوائد */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">لماذا الاشتراك؟</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              انضم لآلاف المهنيين الذين يعتمدون على آفاق لجرعتهم الأسبوعية من الرؤى الخبيرة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-gradient-to-br from-teal-50 to-blue-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-10 w-10 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* معاينة النشرة الإخبارية */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">ما ستتلقاه</h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              إليك معاينة لشكل نشرتنا الإخبارية الأسبوعية
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* رأس البريد الإلكتروني */}
            <div className="bg-gradient-to-r from-teal-600 to-blue-600 p-8 text-white">
              <div className="flex items-center space-x-3 space-x-reverse mb-4">
                <Mail className="h-8 w-8" />
                <div>
                  <h3 className="text-2xl font-bold">آفاق الأسبوعية</h3>
                  <p className="text-teal-100">جرعتك الأسبوعية من الرؤى</p>
                </div>
              </div>
              <p className="text-white/90">أسبوع 15 يناير 2025</p>
            </div>

            {/* محتوى البريد الإلكتروني */}
            <div className="p-8">
              <div className="space-y-8">
                {/* المقال المميز */}
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-3">🌟 مميز هذا الأسبوع</h4>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h5 className="font-bold text-slate-900 mb-2">مستقبل الذكاء الاصطناعي: ما نتوقعه في 2025</h5>
                    <p className="text-slate-600 text-sm mb-3">استكشف أحدث التطورات في تقنيات الذكاء الاصطناعي واكتشف كيف ستعيد تشكيل الصناعات...</p>
                    <span className="text-teal-600 text-sm font-medium">اقرأ المزيد ←</span>
                  </div>
                </div>

                {/* قراءات سريعة */}
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-3">📚 قراءات سريعة</h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3 space-x-reverse">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                      <div>
                        <h6 className="font-semibold text-slate-900 text-sm">استراتيجيات إنتاجية العمل عن بُعد</h6>
                        <p className="text-slate-600 text-xs">5 دقائق قراءة</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 space-x-reverse">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <div>
                        <h6 className="font-semibold text-slate-900 text-sm">دليل العيش المستدام</h6>
                        <p className="text-slate-600 text-xs">7 دقائق قراءة</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* الرائج */}
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-3">🔥 الرائج</h4>
                  <div className="bg-orange-50 rounded-lg p-4">
                    <p className="text-sm text-slate-700">
                      <strong>الصحة النفسية في العصر الرقمي</strong> - مقالنا الأكثر قراءة هذا الأسبوع بأكثر من 15 ألف مشاهدة
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* الشهادات */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">ما يقوله المشتركون</h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              انضم لآلاف القراء الراضين الذين يثقون بآفاق
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-slate-900">{testimonial.name}</div>
                  <div className="text-slate-500 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* قسم الإحصائيات */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-teal-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-teal-400 mb-2">50 ألف+</div>
              <div className="text-slate-300">مشترك نشط</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-teal-400 mb-2">98%</div>
              <div className="text-slate-300">معدل الفتح</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-teal-400 mb-2">4.9</div>
              <div className="text-slate-300">متوسط التقييم</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-teal-400 mb-2">200+</div>
              <div className="text-slate-300">عدد مرسل</div>
            </div>
          </div>
        </div>
      </section>

      {/* دعوة نهائية للعمل */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users className="h-16 w-16 text-white mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-6">مستعد للانضمام؟</h2>
          <p className="text-xl text-teal-100 mb-8 leading-relaxed">
            لا تفوت الرؤى التي يمكن أن تحول حياتك الشخصية والمهنية. 
            اشترك اليوم وانضم لمجتمعنا من القراء المتطلعين للمستقبل.
          </p>
          <div className="flex flex-col sm:flex-row max-w-lg mx-auto gap-4">
            <input
              type="email"
              placeholder="أدخل بريدك الإلكتروني"
              className="flex-1 px-6 py-4 rounded-xl border-0 focus:ring-4 focus:ring-white/50 focus:outline-none text-lg"
            />
            <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg text-lg whitespace-nowrap">
              اشترك الآن
            </button>
          </div>
          <p className="text-white/70 text-sm mt-6">
            انضم لـ 50,000+ مهني • مجاني إلى الأبد • لا رسائل مزعجة
          </p>
        </div>
      </section>
    </div>
  );
};

export default NewsletterPage;