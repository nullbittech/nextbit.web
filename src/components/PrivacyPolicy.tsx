import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText, Mail, Globe } from 'lucide-react';

export default function PrivacyPolicy() {
    const sections = [
        {
            icon: Shield,
            title: 'المقدمة',
            content: 'نحن في NullBit Tech نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية. تشرح سياسة الخصوصية هذه كيف نجمع ونستخدم ونحمي معلوماتك عند استخدام تطبيق NEXTBIT.'
        },
        {
            icon: FileText,
            title: 'المعلومات التي نجمعها',
            subsections: [
                {
                    subtitle: 'المعلومات التي تقدمها لنا',
                    items: [
                        'معلومات الحساب: الاسم، البريد الإلكتروني، رقم الهاتف',
                        'معلومات الملف الشخصي: العنوان، المدينة، المنطقة',
                        'معلومات الشركة (للموردين): اسم الشركة، رخصة العمل',
                        'معلومات الطلبات: تفاصيل الطلبات، العناوين، قيمة الطرود'
                    ]
                },
                {
                    subtitle: 'المعلومات التي نجمعها تلقائياً',
                    items: [
                        'معلومات الموقع الجغرافي (GPS) لتتبع التوصيل',
                        'معلومات الجهاز: نوع الجهاز، نظام التشغيل',
                        'معلومات الاستخدام: كيف تستخدم التطبيق',
                        'سجل التتبع: نقاط التتبع، أوقات التحديث'
                    ]
                }
            ]
        },
        {
            icon: Eye,
            title: 'كيف نستخدم معلوماتك',
            items: [
                'توفير الخدمات: معالجة الطلبات وتنسيق التوصيلات',
                'التواصل: إرسال تحديثات مهمة عن طلباتك',
                'تحسين الخدمة: تحليل الأداء وإصلاح الأخطاء',
                'الأمان: منع الاحتيال وحماية بياناتك',
                'الامتثال القانوني: الامتثال للقوانين واللوائح'
            ]
        },
        {
            icon: Lock,
            title: 'حماية البيانات',
            items: [
                'التشفير: تشفير البيانات أثناء النقل والتخزين',
                'الوصول المحدود: محصور على الموظفين المصرح لهم',
                'Row Level Security (RLS): حماية على مستوى قاعدة البيانات',
                'المراجعة الأمنية: مراجعة منتظمة للأنظمة',
                'النسخ الاحتياطي: نسخ احتياطي منتظم للبيانات'
            ]
        },
        {
            icon: Globe,
            title: 'حقوقك',
            items: [
                'الوصول: الوصول لبياناتك الشخصية المحفوظة',
                'التصحيح: تصحيح البيانات غير الصحيحة',
                'الحذف: طلب حذف بياناتك',
                'الاعتراض: الاعتراض على معالجة بياناتك',
                'النقل: نقل بياناتك إلى خدمة أخرى',
                'سحب الموافقة: سحب موافقتك على جمع البيانات'
            ]
        }
    ];

    return (
        <section className="py-24 bg-light-50 relative overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <div className="flex justify-center mb-6">
                        <div className="p-6 bg-primary/20 rounded-3xl">
                            <Shield className="w-16 h-16 text-primary" />
                        </div>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-4 font-cairo">
                        <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                            سياسة الخصوصية
                        </span>
                    </h1>
                    <p className="text-xl text-gray-600 font-cairo">
                        نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية
                    </p>
                    <p className="text-sm text-gray-500 font-cairo mt-4">
                        آخر تحديث: يناير 2026
                    </p>
                </motion.div>

                <div className="space-y-8">
                    {sections.map((section, index) => (
                        <motion.div
                            key={section.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-white rounded-3xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300"
                        >
                            <div className="flex items-start gap-4 mb-6">
                                <div className="p-3 bg-primary/20 rounded-2xl flex-shrink-0">
                                    <section.icon className="w-8 h-8 text-primary" />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900 font-cairo">
                                    {section.title}
                                </h2>
                            </div>

                            {section.content && (
                                <p className="text-lg text-gray-700 leading-relaxed font-cairo mb-4">
                                    {section.content}
                                </p>
                            )}

                            {section.items && (
                                <ul className="space-y-3">
                                    {section.items.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                            <span className="text-gray-700 font-cairo">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {section.subsections && (
                                <div className="space-y-6">
                                    {section.subsections.map((subsection, i) => (
                                        <div key={i}>
                                            <h3 className="text-xl font-bold text-gray-800 font-cairo mb-3">
                                                {subsection.subtitle}
                                            </h3>
                                            <ul className="space-y-3">
                                                {subsection.items.map((item, j) => (
                                                    <li key={j} className="flex items-start gap-3">
                                                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                                                        <span className="text-gray-700 font-cairo">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    ))}

                    {/* مشاركة المعلومات */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-3xl p-8 border border-gray-200"
                    >
                        <h2 className="text-3xl font-bold text-gray-900 font-cairo mb-6">
                            مشاركة المعلومات
                        </h2>
                        <div className="bg-accent/10 border border-accent/30 rounded-2xl p-6 mb-6">
                            <p className="text-gray-800 font-cairo font-bold">
                                ⚠️ مهم: لا نبيع بياناتك الشخصية لأطراف ثالثة لأغراض تسويقية.
                            </p>
                        </div>
                        <p className="text-gray-700 font-cairo mb-4">
                            نشارك معلوماتك فقط مع:
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                                <span className="text-gray-700 font-cairo">
                                    <strong>مقدمي الخدمات:</strong> Supabase (قاعدة البيانات والاستضافة)
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                                <span className="text-gray-700 font-cairo">
                                    <strong>شركاء الأعمال:</strong> السائقين والموردين لتنسيق التوصيل
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                                <span className="text-gray-700 font-cairo">
                                    <strong>السلطات القانونية:</strong> عند الطلب القانوني فقط
                                </span>
                            </li>
                        </ul>
                    </motion.div>

                    {/* الاتصال بنا */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-3xl p-8 border border-gray-200"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-primary/20 rounded-2xl">
                                <Mail className="w-8 h-8 text-primary" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 font-cairo">
                                الاتصال بنا
                            </h2>
                        </div>
                        <p className="text-gray-700 font-cairo mb-4">
                            لأي أسئلة أو استفسارات حول سياسة الخصوصية أو بياناتك الشخصية:
                        </p>
                        <div className="space-y-2">
                            <p className="text-gray-800 font-cairo">
                                <strong>البريد الإلكتروني:</strong>{' '}
                                <a href="mailto:nullbit.tech@gmail.com" className="text-primary hover:underline">
                                    nullbit.tech@gmail.com
                                </a>
                            </p>
                            <p className="text-gray-800 font-cairo">
                                <strong>اسم التطبيق:</strong> NEXTBIT - Delivery Supplier
                            </p>
                            <p className="text-gray-800 font-cairo">
                                <strong>الشركة:</strong> NullBit Tech
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
