import { motion } from 'framer-motion';
import { Phone, MessageCircle, Globe, Mail, Copy, Check } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [copied, setCopied] = useState<string | null>(null);

  const contactInfo = [
    {
      icon: Phone,
      title: 'رقم الهاتف',
      value: '+962796468881',
      action: 'tel',
      gradient: 'from-primary to-blue-600',
      color: 'primary',
      styles: {
        bg: 'bg-primary/20',
        hover: 'hover:bg-primary/30',
        text: 'text-primary'
      }
    },
    {
      icon: MessageCircle,
      title: 'واتس اب',
      value: '+962796468881',
      action: 'whatsapp',
      gradient: 'from-secondary to-green-600',
      color: 'secondary',
      styles: {
        bg: 'bg-secondary/20',
        hover: 'hover:bg-secondary/30',
        text: 'text-secondary'
      }
    },
    {
      icon: Globe,
      title: 'الموقع الرسمي',
      value: 'www.nextbit.work',
      action: 'web',
      gradient: 'from-accent to-orange-600',
      color: 'accent',
      styles: {
        bg: 'bg-accent/20',
        hover: 'hover:bg-accent/30',
        text: 'text-accent'
      }
    },
    {
      icon: Mail,
      title: 'البريد الإلكتروني',
      value: 'next.bit.tc@gmail.com',
      action: 'email',
      gradient: 'from-primary to-cyan-600',
      color: 'primary',
      styles: {
        bg: 'bg-primary/20',
        hover: 'hover:bg-primary/30',
        text: 'text-primary'
      }
    },
  ];

  const handleCopy = (value: string, key: string) => {
    navigator.clipboard.writeText(value);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleAction = (contact: typeof contactInfo[0]) => {
    switch (contact.action) {
      case 'tel':
        window.location.href = `tel:${contact.value}`;
        break;
      case 'whatsapp':
        window.open(`https://wa.me/${contact.value.replace(/\D/g, '')}`);
        break;
      case 'web':
        window.open(`https://${contact.value}`, '_blank');
        break;
      case 'email':
        window.location.href = `mailto:${contact.value}`;
        break;
    }
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
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
            <span className="bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent">
              تواصل معنا
            </span>
          </h2>
          <p className="text-xl text-gray-600 font-cairo">نحن هنا لمساعدتك في كل خطوة</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
          {contactInfo.map((contact, index) => (
            <motion.div
              key={contact.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${contact.gradient} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity duration-500`}></div>

              <div className="relative p-6 bg-light-100 backdrop-blur-xl border border-gray-200 rounded-3xl hover:border-gray-300 hover:shadow-lg transition-all duration-500 h-full flex flex-col">
                <div className={`p-4 ${contact.styles.bg} rounded-2xl w-fit mb-4 group-hover:scale-110 transition-transform`}>
                  <contact.icon className={`w-8 h-8 ${contact.styles.text}`} />
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-3 font-cairo">{contact.title}</h3>

                <p className="text-gray-700 font-cairo text-sm mb-4 break-all flex-grow">{contact.value}</p>

                <div className="flex gap-2 pt-4 border-t border-gray-200">
                  <button
                    onClick={() => handleAction(contact)}
                    className={`flex-1 py-2 px-4 ${contact.styles.bg} ${contact.styles.hover} ${contact.styles.text} rounded-lg transition-all duration-300 text-sm font-cairo`}
                  >
                    فتح
                  </button>
                  <button
                    onClick={() => handleCopy(contact.value, contact.title)}
                    className={`py-2 px-4 bg-gray-100 hover:bg-gray-200 border border-gray-200 text-gray-700 rounded-lg transition-all duration-300`}
                  >
                    {copied === contact.title ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          <div className="p-8 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 backdrop-blur-xl border border-gray-200 rounded-3xl text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-3 font-cairo">استجابة سريعة مضمونة</h3>
            <p className="text-gray-700 font-cairo">
              فريق NEXTBIT جاهز للرد على جميع استفساراتك خلال ساعات قليلة. تواصل معنا عبر أي من الطرق المتاحة أعلاه.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
