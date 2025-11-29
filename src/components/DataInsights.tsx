import { motion } from 'framer-motion';
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line
} from 'recharts';

const DataInsights = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const contextDistribution = [
    { name: 'Economic', value: 22, percentage: '22%' },
    { name: 'Social', value: 18, percentage: '18%' },
    { name: 'Cultural', value: 20, percentage: '20%' },
    { name: 'Health', value: 25, percentage: '25%' },
    { name: 'Crisis', value: 15, percentage: '15%' }
  ];

  const vulnerabilityTrends = [
    { year: '2018', economic: 13, social: 12, cultural: 8, health: 14, crisis: 9 },
    { year: '2019', economic: 14, social: 13, cultural: 9, health: 15, crisis: 10 },
    { year: '2020', economic: 16, social: 15, cultural: 11, health: 18, crisis: 14 },
    { year: '2021', economic: 15, social: 14, cultural: 12, health: 17, crisis: 12 },
    { year: '2022', economic: 17, social: 16, cultural: 13, health: 19, crisis: 13 },
    { year: '2023', economic: 18, social: 17, cultural: 14, health: 20, crisis: 14 }
  ];

  const interventionOutcomes = [
    { name: 'Evidence-Based Support', children: 85 },
    { name: 'Family Engagement', children: 78 },
    { name: 'Community Partnerships', children: 82 },
    { name: 'Trauma-Informed Care', children: 88 },
    { name: 'Culturally Responsive', children: 81 }
  ];

  const COLORS = ['#14b8a6', '#f59e0b', '#8b5cf6', '#ef4444', '#3b82f6'];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 rounded-lg shadow-lg border border-slate-200">
          <p className="font-semibold text-slate-800">{payload[0].payload.name}</p>
          <p className="text-teal-600 font-bold">{payload[0].value}%</p>
        </div>
      );
    }
    return null;
  };

  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeIn} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Data Insights</h2>
          <p className="text-slate-600 text-lg">
            Key statistics and trends in early childhood contexts
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            {...fadeIn}
            className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100 hover:shadow-xl transition-shadow"
          >
            <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">
              Context Distribution (2024)
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={contextDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={(entry) => entry.percentage}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {contextDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {contextDistribution.map((item, index) => (
                <div key={item.name} className="flex items-center gap-2">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  />
                  <span className="text-sm text-slate-700">{item.name}: {item.percentage}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            {...fadeIn}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100 hover:shadow-xl transition-shadow"
          >
            <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">
              Intervention Effectiveness
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={interventionOutcomes}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis domain={[0, 100]} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px'
                  }}
                  formatter={(value) => `${value}% success`}
                />
                <Bar dataKey="children" fill="#14b8a6" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        <motion.div
          {...fadeIn}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100 hover:shadow-xl transition-shadow"
        >
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">
            Vulnerability Trends (2018-2023)
          </h3>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={vulnerabilityTrends}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px'
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="economic"
                stroke="#14b8a6"
                strokeWidth={2}
                dot={{ r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="social"
                stroke="#f59e0b"
                strokeWidth={2}
                dot={{ r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="cultural"
                stroke="#8b5cf6"
                strokeWidth={2}
                dot={{ r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="health"
                stroke="#ef4444"
                strokeWidth={2}
                dot={{ r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="crisis"
                stroke="#3b82f6"
                strokeWidth={2}
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div
          {...fadeIn}
          transition={{ delay: 0.6 }}
          className="mt-12 bg-gradient-to-r from-teal-50 to-slate-50 rounded-xl p-8 border border-teal-100"
        >
          <h4 className="text-lg font-bold text-slate-800 mb-4">Key Findings</h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-teal-600 font-bold mt-1">•</span>
              <span className="text-slate-700">
                Health and wellbeing contexts represent 25% of early childhood challenges, with trauma-informed care showing 88% effectiveness rates.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-teal-600 font-bold mt-1">•</span>
              <span className="text-slate-700">
                Economic vulnerability has increased from 13% (2018) to 18% (2023), highlighting the growing need for financial support interventions.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-teal-600 font-bold mt-1">•</span>
              <span className="text-slate-700">
                Community partnerships and culturally responsive practices demonstrate consistent positive outcomes across all contexts.
              </span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default DataInsights;
