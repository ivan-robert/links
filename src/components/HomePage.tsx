import React from 'react';
import { useNavigate } from 'react-router';
import { ArrowRight, Code, Camera, Dumbbell, Monitor, Star, Zap } from 'lucide-react';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  // Configuration facile à modifier
  const profile = {
    name: "Ivan",
    description: "Développeur, entrepreneur passionné de création.",
    interests: [
      { 
        icon: Code, 
        text: "Créateur de contenu",
        subtitle: "1500 followers"
      },
      { 
        icon: Camera, 
        text: "Passionné de tech",
        subtitle: "Création d'applications et IA"
      },
      { 
        icon: Dumbbell, 
        text: "Sportif",
        subtitle: "Si je ne suis pas en ligne, je suis en train de détruire mon corps"
      }
    ]
  };

  // Éléments décoratifs pour la grille de fond
  const backgroundElements = [
    { icon: Monitor, position: 'top-20 left-16', rotation: 'rotate-12', size: 'w-8 h-8', opacity: 'opacity-10' },
    { icon: Star, position: 'top-32 right-20', rotation: '-rotate-45', size: 'w-6 h-6', opacity: 'opacity-15' },
    { icon: Zap, position: 'top-48 left-32', rotation: 'rotate-45', size: 'w-7 h-7', opacity: 'opacity-8' },
    { icon: Monitor, position: 'top-64 right-16', rotation: '-rotate-12', size: 'w-9 h-9', opacity: 'opacity-12' },
    { icon: Star, position: 'bottom-32 left-20', rotation: 'rotate-90', size: 'w-5 h-5', opacity: 'opacity-20' },
    { icon: Dumbbell, position: 'bottom-48 right-32', rotation: '-rotate-30', size: 'w-8 h-8', opacity: 'opacity-10' },
    { icon: Zap, position: 'bottom-64 left-40', rotation: 'rotate-180', size: 'w-6 h-6', opacity: 'opacity-15' },
    { icon: Star, position: 'top-40 left-1/2', rotation: 'rotate-45', size: 'w-4 h-4', opacity: 'opacity-8' },
    { icon: Monitor, position: 'bottom-20 right-1/3', rotation: 'rotate-30', size: 'w-7 h-7', opacity: 'opacity-12' },
    { icon: Dumbbell, position: 'top-56 right-1/4', rotation: '-rotate-60', size: 'w-6 h-6', opacity: 'opacity-10' },
    { icon: Star, position: 'bottom-40 left-1/3', rotation: 'rotate-12', size: 'w-5 h-5', opacity: 'opacity-18' },
    { icon: Zap, position: 'top-72 left-1/4', rotation: '-rotate-90', size: 'w-8 h-8', opacity: 'opacity-8' },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: 'white' }}>
      {/* Grille de fond avec éléments décoratifs */}
      <div className="absolute inset-0 pointer-events-none">
        {backgroundElements.map((element, index) => (
          <div
            key={index}
            className={`absolute ${element.position} ${element.rotation} ${element.opacity}`}
            style={{ color: '#481D24' }}
          >
            <element.icon className={element.size} />
          </div>
        ))}
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center p-6">
        <div className="max-w-2xl w-full text-center">
          {/* Photo de profil */}
          <div className="mb-8 relative">
            <div 
              className="w-40 h-40 mx-auto rounded-full flex items-center justify-center text-white text-5xl font-bold shadow-2xl overflow-hidden"
              style={{ backgroundColor: '#C5283D' }}
            >
              <img 
                src="/me.png" 
                alt="Photo de profil" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Si l'image n'existe pas, afficher les lettres
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="w-full h-full flex items-center justify-center" style={{ display: 'none' }}>
                {profile.name.split(' ').map(n => n[0]).join('')}
              </div>
            </div>
            {/* Cercles décoratifs autour de la photo */}
            <div 
              className="absolute -top-4 -right-4 w-8 h-8 rounded-full opacity-80"
              style={{ backgroundColor: '#255F85' }}
            ></div>
            <div 
              className="absolute -bottom-2 -left-2 w-6 h-6 rounded-full opacity-60"
              style={{ backgroundColor: '#E9724C' }}
            ></div>
          </div>

          {/* Nom */}
          <h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{ color: '#481D24' }}
          >
            {profile.name}
          </h1>

          {/* Description */}
          <div 
            className="rounded-3xl p-8 mb-8 shadow-xl border border-white/20"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
          >
            <p 
              className="text-lg md:text-xl leading-relaxed font-medium"
              style={{ color: '#481D24' }}
            >
              {profile.description}
            </p>
          </div>

          {/* Points d'intérêt */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {profile.interests.map((interest, index) => (
              <div
                key={index}
                className="rounded-2xl p-6 shadow-lg border border-white/30 hover:shadow-xl transition-shadow duration-300"
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  transform: `rotate(${index % 2 === 0 ? '2deg' : '-2deg'})`
                }}
              >
                <div className="flex flex-col items-center space-y-3">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                    style={{ backgroundColor: '#C5283D' }}
                  >
                    <interest.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-center">
                    <span 
                      className="font-semibold block mb-1"
                      style={{ color: '#481D24' }}
                    >
                      {interest.text}
                    </span>
                    <span 
                      className="text-sm"
                      style={{ color: '#481D24', opacity: 0.7 }}
                    >
                      {interest.subtitle}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bouton Liens */}
          <div className="relative">
            <button
              onClick={() => navigate('/links')}
              className="text-white py-4 px-12 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3 mx-auto group relative overflow-hidden"
              style={{ backgroundColor: '#255F85' }}
            >
              <span className="relative z-10">Mes Liens</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            {/* Particules autour du bouton */}
            <div 
              className="absolute -top-2 -right-2 w-3 h-3 rounded-full opacity-80"
              style={{ backgroundColor: '#E9724C' }}
            ></div>
            <div 
              className="absolute -bottom-1 -left-1 w-2 h-2 rounded-full opacity-60"
              style={{ backgroundColor: '#C5283D' }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;