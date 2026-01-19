import { motion } from 'framer-motion';
import { Heart, Code } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-dark-800 to-dark-900 border-t border-white/10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            className="flex justify-center mb-8"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <img
              src="/logo.png"
              alt="NEXTBIT Logo"
              className="h-20 w-auto opacity-80 hover:opacity-100 transition-opacity"
            />
          </motion.div>

          <h3 className="text-3xl font-black text-white mb-3 font-cairo">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              NEXTBIT
            </span>
          </h3>

          <p className="text-xl text-gray-300 mb-6 font-cairo">نظام التوصيل الذكي</p>

          <div className="flex flex-col items-center gap-4 mb-8">
            <p className="text-gray-400 font-cairo text-lg">
              الريادة في التوصيل الذكي
            </p>
            <div className="flex items-center gap-2 text-gray-500">
              <span className="font-cairo">بُني بتقنيات حديثة لمستقبل أفضل</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-primary/50"></div>
            <div className="flex items-center gap-2 text-gray-500">
              <Code className="w-4 h-4" />
              <span className="text-sm">Built with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            </div>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-primary/50"></div>
          </div>

          <div className="pt-8 border-t border-white/10">
            <p className="text-gray-500 font-cairo">
              © 2026 NEXTBIT. جميع الحقوق محفوظة
            </p>
          </div>

          <motion.div
            className="mt-8 flex justify-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="h-1 w-16 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
            <div className="h-1 w-16 bg-gradient-to-r from-secondary to-transparent rounded-full"></div>
            <div className="h-1 w-16 bg-gradient-to-r from-accent to-transparent rounded-full"></div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-900 to-transparent"></div>
    </footer>
  );
}
