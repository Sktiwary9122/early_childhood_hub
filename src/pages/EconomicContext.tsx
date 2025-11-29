import { motion } from 'framer-motion';
import { CheckCircle, ExternalLink, BookOpen, Video } from 'lucide-react';
import { useState } from 'react';
import ReferencesFooter from '../components/ReferencesFooter';

const EconomicContext = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const policies = [
    {
      title: 'Family Tax Benefit (A and B)',
      description: 'Income support is offered to families that have dependent children (Services Australia, 2023).'
    },
    {
      title: 'Child Care Subsidy',
      description: 'Helps to decrease the expenses of approved child care to eligible families.'
    },
    {
      title: 'National Affordable Housing Agreement',
      description: 'Offers housing support and homeless services.'
    },
    {
      title: 'Newstart/JobSeeker Payments',
      description: 'Payments given to unemployed parents.'
    }
  ];

  const strategies = [
    'Building Trust, Sharing Decision-making, and Access to Local Resources: Family Engagement Programs (Wong et al., 2017).',
    'Early Literacy and Numeracy Support: Get access to free or subsidised resources of literacy and numeracy to reduce disparities in educational access.',
    'Strengths-Based Approaches: Utilise and strengthen the family and cultural knowledge along with resiliency (Grace & Baird, 2022).',
    'Reconfigurable Services: Provide scaled-down charges, transportation assistance and open program schedules to support the requirements of the families.',
    'Trauma-Informed Practice: Be able to identify stressors linked to poverty and create supportive habits (Angel, 2019).'
  ];

  const partnerships = [
    { name: 'Relationships Australia', service: 'Mediation/family, parenting, and counselling.' },
    { name: 'The Smith Family', service: 'Community educational funding and material assistance to the impoverished families.' },
    { name: 'Anglicare', service: 'Welfare, financial and housing.' },
    { name: 'Mission Australia', service: 'Community programs and early intervention.' },
    { name: 'Local Councils Family Services', service: 'Parenting workshops, recreational activities, and referral channels.' }
  ];

  const websites = [
    { name: 'Raising Children Network', url: 'raisingchildren.net.au' },
    { name: 'Australian Early Development Census (AEDC)', url: 'aedc.gov.au' },
    { name: 'Child Family Community Australia (CFCA)', url: 'aifs.gov.au/cfca' },
    { name: 'Emerging Minds ACEs Toolkit', url: 'emergingminds.com.au' }
  ];

  const storybooks = [
    { title: 'The Rainbow Fish', theme: 'Sharing and cooperation despite scarcity.' },
    { title: 'Those Shoes by Maribeth Boelts', theme: 'Economic hardship and empathy.' },
    { title: 'A Chair for My Mother', theme: 'Saving and family resilience.' },
    { title: "Lilly's Purple Plastic Purse", theme: 'Understanding values beyond material wealth.' }
  ];

  const videos = [
    'Sesame Street: Financial Lessons – Simple money concepts.',
    'Bluey: Family Fun and Teamwork Episodes – Resourcefulness and play.',
    'Storyline Online – Free reading videos promoting literacy.',
    'ABC Kids Listen Podcasts – Social-emotional learning for children.'
  ];

  return (
    <div className="min-h-screen">
      <section className="relative h-96 bg-gradient-to-r from-teal-600 to-slate-700 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Economic context"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-5xl font-bold mb-4">Economic Contexts</h1>
            <p className="text-2xl font-light">Poverty, Housing Stress, and Financial Hardship</p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div {...fadeIn}>
          <h2 className="text-3xl font-bold text-slate-800 mb-6">Understanding the Context</h2>
          <div className="prose max-w-none text-slate-700 leading-relaxed space-y-4">
            <p>
              One of the most influential drivers of many Australian children and families is economic hardship. When living in poverty, having housing-related stress, or lacking financial stability, families have difficulty accessing the primary needs, including food, quality housing, health-care services, and educational tools (Grace & Baird, 2022). Poverty is not about being poor without income though; it overlaps with social, cultural and health-related problems, which may exacerbate disadvantage (Gautam et al., 2024). Regarding housing, paying over 30% of income on housing, the concept of housing stress can be disproportionately applied to the low-income families and leads to instability, significant relocation, and additional stress exerted on the caregivers (Australian Bureau of Statistics, 2021).
            </p>
            <p>
              In early childhood education, economic contexts are critical to learn since the welfare of the family determines the developmental process of children. Ecological and family models can also be used to note ecological and family systems approaches, such as that of Bronfenbrenner, which consider the ways children are encompassed in interacting systems, micro systems (family and school), mesosystems (community interactions), and macro systems (societal policies and economic arrangements) (Grace et al., 2022). Economically less privileged families have frequent access to enriching experiences, materials and safe leisure, and this can affect cognitive, social and emotional growth (McMahon & Grace, 2022).
            </p>
            <div className="bg-slate-50 border-l-4 border-teal-600 p-6 rounded-r-lg my-6">
              <img
                src="https://images.pexels.com/photos/6936460/pexels-photo-6936460.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Bronfenbrenner's ecological model"
                className="w-full rounded-xl shadow-md mb-4"
              />
              <p className="text-sm text-slate-600 italic">
                Bronfenbrenner's ecological systems theory illustrates how children are embedded within interacting systems that influence their development.
              </p>
            </div>
            <p>
              Recent evidence shows economic disadvantage to be a dynamic, diverse phenomenon in Australia, where rural and remote communities, as well as culturally and linguistically diverse (CALD) communities, are over-represented (Baffour et al., 2024). The families of a single parent, single-parent family, families with unemployed parents, families of refugees and migrants have a weak side. It is essential to appreciate that the economic environment varies, and then, context-responsive learning interventions ought to be developed.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn}>
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Impact on Children and Families</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="prose max-w-none text-slate-700 leading-relaxed space-y-4">
                <p>
                  Child development is affected in various ways by economic hardship. Family financial pressure can lead to heightened stress and anxiety among children and their insecure feelings (Wong and Harrison, 2022). Nutritious inadequacies are likely to impact corporeal condition and cognitive abilities, whereas a abode of turmoil may interrupt schooling and peer connections. Families with low economic means might be less able to afford learning environments that are stimulating, participate in extra-curricular activities, or even health care (McMahon & Camberis, 2017).
                </p>
                <p>
                  In the case of early childhood, economic conditions render responsiveness to the family condition, versatile program execution, and inclusivity. Teachers should take into consideration the impact of financial crunch on the attendance of programs, learning, and parental intervention. Services might be required to change their pricing, offer subsidised services or even enable access to external help.
                </p>
              </div>
              <img
                src="https://images.pexels.com/photos/8364026/pexels-photo-8364026.jpeg?auto=compress&cs=tinysrgb&w=600&h=800"
                alt="Impact on children"
                className="rounded-xl shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div {...fadeIn}>
          <h2 className="text-3xl font-bold text-slate-800 mb-6">Social Policy and Australian Responses</h2>
          <p className="text-slate-700 mb-8 leading-relaxed">
            The Australian social policy offers various systems to help economically challenged families. Key initiatives include:
          </p>
          <div className="space-y-4">
            {policies.map((policy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
                >
                  <span className="font-semibold text-slate-800">{policy.title}</span>
                  <span className="text-teal-600 text-xl">{openAccordion === index ? '−' : '+'}</span>
                </button>
                {openAccordion === index && (
                  <div className="px-6 pb-4 text-slate-600">
                    {policy.description}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
          <div className="mt-8 bg-teal-50 border-l-4 border-teal-600 p-6 rounded-r-lg">
            <p className="text-slate-700 leading-relaxed">
              The Australian Institute of Family Studies (2023) contended that some 13 per cent of children were living in poverty households and that more than 900,000 households were facing rental stress. Policy responses come into effect in creating a response to early childhood practices, creating accessibility to child care, securing food security via school programs and promoting an inclusive, supportive learning atmosphere. With good policy, the disadvantaged become less vulnerable and less developmentally influential (Goldfeld, Price, & Al‐Yaman, 2023).
            </p>
          </div>
        </motion.div>
      </section>

      <section className="bg-gradient-to-r from-amber-500 to-amber-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn}>
            <h2 className="text-3xl font-bold text-white mb-8">Strategies for Practice</h2>
            <p className="text-white mb-8 text-lg">Strategies based on evidence that can help children and families who are in economic distress include:</p>
            <div className="grid md:grid-cols-2 gap-6">
              {strategies.map((strategy, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 shadow-lg"
                >
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
                    <p className="text-slate-700 leading-relaxed">{strategy}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="text-white mt-8 text-lg">
              The strategies aimed at achieving these goals use customised learning opportunities, partnership with families, and referral of families to community resources.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div {...fadeIn}>
          <h2 className="text-3xl font-bold text-slate-800 mb-8">Community and Professional Partnerships</h2>
          <p className="text-slate-700 mb-8 leading-relaxed">
            The main organisations that assist children and families are:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerships.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg shadow-md p-6 border-t-4 border-teal-600"
              >
                <h3 className="font-bold text-slate-800 mb-2">{partner.name}</h3>
                <p className="text-slate-600 text-sm">{partner.service}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-slate-700 mt-8 leading-relaxed">
            This will mean collaboration, i.e. incorporating these services in the early childhood programs, establishing referral channels, and joint development of the interventions that are responsive to the needs of the children.
          </p>
        </motion.div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn}>
            <h2 className="text-3xl font-bold text-slate-800 mb-8">Resources for Educators and Children</h2>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                <ExternalLink className="h-6 w-6 mr-2 text-teal-600" />
                Projects/Programs/Websites
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {websites.map((site, index) => (
                  <motion.a
                    key={index}
                    href={`https://${site.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-lg shadow-md p-4 flex items-center justify-between hover:shadow-lg transition-all"
                  >
                    <span className="font-semibold text-slate-800">{site.name}</span>
                    <ExternalLink className="h-5 w-5 text-teal-600" />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                <BookOpen className="h-6 w-6 mr-2 text-amber-600" />
                Children's Storybooks (Birth–5 Years)
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {storybooks.map((book, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-lg shadow-md p-6"
                  >
                    <h4 className="font-bold text-slate-800 mb-2">{book.title}</h4>
                    <p className="text-slate-600 text-sm">{book.theme}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                <Video className="h-6 w-6 mr-2 text-slate-600" />
                Children's Videos/Podcasts
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {videos.map((video, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-lg shadow-md p-4"
                  >
                    <p className="text-slate-700">{video}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <p className="text-slate-700 mt-8 leading-relaxed">
              These resources promote understanding, empathy, and resilience by illustrating financial challenges in age-appropriate ways, encouraging discussion, problem-solving, and recognition of diverse family experiences (Ludlow et al., 2022).
            </p>
          </motion.div>
        </div>
      </section>

      <ReferencesFooter />
    </div>
  );
};

export default EconomicContext;
