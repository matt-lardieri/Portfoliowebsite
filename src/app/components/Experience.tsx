import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const experienceData = [
  {
    id: 1,
    company: 'Raritan Valley Country Club',
    position: 'Guest Service Attendant and Caddie',
    period: 'May 2019 - Aug 2024',
    location: 'Bridgewater, NJ',
    description: 'As a GSA, I prepared and stocked golf carts with essential items such as tees, folded towels, water, and ice. I also assisted with picking the driving range, cleaning the golf balls, and maintaing the function and cleanliness of the range. I aided in the organization and scheduling of tournaments such as matching members together and organizing bags for easy deployment onto the carts. As a caddie, I provided expert level services for high stakes tournaments such as the Club Championship and the NJ Seniors Association.',
    logo: 'Assets/RVCC.jpg',
    skillsLearned: [
      'Golf Course Operations',
      'Leadership and Teamwork',
      'Hard Work and Time Management',
    ],
  },
  {
    id: 2,
    company: 
    "Vanderbilt University - Dr. Xiaoguang Dong's Research Lab",
    position: 'Research Lab Assistant',
    period: 'Jan 2026 - May 2026',
    location: 'Nashville, TN',
    description: 'As a research lab assistant, I supported Dr. Dong\'s Mechanical Engineering Medical Soft Robotics research team in conducting experiments. I worked with a masters student Zhongming Lyu and assisted in experimental testing and validation of an airway mucus-cleaning catheter with a needle for cystic fibrosis biopsy. I supported the prototype evaluation of the rotational soft-ciliary suction mechanism using airway models and ex vivo lung tissue, and helped refine biopsy tools (hook and micro-blade) to enable safe tissue extraction with minimal airway damage. I will also help contribute towards the completion of figures and writing of Zhongming\'s paper for publication.',
    logo: 'Assets/Vanderbilt_V.jpg',
    image: 'Assets/CATH.jpg',
    skillsLearned: [
      'Soft Fabrication',
      '3D Printing',
      'Prototyping and Testing',
      'Technical Writing',
      'Research Presentations',
    ],
  },
  {
    id: 3,
    company: 'Future Opportunity',
    position: 'Mechanical Engineering Intern',
    period: 'Start Date - End Date',
    location: 'City, State',
    description: 'TBD',
    logo: 'Assets/company3.jpg',
    skillsLearned: [
      'Skill 1',
      'Skill 2',
      'Skill 3',
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-gray-900">Professional Experience</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My professional journey and the skills I've developed through hands on experience and research.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experienceData.map((exp) => (
            <div 
              key={exp.id}
              className="bg-gradient-to-br from-gray-100 to-gray-50 p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
            >
              {/* Header with Logo */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-white rounded-lg p-2 flex items-center justify-center shadow-sm flex-shrink-0">
                  <ImageWithFallback 
                    src={exp.logo} 
                    alt={`${exp.company} logo`} 
                    className="w-full h-full object-contain" 
                  />
                </div>
                <div className="flex-1">
                  <h3 className="mb-2 text-gray-900">{exp.company}</h3>
                  <p className="text-blue-700 font-semibold mb-3">{exp.position}</p>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Role and Involvement Description */}
              <div className="mb-6 pb-6 border-b border-gray-200">
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Role & Involvement</h4>
                <p className="text-gray-600 leading-relaxed">{exp.description}</p>
              </div>

              {/* Skills Learned Section */}
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Skills Learned</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.skillsLearned.map((skill, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Image Section for Lab */}
              {exp.image && (
                <div className="mt-6 rounded-lg overflow-hidden bg-white border border-gray-200">
                  <div className="aspect-video">
                    <ImageWithFallback 
                      src={exp.image}
                      alt={`${exp.company} work image`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
