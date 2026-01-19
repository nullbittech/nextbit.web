import { motion } from 'framer-motion';
import { Package, Settings, Truck, Bell, ArrowLeft } from 'lucide-react';

export default function Workflow() {
  const steps = [
    {
      title: 'المورد',
      description: 'ينشئ الطلب',
      icon: Package,
      color: 'secondary',
      gradient: 'from-secondary to-green-600',
    },
    {
      title: 'الإدارة',
      description: 'تعيين للسائق',
      icon: Settings,
      color: 'primary',
      gradient: 'from-primary to-blue-600',
    },
    {
      title: 'السائق',
      description: 'يستلم ويوصل',
      icon: Truck,
      color: 'primary',
      gradient: 'from-primary to-cyan-600',
    },
    {
      title: 'الكل',
      description: 'تحديثات فورية',
      icon: Bell,
      color: 'accent',
      gradient: 'from-accent to-orange-600',
    },
  ];

  return (
    <section className="py-24 bg-light-100 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4 font-cairo">
            <span className="bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">
              كيف يعمل النظام
            </span>
          </h2>
          <p className="text-xl text-gray-600 font-cairo">رحلة الطلب من البداية للنهاية</p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                <div className="relative group">
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500`}></div>

                  <div className="relative p-8 bg-white backdrop-blur-xl border border-gray-200 rounded-3xl hover:border-gray-300 transition-all duration-500 text-center">
                    <div className="flex justify-center mb-6">
                      <div className={`p-6 bg-gradient-to-br ${step.gradient} rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <step.icon className="w-10 h-10 text-gray-900" />
                      </div>
                    </div>

                    <div className={`text-4xl font-black mb-3 bg-gradient-to-br ${step.gradient} bg-clip-text text-transparent`}>
                      {index + 1}
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-2 font-cairo">{step.title}</h3>
                    <p className="text-gray-600 font-cairo">{step.description}</p>
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    className="hidden lg:block absolute top-1/2 -left-4 transform -translate-y-1/2 z-20"
                  >
                    <ArrowLeft className="w-8 h-8 text-primary/50 animate-pulse" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-4 p-6 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 backdrop-blur-xl border border-gray-200 rounded-2xl">
              <Bell className="w-8 h-8 text-accent animate-pulse" />
              <p className="text-lg text-gray-900 font-cairo">
                جميع الأطراف تحصل على تحديثات فورية في كل خطوة
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
