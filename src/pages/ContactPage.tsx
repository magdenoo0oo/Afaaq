import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Clock, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('شكراً لك على رسالتك! سنتواصل معك قريباً.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-teal-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">تواصل معنا</h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            نحب أن نسمع منك. أرسل لنا رسالة وسنرد عليك في أقرب وقت ممكن.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">معلومات التواصل</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 space-x-reverse">
                    <div className="bg-teal-100 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">البريد الإلكتروني</h3>
                      <p className="text-slate-600">contact@afaq.com</p>
                      <p className="text-sm text-slate-500">سنرد خلال 24 ساعة</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 space-x-reverse">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">الهاتف</h3>
                      <p className="text-slate-600">+966 50 123 4567</p>
                      <p className="text-sm text-slate-500">الأحد-الخميس 9ص-5م</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 space-x-reverse">
                    <div className="bg-orange-100 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">المكتب</h3>
                      <p className="text-slate-600">شارع الأعمال 123<br />الجناح 100<br />الرياض، المملكة العربية السعودية</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 space-x-reverse">
                    <div className="bg-purple-100 p-3 rounded-lg">
                      <Clock className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">ساعات العمل</h3>
                      <p className="text-slate-600">الأحد - الخميس: 9:00 ص - 5:00 م</p>
                      <p className="text-slate-600">عطلة نهاية الأسبوع: استفسارات طارئة فقط</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg">
                  <h3 className="font-semibold text-slate-900 mb-2">استجابة سريعة</h3>
                  <p className="text-sm text-slate-600">
                    للأمور العاجلة أو الاستفسارات الصحفية، يرجى وضع علامة "عاجل" 
                    في موضوع البريد الإلكتروني للمعالجة الأسرع.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">أرسل لنا رسالة</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                        الاسم الكامل *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                        placeholder="أحمد محمد"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                        البريد الإلكتروني *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                        placeholder="ahmed@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-2">
                      الموضوع *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                      placeholder="ما هو موضوع رسالتك؟"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                      الرسالة *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors resize-none"
                      placeholder="أخبرنا المزيد عن استفسارك..."
                    />
                  </div>

                  <div className="flex items-start space-x-3 space-x-reverse">
                    <input
                      type="checkbox"
                      id="consent"
                      required
                      className="mt-1 w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                    />
                    <label htmlFor="consent" className="text-sm text-slate-600">
                      أوافق على <Link to="/privacy-policy" className="text-teal-600 hover:underline">سياسة الخصوصية</Link> و
                      <Link to="/terms-of-service" className="text-teal-600 hover:underline mr-1">شروط الخدمة</Link>. *
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2 space-x-reverse"
                  >
                    <Send className="h-5 w-5" />
                    <span>إرسال الرسالة</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">الأسئلة الشائعة</h2>
            <p className="text-lg text-slate-600">
              إجابات سريعة للأسئلة الشائعة. لا تجد ما تبحث عنه؟ تواصل معنا مباشرة.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-slate-900 mb-2">كم مرة تنشرون محتوى جديد؟</h3>
              <p className="text-slate-600">
                ننشر 3-4 مقالات عالية الجودة أسبوعياً، مع المحتوى المميز الذي يُنشر عادة أيام الثلاثاء والجمعة.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-slate-900 mb-2">هل يمكنني المساهمة ككاتب ضيف؟</h3>
              <p className="text-slate-600">
                نعم! نرحب بالمساهمين الخبراء. يرجى مراسلتنا بخلفيتك وعينات من كتاباتك والمواضيع المقترحة.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-slate-900 mb-2">هل تقدمون فرص إعلانية؟</h3>
              <p className="text-slate-600">
                لدينا شراكات إعلانية انتقائية. تواصل معنا بمقترحك وسنراجعه للتوافق مع جمهورنا.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-slate-900 mb-2">كيف يمكنني اقتراح مواضيع للمقالات المستقبلية؟</h3>
              <p className="text-slate-600">
                نحب اقتراحات القراء! استخدم نموذج التواصل أعلاه أو راسلنا مباشرة بأفكار المواضيع وسبب قيمتها لمجتمعنا.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;