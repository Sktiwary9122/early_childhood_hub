import { useState } from 'react';
import { X } from 'lucide-react';

const Footer = () => {
  const [showReferences, setShowReferences] = useState(false);

  const references = [
    "ACECQA (2022). Belonging, being and becoming: The early years learning framework for Australia (V2.0).",
    "ACECQA (2023). National Quality Framework.",
    "Angel, M. (2019). Supporting the wellbeing of parents and carers. Everyday Learning Series, 17(1).",
    "Australian Bureau of Statistics. (2021).",
    "Australian Institute of Family Studies. (2023). Facts and Figures.",
    "Baffour, B., Das, S., Li, M., & Richardson, A. (2024). The Utility of Socioeconomic and Remoteness Indicators in Understanding the Geographical Variation in the Regional Prevalence of Early Childhood Vulnerability in Australia.",
    "Blythe, S., & Elcombe, E. (2025). Understanding training and support needs of foster carers of infants in out-of-home care.",
    "Boulton, K. A., et al. (2024). Access and barriers to supports for children and caregivers attending public child developmental assessment services.",
    "Clarke, M. (2023). National Quality Framework - Department of Education, Australian Government.",
    "Gautam, N., Rahman, M. M., Hashmi, R., Lim, A., & Khanam, R. (2024). Socioeconomic inequalities in child and adolescent mental health in Australia.",
    "Goldfeld, S. R., Price, A. M., & Al‐Yaman, F. (2023). Having material basics is basic. Medical Journal of Australia.",
    "Grace, R., & Baird, K. (2022). Social inequities in Australian communities and the impact of children and families.",
    "Grace, R., Townley, C., & Woodrow, C. (2022). Understanding the child in context: an ecological approach to child development.",
    "Lima, F., et al. (2024). Child protection and developmental trajectories of children who entered care as infants.",
    "Ludlow, T., et al. (2022). Incorporating Financial Hardship in Measuring the Mental Health Impact of Housing Stress.",
    "McMahon, C. & Camberis, A. (2017). Family as the primary context of children's development.",
    "Paterson-Young, C., et al. (2024). Impact of trauma and placement in residential or congregate care on the criminalisation of children.",
    "Services Australia. (2023). About Medicare.",
    "Weston. R., & Qu, L. (2014). Trends in family transitions, forms and functioning.",
    "Wong, S., & Harrison, L.J. (2022). Research about and with children, families and communities.",
    "Wong, S., Hayes, A. & Wise, S. (2017). Research about and with children, families, and communities."
  ];

  return (
    <>
      <footer className="bg-slate-800 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm">&copy; 2025 Early Childhood Professional Resource. All rights reserved.</p>
            </div>
            <button
              onClick={() => setShowReferences(true)}
              className="text-teal-400 hover:text-teal-300 transition-colors underline text-sm"
            >
              View References
            </button>
          </div>
        </div>
      </footer>

      {showReferences && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[80vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-slate-200 p-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-slate-800">References</h2>
              <button
                onClick={() => setShowReferences(false)}
                className="p-2 hover:bg-slate-100 rounded-full transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                {references.map((ref, index) => (
                  <li key={index} className="text-sm text-slate-700 leading-relaxed">
                    {ref}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
