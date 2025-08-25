import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Target, Award, Heart } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-teal-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">حول آفاق</h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            نحن ملتزمون بتقديم رؤى متعمقة وتحليل خبير ومحتوى قابل للتطبيق 
            يساعد قراءنا على اتخاذ قرارات مدروسة والبقاء في المقدمة في حياتهم الشخصية والمهنية.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">رسالتنا</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                في عصر الإفراط في المعلومات، نحن نخترق الضوضاء لتقديم محتوى مهم حقاً. 
                رسالتنا هي تمكين القراء بالمعرفة والرؤى والاستراتيجيات العملية التي تحدث 
                فرقاً حقيقياً في حياتهم ومهنهم.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                نؤمن أن المحتوى عالي الجودة يجب أن يكون متاحاً للجميع، لذلك نركز على 
                إنشاء مقالات شاملة ومدروسة جيداً تقدم قيمة حقيقية دون الحاجة 
                لاشتراكات مكلفة أو وصول مميز.
              </p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-8 rounded-xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <Target className="h-12 w-12 text-teal-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-slate-900">50 ألف+</div>
                  <div className="text-slate-600">قارئ شهرياً</div>
                </div>
                <div className="text-center">
                  <Award className="h-12 w-12 text-teal-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-slate-900">200+</div>
                  <div className="text-slate-600">مقال منشور</div>
                </div>
                <div className="text-center">
                  <Users className="h-12 w-12 text-teal-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-slate-900">15+</div>
                  <div className="text-slate-600">كاتب خبير</div>
                </div>
                <div className="text-center">
                  <Heart className="h-12 w-12 text-teal-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-slate-900">98%</div>
                  <div className="text-slate-600">رضا القراء</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">قيمنا الأساسية</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              هذه المبادئ توجه كل ما نقوم به، من إنشاء المحتوى إلى التفاعل مع المجتمع
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">الجودة أولاً</h3>
              <p className="text-slate-600">
                كل قطعة محتوى تخضع لبحث دقيق وتدقيق للحقائق لضمان الدقة والقيمة.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">التركيز على المجتمع</h3>
              <p className="text-slate-600">
                نعطي الأولوية لاحتياجات قرائنا وملاحظاتهم، ونتطور باستمرار لخدمة مجتمعنا بشكل أفضل.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">التأثير العملي</h3>
              <p className="text-slate-600">
                محتوانا مصمم ليكون قابلاً للتطبيق، مما يساعد القراء على تنفيذ الرؤى في حياتهم اليومية.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">كتابنا الخبراء</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              فريق متنوع من الخبراء يجمع عقوداً من الخبرة عبر تخصصات متعددة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">د. سارة أحمد</h3>
              <p className="text-teal-600 font-semibold mb-2">خبيرة التكنولوجيا والذكاء الاصطناعي</p>
              <p className="text-sm text-slate-600">
                أكثر من 15 عاماً في بحوث الذكاء الاصطناعي مع منشورات في مجلات رائدة وخبرة في شركات تقنية كبرى.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-orange-400 to-red-500 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">محمد الخالدي</h3>
              <p className="text-teal-600 font-semibold mb-2">استشاري استراتيجية الأعمال</p>
              <p className="text-sm text-slate-600">
                مدير تنفيذي سابق في شركات عالمية متخصص في استراتيجيات العمل عن بُعد والتحول الرقمي.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">د. فاطمة النوري</h3>
              <p className="text-teal-600 font-semibold mb-2">أخصائية الصحة النفسية</p>
              <p className="text-sm text-slate-600">
                طبيبة نفسية مرخصة متخصصة في الصحة الرقمية وتحديات الصحة النفسية الحديثة.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-teal-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">هل لديك أسئلة أو اقتراحات؟</h2>
          <p className="text-xl text-slate-300 mb-8">
            نحب أن نسمع منك. تواصل معنا لمناقشة فرص التعاون، 
            اقتراحات المواضيع، أو فقط لتقول مرحباً.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            تواصل معنا
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;