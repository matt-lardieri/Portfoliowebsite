import { Mail, Linkedin, Github, Phone } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-gray-900">Get In Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I'm always open to discussing new projects, opportunities, or collaborations
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <a 
              href="mailto:matthew.d.lardieri@vanderbilt.edu"
              className="flex items-center gap-4 p-8 bg-gradient-to-br from-gray-100 to-gray-50 rounded-xl border border-gray-200 hover:shadow-lg transition-all group"
            >
              <div className="p-3 bg-green-100 rounded-lg group-hover:bg-green-700 transition-colors">
                <Mail className="w-6 h-6 text-green-700 group-hover:text-white transition-colors" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-gray-900 mb-1">Email</p>
                <p className="text-gray-600 break-words">matthew.d.lardieri@vanderbilt.edu</p>
              </div>
            </a>

            <a 
              href="tel:+15551234567"
              className="flex items-center gap-4 p-8 bg-gradient-to-br from-gray-100 to-gray-50 rounded-xl border border-gray-200 hover:shadow-lg transition-all group"
            >
              <div className="p-3 bg-green-100 rounded-lg group-hover:bg-green-700 transition-colors">
                <Phone className="w-6 h-6 text-green-700 group-hover:text-white transition-colors" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-gray-900 mb-1">Phone</p>
                <p className="text-gray-600">908-581-3762</p>
              </div>
            </a>

            <a 
              href="https://www.linkedin.com/in/matthew-lardieri-5b3334316/n"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-8 bg-gradient-to-br from-gray-100 to-gray-50 rounded-xl border border-gray-200 hover:shadow-lg transition-all group"
            >
              <div className="p-3 bg-green-100 rounded-lg group-hover:bg-green-700 transition-colors">
                <Linkedin className="w-6 h-6 text-green-700 group-hover:text-white transition-colors" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-gray-900 mb-1">LinkedIn</p>
                <p className="text-gray-600">/in/matthewlardieri</p>
              </div>
            </a>

            <a 
              href="https://github.com/TBD"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-8 bg-gradient-to-br from-gray-100 to-gray-50 rounded-xl border border-gray-200 hover:shadow-lg transition-all group"
            >
              <div className="p-3 bg-green-100 rounded-lg group-hover:bg-green-700 transition-colors">
                <Github className="w-6 h-6 text-green-700 group-hover:text-white transition-colors" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-gray-900 mb-1">GitHub</p>
                <p className="text-gray-600">/matthewlardieri</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}