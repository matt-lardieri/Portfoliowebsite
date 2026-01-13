import { Calendar, MapPin } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const educationData = [
  {
    id: 1,
    school: 'Case Western Reserve University',
    degree: 'Bachelor of Science in Mechanical and Aerospace Engineering',
    period: 'Freshman - Sophomore Years (2023 - 2025)',
    location: 'Cleveland, OH',
    description: 'Completed foundational engineering coursework including differential calculus, modern physics, dynamics, thermodynamics, and numerical methods.',
    logo: 'Assets/CWRU.jpg',
    achievements: [
      'GPA: 3.85/4.0',
      'Dean\'s List all semesters',
      'Head of Staley House - Residential Housing Association',
    ],
  },
  {
    id: 2,
    school: 'Vanderbilt University',
    degree: 'Bachelor of Science in Mechanical Engineering',
    period: 'Junior - Senior Years (2025 - 2027)',
    location: 'Nashville, TN',
    description: 'Coursework includes: propulsion, fluid mechanics, mechanics, structural analysis, airplane design, gas dynamics, energetic lab, and mechatronics.',
    logo: 'Assets/Vanderbilt_V.jpg',
    achievements: [
      'GPA: 3.5/4.0',
      'Satellite Club Member',
      'ASME'
    ],
  },
];

export function Education() {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-gray-900">Education</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My academic journey across two institutions, building a strong foundation in engineering principles
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {educationData.map((edu) => (
            <div 
              key={edu.id}
              className="bg-gradient-to-br from-gray-100 to-gray-50 p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-white rounded-lg p-2 flex items-center justify-center shadow-sm">
                  <ImageWithFallback 
                    src={edu.logo} 
                    alt={`${edu.school} logo`} 
                    className="w-full h-full object-contain" 
                  />
                </div>
                <div className="flex-1">
                  <h3 className="mb-2 text-gray-900">{edu.school}</h3>
                  <p className="text-green-700 mb-3">{edu.degree}</p>
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4">{edu.description}</p>
              
              <div className="space-y-2">
                {edu.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                    <span className="text-gray-700">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}