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
        {
          text: 'ACECQA (2022). Belonging, being and becoming: The early years learning framework for Australia (V2.0).',
          url: 'https://www.acecqa.gov.au/sites/default/files/2023-01/EYLF-2022-V2.0.pdf'
        },
        {
          text: 'ACECQA (2023). National Quality Framework.',
          url: 'https://www.acecqa.gov.au/national-quality-framework'
        },
        {
          text: 'Australian Bureau of Statistics. (2021).',
          url: 'https://www.abs.gov.au/'
        },
        {
          text: 'Clarke, M. (2023). National Quality Framework - Department of Education, Australian Government.',
          url: 'https://www.education.gov.au/early-childhood/national-quality-framework'
        },
        {
          text: 'Services Australia. (2023). About Medicare.',
          url: 'https://www.servicesaustralia.gov.au/about-medicare?context=60092'
        }
      ]
    },
    {
      category: 'Academic & Research',
      items: [
        {
          text: 'Baffour, B., Das, S., Li, M., & Richardson, A. (2024). The Utility of Socioeconomic and Remoteness Indicators in Understanding the Geographical Variation in the Regional Prevalence of Early Childhood Vulnerability in Australia. Child Indicators Research, 17(4), 1791-1827.',
          url: 'https://doi.org/10.1007/s12187-024-10143-4'
        },
        {
          text: 'Blythe, S., & Elcombe, E. (2025). Understanding training and support needs of foster carers of infants in out-of-home care. The British Journal of Social Work, 55(3), 1474-1488.',
          url: 'https://doi.org/10.1093/bjsw/bcae207'
        },
        {
          text: 'Boulton, K. A., Hodge, A., Levu, K., Ong, N., Silove, N., & Guastella, A. J. (2024). Access and barriers to supports for children and caregivers attending public child developmental assessment services. Autism Research, 17(3), 555-567.',
          url: 'https://onlinelibrary.wiley.com/doi/abs/10.1002/aur.3064'
        },
        {
          text: 'Gautam, N., Rahman, M. M., Hashmi, R., Lim, A., & Khanam, R. (2024). Socioeconomic inequalities in child and adolescent mental health in Australia: the role of parenting style and parents\' relationships. Child and Adolescent Psychiatry and Mental Health, 18(1), 28.',
          url: 'https://doi.org/10.1186/s13034-024-00719-x'
        },
        {
          text: 'Goldfeld, S. R., Price, A. M., & Al‐Yaman, F. (2023). Having material basics is basic. Medical Journal of Australia, 219.',
          url: 'https://www.mja.com.au/system/files/issues/219_10/mja252144.pdf'
        },
        {
          text: 'Lima, F., Taplin, S., Maclean, M., Octoman, O., Grose, M. & O\'Donnell, M. (2024). Child protection and developmental trajectories of children who entered care as infants. Child Abuse Review, 33(5), p.e2900.',
          url: 'https://doi.org/10.1002/car.2900'
        },
        {
          text: 'Ludlow, T., Fooken, J., Rose, C., & Tang, K. (2022). Incorporating Financial Hardship in Measuring the Mental Health Impact of Housing Stress. arXiv preprint arXiv:2205.01255.',
          url: 'https://doi.org/10.48550/arXiv.2205.01255'
        },
        {
          text: 'Paterson-Young, C., Corrales, T., Warren, I., & McNamara, P. (2024). Impact of trauma and placement in residential or congregate care on the criminalisation of children in England/Wales and Australia. Children and Youth Services Review, 166, 107947.',
          url: 'https://doi.org/10.1016/j.childyouth.2024.107947'
        }
      ]
    },
    {
      category: 'Books & Book Chapters',
      items: [
        {
          text: 'Angel, M. (2019). Supporting the wellbeing of parents and carers. Everyday Learning Series, 17(1).',
          url: null
        },
        {
          text: 'Grace, R., & Baird, K. (2022). Social inequities in Australian communities and the impact of children and families.',
          url: null
        },
        {
          text: 'Grace, R., Townley, C., & Woodrow, C. (2022). Understanding the child in context: an ecological approach to child development.',
          url: null
        },
        {
          text: 'McMahon, C. & Camberis, A. (2017). Family as the primary context of children\'s development.',
          url: null
        },
        {
          text: 'McMahon, C., & Grace, R. (2022) Family as the primary context of children\'s development.',
          url: null
        },
        {
          text: 'Weston. R., & Qu, L. (2014). Trends in family transitions, forms and functioning.',
          url: null
        },
        {
          text: 'Wong, S., & Harrison, L.J. (2022). Research about and with children, families and communities.',
          url: null
        },
        {
          text: 'Wong, S., Hayes, A. & Wise, S. (2017). Research about and with children, families, and communities.',
          url: null
        }
      ]
    },
    {
      category: 'Additional Resources',
      items: [
        {
          text: 'Australian Institute of Family Studies. (2023). Facts and Figures.',
          url: null
        }
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
    <footer className="bg-slate-900 text-slate-100 py-16">
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
                    <span>
                      {item.url ? (
                        <>
                          {item.text}{' '}
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-teal-300 hover:text-teal-200 underline break-all"
                          >
                            [Link]
                          </a>
                        </>
                      ) : (
                        item.text
                      )}
                    </span>
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
