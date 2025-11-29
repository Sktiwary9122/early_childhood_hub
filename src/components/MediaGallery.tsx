import { motion } from 'framer-motion';

const MediaGallery = () => {

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const galleryItems = [
    {
      id: 1,
      type: 'image',
      src: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Children learning together',
      title: 'Early Childhood Learning'
    },
    {
      id: 2,
      type: 'image',
      src: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Diverse team collaboration',
      title: 'Community & Diversity'
    },
    {
      id: 3,
      type: 'image',
      src: 'https://images.pexels.com/photos/8613314/pexels-photo-8613314.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Educational support',
      title: 'Educational Resources'
    },
    {
      id: 4,
      type: 'image',
      src: 'https://images.pexels.com/photos/8613317/pexels-photo-8613317.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Child wellbeing and health',
      title: 'Health & Wellbeing'
    },
    {
      id: 5,
      type: 'image',
      src: 'https://images.pexels.com/photos/7551662/pexels-photo-7551662.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Family support programs',
      title: 'Family Support'
    },
    {
      id: 6,
      type: 'image',
      src: 'https://images.pexels.com/photos/6941001/pexels-photo-6941001.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Community resilience',
      title: 'Community Resilience'
    }
  ];


  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div {...fadeIn}>
        <h2 className="text-4xl font-bold text-slate-800 mb-4 text-center">Media Gallery & Resources</h2>
        <p className="text-center text-slate-600 mb-12 text-lg">
          Explore visual content and educational materials
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.15)' }}
              className="bg-white rounded-xl overflow-hidden shadow-lg transition-all cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden bg-slate-200">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-slate-800 text-lg">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default MediaGallery;
