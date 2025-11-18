import { motion } from 'framer-motion';
import { CheckCircle, ExternalLink, BookOpen, Video } from 'lucide-react';

const CulturalContext = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const strategies = [
    'Culturally Responsive Pedagogy: Inuit cultural backgrounds, linguistic and narratives of children in the process of learning.',
    'Family Partnership Programs: Mobilise the parents and carers in the decision-making process in the curriculum and the classroom work.',
    'Trauma-Informed Practice: Help families with disputable backgrounds (refugees and displaced migrants) with consideration of the former.',
    'Language and Literacy Support: Scaffold and bilingual materials are given to handle home languages to facilitate the learning of English as a second language.',
    'Activities (Community): Connect families to a cultural-social support system so that they become less isolated.'
  ];

  const partnerships = [
    { name: 'SNAICC - National Voice of our Children', service: 'An advocate of Aboriginal and Torres Strait Islander children and families.' },
    { name: 'Australian Red Cross - Refugee Support Services', service: 'Community and resettlement.' },
    { name: 'Settlement Services International (SSI)', service: 'Education and social integration to refugee and immigrant families.' },
    { name: 'Local Aboriginal Community Organisations (ACO)', service: 'Provide child programs and family programs.' },
    { name: 'Early Childhood Australia (ECA)', service: 'Information and professional development assistance about diversity and inclusion.' }
  ];

  const websites = [
    { name: 'Raising Children Network – Multicultural resources', url: 'raisingchildren.net.au' },
    { name: 'CFCA Knowledge Exchange – Culturally responsive practices', url: 'aifs.gov.au/cfca' },
    { name: 'ECA Cultural Competence Resources', url: 'earlychildhoodaustralia.org.au' },
    { name: 'SNAICC Early Childhood Program', url: 'snaicc.org.au' }
  ];

  const storybooks = [
    { title: 'Stella and the Seagull by Marie-Louise Fitzpatrick', theme: 'Cultural storytelling' },
    { title: 'Too Many Chefs by Ros Asquith', theme: 'Celebrates family diversity' },
    { title: 'Welcome to Country by Aunty Joy Murphy', theme: 'First Nations perspectives' },
    { title: 'My Two Blankets by Irena Kobald', theme: 'Refugee experiences' }
  ];

  const videos = [
    'Bluey: Cultural Celebrations Episodes – Inclusion and cultural diversity',
    'Sesame Street – Refugee Stories – Empathy and resilience',
    'ABC Kids Listen – Multicultural Episodes',
    'Storyline Online – Diversity and Identity Stories'
  ];

  return (
    <div className="min-h-screen">
      <section className="relative h-96 bg-gradient-to-r from-amber-600 to-teal-700 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://source.unsplash.com/random/1920x1080/?aboriginal,art,patterns"
            alt="Cultural diversity"
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
            <h1 className="text-5xl font-bold mb-4">Cultural and Diversity Contexts</h1>
            <p className="text-2xl font-light">First Nations Families, Immigrant and Refugee Families</p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div {...fadeIn}>
          <h2 className="text-3xl font-bold text-slate-800 mb-6">Understanding the Context</h2>
          <div className="prose max-w-none text-slate-700 leading-relaxed space-y-4">
            <p>
              The cultural and diversity contexts can be explained as diverse backgrounds, traditions, and lived experiences that contribute to the upbringing of children. In Australia, this refers to First Nations families, immigrant families and refugees who might have an extra problem of access to services, preserving cultural identity, and negotiating the socio-economic and linguistic barriers (Wong et al., 2017). The unique culture and history, and ties to the Country that are held by First Nations families are of paramount importance to form children and their wellbeing. Immigrant and refugee families face numerous cross-cultural adaptations, trauma and marginalisation that may affect family cohesion and children's social-emotional development (McMahon & Camberis, 2017).
            </p>
            <p>
              The contexts of cultural diversity have been noted to be critical in establishing learning free of discrimination, hostility, and bias in the classroom in early childhood education. According to the ecological model identified by Bronfenbrenner, the development of children is formed by overlapping microsystems, mesosystems and macrosystems (family, community, and societal expectations). Recent studies highlight the role of culturally responsive pedagogy, involving the appreciation of the cultural heritage of the child as a learning resource instead of imposing a limitation on the process of learning (Wong & Harrison, 2022).
            </p>
            <div className="bg-slate-50 border-l-4 border-amber-600 p-6 rounded-r-lg my-6">
              <img
                src="https://source.unsplash.com/random/800x400/?multicultural,hands,diverse"
                alt="Cultural diversity"
                className="w-full rounded-xl shadow-md mb-4"
              />
              <p className="text-sm text-slate-600 italic">
                Celebrating cultural diversity strengthens children's sense of identity and belonging.
              </p>
            </div>
            <p>
              Diversity of such contexts in Australia can be witnessed through the statistics: out of every three Australian children, one parent is born abroad, and First Nations children make 5 per cent of the population of children, yet over 12 per cent of children in out-of-home care (AIFS, 2023). These dynamics reflect the dynamic character of cultural diversity and the importance of educators to constantly develop practices that help children develop their cultural identity, language, and social integration.
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
                  The cultural and diversity contexts have the potential to play a relatively important part in the growth of children, learning, and participation. The links to family, community, and cultural practices are also beneficial to First Nations children to improve resilience, social skills, and identity (Grace & Baird, 2022). Immigrant and refugee children might experience language barriers, disruption of education or trauma-related issues, which have consequences of lack of confidence, peer interactions, and school preparedness (McMahon & Grace, 2022). The families living through such contexts might be stressed, discriminated against, or socially isolated and need early childhood services to deliver personalised support.
                </p>
                <p>
                  The implications on service provision include provision of culturally safe environments, use of home languages, cultural celebrations and involvement of families as partners in learning. Teachers should take into consideration the cultural background of each child in order to promote a sense of being included, belonging and having equal access to early learning.
                </p>
              </div>
              <img
                src="https://source.unsplash.com/random/600x800/?diverse,classroom,children"
                alt="Diverse classroom"
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
            Australia has had some policies and frameworks that facilitate culturally and linguistically diverse (CALD) and First Nation children:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-amber-600">
              <h3 className="font-bold text-slate-800 mb-3">The National Quality Standard (NQS)</h3>
              <p className="text-slate-600 text-sm">Inclusion and cultural competence in early child environments.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-amber-600">
              <h3 className="font-bold text-slate-800 mb-3">Australian Early Development Census (AEDC)</h3>
              <p className="text-slate-600 text-sm">This is a source of information about the development of children, which shows gaps in the case of First Nations and CALD populations.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-amber-600">
              <h3 className="font-bold text-slate-800 mb-3">Aboriginal and Torres Strait Islander Early Childhood Strategy</h3>
              <p className="text-slate-600 text-sm">Provides support to children in their cultural identity, family interaction and early learning.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-amber-600">
              <h3 className="font-bold text-slate-800 mb-3">Refugee and Humanitarian Settlement Programs</h3>
              <p className="text-slate-600 text-sm">Help to connect the families visiting the social worker with the services, education, and language services.</p>
            </div>
          </div>
          <div className="mt-8 bg-amber-50 border-l-4 border-amber-600 p-6 rounded-r-lg">
            <p className="text-slate-700 leading-relaxed">
              According to the statistics, the risk of developmental vulnerability of refugee children is higher, and this indicates that culturally responsive interventions should be used (AIFS, 2023). There are also effects of such policies on early childhood practice because they need inclusive and culturally competent, supportive environments.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="bg-gradient-to-r from-amber-600 to-teal-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn}>
            <h2 className="text-3xl font-bold text-white mb-8">Strategies for Practice</h2>
            <p className="text-white mb-8 text-lg">The evidence-based strategies include:</p>
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
                    <CheckCircle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                    <p className="text-slate-700 leading-relaxed">{strategy}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="text-white mt-8 text-lg">
              Such strategies are employed by teachers to design lessons in inclusive ways, open communication with families, and also the identification of cultural strengths that can be leveraged by learning.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div {...fadeIn}>
          <h2 className="text-3xl font-bold text-slate-800 mb-8">Community and Professional Partnerships</h2>
          <p className="text-slate-700 mb-8 leading-relaxed">Key organisations include:</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerships.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg shadow-md p-6 border-t-4 border-amber-600"
              >
                <h3 className="font-bold text-slate-800 mb-2">{partner.name}</h3>
                <p className="text-slate-600 text-sm">{partner.service}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-slate-700 mt-8 leading-relaxed">
            Such organisations work together with early childhood services in the provision of culturally relevant programs, advocacy and professional advice.
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
              These resources promote understanding, empathy, and resilience, helping children recognise and appreciate diversity while strengthening social-emotional skills.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CulturalContext;
