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
      github: '#',
      demo: '#',
    },
  },
  {
    id: 3,
    title: 'Linkage Design & Kinematic Analysis',
    description: 'Designed and fabricated planar linkage mechanisms in the software linkages to satisfy motion constraints (such as Grashof) and combining kinematic analysis with CAD modeling and physical prototyping.',
    image: 'Assets/Linkage.jpg',
    technologies: ['Wood Fabrication', 'SolidWorks', 'Linkages', 'Mechanical Analysis','Technical Writing'],
    links: {
      github: '#',
      demo: '#',
    },
  },
  {
    id: 4,
    title: 'Drone Project (Planned / In Progress)',
    description: 'Designed and analyzed normalized rotating blade geometries using SolidWorks Flow Simulation and structural FEA to evaluate aerodynamic performance, efficiency, and structural limits. Integrated MATLAB RK4 time-integration to model rotational dynamics and compare torque, efficiency, and safety factors across materials and operating conditions.',
    image: 'Assets/Drone.jpg',
    technologies: ['Heat Transfer', 'CFD Analysis', 'Technical Documentation'],
    links: {
      github: '#',
      demo: '#',
    },
  },
  {
    id: 5,
    title: 'TBD',
    description: 'TBD.',
    image: 'TBD',
    technologies: ['TBD'],
    links: {
      github: '#',
      demo: '#',
    },
  },
  {
    id: 6,
    title: 'TBD',
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