import { motion } from 'framer-motion';
import { Smartphone, Package, LayoutDashboard, Truck, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-light-100 via-light-50 to-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            className="flex justify-center mb-8"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-white rounded-full blur-2xl opacity-80"></div>
              <div className="relative bg-white rounded-full p-6 shadow-xl">
                <img
                  src="/logo.png"
                  alt="NEXTBIT Logo"
                  className="h-20 w-auto"
                />
              </div>
            </div>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl font-black mb-6 font-cairo"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient">
              NEXTBIT
            </span>
          </motion.h1>

          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-cairo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            نظام توصيل ذكي متكامل
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 mb-12 font-cairo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            3 منصات مترابطة - تحديثات فورية - تحكم كامل
          </motion.p>

          <motion.div
            className="flex justify-center mb-16"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-primary/30 blur-3xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <div className="relative flex items-center gap-4 p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl">
                <Truck className="text-primary w-16 h-16" />
                <MapPin className="text-accent w-12 h-12 animate-pulse" />
                <Package className="text-secondary w-16 h-16" />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <div className="group p-6 bg-white backdrop-blur-xl border border-gray-200 rounded-2xl hover:shadow-lg hover:scale-105 transition-all duration-300">
              <div className="flex flex-col items-center gap-4">
                <div className="p-4 bg-primary/20 rounded-2xl group-hover:bg-primary/30 transition-colors">
                  <Smartphone className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 font-cairo">تطبيق السائقين</h3>
                <p className="text-gray-600 text-sm font-cairo">سهولة في التنفيذ والتتبع</p>
              </div>
            </div>

            <div className="group p-6 bg-white backdrop-blur-xl border border-gray-200 rounded-2xl hover:shadow-lg hover:scale-105 transition-all duration-300">
              <div className="flex flex-col items-center gap-4">
                <div className="p-4 bg-secondary/20 rounded-2xl group-hover:bg-secondary/30 transition-colors">
                  <Package className="w-12 h-12 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 font-cairo">تطبيق الموردين</h3>
                <p className="text-gray-600 text-sm font-cairo">إنشاء وتتبع بسيط</p>
              </div>
            </div>

            <div className="group p-6 bg-white backdrop-blur-xl border border-gray-200 rounded-2xl hover:shadow-lg hover:scale-105 transition-all duration-300">
              <div className="flex flex-col items-center gap-4">
                <div className="p-4 bg-primary/20 rounded-2xl group-hover:bg-primary/30 transition-colors">
                  <LayoutDashboard className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 font-cairo">لوحة الإدارة</h3>
                <p className="text-gray-600 text-sm font-cairo">تحكم كامل ومراقبة</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-light-50 to-transparent"></div>
    </section>
  );
}
