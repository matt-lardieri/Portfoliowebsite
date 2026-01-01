import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-900 to-green-800 pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="mb-4 text-white">
              Mechanical & Aerospace Engineering Student
            </h1>
            <h2 className="mb-6 text-green-300">
              Matthew Lardieri
            </h2>
            <p className="mb-8 text-green-100">
              I'm a mechanical engineering student with a passion to make a real impact in 
              the field of mechanical and aerospace engineering. I enjoy turning ideas into 
              reality by combining my hands-on manufacturing experience with CAD design to 
              build practical and creative systems.
            </p>
            <div className="flex gap-4">
              <a 
                href="#projects" 
                className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                View Projects
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 border border-green-300 text-green-300 rounded-lg hover:bg-green-800 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl bg-gray-200">
              <img 
                src="https://drive.google.com/file/d/1ljIXTREhgoo6lTWW20p9TnZI9euSVcwK/view?usp=sharing"
                alt="Matthew Lardieri"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (target.src.includes('Bjqbb4R.jpg')) {
                    target.src = 'https://drive.google.com/file/d/1ljIXTREhgoo6lTWW20p9TnZI9euSVcwK/view?usp=sharing';
                  } else if (target.src.includes('Bjqbb4R.png')) {
                    target.src = 'https://drive.google.com/file/d/1ljIXTREhgoo6lTWW20p9TnZI9euSVcwK/view?usp=sharing';
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}