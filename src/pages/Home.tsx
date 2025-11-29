import { motion } from 'framer-motion';
import { BookOpen, Users, Video } from 'lucide-react';
import { Link } from 'react-router-dom';
import MediaGallery from '../components/MediaGallery';
import DataInsights from '../components/DataInsights';
import ConceptMap from '../components/ConceptMap';
import ReferencesFooter from '../components/ReferencesFooter';

const Home = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen">
      <section className="relative h-[600px] bg-gradient-to-br from-teal-500 to-slate-700 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Diverse children playing together"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Working with Children, Families, and Communities in Contemporary Society
            </h1>
            <p className="text-2xl md:text-3xl font-light mb-8">
              Professional Resource for Early Childhood Services
            </p>
            <Link
              to="/economic"
              className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-4 rounded-lg shadow-lg transition-all transform hover:scale-105"
            >
              Explore Resources
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div {...fadeIn} className="prose max-w-none">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">About This Platform</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Welcome to the Early Childhood Professional website, a full-scale online platform aimed at helping educators, practitioners and early childhood services to work with children, families and communities in modern society. It is a resource that encompasses the diversity, complexity, and the challenges faced by children in a very broad family and community context that gives evidence-based strategies, practical guidance, and professional insights.
          </p>
        </motion.div>
      </section>

      <section className="bg-gradient-to-r from-teal-600 to-slate-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto">
              Our vision is to foster development of understanding, sympathy, and strong life in children by providing educators with the resources and knowledge to effectively react to the economic, social, and geographical isolation impact, cultural diversity, health and wellbeing issues, crisis or emergencies. Every part of this site gives comprehensive information about the situation, its effects on children and families, pertinent social policies, practice strategies and professional/community partnerships.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">Platform Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow border border-slate-200"
          >
            <div className="bg-teal-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <BookOpen className="h-8 w-8 text-teal-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-4">Evidence-Based Strategies</h3>
            <p className="text-slate-600 leading-relaxed">
              Access comprehensive, research-backed strategies for supporting children and families across diverse contexts and challenges.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow border border-slate-200"
          >
            <div className="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Users className="h-8 w-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-4">Social Policy Insights</h3>
            <p className="text-slate-600 leading-relaxed">
              Understand Australian policies, frameworks, and initiatives that support children, families, and early childhood services.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow border border-slate-200"
          >
            <div className="bg-slate-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Video className="h-8 w-8 text-slate-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-4">Interactive Resources</h3>
            <p className="text-slate-600 leading-relaxed">
              Explore curated videos, storybooks, podcasts, and learning materials designed to enhance practice and engagement.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">Explore Context Areas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Economic Contexts', path: '/economic', image: 'poverty,housing,financial' },
              { title: 'Social Contexts', path: '/social', image: 'community,family,support' },
              { title: 'Cultural Contexts', path: '/cultural', image: 'diversity,multicultural,indigenous' },
              { title: 'Health & Wellbeing', path: '/health', image: 'mental,health,wellbeing,children' },
              { title: 'Crisis & Emergency', path: '/crisis', image: 'emergency,disaster,safety,children' }
            ].map((context, index) => (
              <motion.div
                key={context.path}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
              >
                <Link to={context.path} className="block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all">
                  <img
                    src={
                      context.path === '/economic' ? 'https://images.pexels.com/photos/8613314/pexels-photo-8613314.jpeg?auto=compress&cs=tinysrgb&w=600' :
                      context.path === '/social' ? 'https://images.pexels.com/photos/7551662/pexels-photo-7551662.jpeg?auto=compress&cs=tinysrgb&w=600' :
                      context.path === '/cultural' ? 'https://images.pexels.com/photos/8612988/pexels-photo-8612988.jpeg?auto=compress&cs=tinysrgb&w=600' :
                      context.path === '/health' ? 'https://images.pexels.com/photos/8613317/pexels-photo-8613317.jpeg?auto=compress&cs=tinysrgb&w=600' :
                      'https://images.pexels.com/photos/6941001/pexels-photo-6941001.jpeg?auto=compress&cs=tinysrgb&w=600'
                    }
                    alt={context.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-800 hover:text-teal-600 transition-colors">
                      {context.title}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-teal-500 to-slate-700 rounded-2xl p-12 text-white text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Supporting Every Child</h2>
          <p className="text-xl max-w-3xl mx-auto">
            This platform brings users together by supporting theory, research, and practice, which means that every child has the freedom to succeed in safe, enabling, and positive cultures (ACECQA, 2022).
          </p>
        </motion.div>
      </section>

      <section className="py-0">
        <MediaGallery />
      </section>

      <section className="py-0">
        <DataInsights />
      </section>

      <section className="py-0">
        <ConceptMap />
      </section>

      <ReferencesFooter />
    </div>
  );
};

export default Home;
