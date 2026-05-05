import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projectsData = [
  {
    id: 1,
    title: '1985 Caprice Wagon Restoration (Ongoing)',
    description: 'Collaborated with two peers and a university fabrication shop to restore a 1985 Chevrolet Caprice Classic Wagon. Contributed to a range of mechanical and cosmetic repairs including brake replacement, panel restoration, carpet reupholstery, and partial transmission repairs. Performed engine repairs involving welding, block stripping, and minor electrical rewiring.',
    image: 'Assets/CarProject.jpg',
    technologies: ['Welding', 'Sheet Metal', 'Vehicle Research', 'Mechanical Repairs'],
    links: {
      github: '#',
      demo: '#',
    },
  },
  {
    id: 2,
    title: 'Automated Cam-Follower System',
    description: 'Designed and prototyped a cam-follower system for automated lightbulb filament creation using Dynacam, MATLAB, and SolidWorks. Generated SVAJ profiles, solved boundary conditions, and built a motorized plywood prototype via laser cutting and 3D printing.',
    image: 'Assets/CamFollower.jpg',
    technologies: ['SolidWorks', 'Dynacam', 'Wood Fabrication', '3D Printing', 'MATLAB','Motion Profile','Stress and Mesh Analysis','Poster Presentation'],
    links: {
      demo: 'https://vanderbilt.box.com/s/9w9mria0ijx8af2ifgwzcjz04qimka1q',
    },
  },
  {
    id: 3,
    title: 'Linkage Design & Kinematic Analysis',
    description: 'Designed and fabricated planar linkage mechanisms in the software linkages to satisfy motion constraints (such as Grashof) and combining kinematic analysis with CAD modeling and physical prototyping.',
    image: 'Assets/Linkage.jpg',
    technologies: ['Wood Fabrication', 'SolidWorks', 'Linkages', 'Mechanical Analysis','Technical Writing'],
    links: {
    },
  },
  {
    id: 4,
    title: 'Satellite Vibration Response System',
    description: 'I designed and built a 3D‑printed hexagonal satellite model that deploys and retracts theoretical solar panels using servo‑driven hinges controlled through Arduino Uno C++ code. The system includes a vibration‑inducing DC motor with an off‑center mass, a stepper‑motor‑driven rotating platform to simulate orbital motion, and integrated sensors such as a potentiometer and MCB accelerometer for monitoring acceleration and stability. An LCD module displays real‑time operational status, allowing the satellite to react to disturbances the way real spacecraft manage environmental forces. This project demonstrates how satellites sense their surroundings and autonomously adjust mechanisms to maintain stability and safety.',
    image: 'Assets/Sat.jpeg',
    technologies: ['Circuit Design', 'C++ Coding', 'FEA Analysis', 'Accelerometer', 'Mechatronics', 'Sensors', 'LCD Display', 'BLDC Motors'],
    links: {
      github: 'https://github.com/matt-lardieri/Satellite-Vibration-Response-System',
      demo: 'https://vanderbilt.box.com/s/ynrnelwmh3qp81ww1jkadmbgffsmsftm',
    },
  },
  {
    id: 5,
    title: 'Airway Sensing Catheter',
    description: ': Built a soft airway mucus cleaning catheter unit with integrated fiber optic wires for sensing and ablation and a working channel for biopsy / liquid delivery. Contributied as an assistant author to the paper "Helical‑Pump–Enabled Catheter for Efficient Airway Mucus Clearance and Tissue Biopsy".',
    image: 'Assets/Cathe.jpeg',
    technologies: ['Structural Analysis', 'Soft Fabrication', '3D Printing', 'Optical Fibers', 'Micro-Assembly'],
    links: {
      demo: 'https://vanderbilt.box.com/s/mor9xecnjfsnf1bsh0klz9vl41xkjq3z,
    },
  },
  {
    id: 6,
    title: 'Senior Capstone Project',
    description: 'TBD.',
    image: 'TBD',
    technologies: ['TBD'],
    links: {
      github: '#',
      demo: '#',
    },
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-green-50 to-green-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-gray-900">Featured Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A selection of my engineering projects demonstrating skills in design, analysis, and implementation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div 
              key={project.id}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="aspect-video overflow-hidden">
                <ImageWithFallback 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="mb-3 text-gray-900">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a 
                    href={project.links.github}
                    className="flex items-center gap-2 text-gray-600 hover:text-green-700 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span>Code</span>
                  </a>
                  <a 
                    href={project.links.demo}
                    className="flex items-center gap-2 text-gray-600 hover:text-green-700 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Details</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
