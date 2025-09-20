import React from 'react';
import { useNavigate } from 'react-router';
import { FaYoutube, FaInstagram } from 'react-icons/fa';
import { ArrowLeft, Mail, Car } from 'lucide-react';
import { SiX } from 'react-icons/si';

const LinksPage: React.FC = () => {
  const navigate = useNavigate();

  const links = [
    {
      name: "DriveFluent",
      subtitle: "Ma dernière application",
      url: "https://drivefluent.com",
      icon: Car,
      color: "from-orange-500 to-orange-600"
    },
    {
      name: "Instagram",
      subtitle: "Contenu entrepreneuriat, je poste tous les jours",
      url: "https://www.instagram.com/ivanos.mp4/",
      icon: FaInstagram,
      color: "from-pink-500 to-purple-600"
    },
    {
      name: "YouTube",
      subtitle: "Vidéos et défis axés sur l'entrepreneuriat",
      url: "https://www.youtube.com/@ivanos.mp4",
      icon: FaYoutube,
      color: "from-red-500 to-red-600"
    },
    {
      name: "X",
      subtitle: "Shower thoughts et actus",
      url: "https://x.com/@Discipline_pure",
      icon: SiX,
      color: "from-sky-400 to-sky-500"
    },
    {
      name: "Compte photo",
      subtitle: "Contenu sur la photographie",
      url: "https://instagram.com/ivan.des.photos/",
      icon: FaInstagram,
      color: "from-pink-500 to-purple-600"
    },
    {
      name: "Contact",
      subtitle: "Écrivez-moi un message",
      url: "mailto:ivan@betterwithpat.com",
      icon: Mail,
      color: "from-gray-600 to-gray-700"
    }
  ];


  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Mes Liens</h1>
        </div>

        {/* Liste des liens */}
        <div className="space-y-4">
       
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 group block"
            >
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${link.color} flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-200`}>
                  <link.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="font-semibold text-gray-900 group-hover:text-gray-700 transition-colors duration-200">
                    {link.name}
                  </h3>
                  <p className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-200">
                    {link.subtitle}
                  </p>
                </div>
                <div className="text-gray-400 group-hover:text-gray-600 transition-colors duration-200">
                  <ArrowLeft className="w-4 h-4 rotate-180" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Footer avec bouton retour */}
        <div className="text-center mt-8 space-y-4">
          <p className="text-gray-500 text-sm">
            Cliquez sur un lien pour l'ouvrir
          </p>
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 mx-auto"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">À propos de moi</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LinksPage;
