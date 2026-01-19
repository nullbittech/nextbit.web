import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Package, Users, Building2, TrendingUp } from 'lucide-react';

function Counter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString() + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export default function Stats() {
  const stats = [
    {
      icon: Package,
      value: 500,
      suffix: '+',
      label: 'طلب يومي',
      color: 'primary',
      gradient: 'from-primary to-blue-600',
    },
    {
      icon: Users,
      value: 40,
      suffix: '+',
      label: 'سائق نشط',
      color: 'secondary',
      gradient: 'from-secondary to-green-600',
    },
    {
      icon: Building2,
      value: 50,
      suffix: '+',
      label: 'شركة شريكة',
      color: 'accent',
      gradient: 'from-accent to-orange-600',
    },
    {
      icon: TrendingUp,
      value: 99,
      suffix: '%',
      label: 'معدل النجاح',
      color: 'primary',
      gradient: 'from-primary to-cyan-600',
    },
  ];

  return (
    <section className="py-24 bg-dark-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-dark-800/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4 font-cairo">
            <span className="bg-gradient-to-r from-accent via-secondary to-primary bg-clip-text text-transparent">
              إنجازاتنا بالأرقام
            </span>
          </h2>
          <p className="text-xl text-gray-400 font-cairo">أرقام تتحدث عن نفسها</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity duration-500`}></div>

              <div className="relative p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:border-white/20 transition-all duration-500 text-center">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="flex justify-center mb-6"
                >
                  <div className={`p-5 bg-gradient-to-br ${stat.gradient} rounded-2xl shadow-lg`}>
                    <stat.icon className="w-10 h-10 text-white" />
                  </div>
                </motion.div>

                <div className={`text-5xl md:text-6xl font-black mb-3 bg-gradient-to-br ${stat.gradient} bg-clip-text text-transparent font-cairo`}>
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>

                <p className="text-xl text-gray-300 font-bold font-cairo">{stat.label}</p>

                <div className={`mt-6 h-1 w-20 mx-auto bg-gradient-to-r ${stat.gradient} rounded-full`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-2xl text-gray-300 font-cairo">
            أرقام تتزايد يومياً مع نمو منصتنا
          </p>
        </motion.div>
      </div>
    </section>
  );
}
