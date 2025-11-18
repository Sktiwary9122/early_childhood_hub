import { motion } from 'framer-motion';
import { CheckCircle, ExternalLink, BookOpen, Video } from 'lucide-react';

const HealthContext = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const strategies = [
    'Trauma-Informed Care: Understand the effects of trauma on children: Behaviours and learning.',
    'Strength-Based Approaches: Concentrate on the abilities of children as well as the strengths of families instead of their weaknesses.',
    'A repetitive schedule and Non-variable settings: Ray of hope and emotional security.',
    'Parental Engagement and Support: Raise awareness of ways as well as engagement with mental well-being, drugs and counselling services.',
    'Emotional Literacy and Social Skills Programs: Enable children to learn or identify, communicate, and control emotions positively.'
  ];

  const partnerships = [
    { name: 'Child and Family Health Services (CFHS)', service: 'This agency offers parental assistance and developmental follow-up.' },
    { name: 'Headspace', service: 'Mental health support services- adolescents and families.' },
    { name: 'Family Drug Support Australia (FDS)', service: 'Helps families that have a family member living with substance misuse.' },
    { name: 'Lifeline Australia', service: 'Crisis intervention and counselling.' },
    { name: 'Australian Childhood Foundation', service: 'Specialist support services in trauma and abuse.' }
  ];

  const websites = [
    { name: 'Raising Children Network – Health and Wellbeing Resources', url: 'raisingchildren.net.au' },
    { name: 'CFCA – Trauma and Family Support', url: 'aifs.gov.au/cfca' },
    { name: 'Beyond Blue – Family Mental Health', url: 'beyondblue.org.au' },
    { name: 'Early Childhood Australia – Wellbeing Resources', url: 'earlychildhoodaustralia.org.au' }
  ];

  const storybooks = [
    { title: 'The Invisible String by Patrice Karst', theme: 'Comfort and connection' },
    { title: 'When Sadness is at Your Door by Eva Eland', theme: 'Emotional Literacy' },
    { title: "I'm Gonna Like Me by Jamie Lee Curtis", theme: 'Self-esteem and resilience' },
    { title: 'A Terrible Thing Happened by Margaret Holmes', theme: 'Understanding trauma' }
  ];

  const videos = [
    'Bluey – Family Emotions Episodes',
    'Sesame Street – Coping with Feelings',
    'ABC Kids Listen – Mindfulness Episodes',
    'Storyline Online – Emotional Awareness Stories'
  ];

  return (
    <div className="min-h-screen">
      <section className="relative h-96 bg-gradient-to-r from-teal-700 to-slate-600 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/8613317/pexels-photo-8613317.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Health and wellbeing"
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
            <h1 className="text-5xl font-bold mb-4">Health and Wellbeing Contexts</h1>
            <p className="text-2xl font-light">Parental Mental Illness, Substance Use, Trauma, Grief, and Abuse</p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div {...fadeIn}>
          <h2 className="text-3xl font-bold text-slate-800 mb-6">Understanding the Context</h2>
          <div className="prose max-w-none text-slate-700 leading-relaxed space-y-4">
            <p>
              The context of health and well-being includes a very diverse array of experiences that impact families, such as mental illnesses in parents, substance abuse, trauma, grief, and child neglect or abuse. These are very influential factors on the family system and the trajectories of children, such as their development. The presence of parental mental disease, in its turn, could decrease the emotional availability of a caregiver and impact the security of attachment, whereas substance use could provide unstable conditions and a high chance of neglect or maltreatment (McMahon & Camberis, 2017). Children may have their emotional regulation, cognition, and other social behaviours conditioned by traumas and grief (family loss, displacement, or adverse childhood experiences (ACEs)) (Wong et al., 2017).
            </p>
            <p>
              The significance of studying these contexts in education at the early childhood stage is that, in many cases, the first adult outside help that children undergo is an educator. The ecological systems theory by Bronfenbrenner can be used to interpret how health and well-being issues in the microsystem (family) can be transmitted to the mesosystems (school, community), and impact on the children in the long term (Grace et al., 2022). Modern studies note that trauma-informed practice and strength-based approaches are valuable since such settings are dangerous, but with the help of certain protective factors, such as stable relationships, safe settings, and early interventions, one can resiliently endure the situation (Grace & Baird, 2022).
            </p>
            <div className="bg-slate-50 border-l-4 border-teal-600 p-6 rounded-r-lg my-6">
              <img
                src="https://images.pexels.com/photos/8363028/pexels-photo-8363028.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Supporting children"
                className="w-full rounded-xl shadow-md mb-4"
              />
              <p className="text-sm text-slate-600 italic">
                Supportive relationships and trauma-informed care are essential for children's wellbeing.
              </p>
            </div>
            <p>
              These issues are so common in Australia, hence their relevance. As an illustration, one in five adults in Australia is affected by a mental health problem every year, and nearly 7% of children are currently residing in families with parents who are misusing substances (AIFS, 2023). The changing forms of the family institution, a growing awareness of mental health and national endeavours towards promoting wellbeing all depict the multifaceted diversity of these situations in modern society.
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
                  Children face serious health and well-being problems that affect the aspects of thinking, emotions, and communication with others. The quality of interactions between a parent and a child can suffer when parents are mentally ill, resulting in the lack of emotional availability of the parent and decreased response. Such disturbances might lead to the development of insecure attachment, behavioural problems, increased anxiety, and emotional expression problems (McMahon & Grace, 2022). Further substance use, trauma or abuse exposure impacts children with respect to their executive functioning, progress of language and social-emotional capabilities, which predisposes children to developmental delays or behavioural dysregulation. Secondary traumatisation of many children may also occur and transfer the emotion of shame, isolation, or fear to witness or experience family stress (ACECQA, 2023).
                </p>
                <p>
                  In the case of the early childhood services, these vulnerabilities point to a greater demand for educator awareness, close observation, and timely, responsive intervention. The educators are urged to identify the initial signs of acute stress or trauma and offer expected routine, relationship development, and inclusion that will propagate a robust feeling of safety and belonging, as well as stability (Wong & Harrison, 2022). Such practices comply with the international expectations of the Early Years Learning Framework and the National Quality Framework, which focus on wellbeing, safe relationships, and high-quality, child-centred care (ACECQA, 2022; Clarke, 2023; ACECQA, 2023).
                </p>
              </div>
              <img
                src="https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg?auto=compress&cs=tinysrgb&w=600&h=800"
                alt="Healthcare support"
                className="rounded-xl shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div {...fadeIn}>
          <h2 className="text-3xl font-bold text-slate-800 mb-6">Social Policy and Australian Responses</h2>
          <p className="text-slate-700 mb-8 leading-relaxed">Key national and state responses include:</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-teal-600">
              <h3 className="font-bold text-slate-800 mb-3">National Quality Standard (NQS)</h3>
              <p className="text-slate-600 text-sm">Focuses on the safety of children, their welfare, and favourable surroundings (ACECQA, 2023).</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-teal-600">
              <h3 className="font-bold text-slate-800 mb-3">The National Framework for Protecting Children of Australia</h3>
              <p className="text-slate-600 text-sm">Offers a guideline of protecting children and early intervention.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-teal-600">
              <h3 className="font-bold text-slate-800 mb-3">Early Childhood Early Intervention (ECEI) Programs</h3>
              <p className="text-slate-600 text-sm">Help children at high risk of developmental vulnerability and disadvantaged families (Boulton, 2024).</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-teal-600">
              <h3 className="font-bold text-slate-800 mb-3">Headspace and Beyond Blue</h3>
              <p className="text-slate-600 text-sm">Provide free mental health care services to children and parents.</p>
            </div>
          </div>
          <div className="mt-8 bg-teal-50 border-l-4 border-teal-600 p-6 rounded-r-lg">
            <p className="text-slate-700 leading-relaxed">
              Statistics show that children with mental illness or substance use affected by parents have higher risks of developing vulnerability in their development, and it is essential to introduce integrated policies that would combine health, education, and community-based support (AIFS, 2023). The policies are used to inform the practice of early childhood by informing it of trauma-informed care, collaborative care, and preventative measures.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="bg-gradient-to-r from-teal-700 to-slate-600 py-16">
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
                    <CheckCircle className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
                    <p className="text-slate-700 leading-relaxed">{strategy}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="text-white mt-8 text-lg">
              Educators may use such strategies by integrating the supportive routines, engaging in reflective conversations, and working with the families and mental health professionals.
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
                className="bg-white rounded-lg shadow-md p-6 border-t-4 border-teal-600"
              >
                <h3 className="font-bold text-slate-800 mb-2">{partner.name}</h3>
                <p className="text-slate-600 text-sm">{partner.service}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-slate-700 mt-8 leading-relaxed">
            Through collaboration, there is holistic support as the early childhood services are connected with health practitioners and community resources.
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
              These resources support understanding, empathy, and resilience, helping children navigate complex emotional experiences while fostering social-emotional competence.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HealthContext;
