import { motion } from 'framer-motion';

const ConceptMap = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const concepts = [
    { id: 1, title: 'Early Childhood Development', x: '50%', y: '10%', color: 'bg-teal-600' },
    { id: 2, title: 'Family Systems & Contexts', x: '15%', y: '50%', color: 'bg-amber-600' },
    { id: 3, title: 'Community & Social Support', x: '85%', y: '50%', color: 'bg-slate-600' },
    { id: 4, title: 'Educator Practice & Intervention', x: '50%', y: '85%', color: 'bg-teal-500' },
    { id: 5, title: 'Child Wellbeing & Resilience', x: '50%', y: '50%', color: 'bg-emerald-600' }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div {...fadeIn} className="text-center mb-16">
        <h2 className="text-4xl font-bold text-slate-800 mb-4">Conceptual Framework</h2>
        <p className="text-slate-600 text-lg">
          Understanding how contexts, systems, and practices interconnect
        </p>
      </motion.div>

      <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100">
        <div className="relative w-full" style={{ paddingBottom: '66.67%' }}>
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1000 700"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="10"
                refX="9"
                refY="3"
                orient="auto"
              >
                <polygon points="0 0, 10 3, 0 6" fill="#cbd5e1" />
              </marker>
            </defs>

            <line
              x1="500"
              y1="100"
              x2="500"
              y2="350"
              stroke="#cbd5e1"
              strokeWidth="3"
              markerEnd="url(#arrowhead)"
            />
            <line
              x1="500"
              y1="100"
              x2="150"
              y2="350"
              stroke="#cbd5e1"
              strokeWidth="3"
              markerEnd="url(#arrowhead)"
            />
            <line
              x1="500"
              y1="100"
              x2="850"
              y2="350"
              stroke="#cbd5e1"
              strokeWidth="3"
              markerEnd="url(#arrowhead)"
            />

            <line
              x1="150"
              y1="350"
              x2="500"
              y2="500"
              stroke="#cbd5e1"
              strokeWidth="3"
              markerEnd="url(#arrowhead)"
            />
            <line
              x1="850"
              y1="350"
              x2="500"
              y2="500"
              stroke="#cbd5e1"
              strokeWidth="3"
              markerEnd="url(#arrowhead)"
            />

            <line
              x1="500"
              y1="350"
              x2="500"
              y2="500"
              stroke="#cbd5e1"
              strokeWidth="3"
              markerEnd="url(#arrowhead)"
              strokeDasharray="5,5"
            />

            <circle
              cx="500"
              cy="100"
              r="55"
              fill="#14b8a6"
              opacity="0.9"
            />
            <text
              x="500"
              y="90"
              textAnchor="middle"
              fill="white"
              fontSize="14"
              fontWeight="bold"
            >
              Early Childhood
            </text>
            <text
              x="500"
              y="110"
              textAnchor="middle"
              fill="white"
              fontSize="14"
              fontWeight="bold"
            >
              Development
            </text>

            <circle
              cx="150"
              cy="350"
              r="55"
              fill="#f59e0b"
              opacity="0.9"
            />
            <text
              x="150"
              y="340"
              textAnchor="middle"
              fill="white"
              fontSize="12"
              fontWeight="bold"
            >
              Family Systems
            </text>
            <text
              x="150"
              y="360"
              textAnchor="middle"
              fill="white"
              fontSize="12"
              fontWeight="bold"
            >
              & Contexts
            </text>

            <circle
              cx="850"
              cy="350"
              r="55"
              fill="#64748b"
              opacity="0.9"
            />
            <text
              x="850"
              y="340"
              textAnchor="middle"
              fill="white"
              fontSize="12"
              fontWeight="bold"
            >
              Community &
            </text>
            <text
              x="850"
              y="360"
              textAnchor="middle"
              fill="white"
              fontSize="12"
              fontWeight="bold"
            >
              Social Support
            </text>

            <circle
              cx="500"
              cy="350"
              r="55"
              fill="#10b981"
              opacity="0.9"
            />
            <text
              x="500"
              y="345"
              textAnchor="middle"
              fill="white"
              fontSize="12"
              fontWeight="bold"
            >
              Child Wellbeing
            </text>
            <text
              x="500"
              y="365"
              textAnchor="middle"
              fill="white"
              fontSize="12"
              fontWeight="bold"
            >
              & Resilience
            </text>

            <circle
              cx="500"
              cy="600"
              r="55"
              fill="#0d9488"
              opacity="0.9"
            />
            <text
              x="500"
              y="590"
              textAnchor="middle"
              fill="white"
              fontSize="11"
              fontWeight="bold"
            >
              Educator Practice
            </text>
            <text
              x="500"
              y="610"
              textAnchor="middle"
              fill="white"
              fontSize="11"
              fontWeight="bold"
            >
              & Intervention
            </text>
          </svg>
        </div>
      </div>

      <motion.div
        {...fadeIn}
        transition={{ delay: 0.3 }}
        className="mt-16 grid md:grid-cols-2 lg:grid-cols-5 gap-6"
      >
        {[
          {
            title: 'Early Childhood Development',
            desc: 'Foundation of learning, growth, and social-emotional development',
            icon: '🌱'
          },
          {
            title: 'Family Systems',
            desc: 'Economic, social, cultural, health, and crisis contexts affecting families',
            icon: '👨‍👩‍👧‍👦'
          },
          {
            title: 'Community Support',
            desc: 'Partnerships, resources, and social networks',
            icon: '🤝'
          },
          {
            title: 'Child Wellbeing',
            desc: 'Physical, emotional, social, and cognitive outcomes',
            icon: '✨'
          },
          {
            title: 'Educator Action',
            desc: 'Evidence-based strategies and responsive practices',
            icon: '📚'
          }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-slate-50 rounded-lg p-6 border border-slate-200 hover:border-teal-300 hover:shadow-md transition-all"
          >
            <div className="text-3xl mb-3">{item.icon}</div>
            <h4 className="font-bold text-slate-800 mb-2">{item.title}</h4>
            <p className="text-sm text-slate-600">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        {...fadeIn}
        transition={{ delay: 0.5 }}
        className="mt-16 bg-gradient-to-r from-teal-50 to-emerald-50 rounded-xl p-8 border border-teal-200"
      >
        <h3 className="text-2xl font-bold text-slate-800 mb-6">How It All Connects</h3>
        <div className="space-y-4">
          <p className="text-slate-700 leading-relaxed">
            <strong className="text-teal-600">Early Childhood Development</strong> is the central focus, influenced by multiple interconnected systems. <strong className="text-amber-600">Family Systems and Contexts</strong> (economic, social, cultural, health, and crisis) shape the child's microsystem, while <strong className="text-slate-600">Community and Social Support</strong> networks provide essential resources and partnerships.
          </p>
          <p className="text-slate-700 leading-relaxed">
            <strong className="text-emerald-600">Child Wellbeing and Resilience</strong> emerge as outcomes of positive interactions between these elements. Finally, <strong className="text-teal-700">Educator Practice and Intervention</strong> are the critical action mechanisms—responsive, evidence-based strategies that educators implement to strengthen family functioning, build community connections, and ultimately promote child development.
          </p>
          <p className="text-slate-700 leading-relaxed">
            This framework emphasizes that supporting children requires a holistic, systems-based approach that considers all contexts and engages families and communities as partners.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default ConceptMap;
