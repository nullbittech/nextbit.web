import { motion } from 'framer-motion';
import { MapPin, BarChart3, Bell, WifiOff, Tag, Zap } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: MapPin,
      title: 'تتبع GPS مباشر',
      description: 'تتبع لحظي لموقع السائقين',
      color: 'primary',
    },
    {
      icon: BarChart3,
      title: 'تقارير تلقائية',
      description: 'تقارير شاملة وإحصائيات دقيقة',
      color: 'secondary',
    },
    {
      icon: Bell,
      title: 'إشعارات فورية',
      description: 'تنبيهات فورية لكل حدث',
      color: 'accent',
    },
    {
      icon: WifiOff,
      title: 'يعمل Offline',
      description: 'استمرارية العمل بدون إنترنت',
      color: 'primary',
    },
    {
      icon: Tag,
      title: 'طباعة ملصقات',
      description: 'طباعة سريعة للباركود',
      color: 'secondary',
    },
    {
      icon: Zap,
      title: 'تحديثات Real-time',
      description: 'مزامنة فورية عبر المنصات',
      color: 'accent',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-dark-800 to-dark-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-secondary/10 via-transparent to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4 font-cairo">
            <span className="bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent">
              المميزات الأساسية
            </span>
          </h2>
          <p className="text-xl text-gray-600 font-cairo">تقنيات حديثة لتجربة استثنائية</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-${feature.color}/10 blur-2xl group-hover:blur-3xl transition-all duration-500`}></div>

              <div className="relative p-8 bg-light-100 backdrop-blur-xl border border-gray-200 rounded-3xl hover:border-gray-300 transition-all duration-500 text-center">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="flex justify-center mb-6"
                >
                  <div className={`p-5 bg-${feature.color}/20 rounded-2xl`}>
                    <feature.icon className={`w-10 h-10 text-${feature.color}`} />
                  </div>
                </motion.div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3 font-cairo">{feature.title}</h3>
                <p className="text-gray-600 font-cairo leading-relaxed">{feature.description}</p>

                <div className={`mt-6 h-1 w-16 mx-auto bg-gradient-to-r from-${feature.color} to-transparent rounded-full`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 p-8 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 backdrop-blur-xl border border-gray-200 rounded-3xl">
            <Zap className="w-12 h-12 text-accent animate-pulse" />
            <div className="text-right">
              <h4 className="text-2xl font-bold text-gray-900 mb-1 font-cairo">أداء استثنائي</h4>
              <p className="text-gray-600 font-cairo">تقنيات حديثة لتجربة سلسة وسريعة</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
