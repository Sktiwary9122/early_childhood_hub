import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const MediaGallery = () => {
  const [expandedTranscript, setExpandedTranscript] = useState(false);

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

  const transcript = `
    Welcome to the Early Childhood Professional Platform. This comprehensive resource is designed to support educators, practitioners, and early childhood services in working effectively with children, families, and communities in contemporary society.

    Our platform addresses six critical contexts that impact child development:

    1. Economic Contexts: Understanding how poverty, housing stress, and financial hardship affect family stability and child outcomes.

    2. Social Contexts: Exploring the impacts of geographical isolation, family separation, and out-of-home care arrangements.

    3. Cultural and Diversity Contexts: Celebrating First Nations families, immigrant communities, and refugee families.

    4. Health and Wellbeing Contexts: Addressing mental health, substance use, trauma, and grief in families.

    5. Crisis and Emergency Contexts: Preparing for and responding to natural disasters, family violence, and displacement.

    Each context includes evidence-based strategies, social policies, community partnerships, and curated resources including storybooks, videos, and practical guidance for early childhood professionals.

    Our mission is to ensure that every child has the opportunity to succeed in safe, inclusive, and supportive environments.
  `;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.div {...fadeIn}>
        <h2 className="text-4xl font-bold text-slate-800 mb-4 text-center">Media Gallery & Resources</h2>
        <p className="text-center text-slate-600 mb-12 text-lg">
          Explore visual content and educational materials
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
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

        <div className="bg-gradient-to-r from-teal-50 to-slate-50 rounded-2xl p-8 border border-teal-100">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <motion.div {...fadeIn}>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Featured Educational Content</h3>
              <div className="bg-white rounded-xl overflow-hidden shadow-md">
                <div className="aspect-video bg-gradient-to-br from-slate-300 to-slate-400 flex items-center justify-center relative">
                  <svg
                    className="w-20 h-20 text-white opacity-50"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.3A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z" />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-teal-600 rounded-full p-4 opacity-80">
                      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeIn}>
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <button
                  onClick={() => setExpandedTranscript(!expandedTranscript)}
                  className="w-full px-6 py-4 flex items-center justify-between bg-teal-600 text-white hover:bg-teal-700 transition-colors"
                >
                  <span className="font-bold text-lg">Transcript</span>
                  <ChevronDown
                    className={`w-6 h-6 transition-transform ${expandedTranscript ? 'rotate-180' : ''}`}
                  />
                </button>
                {expandedTranscript && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                    className="px-6 py-4 max-h-96 overflow-y-auto bg-slate-50"
                  >
                    <p className="text-slate-700 leading-relaxed whitespace-pre-line text-sm">
                      {transcript}
                    </p>
                    <div className="mt-6 pt-6 border-t border-slate-200">
                      <p className="text-xs text-slate-600 italic">
                        <strong>Citation:</strong> Early Childhood Professional Platform. (2024). Working with Children, Families, and Communities in Contemporary Society. Educational Resource.
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default MediaGallery;
