import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-50/90 backdrop-blur-sm z-50 border-b border-gray-200">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-gray-900">Matthew Lardieri</h1>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-gray-900 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('education')} className="text-gray-600 hover:text-gray-900 transition-colors">
              Education
            </button>
            <button onClick={() => scrollToSection('experience')} className="text-gray-600 hover:text-gray-900 transition-colors">
              Experience
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-600 hover:text-gray-900 transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('interests')} className="text-gray-600 hover:text-gray-900 transition-colors">
              Interests
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-gray-900 transition-colors">
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-gray-900 transition-colors text-left">
                About
              </button>
              <button onClick={() => scrollToSection('education')} className="text-gray-600 hover:text-gray-900 transition-colors text-left">
                Education
              </button>
              <button onClick={() => scrollToSection('experience')} className="text-gray-600 hover:text-gray-900 transition-colors text-left">
                Experience
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-600 hover:text-gray-900 transition-colors text-left">
                Projects
              </button>
              <button onClick={() => scrollToSection('interests')} className="text-gray-600 hover:text-gray-900 transition-colors text-left">
                Interests
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-gray-900 transition-colors text-left">
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}