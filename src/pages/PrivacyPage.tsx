import React from 'react';
import { Shield, Eye, Lock, Users } from 'lucide-react';

const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-teal-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="h-16 w-16 text-teal-400 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">سياسة الخصوصية</h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            خصوصيتك مهمة بالنسبة لنا. تشرح هذه السياسة كيف نجمع ونستخدم ونحمي معلوماتك.
          </p>
          <p className="text-slate-400 mt-4">آخر تحديث: 1 يناير 2025</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Overview */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">نظرة عامة على الخصوصية</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-teal-50 rounded-lg">
                <Eye className="h-8 w-8 text-teal-600 mx-auto mb-3" />
                <h3 className="font-semibold text-slate-900 mb-2">الشفافية</h3>
                <p className="text-sm text-slate-600">نوضح بوضوح البيانات التي نجمعها والسبب</p>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <Lock className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-slate-900 mb-2">الأمان</h3>
                <p className="text-sm text-slate-600">بياناتك محمية بأمان على مستوى الصناعة</p>
              </div>
              <div className="text-center p-6 bg-orange-50 rounded-lg">
                <Users className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                <h3 className="font-semibold text-slate-900 mb-2">التحكم</h3>
                <p className="text-sm text-slate-600">لديك تحكم كامل في معلوماتك الشخصية</p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">المعلومات التي نجمعها</h2>
            
            <h3 className="text-xl font-semibold text-slate-900 mb-3">المعلومات التي تقدمها</h3>
            <p className="text-slate-600 mb-4">
              نجمع المعلومات التي تقدمها طوعاً عندما:
            </p>
            <ul className="text-slate-600 mb-6 pr-6 space-y-2">
              <li>تشترك في نشرتنا الإخبارية</li>
              <li>تتواصل معنا من خلال نموذج الاتصال</li>
              <li>تعلق على مقالاتنا (إن أمكن)</li>
              <li>تشارك في الاستطلاعات أو الاستفتاءات</li>
              <li>تتقدم لتصبح مساهماً</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">جمع المعلومات التلقائي</h3>
            <p className="text-slate-600 mb-4">
              عند زيارة موقعنا، نجمع تلقائياً معلومات معينة تشمل:
            </p>
            <ul className="text-slate-600 mb-6 pr-6 space-y-2">
              <li>عنوان IP ومعلومات الموقع</li>
              <li>نوع المتصفح والإصدار</li>
              <li>معلومات الجهاز</li>
              <li>الصفحات المزارة والوقت المقضي</li>
              <li>الموقع المرجعي</li>
              <li>مصطلحات البحث المستخدمة للعثور على موقعنا</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">ملفات تعريف الارتباط وتقنيات التتبع</h3>
            <p className="text-slate-600 mb-6">
              نستخدم ملفات تعريف الارتباط وتقنيات مماثلة لتحسين تجربة التصفح وتحليل حركة الموقع 
              وفهم تفضيلات المستخدمين. يمكنك التحكم في إعدادات ملفات تعريف الارتباط من خلال تفضيلات المتصفح.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12">كيف نستخدم معلوماتك</h2>
            
            <p className="text-slate-600 mb-4">نستخدم المعلومات المجمعة لـ:</p>
            <ul className="text-slate-600 mb-6 pr-6 space-y-2">
              <li>تقديم وتحسين محتوانا وخدماتنا</li>
              <li>إرسال النشرات الإخبارية والتحديثات (بموافقتك)</li>
              <li>الرد على استفساراتك وطلبات الدعم</li>
              <li>تحليل استخدام الموقع وتحسين تجربة المستخدم</li>
              <li>منع الاحتيال وضمان أمان الموقع</li>
              <li>الامتثال للالتزامات القانونية</li>
              <li>عرض إعلانات ذات صلة (من خلال شبكات إعلانية خارجية)</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12">مشاركة المعلومات</h2>
            
            <p className="text-slate-600 mb-4">
              لا نبيع أو نتاجر أو نؤجر معلوماتك الشخصية لأطراف ثالثة. قد نشارك المعلومات في هذه الظروف المحدودة:
            </p>
            <ul className="text-slate-600 mb-6 pr-6 space-y-2">
              <li><strong>مقدمو الخدمات:</strong> مع أطراف ثالثة موثوقة تساعد في عمليات الموقع أو تسليم البريد الإلكتروني أو التحليلات</li>
              <li><strong>المتطلبات القانونية:</strong> عندما يتطلب القانون ذلك أو لحماية حقوقنا وسلامتنا</li>
              <li><strong>نقل الأعمال:</strong> في حالة الاندماج أو البيع أو نقل الأصول</li>
              <li><strong>الموافقة:</strong> عندما توافق صراحة على المشاركة</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12">الخدمات الخارجية</h2>
            
            <h3 className="text-xl font-semibold text-slate-900 mb-3">جوجل أناليتكس</h3>
            <p className="text-slate-600 mb-4">
              نستخدم جوجل أناليتكس لفهم كيفية استخدام الزوار لموقعنا. يجمع جوجل أناليتكس المعلومات 
              بشكل مجهول ويقدم تقارير عن اتجاهات الموقع دون تحديد هوية الزوار الفرديين. يمكنك إلغاء الاشتراك 
              في تتبع جوجل أناليتكس بزيارة صفحة إلغاء الاشتراك في جوجل.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">جوجل أدسنس</h3>
            <p className="text-slate-600 mb-6">
              نستخدم جوجل أدسنس لعرض الإعلانات. قد يستخدم جوجل ملفات تعريف الارتباط لعرض إعلانات 
              بناءً على زياراتك لموقعنا ومواقع أخرى. يمكنك إلغاء الاشتراك في الإعلانات المخصصة بزيارة 
              صفحة إعدادات الإعلانات في جوجل.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12">أمان البيانات</h2>
            
            <p className="text-slate-600 mb-6">
              نطبق تدابير أمنية مناسبة لحماية معلوماتك من الوصول غير المصرح به أو التغيير أو الكشف أو التدمير. 
              تشمل هذه التشفير SSL والاستضافة الآمنة وعمليات التدقيق الأمني المنتظمة وضوابط الوصول. ومع ذلك، 
              لا يوجد نقل عبر الإنترنت آمن بنسبة 100%، ولا يمكننا ضمان الأمان المطلق.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12">حقوقك وخياراتك</h2>
            
            <p className="text-slate-600 mb-4">لديك الحق في:</p>
            <ul className="text-slate-600 mb-6 pr-6 space-y-2">
              <li>الوصول إلى معلوماتك الشخصية التي نحتفظ بها</li>
              <li>تصحيح المعلومات غير الدقيقة أو غير المكتملة</li>
              <li>حذف معلوماتك الشخصية (مع مراعاة المتطلبات القانونية)</li>
              <li>إلغاء الاشتراك في الاتصالات التسويقية</li>
              <li>الاعتراض على معالجة معينة لمعلوماتك</li>
              <li>طلب قابلية نقل البيانات</li>
            </ul>

            <p className="text-slate-600 mb-6">
              لممارسة هذه الحقوق، يرجى الاتصال بنا على privacy@afaq.com. سنرد على طلبك 
              خلال 30 يوماً.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12">خصوصية الأطفال</h2>
            
            <p className="text-slate-600 mb-6">
              موقعنا غير مخصص للأطفال دون سن 13 عاماً. لا نجمع عن قصد معلومات شخصية 
              من الأطفال دون سن 13. إذا علمنا أننا جمعنا معلومات من طفل دون سن 13، 
              سنحذف تلك المعلومات فوراً.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12">نقل البيانات الدولي</h2>
            
            <p className="text-slate-600 mb-6">
              قد يتم نقل معلوماتك ومعالجتها في بلدان غير بلدك. نضمن أن هذه النقلات تتوافق 
              مع قوانين حماية البيانات المعمول بها ونطبق ضمانات مناسبة لحماية معلوماتك.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12">التغييرات على هذه السياسة</h2>
            
            <p className="text-slate-600 mb-6">
              قد نحدث سياسة الخصوصية هذه بشكل دوري. سنخطرك بأي تغييرات جوهرية بنشر 
              السياسة الجديدة على موقعنا وتحديث تاريخ "آخر تحديث". استمرار استخدامك لموقعنا 
              بعد التغييرات يشكل قبولاً للسياسة المحدثة.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12">معلومات الاتصال</h2>
            
            <p className="text-slate-600 mb-4">
              إذا كان لديك أسئلة حول سياسة الخصوصية هذه أو ممارسات البيانات لدينا، يرجى الاتصال بنا:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-slate-600 mb-2"><strong>البريد الإلكتروني:</strong> privacy@afaq.com</p>
              <p className="text-slate-600 mb-2"><strong>العنوان:</strong> شارع الأعمال 123، الجناح 100، الرياض، المملكة العربية السعودية</p>
              <p className="text-slate-600"><strong>الهاتف:</strong> +966 50 123 4567</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;