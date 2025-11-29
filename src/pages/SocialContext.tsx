import { motion } from 'framer-motion';
import { CheckCircle, ExternalLink, BookOpen, Video } from 'lucide-react';
import ReferencesFooter from '../components/ReferencesFooter';

const SocialContext = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const strategies = [
    'Attachment-Developed interventions: give secure attachments by caregiving in a special, responsive manner.',
    'Parenting Programs and Support Groups: Lead to parental availing after divorce or separation.',
    'Community Engagement Activities: Decrease the loneliness of the community through linking families to the community networks.',
    'Trauma-Informed Practice: Be responsive to the children who are out-of-home-care by considering their previous experiences.',
    'Planning the future with families: Engage parents and caregivers in making routine, learning, and well-being decisions.'
  ];

  const partnerships = [
    { name: 'Relationships Australia', service: 'Counselling, mediation and family support.' },
    { name: 'Department of Communities and Justice (NSW)', service: 'Child protection and foster care services.' },
    { name: 'Barnardos Australia', service: 'Foster care, family support and early intervention services.' },
    { name: 'Anglicare', service: 'Family services, counselling, and community support.' },
    { name: 'Local community centres', service: 'Social inclusion programs, playgroups, and parental workshops.' }
  ];

  const websites = [
    { name: 'CFCA Knowledge Exchange', url: 'aifs.gov.au/cfca' },
    { name: 'Raising Children Network – Family support', url: 'raisingchildren.net.au' },
    { name: 'Headspace – Youth and family wellbeing', url: 'headspace.org.au' },
    { name: 'Early Childhood Australia', url: 'earlychildhoodaustralia.org.au' }
  ];

  const storybooks = [
    { title: 'The Family Book by Todd Parr', theme: 'Celebrates diverse family structures.' },
    { title: 'Two Homes by Claire Masurel', theme: 'Explains parental separation to young children.' },
    { title: 'Owen & Mzee by Isabella Hatkoff', theme: 'Addresses displacement and adaptation.' },
    { title: 'A Chair for My Mother', theme: 'Managing change and transitions.' }
  ];

  const videos = [
    'Bluey: Family Changes Episodes – Coping with separation and routines.',
    'Sesame Street: Friendships and Families – Social-emotional development.',
    'Storyline Online – Reading programs highlighting diverse family experiences.',
    'ABC Kids Listen Podcasts – Supports discussion of emotions and social relationships.'
  ];

  return (
    <div className="min-h-screen">
      <section className="relative h-96 bg-gradient-to-r from-slate-600 to-teal-700 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/8612990/pexels-photo-8612990.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Social context"
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
            <h1 className="text-5xl font-bold mb-4">Social Contexts</h1>
            <p className="text-2xl font-light">Social or Geographical Isolation, Divorce, and Out-of-Home Care</p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div {...fadeIn}>
          <h2 className="text-3xl font-bold text-slate-800 mb-6">Understanding the Context</h2>
          <div className="prose max-w-none text-slate-700 leading-relaxed space-y-4">
            <p>
              The social contexts involve the family and community situations, which affect the development of children beyond the economic aspects. Such contexts involve the social or geographic seclusion, the separation, or the divorce of the parents, and cases when children are put in out-of-home care because of their safety concerns or family crisis (Wong et al., 2017). Isolation can be a social event in remote or rural locations, and this results in poor access to early childhood education, health, and access to peers. The family disintegration, including divorce or separation, has an impact on child-rearing structure and their routine, which may interfere with attachment, emotional safe-havens, and identity formation (McMahon & Camberis, 2017). Foster care or kinship-based care Out-of-home care Out-of-home care consists of foster care or other kinship-based care situations, and they offer both difficult and good practices that can support and stabilize children.
            </p>
            <p>
              These social environments are also pertinent in the level of early childhood education since the emotional well-being, degree of learning attention and social connections of the children is greatly influenced by family and community setups (Lima et al., 2024). The ecological systems theory introduced by Bronfenbrenner highlights that the microsystem (family, peers) of the child, in turn, interacts with the mesosystems (school, community) and with the macrosystems (societal norms, legal frameworks), proving that it is critical to start focusing on the broader social context of the child (Grace et al., 2022). The study shows that children living in socially isolated or disrupted home situations are predisposed to developing developmental delays, behavioural difficulties, and low school preparedness unless they have supportive interventions (Blythe & Elcombe, 2025).
            </p>
            <div className="bg-slate-50 border-l-4 border-slate-600 p-6 rounded-r-lg my-6">
              <img
                src="https://images.pexels.com/photos/8613094/pexels-photo-8613094.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Social connections"
                className="w-full rounded-xl shadow-md mb-4"
              />
              <p className="text-sm text-slate-600 italic">
                Community connections and social support are vital for children's development and wellbeing.
              </p>
            </div>
            <p>
              Australia has a very high level of social context. The rate of divorce, urban-rural differences, and the percentage of children living out of home care have been changing throughout the last decades (Weston & Qu, 2014). The cultural, linguistic, and socio-economic backgrounds of families differ, which influences the process of experiencing and solving social transitions. The practitioners are thus required to look at the context of each child separately, both identifying points of vulnerability and protective factors.
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
                  Children who undergo social disruption can have emotional, cognitive, and social problems. Divorce or separation may cause both anxiety and sadness and behavioural issues, but the results depend on parental collaboration and emotional support (Wong & Harrison, 2022). There is the risk that social isolation (especially in rural or remote communities) can reduce access to peers, social learning, and early childhood programs, social competence, and engagement. Out-of-home children could be affected by attachment issues, grief, or identity difficulties, which affect their relationships with other children and instructors (Grace & Baird, 2022; Paterson-Young et al., 2024).
                </p>
                <p>
                  Early childhood services are very significant in alleviating these impacts. Teachers are able to offer a consistent routine, emotionally sensitive, nurturing and inclusive learning spaces that contribute to resilience. Knowledge of the social situation of individual children can help educators promote social-emotional growth, boost their learning activity, and liaise with families to support the requirements of individual children (Clarke, 2023).
                </p>
              </div>
              <img
                src="https://images.pexels.com/photos/8613315/pexels-photo-8613315.jpeg?auto=compress&cs=tinysrgb&w=600&h=800"
                alt="Parent and child"
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
            Australian policy frameworks address social challenges through child protection systems, family support initiatives, and community programs. Key policies and strategies include:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-slate-600">
              <h3 className="font-bold text-slate-800 mb-3">National Framework for Protecting Australia's Children 2009–2020</h3>
              <p className="text-slate-600 text-sm">Provides a coordinated approach to child safety, early intervention, and family support.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-slate-600">
              <h3 className="font-bold text-slate-800 mb-3">Family Law Act 1975</h3>
              <p className="text-slate-600 text-sm">Governs parenting arrangements post-divorce, prioritising children's best interests.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-slate-600">
              <h3 className="font-bold text-slate-800 mb-3">Out-of-Home Care Standards</h3>
              <p className="text-slate-600 text-sm">Ensure quality and safety in foster and kinship care arrangements.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-slate-600">
              <h3 className="font-bold text-slate-800 mb-3">Early Childhood Intervention Programs</h3>
              <p className="text-slate-600 text-sm">Assist children who are under threat, either because of social disadvantage or isolation.</p>
            </div>
          </div>
          <div className="mt-8 bg-slate-50 border-l-4 border-slate-600 p-6 rounded-r-lg">
            <p className="text-slate-700 leading-relaxed">
              By 2023, some statistics indicate that there are more than 50,000 Australian children in out-of-home care, and the number of Indigenous children is overrepresented (Australian Institute of Family Studies [AIFS], 2023). The policies affect early childhood practices that include nurturing safe environments, making the family, and promoting access.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="bg-gradient-to-r from-slate-600 to-teal-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn}>
            <h2 className="text-3xl font-bold text-white mb-8">Strategies for Practice</h2>
            <p className="text-white mb-8 text-lg">Social contexts, Strategies based on evidence to be used to deal with social contexts are:</p>
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
              Educators use the strategies to establish trust and provide moderate learning environments and connect families with community resources.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div {...fadeIn}>
          <h2 className="text-3xl font-bold text-slate-800 mb-8">Community and Professional Partnerships</h2>
          <p className="text-slate-700 mb-8 leading-relaxed">
            Some of the key organisations contributing towards supporting children socially include:
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
                className="bg-white rounded-lg shadow-md p-6 border-t-4 border-slate-600"
              >
                <h3 className="font-bold text-slate-800 mb-2">{partner.name}</h3>
                <p className="text-slate-600 text-sm">{partner.service}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-slate-700 mt-8 leading-relaxed">
            Partnerships enhance service provision by combining expertise, sharing resources, and coordinating interventions to meet children's social and emotional needs.
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
              These resources provide age-appropriate tools to foster empathy, resilience, and understanding, helping children navigate complex social realities (Lima et al., 2024; Paterson-Young et al., 2024).
            </p>
          </motion.div>
        </div>
      </section>

      <ReferencesFooter />
    </div>
  );
};

export default SocialContext;
