import { motion } from 'framer-motion';
import { LayoutDashboard, Truck, Package, Check } from 'lucide-react';

export default function Platforms() {
  const platforms = [
    {
      title: 'لوحة الإدارة',
      icon: LayoutDashboard,
      color: 'primary',
      gradient: 'from-primary/20 to-blue-600/20',
      description: 'إدارة شاملة وتحكم كامل',
      features: [
        'تتبع مباشر للسائقين',
        'تعيين تلقائي للطلبات',
        'تقارير مالية وأداء',
        'إحصائيات فورية',
      ],
    },
    {
      title: 'تطبيق السائقين',
      icon: Truck,
      color: 'primary',
      gradient: 'from-primary/20 to-cyan-600/20',
      description: 'سهولة وسرعة في التنفيذ',
      features: [
        'قبول/رفض الطلبات',
        'ماسح QR للطرود',
        'ملاحة GPS',
        'حساب الأرباح تلقائياً',
      ],
    },
    {
      title: 'تطبيق الموردين',
      icon: Package,
      color: 'secondary',
      gradient: 'from-secondary/20 to-green-600/20',
      description: 'إنشاء وتتبع بسيط',
      features: [
        'طلب جديد بـ3 خطوات',
        'تتبع مباشر',
        'تقارير مالية',
        'إشعارات فورية',
      ],
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-dark-900 to-dark-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4 font-cairo">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              المنصات الثلاثة
            </span>
          </h2>
          <p className="text-xl text-gray-600 font-cairo">حلول متكاملة لكل طرف في العملية</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${platform.gradient} blur-2xl group-hover:blur-3xl transition-all duration-500`}></div>

              <div className="relative h-full p-8 bg-light-100 backdrop-blur-xl border border-gray-200 rounded-3xl hover:border-gray-300 transition-all duration-500 flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-4 bg-${platform.color}/20 rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                    <platform.icon className={`w-12 h-12 text-${platform.color}`} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 font-cairo">{platform.title}</h3>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 font-cairo text-lg">{platform.description}</p>

                <div className="space-y-4 flex-grow">
                  {platform.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3 group/item">
                      <div className={`p-1 bg-${platform.color}/20 rounded-full mt-1 group-hover/item:scale-110 transition-transform`}>
                        <Check className={`w-4 h-4 text-${platform.color}`} />
                      </div>
                      <span className="text-gray-700 font-cairo">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className={`h-1 w-full bg-gradient-to-r from-${platform.color} to-transparent rounded-full`}></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
