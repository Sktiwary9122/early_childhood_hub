import { useState } from 'react';
import { X } from 'lucide-react';

const Footer = () => {
  const [showReferences, setShowReferences] = useState(false);

  const references = [
    {
      text: "ACECQA (2022). Belonging, being and becoming: The early years learning framework for Australia (V2.0).",
      url: "https://www.acecqa.gov.au/sites/default/files/2023-01/EYLF-2022-V2.0.pdf"
    },
    {
      text: "ACECQA (2023). National Quality Framework.",
      url: "https://www.acecqa.gov.au/national-quality-framework"
    },
    {
      text: "Angel, M. (2019). Supporting the wellbeing of parents and carers. Everyday Learning Series, 17(1).",
      url: null
    },
    {
      text: "Australian Bureau of Statistics. (2021).",
      url: "https://www.abs.gov.au/"
    },
    {
      text: "Australian Institute of Family Studies. (2023). Facts and Figures.",
      url: null
    },
    {
      text: "Baffour, B., Das, S., Li, M., & Richardson, A. (2024). The Utility of Socioeconomic and Remoteness Indicators in Understanding the Geographical Variation in the Regional Prevalence of Early Childhood Vulnerability in Australia. Child Indicators Research, 17(4), 1791-1827.",
      url: "https://doi.org/10.1007/s12187-024-10143-4"
    },
    {
      text: "Blythe, S., & Elcombe, E. (2025). Understanding training and support needs of foster carers of infants in out-of-home care. The British Journal of Social Work, 55(3), 1474-1488.",
      url: "https://doi.org/10.1093/bjsw/bcae207"
    },
    {
      text: "Boulton, K. A., Hodge, A., Levu, K., Ong, N., Silove, N., & Guastella, A. J. (2024). Access and barriers to supports for children and caregivers attending public child developmental assessment services: Findings from the Sydney child neurodevelopment research registry. Autism Research, 17(3), 555-567.",
      url: "https://onlinelibrary.wiley.com/doi/abs/10.1002/aur.3064"
    },
    {
      text: "Clarke, M. (2023). National Quality Framework - Department of Education, Australian Government.",
      url: "https://www.education.gov.au/early-childhood/national-quality-framework"
    },
    {
      text: "Gautam, N., Rahman, M. M., Hashmi, R., Lim, A., & Khanam, R. (2024). Socioeconomic inequalities in child and adolescent mental health in Australia: the role of parenting style and parents' relationships. Child and Adolescent Psychiatry and Mental Health, 18(1), 28.",
      url: "https://doi.org/10.1186/s13034-024-00719-x"
    },
    {
      text: "Goldfeld, S. R., Price, A. M., & Al‐Yaman, F. (2023). Having material basics is basic. Medical Journal of Australia, 219.",
      url: "https://www.mja.com.au/system/files/issues/219_10/mja252144.pdf"
    },
    {
      text: "Grace, R., & Baird, K. (2022). Social inequities in Australian communities and the impact of children and families.",
      url: null
    },
    {
      text: "Grace, R., Townley, C., & Woodrow, C. (2022). Understanding the child in context: an ecological approach to child development.",
      url: null
    },
    {
      text: "Lima, F., Taplin, S., Maclean, M., Octoman, O., Grose, M. & O'Donnell, M. (2024). Child protection and developmental trajectories of children who entered care as infants. Child Abuse Review, 33(5), p.e2900.",
      url: "https://doi.org/10.1002/car.2900"
    },
    {
      text: "Ludlow, T., Fooken, J., Rose, C., & Tang, K. (2022). Incorporating Financial Hardship in Measuring the Mental Health Impact of Housing Stress. arXiv preprint arXiv:2205.01255.",
      url: "https://doi.org/10.48550/arXiv.2205.01255"
    },
    {
      text: "McMahon, C. & Camberis, A. (2017). Family as the primary context of children's development.",
      url: null
    },
    {
      text: "McMahon, C., & Grace, R. (2022) Family as the primary context of children's development.",
      url: null
    },
    {
      text: "Paterson-Young, C., Corrales, T., Warren, I., & McNamara, P. (2024). Impact of trauma and placement in residential or congregate care on the criminalisation of children in England/Wales and Australia. Children and Youth Services Review, 166, 107947.",
      url: "https://doi.org/10.1016/j.childyouth.2024.107947"
    },
    {
      text: "Services Australia. (2023). About Medicare.",
      url: "https://www.servicesaustralia.gov.au/about-medicare?context=60092"
    },
    {
      text: "Weston. R., & Qu, L. (2014). Trends in family transitions, forms and functioning.",
      url: null
    },
    {
      text: "Wong, S., & Harrison, L.J. (2022). Research about and with children, families and communities.",
      url: null
    },
    {
      text: "Wong, S., Hayes, A. & Wise, S. (2017). Research about and with children, families, and communities.",
      url: null
    }
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
                    {ref.url ? (
                      <>
                        {ref.text}{' '}
                        <a
                          href={ref.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-teal-600 hover:text-teal-700 underline"
                        >
                          {ref.url}
                        </a>
                      </>
                    ) : (
                      ref.text
                    )}
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
