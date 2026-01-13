import { Heart, Mountain, Music, Book, Camera } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const interestsData = [
  {
    id: 1,
    title: 'Golfing',
    icon: Mountain,
    description: 'I am an avid golfer, with a handicap index of 1.4 and a prior starter on the high school New Jersey State championship team. I enjoy traveling the US to play some of the best and hardest courses with friends and family. Golf is such a hard game mentally that it forces you to think critically and have incredible patience and determination to succeed.',
    image: 'Assets/Golf.jpeg',
  },
  {
    id: 2,
    title: 'Music',
    icon: Music,
    description: 'I enjoy listening to all sorts of hip-hop and pop music, my favorite artists include: Drake, Post Malone, Don Toliver, Travis Scott, Migos, The Chainsmokers, Coldplay, and other artists such as C418 for less distracting music. I particularly enjoy the creative lyrics and beats that modern songs are composed of.',
    image: 'Assets/Music.jpg',
  },
  {
    id: 3,
    title: 'Basketball',
    icon: Book,
    description: 'Basketball has been a huge part of my life since birth. As a varsity basketball player for 4 years of high school in NJ, we played top competition that required teamwork, leadership, and discipline to succeed. The San Antonio Spurs are my favorite NBA team',
    image: 'Assets/Basketball.jpg',
  },
  {
    id: 4,
    title: 'Xbox Video Games',
    icon: Camera,
    description: 'Gaming on Xbox has been a hobby of mine for over a decade. I primarily focuse on the games Rocket League, Minecraft, and GTA. In Minecraft, I develop my engineering intuition through large projects and Redstone logic systems such as planning and execution. Rocket League has a ton of applied physics and mathematics, including collision dynamics, angles of attack, and aerial control at the highest competitive level in any video game on the market. And GTA is enjoyed recreationally, with particular interest in vehicle design and their interpretation of futuristic aircraft concepts.',
    image: 'Assets/XBOX.jpg',
  },
];

export function Interests() {
  return (
    <section id="interests" className="py-20 bg-gradient-to-br from-green-50 to-green-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="w-6 h-6 text-green-700" />
            <h2 className="text-gray-900">Beyond Engineering</h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            When I'm not designing systems or analyzing data, here's what keeps me balanced
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {interestsData.map((interest) => {
            const IconComponent = interest.icon;
            return (
              <div 
                key={interest.id}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <ImageWithFallback 
                    src={interest.image}
                    alt={interest.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <IconComponent className="w-5 h-5 text-green-700" />
                    </div>
                    <h3 className="text-gray-900">{interest.title}</h3>
                  </div>
                  <p className="text-gray-600">{interest.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="max-w-3xl mx-auto mt-12 p-8 bg-gray-100 rounded-xl shadow-md">
          <p className="text-gray-700 text-center">
            In my daily life, I live by the belief that the greater the difficulty of the task, the greater the glory. 
            Embracing challenging classes while maintaining strong grades and work ethic has not only prepared me 
            academically, but also the discipline I know will carry into my professional career.

          </p>
        </div>
      </div>
    </section>
  );
}