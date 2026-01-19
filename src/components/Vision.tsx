import { motion } from 'framer-motion';
import { Target, Lightbulb } from 'lucide-react';

export default function Vision() {
  return (
    <section className="py-24 bg-light-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4 font-cairo">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              رؤيتنا ورسالتنا
            </span>
          </h2>
          <p className="text-xl text-gray-600 font-cairo">نحو مستقبل أفضل في عالم التوصيل</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
            <div className="relative p-8 bg-white backdrop-blur-xl border border-gray-200 rounded-3xl hover:border-primary/50 hover:shadow-lg transition-all duration-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-primary/20 rounded-2xl">
                  <Target className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 font-cairo">رؤيتنا</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed font-cairo">
                قيادة التحول الرقمي في قطاع التوصيل وتقديم حلول ذكية تربط بين جميع أطراف العملية بكفاءة وسرعة غير مسبوقة
              </p>
              <div className="mt-6 flex gap-2">
                <div className="h-1 w-20 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
                <div className="h-1 w-10 bg-gradient-to-r from-secondary to-transparent rounded-full"></div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/20 blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
            <div className="relative p-8 bg-white backdrop-blur-xl border border-gray-200 rounded-3xl hover:border-secondary/50 hover:shadow-lg transition-all duration-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-secondary/20 rounded-2xl">
                  <Lightbulb className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 font-cairo">رسالتنا</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed font-cairo">
                توفير حلول توصيل ذكية تربط الموردين بالسائقين بكفاءة عالية، مع ضمان الشفافية والسرعة في كل مراحل العملية
              </p>
              <div className="mt-6 flex gap-2">
                <div className="h-1 w-20 bg-gradient-to-r from-secondary to-transparent rounded-full"></div>
                <div className="h-1 w-10 bg-gradient-to-r from-accent to-transparent rounded-full"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
