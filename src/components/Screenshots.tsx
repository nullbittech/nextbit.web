import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Monitor, Smartphone, BarChart3, TrendingUp, Users, Package } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

export default function Screenshots() {
  const mockScreenshots = [
    {
      title: 'لوحة التحكم الرئيسية',
      category: 'admin',
      device: 'desktop',
      gradient: 'from-primary to-blue-600',
      features: ['تتبع مباشر', 'إحصائيات', 'إدارة الطلبات'],
    },
    {
      title: 'تطبيق السائقين',
      category: 'driver',
      device: 'mobile',
      gradient: 'from-primary to-cyan-600',
      features: ['قبول الطلبات', 'ملاحة GPS', 'حساب الأرباح'],
    },
    {
      title: 'تطبيق الموردين',
      category: 'supplier',
      device: 'mobile',
      gradient: 'from-secondary to-green-600',
      features: ['إنشاء طلب', 'تتبع الحالة', 'الإشعارات'],
    },
    {
      title: 'التقارير والإحصائيات',
      category: 'admin',
      device: 'desktop',
      gradient: 'from-accent to-orange-600',
      features: ['رسوم بيانية', 'تقارير مالية', 'تحليلات'],
    },
    {
      title: 'الخريطة التفاعلية',
      category: 'admin',
      device: 'desktop',
      gradient: 'from-primary to-blue-600',

      features: ['تتبع GPS', 'المسارات', 'التحديثات الحية'],
    },
    {
      title: 'لوحة الموردين',
      category: 'supplier',
      device: 'mobile',
      gradient: 'from-secondary to-green-600',
      features: ['الطلبات النشطة', 'السجل', 'المحفظة'],
    },
  ];

  const renderMockupContent = (screenshot: typeof mockScreenshots[0], device: string) => {
    if (device === 'mobile') {
      return (
        <div className="w-full space-y-3">
          <div className="space-y-2">
            <div className="h-2 bg-white/20 rounded w-3/4"></div>
            <div className="h-2 bg-white/20 rounded w-1/2"></div>
          </div>
          <div className="bg-white/10 rounded p-3 space-y-2">
            <div className="h-2 bg-white/20 rounded"></div>
            <div className="h-2 bg-white/20 rounded w-4/5"></div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white/10 rounded p-2 h-12 flex items-center justify-center">
                <div className="text-gray-900/50 text-xs">عنصر</div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    return (
      <div className="w-full space-y-3">
        <div className="grid grid-cols-4 gap-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white/10 rounded p-3 text-center">
              <div className="text-gray-900/50 text-xs mb-1">0</div>
              <div className="h-1 bg-white/20 rounded"></div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3">
          {[1, 2].map((i) => (
            <div key={i} className="bg-white/10 rounded p-3 space-y-2">
              <div className="h-2 bg-white/20 rounded"></div>
              <div className="h-12 bg-light-100 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="py-24 bg-gradient-to-b from-dark-900 to-dark-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4 font-cairo">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              لقطات من المنصات
            </span>
          </h2>
          <p className="text-xl text-gray-600 font-cairo">استعرض واجهات النظام الاحترافية</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-7xl mx-auto"
        >
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, EffectCoverflow, Pagination]}
            className="mySwiper pb-16"
          >
            {mockScreenshots.map((screenshot, index) => (
              <SwiperSlide key={index} className="!w-[90%] md:!w-[600px]">
                <div className="relative group">
                  <div className={`absolute inset-0 bg-gradient-to-br ${screenshot.gradient} opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500`}></div>

                  <div className="relative bg-light-100 backdrop-blur-xl border border-gray-200 rounded-3xl p-8 hover:border-gray-300 transition-all duration-500">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 font-cairo mb-1">{screenshot.title}</h3>
                        <div className="flex flex-wrap gap-2">
                          {screenshot.features.map((feature) => (
                            <span key={feature} className="text-xs px-2 py-1 bg-white/10 rounded-full text-gray-700 font-cairo">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className={`p-3 bg-gradient-to-br ${screenshot.gradient} rounded-2xl`}>
                        {screenshot.device === 'mobile' ? (
                          <Smartphone className="w-6 h-6 text-gray-900" />
                        ) : (
                          <Monitor className="w-6 h-6 text-gray-900" />
                        )}
                      </div>
                    </div>

                    <div className={`aspect-video bg-gradient-to-br ${screenshot.gradient} rounded-2xl p-6 flex items-center justify-center relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>

                      <div className="relative w-full">
                        {renderMockupContent(screenshot, screenshot.device)}
                      </div>

                      <div className="absolute top-4 right-4 flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      </div>
                    </div>

                    <div className={`mt-4 h-1 w-full bg-gradient-to-r ${screenshot.gradient} rounded-full`}></div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-gray-600 font-cairo">
            تصميم احترافي يجمع بين الجمال والوظيفة
          </p>
        </motion.div>
      </div>
    </section>
  );
}
