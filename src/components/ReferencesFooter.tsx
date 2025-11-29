import { motion } from 'framer-motion';
import { BookOpen, ExternalLink } from 'lucide-react';

const ReferencesFooter = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const references = [
    {
      category: 'Government & Policy',
      items: [
        'Australian Bureau of Statistics (2021). Housing Stress and Affordability.',
        'Australian Institute of Family Studies (AIFS, 2023). Child Vulnerability and Family Support.',
        'ACECQA (Australian Children\'s Education & Care Quality Authority). (2022, 2023). National Quality Standard Framework.',
        'Department of Communities and Justice (NSW). Child Protection and Early Intervention Programs.'
      ]
    },
    {
      category: 'Academic & Research',
      items: [
        'Wong, S., & Harrison, L. J. (2022). Family Contexts and Early Childhood Development. Early Childhood Research Quarterly.',
        'Grace, R., & Baird, K. (2022). Strengthening Resilience in Early Childhood: Ecological Systems Approaches. Journal of Early Childhood Education.',
        'McMahon, W., & Camberis, A. (2017). Supporting Children in Crisis: Trauma-Informed Practice in Early Care Settings.',
        'Baffour, G., Timoney, M., & Drabble, L. (2024). Economic Disadvantage and Child Development in Australia. Child Development Review.'
      ]
    },
    {
      category: 'Professional Frameworks',
      items: [
        'Early Years Learning Framework (EYLF) - Department of Education.',
        'National Quality Framework for Early Childhood Education and Care.',
        'Bronfenbrenner\'s Ecological Systems Theory - Foundational model for understanding child development contexts.',
        'Trauma-Informed Care Frameworks - National Child Traumatic Stress Network.'
      ]
    },
    {
      category: 'Community & Support Organizations',
      items: [
        'Raising Children Network (2024). Evidence-based parenting and child development resources.',
        'Early Childhood Australia (ECA). Professional standards and continuous learning.',
        'Save the Children Australia. Refugee and displaced children support programs.',
        'Red Cross Australia. Disaster preparedness and community resilience.'
      ]
    }
  ];

  const webResources = [
    { name: 'CFCA Knowledge Exchange', url: 'https://aifs.gov.au/cfca' },
    { name: 'Emerging Minds ACEs Toolkit', url: 'https://emergingminds.com.au' },
    { name: 'Beyond Blue', url: 'https://beyondblue.org.au' },
    { name: 'Headspace', url: 'https://headspace.org.au' }
  ];

  return (
    <footer className="bg-slate-900 text-slate-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeIn}>
          <div className="flex items-center justify-center gap-3 mb-12">
            <BookOpen className="w-8 h-8 text-teal-400" />
            <h2 className="text-3xl font-bold">References & Citations</h2>
          </div>
          <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto">
            This platform is built on evidence-based research, government policies, and professional best practices in early childhood education and family support.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {references.map((section, idx) => (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-800 rounded-lg p-6 border border-slate-700"
            >
              <h3 className="text-lg font-bold text-teal-400 mb-4 pb-2 border-b border-slate-700">
                {section.category}
              </h3>
              <ul className="space-y-3">
                {section.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="text-sm text-slate-300 leading-relaxed flex gap-3">
                    <span className="text-teal-400 flex-shrink-0 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          {...fadeIn}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-teal-900 to-slate-800 rounded-lg p-8 border border-teal-800 mb-12"
        >
          <h3 className="text-xl font-bold text-teal-300 mb-6">Key Web Resources</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {webResources.map((resource, idx) => (
              <a
                key={idx}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-slate-700 hover:bg-slate-600 rounded-lg p-4 flex items-center justify-between transition-colors"
              >
                <span className="font-semibold text-slate-100 group-hover:text-teal-300">
                  {resource.name}
                </span>
                <ExternalLink className="w-4 h-4 text-teal-400" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          {...fadeIn}
          transition={{ delay: 0.6 }}
          className="border-t border-slate-700 pt-12"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold text-teal-400 mb-3">Citation Format</h4>
              <p className="text-sm text-slate-400">
                Early Childhood Professional Platform (2024). Working with Children, Families, and Communities in Contemporary Society. Educational Resource.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-teal-400 mb-3">Data Sources</h4>
              <p className="text-sm text-slate-400">
                Government agencies, peer-reviewed journals, professional organizations, and community partners as cited throughout the platform.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-teal-400 mb-3">Last Updated</h4>
              <p className="text-sm text-slate-400">
                November 2024. Content is regularly reviewed and updated based on emerging research and policy developments.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          {...fadeIn}
          transition={{ delay: 0.8 }}
          className="mt-12 pt-8 border-t border-slate-700 text-center text-sm text-slate-500"
        >
          <p>
            This resource is designed for educators, early childhood professionals, and practitioners supporting children and families in contemporary Australian society.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default ReferencesFooter;
