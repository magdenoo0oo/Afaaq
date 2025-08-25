import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Search, MessageCircle } from 'lucide-react';

const FAQPage: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const faqs = [
    {
      id: 1,
      category: 'عام',
      question: 'ما هو آفاق وماذا تقدمون؟',
      answer: 'آفاق هي منصة مدونة شاملة تقدم رؤى متعمقة وتحليل خبير ومحتوى قابل للتطبيق عبر مواضيع التكنولوجيا والأعمال والصحة ونمط الحياة. نقدم مقالات عالية الجودة وموارد مجانية ونشرات إخبارية وأدلة عملية لمساعدة قرائنا على اتخاذ قرارات مدروسة والبقاء في المقدمة في حياتهم الشخصية والمهنية.'
    },
    {
      id: 2,
      category: 'المحتوى',
      question: 'كم مرة تنشرون محتوى جديد؟',
      answer: 'ننشر 3-4 مقالات عالية الجودة أسبوعياً، مع المحتوى المميز الذي يُنشر عادة أيام الثلاثاء والجمعة. تقويمنا التحريري يضمن محتوى ثابت وقيم يغطي المواضيع الرائجة والرؤى الدائمة عبر فئاتنا الأساسية.'
    },
    {
      id: 3,
      category: 'المحتوى',
      question: 'من يكتب مقالاتكم؟',
      answer: 'محتوانا مُنشأ من قبل فريق من المساهمين الخبراء الذين يتمتعون بخبرة واسعة في مجالاتهم المختصة. يشمل هذا باحثين حاصلين على درجة الدكتوراه ومهنيين في الصناعة وأخصائيين معتمدين وقادة فكر يجلبون خبرة من العالم الحقيقي لكل مقال.'
    },
    {
      id: 4,
      category: 'الاشتراك',
      question: 'هل نشرتكم الإخبارية مجانية؟',
      answer: 'نعم، نشرتنا الإخبارية مجانية تماماً. يمكنك الاختيار بين الملخص الأسبوعي أو التحديثات اليومية، ولا نرسل رسائل مزعجة أو نشارك عنوان بريدك الإلكتروني. يمكنك إلغاء الاشتراك في أي وقت بنقرة واحدة.'
    },
    {
      id: 5,
      category: 'الاشتراك',
      question: 'ما المتضمن في نشرتكم الإخبارية؟',
      answer: 'تتضمن نشرتنا الإخبارية أبرز الأحداث الأسبوعية المنتقاة ومحتوى حصري للمشتركين فقط والوصول المبكر للمقالات الجديدة وتحميلات الموارد المجانية والمواضيع الرائجة في مجالات اهتمامك. المشتركون المميزون يحصلون أيضاً على قوالب وأدلة إضافية.'
    },
    {
      id: 6,
      category: 'الموارد',
      question: 'هل مواردكم القابلة للتحميل مجانية حقاً؟',
      answer: 'نعم، جميع قوالبنا وأدلتنا وقوائمنا المرجعية وأدواتنا مجانية تماماً للتحميل. نؤمن بتقديم القيمة لمجتمعنا دون تكاليف خفية أو متطلبات اشتراك.'
    },
    {
      id: 7,
      category: 'الموارد',
      question: 'كيف أحصل على الموارد المجانية؟',
      answer: 'ببساطة قم بزيارة صفحة الموارد واضغط على زر التحميل لأي مورد تهتم به. بعض الموارد قد تتطلب تسجيل البريد الإلكتروني لتلقي رابط التحميل، لكن لا توجد رسوم مطلوبة.'
    },
    {
      id: 8,
      category: 'المساهمة',
      question: 'هل يمكنني المساهمة ككاتب ضيف؟',
      answer: 'نرحب بالمساهمين الخبراء الذين يمكنهم تقديم رؤى قيمة لجمهورنا. يرجى التواصل معنا بخلفيتك وعينات من كتاباتك والمواضيع المقترحة. نراجع جميع المساهمات ونعمل مع المساهمين الذين يتماشون مع معايير الجودة واحتياجات الجمهور.'
    },
    {
      id: 9,
      category: 'المساهمة',
      question: 'ما هي إرشادات النشر كضيف؟',
      answer: 'المنشورات الضيفة يجب أن تكون أصلية ومدروسة جيداً وتقدم قيمة قابلة للتطبيق للقراء. المقالات يجب أن تكون 1500-3000 كلمة وتتضمن أمثلة ذات صلة وتتماشى مع معاييرنا التحريرية. لا نقبل المحتوى الترويجي أو المقالات المنشورة في مكان آخر.'
    },
    {
      id: 10,
      category: 'تقني',
      question: 'لماذا لا أستطيع الوصول لصفحات أو ميزات معينة؟',
      answer: 'إذا كنت تواجه مشاكل تقنية، جرب مسح ذاكرة التخزين المؤقت للمتصفح أو تعطيل مانعات الإعلانات أو استخدام متصفح مختلف. معظم المشاكل تُحل بهذه الخطوات البسيطة. إذا استمرت المشاكل، يرجى التواصل مع فريق الدعم.'
    },
    {
      id: 11,
      category: 'تقني',
      question: 'هل موقعكم متوافق مع الهواتف المحمولة؟',
      answer: 'نعم، موقعنا متجاوب تماماً ومحسن لجميع الأجهزة بما في ذلك الهواتف الذكية والأجهزة اللوحية وأجهزة الكمبيوتر المكتبية. نعطي الأولوية لتجربة المستخدم على الهاتف المحمول لضمان وصولك لمحتوانا في أي مكان.'
    },
    {
      id: 12,
      category: 'الأعمال',
      question: 'هل تقدمون فرص إعلانية؟',
      answer: 'لدينا شراكات إعلانية انتقائية تتماشى مع اهتمامات جمهورنا ومعايير جودة المحتوى. تواصل معنا بمقترحك وسنراجعه لفرص التعاون المحتملة.'
    },
    {
      id: 13,
      category: 'الأعمال',
      question: 'هل يمكنني استخدام محتواكم لأعمالي أو موقعي؟',
      answer: 'محتوانا محمي بحقوق الطبع والنشر. يمكنك مشاركة مقتطفات مع الإسناد المناسب والروابط للمقال الأصلي، لكن إعادة نشر المقالات كاملة يتطلب إذن كتابي. يرجى مراجعة شروط الخدمة للحصول على إرشادات الاستخدام التفصيلية.'
    },
    {
      id: 14,
      category: 'الحساب',
      question: 'هل أحتاج لإنشاء حساب لقراءة المقالات؟',
      answer: 'لا، جميع مقالاتنا متاحة بحرية دون إنشاء حساب. ومع ذلك، الاشتراك في نشرتنا الإخبارية أو تحميل الموارد قد يتطلب تقديم عنوان بريدك الإلكتروني.'
    },
    {
      id: 15,
      category: 'الحساب',
      question: 'كيف أحدث تفضيلات النشرة الإخبارية؟',
      answer: 'يمكنك تحديث تفضيلات النشرة الإخبارية بالضغط على رابط "إدارة التفضيلات" في أي بريد إلكتروني للنشرة، أو بالتواصل معنا مباشرة. يمكنك تغيير التكرار ومواضيع الاهتمام أو إلغاء الاشتراك تماماً.'
    }
  ];

  const categories = [...new Set(faqs.map(faq => faq.category))];

  const filteredFAQs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white" dir="rtl">
      {/* قسم البطل */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-teal-500/20 backdrop-blur-sm border border-teal-400/30 rounded-full px-6 py-2 mb-8">
            <HelpCircle className="h-4 w-4 text-teal-400 ml-2" />
            <span className="text-teal-300 text-sm font-medium">مركز المساعدة</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">الأسئلة الشائعة</h1>
          <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
            اعثر على إجابات للأسئلة الشائعة حول آفاق ومحتوانا ومواردنا وخدماتنا. 
            لا تجد ما تبحث عنه؟ تواصل معنا مباشرة.
          </p>
        </div>
      </section>

      {/* قسم البحث */}
      <section className="py-12 bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-slate-400" />
            <input
              type="text"
              placeholder="ابحث في الأسئلة الشائعة..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pr-12 pl-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 text-lg"
            />
          </div>
          
          {searchTerm && (
            <div className="mt-4 text-center">
              <p className="text-slate-600">
                تم العثور على <span className="font-semibold text-teal-600">{filteredFAQs.length}</span> نتيجة لـ "{searchTerm}"
              </p>
            </div>
          )}
        </div>
      </section>

      {/* فئات الأسئلة الشائعة */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => setSearchTerm('')}
              className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                searchTerm === '' 
                  ? 'bg-teal-600 text-white' 
                  : 'bg-white text-slate-700 hover:bg-teal-50 hover:text-teal-600 border border-gray-200'
              }`}
            >
              جميع الفئات
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSearchTerm(category.toLowerCase())}
                className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                  searchTerm.toLowerCase() === category.toLowerCase()
                    ? 'bg-teal-600 text-white'
                    : 'bg-white text-slate-700 hover:bg-teal-50 hover:text-teal-600 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* قائمة الأسئلة الشائعة */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">لم يتم العثور على نتائج</h3>
              <p className="text-slate-600 mb-8">جرب تعديل مصطلحات البحث أو تصفح جميع الفئات</p>
              <button
                onClick={() => setSearchTerm('')}
                className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                عرض جميع الأسئلة الشائعة
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFAQs.map((faq) => (
                <div key={faq.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full px-8 py-6 text-right flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-xs font-bold ml-3">
                          {faq.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-slate-900 pl-4">
                        {faq.question}
                      </h3>
                    </div>
                    <div className="flex-shrink-0">
                      {openFAQ === faq.id ? (
                        <ChevronUp className="h-6 w-6 text-slate-400" />
                      ) : (
                        <ChevronDown className="h-6 w-6 text-slate-400" />
                      )}
                    </div>
                  </button>
                  
                  {openFAQ === faq.id && (
                    <div className="px-8 pb-6">
                      <div className="border-t border-gray-100 pt-6">
                        <p className="text-slate-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* دعوة للتواصل */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MessageCircle className="h-16 w-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">لا تزال لديك أسئلة؟</h2>
          <p className="text-xl text-teal-100 mb-8">
            لا تجد الإجابة التي تبحث عنها؟ فريقنا هنا لمساعدتك.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-teal-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              تواصل مع الدعم
            </a>
            <a
              href="mailto:support@afaq.com"
              className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
            >
              راسلنا مباشرة
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;