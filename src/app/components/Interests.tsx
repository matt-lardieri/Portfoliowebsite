import { Heart, Mountain, Music, Book, Camera } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const interestsData = [
  {
    id: 1,
    title: 'Golfing',
    icon: Mountain,
    description: 'I am an avid golfer, with a handicap index of 1.4 and a prior starter on the high school New Jersey State championship team. I enjoy traveling the US to play some of the best and hardest courses with friends and family. Golf is such a hard game mentally that it forces you to think critically and have incredible patience and determination to succeed.',
    image: 'https://images.unsplash.com/photo-1595368062405-e4d7840cba14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWtpbmclMjBtb3VudGFpbnMlMjBhZHZlbnR1cmV8ZW58MXx8fHwxNzY2NTEwMzY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 2,
    title: 'Music',
    icon: Music,
    description: 'I enjoy listening to all sorts of hip-hop and pop music, my favorite artists include: Drake, Post Malone, Don Toliver, Travis Scott, Migos, The Chainsmokers, Coldplay, and more. I particularly enjoy the creative lyrics and beats that modern songs are composed of.',
    image: 'https://images.unsplash.com/photo-1760413209602-bb726f8830f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGd1aXRhciUyMGhvYmJ5fGVufDF8fHx8MTc2NjUxMDM2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 3,
    title: 'Basketball',
    icon: Book,
    description: 'Basketball has been a huge part of my life since birth. As a varsity basketball player for 4 years of high school in NJ, we played top competition that required teamwork, leadership, and discipline to succeed. The San Antonio Spurs are my family and my favorite NBA team',
    image: 'https://images.unsplash.com/photo-1706195546790-688005392bf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFkaW5nJTIwYm9va3MlMjBjb2ZmZWV8ZW58MXx8fHwxNzY2NTEwMzY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 4,
    title: 'TBD',
    icon: Camera,
    description: 'TBD.',
    image: 'https://images.unsplash.com/photo-1668037349467-f1b07bb7c442?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoeSUyMGNhbWVyYSUyMHRyYXZlbHxlbnwxfHx8fDE3NjY1MTAzNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
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
            When I'm not designing systems or analyzing data, here's what keeps me inspired and balanced
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
            I believe that diverse interests make me a better engineer. Each hobby teaches me something different—
            whether it's patience, creativity, attention to detail, or the ability to see problems from new angles. 
            These experiences outside the classroom help me bring fresh perspectives to engineering challenges.
          </p>
        </div>
      </div>
    </section>
  );
}