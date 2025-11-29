import { motion } from 'framer-motion';
import { CheckCircle, ExternalLink, BookOpen, Video } from 'lucide-react';
import ReferencesFooter from '../components/ReferencesFooter';

const CrisisContext = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const strategies = [
    'Trauma-Informed Education: To identify and address trauma in children\'s behaviour and learning.',
    'Strengths-Based Support: Focus on family strength and community resources, and deal with risk factors.',
    'Familiarity and Comfort: Making sure that children conquer the feeling of danger in the learning setting is important.',
    'Parental and Family Engagement: Work in collaboration with families in order to promote recovery and wellbeing.',
    'Culturally Responsive Practice: Before carrying out interventions, adapt to the aligned needs of various communities, such as the First Nations and refugee families.'
  ];

  const partnerships = [
    { name: 'Red Cross Australia', service: 'Emergency rescue and relief services.' },
    { name: 'Beyond Blue', service: 'Traumatised families.' },
    { name: 'Safe Futures Foundation', service: 'The prevention and intervention of family violence.' },
    { name: 'Save the Children Australia', service: 'Supporting displaced and refugee children in Australia.' },
    { name: 'Local Child and Family Health Services (CFHS)', service: 'Wellbeing and Recovery.' }
  ];

  const websites = [
    { name: 'Australian Red Cross - Disaster Support', url: 'redcross.org.au' },
    { name: 'Raising Children Network – Coping with Emergencies', url: 'raisingchildren.net.au' },
    { name: 'Beyond Blue – Mental Health in Families', url: 'beyondblue.org.au' },
    { name: 'Save the Children Australia – Refugee and Emergency Resources', url: 'savethechildren.org.au' }
  ];

  const storybooks = [
    { title: 'The Day You Begin by Jacqueline Woodson', theme: 'belonging and resilience' },
    { title: 'I Am Peace by Susan Verde', theme: 'mindfulness and emotional regulation' },
    { title: 'Somewhere in the World There\'s a Mother Who Wants You by Patricia MacLachlan', theme: 'safety and care' },
    { title: 'Ruby\'s Worry by Tom Percival', theme: 'coping with anxiety' }
  ];

  const videos = [
    'Bluey – Coping with Change Episodes',
    'ABC Kids Listen – Disaster Preparedness',
    'Sesame Street – Emotions and Safety',
    'Storyline Online – Resilience Stories'
  ];

  return (
    <div className="min-h-screen">
      <section className="relative h-96 bg-gradient-to-r from-amber-700 to-slate-800 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/6941001/pexels-photo-6941001.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Crisis and emergency"
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
            <h1 className="text-5xl font-bold mb-4">Crisis and Emergency Contexts</h1>
            <p className="text-2xl font-light">Climate, Natural Disasters, Family Violence, and Displacement</p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div {...fadeIn}>
          <h2 className="text-3xl font-bold text-slate-800 mb-6">Understanding the Context</h2>
          <div className="prose max-w-none text-slate-700 leading-relaxed space-y-4">
            <p>
              The context of crisis and emergencies includes disasters and situations that disrupt family stability and community functioning, such as climate-based disasters (bushfires, floods), family violence, displacement (because of conflict or economic pressures). Such settings are gaining relevance in Australia, where climate change has made the occurrence and the aftermath of the natural disasters more frequent and severe, and family violence is one of the major social issues of major concern (Grace & Baird, 2022).
            </p>
            <p>
              Childhood education is quite likely to be the first external factor where the crisis-affected children may be supported since their early years. The ecological systems theory, developed by Bronfenbrenner, emphasises that the impact of family microsystem disruptions spreads to other systems, emotional security, learning opportunities, and relations, in this case to the mesosystem and exosystem (Grace et al., 2022). Modern studies emphasise that the experience of crisis may result in immediate and prolonged developmental problems, such as anxiety, post-traumatic stress disorder, problems with attachment and learning impairment (Wong et al., 2017).
            </p>
            <div className="bg-slate-50 border-l-4 border-amber-700 p-6 rounded-r-lg my-6">
              <img
                src="https://images.pexels.com/photos/6941003/pexels-photo-6941003.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Emergency support"
                className="w-full rounded-xl shadow-md mb-4"
              />
              <p className="text-sm text-slate-600 italic">
                Emergency services and support systems are critical for children and families during crisis situations.
              </p>
            </div>
            <p>
              Crises have varied effects on those communities, including the First Nations, families of refugees, and rural communities found in Australia, because of the diversity of experiences. To illustrate, low infrastructure levels may increase the susceptibility of the remote communities to natural disasters, and displaced families might face increased stress due to their exposure to traumatic events previously (McMahon & Grace, 2022).
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
                  The effects that children who have experienced crises could have include increased emotional distress, inability to build secure relationships, impaired routines, and decreased involvement in learning processes. Trauma, instability, and loss can influence cognitive as well as social development, and individuals in the family might have issues with coping mechanisms, worsening the stress in the household (Wong & Harrison, 2022).
                </p>
                <p>
                  In the case of early childhood service provision, this entails educators using responsive practices alongside trauma-informed practices. It is important to foster resilience and well-being in children by giving them predictable routines, emotional support, and a lack of opportunities to share their experiences via play, storytelling, and creative arts (McMahon and Camberis, 2017). Culturally safe approaches should also be taken into account in the services, where the specific vulnerabilities and assets of various families exposed to crisis are identified.
                </p>
              </div>
              <img
                src="https://images.pexels.com/photos/8613091/pexels-photo-8613091.jpeg?auto=compress&cs=tinysrgb&w=600&h=800"
                alt="Crisis impact"
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
            Key policies and strategies addressing crisis contexts include:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-amber-700">
              <h3 className="font-bold text-slate-800 mb-3">The National Framework of Protecting the Children of Australia</h3>
              <p className="text-slate-600 text-sm">Focuses on at-risk children and safety aspects, and early intervention.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-amber-700">
              <h3 className="font-bold text-slate-800 mb-3">National Disaster Resilience Strategy</h3>
              <p className="text-slate-600 text-sm">Sets the pace in terms of community preparedness, response and recovery.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-amber-700">
              <h3 className="font-bold text-slate-800 mb-3">Safe and Together Model</h3>
              <p className="text-slate-600 text-sm">Geared towards domestic and family violence and focuses on providing priority to child safety.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-amber-700">
              <h3 className="font-bold text-slate-800 mb-3">Australian Early Development Census (AEDC)</h3>
              <p className="text-slate-600 text-sm">Offers information on the effects of community adversity on the development of children.</p>
            </div>
          </div>
          <div className="mt-8 bg-amber-50 border-l-4 border-amber-700 p-6 rounded-r-lg">
            <p className="text-slate-700 leading-relaxed">
              Some statistics can give an idea of the urgency of such interventions: in 2019-2020, over 1.6 million Australians were affected by bushfires, and family violence remains the primary cause of homelessness among women and children (Australian Institute of Family Studies [AIFS], 2023). Policies have a role in shaping the practice of early childhood because they ensure the incorporation of risk analysis, response to crisis and collaborative intervention plans in service delivery.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="bg-gradient-to-r from-amber-700 to-slate-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn}>
            <h2 className="text-3xl font-bold text-white mb-8">Strategies for Practice</h2>
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
              Principles that educators may use to address the methods of calming down responses, emotional expression through play, and linking families to local resources would be beneficial.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div {...fadeIn}>
          <h2 className="text-3xl font-bold text-slate-800 mb-8">Community and Professional Partnerships</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerships.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg shadow-md p-6 border-t-4 border-amber-700"
              >
                <h3 className="font-bold text-slate-800 mb-2">{partner.name}</h3>
                <p className="text-slate-600 text-sm">{partner.service}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-slate-700 mt-8 leading-relaxed">
            Collaborating with these organisations ensures holistic support and facilitates early intervention.
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
                Programs/Websites
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
              These resources promote understanding, empathy, and resilience, equipping children and families to navigate crises with support and reassurance.
            </p>
          </motion.div>
        </div>
      </section>

      <ReferencesFooter />
    </div>
  );
};

export default CrisisContext;
