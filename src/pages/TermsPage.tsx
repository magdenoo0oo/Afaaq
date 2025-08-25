import React from 'react';
import { FileText, Scale, AlertCircle, CheckCircle } from 'lucide-react';

const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-teal-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Scale className="h-16 w-16 text-teal-400 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">شروط الخدمة</h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            يرجى قراءة هذه الشروط بعناية قبل استخدام موقعنا وخدماتنا.
          </p>
          <p className="text-slate-400 mt-4">آخر تحديث: 1 يناير 2025</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Overview */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">نظرة عامة على الشروط</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-slate-900 mb-2">الاستخدام العادل</h3>
                <p className="text-sm text-slate-600">إرشادات واضحة للاستخدام المناسب للموقع</p>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <FileText className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-slate-900 mb-2">حقوق المحتوى</h3>
                <p className="text-sm text-slate-600">حماية الملكية الفكرية والمحتوى</p>
              </div>
              <div className="text-center p-6 bg-orange-50 rounded-lg">
                <AlertCircle className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                <h3 className="font-semibold text-slate-900 mb-2">المسؤوليات</h3>
                <p className="text-sm text-slate-600">المسؤوليات المتبادلة والقيود</p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">قبول الشروط</h2>
            
            <p className="text-slate-600 mb-6">
              بالوصول إلى واستخدام آفاق ("نحن" أو "لنا" أو "موقعنا")، فإنك تقبل وتوافق على الالتزام 
              بشروط وأحكام هذه الاتفاقية. إذا كنت لا توافق على الالتزام بما ورد أعلاه، يرجى عدم 
              استخدام هذه الخدمة.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12">ترخيص الاستخدام</h2>
            
            <p className="text-slate-600 mb-4">
              يُمنح الإذن بتنزيل نسخة واحدة مؤقتاً من المواد على آفاق للعرض الشخصي غير التجاري المؤقت فقط. 
              هذا منح ترخيص وليس نقل ملكية، وتحت هذا الترخيص لا يجوز لك:
            </p>
            <ul className="text-slate-600 mb-6 pr-6 space-y-2">
              <li>تعديل أو نسخ المواد</li>
              <li>استخدام المواد لأي غرض تجاري أو لأي عرض عام (تجاري أو غير تجاري)</li>
              <li>محاولة فك تجميع أو هندسة عكسية لأي برنامج موجود على موقع آفاق</li>
              <li>إزالة أي حقوق طبع ونشر أو إشعارات ملكية أخرى من المواد</li>
            </ul>

            <p className="text-slate-600 mb-6">
              سينتهي هذا الترخيص تلقائياً إذا انتهكت أياً من هذه القيود وقد ينتهي بواسطة آفاق في أي وقت. 
              عند إنهاء عرضك لهذه المواد أو عند إنهاء هذا الترخيص، يجب عليك تدمير أي مواد منزلة في 
              حوزتك سواء في شكل إلكتروني أو مطبوع.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12">المحتوى والخدمات</h2>
            
            <h3 className="text-xl font-semibold text-slate-900 mb-3">محتوانا</h3>
            <p className="text-slate-600 mb-4">
              جميع المحتويات المنشورة على آفاق، بما في ذلك على سبيل المثال لا الحصر المقالات والصور والرسوم 
              والشعارات والمحتوى متعدد الوسائط، مملوكة لآفاق أو موردي المحتوى لدينا ومحمية بقوانين حقوق 
              الطبع والنشر الدولية.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">المحتوى المُنشأ من قبل المستخدمين</h3>
            <p className="text-slate-600 mb-4">
              إذا قدمت محتوى إلينا (مثل التعليقات أو الملاحظات أو المساهمات)، فإنك تمنحنا ترخيصاً غير حصري 
              وخالي من حقوق الملكية ودائم وعالمي لاستخدام وتعديل ونشر وتوزيع هذا المحتوى.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">دقة المحتوى</h3>
            <p className="text-slate-600 mb-6">
              بينما نسعى للدقة، لا نقدم ضمانات حول اكتمال أو دقة أو موثوقية محتوانا. المحتوى لأغراض 
              إعلامية فقط ولا ينبغي اعتباره نصيحة مهنية.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12">سياسة الاستخدام المقبول</h2>
            
            <p className="text-slate-600 mb-4">أنت توافق على عدم:</p>
            <ul className="text-slate-600 mb-6 pr-6 space-y-2">
              <li>استخدام الموقع لأي غرض غير قانوني أو لحث الآخرين على أداء أعمال غير قانونية</li>
              <li>انتهاك أي قوانين أو لوائح دولية أو اتحادية أو إقليمية أو محلية</li>
              <li>التعدي على حقوق الملكية الفكرية لدينا أو حقوق الملكية الفكرية للآخرين أو انتهاكها</li>
              <li>المضايقة أو الإساءة أو الإهانة أو الإضرار أو التشهير أو التشويه أو التخويف أو التمييز</li>
              <li>تقديم معلومات خاطئة أو مضللة</li>
              <li>تحميل فيروسات أو رموز ضارة</li>
              <li>إرسال رسائل غير مرغوب فيها أو رسائل غير مطلوبة</li>
              <li>محاولة الحصول على وصول غير مصرح به لأنظمتنا</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12">الخصوصية وحماية البيانات</h2>
            
            <p className="text-slate-600 mb-6">
              خصوصيتك مهمة بالنسبة لنا. يحكم جمعنا واستخدامنا للمعلومات الشخصية سياسة الخصوصية الخاصة بنا، 
              والتي يتم دمجها في شروط الخدمة هذه بالإشارة. باستخدام موقعنا، فإنك توافق على سياسة الخصوصية الخاصة بنا.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12">خدمات الطرف الثالث</h2>
            
            <p className="text-slate-600 mb-4">قد يحتوي موقعنا على روابط لمواقع أو خدمات طرف ثالث. نحن لسنا مسؤولين عن:</p>
            <ul className="text-slate-600 mb-6 pr-6 space-y-2">
              <li>محتوى أو ممارسات الخصوصية لمواقع الطرف الثالث</li>
              <li>توفر أو وظائف خدمات الطرف الثالث</li>
              <li>أي أضرار أو خسائر متعلقة باستخدامك لخدمات الطرف الثالث</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12">إخلاء المسؤولية</h2>
            
            <p className="text-slate-600 mb-4">
              المعلومات على هذا الموقع مقدمة على أساس "كما هي". إلى أقصى حد يسمح به القانون، 
              تستبعد هذه الشركة:
            </p>
            <ul className="text-slate-600 mb-6 pr-6 space-y-2">
              <li>جميع التمثيلات والضمانات المتعلقة بهذا الموقع ومحتوياته</li>
              <li>جميع المسؤوليات عن الأضرار الناشئة عن أو فيما يتعلق باستخدامك لهذا الموقع</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12">قيود المسؤولية</h2>
            
            <p className="text-slate-600 mb-6">
              في أي حال من الأحوال لن تكون آفاق أو مديريها أو موظفيها أو شركاؤها أو وكلاؤها أو مورديها 
              أو الشركات التابعة لها مسؤولة عن أي أضرار غير مباشرة أو عرضية أو عقابية أو تبعية أو خاصة 
              ناشئة عن أو متعلقة باستخدامك للموقع.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12">التعويض</h2>
            
            <p className="text-slate-600 mb-6">
              أنت توافق على الدفاع عن آفاق وتعويضها وحمايتها من وضد أي خسارة أو ضرر أو مسؤولية أو مطالبة 
              أو طلب ناشئ عن استخدامك للموقع أو انتهاكك لشروط الخدمة هذه.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12">الإنهاء</h2>
            
            <p className="text-slate-600 mb-6">
              يجوز لنا إنهاء أو تعليق الوصول إلى خدمتنا فوراً، دون إشعار مسبق أو مسؤولية، لأي سبب كان، 
              بما في ذلك دون قيود إذا انتهكت شروط الخدمة.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12">القانون الحاكم</h2>
            
            <p className="text-slate-600 mb-6">
              تحكم شروط الخدمة هذه وأي اتفاقيات منفصلة نقدم لك بموجبها خدمات وتفسر وفقاً 
              لقوانين المملكة العربية السعودية.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12">التغييرات على الشروط</h2>
            
            <p className="text-slate-600 mb-6">
              نحتفظ بالحق، وفقاً لتقديرنا الوحيد، في تعديل أو استبدال هذه الشروط في أي وقت. إذا كان 
              التنقيح جوهرياً، سنحاول تقديم إشعار لمدة 30 يوماً على الأقل قبل أن تصبح أي شروط جديدة سارية المفعول.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12">معلومات الاتصال</h2>
            
            <p className="text-slate-600 mb-4">
              إذا كان لديك أي أسئلة حول شروط الخدمة هذه، يرجى الاتصال بنا:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-slate-600 mb-2"><strong>البريد الإلكتروني:</strong> legal@afaq.com</p>
              <p className="text-slate-600 mb-2"><strong>العنوان:</strong> شارع الأعمال 123، الجناح 100، الرياض، المملكة العربية السعودية</p>
              <p className="text-slate-600"><strong>الهاتف:</strong> +966 50 123 4567</p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg mt-8">
              <h3 className="font-semibold text-slate-900 mb-2">أسئلة حول هذه الشروط؟</h3>
              <p className="text-slate-600">
                إذا كان لديك أي أسئلة حول شروط الخدمة هذه، يرجى عدم التردد في الاتصال بنا. 
                نحن ملتزمون بالشفافية وسنكون سعداء لتوضيح أي أحكام.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;