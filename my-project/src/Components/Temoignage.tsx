import { useState } from "react";

// Exemple de témoignages
const temoignages = [
  {
    nom: "Maman Amos",
    contenu: "L'accompagnement a été incroyable! Grâce à ce programme, mes enfants ont rapidement amélioré leurs compétences.",
  },
  {
    nom: "Marie Eleve en Tle C",
    contenu: "Une méthode pédagogique innovante et des résultats impressionnants en peu de temps. Je recommande vivement!",
  },
  {
    nom: "Paul DOSSA",
    contenu: "Le suivi personnalisé a fait toute la différence. Mes résultats sont bien au-dessus de mes attentes.",
  },
  {
    nom: "Claire DJOSSOU",
    contenu: "Un programme de qualité avec des formateurs expérimentés. J'ai vu une nette amélioration de mes notes.",
  },
];

const CarrouselTemoignages = () => {
  const [index, setIndex] = useState(0);

  // Fonction pour aller au témoignage précédent
  const prevTemoignage = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? temoignages.length - 1 : prevIndex - 1));
  };

  // Fonction pour aller au témoignage suivant
  const nextTemoignage = () => {
    setIndex((prevIndex) => (prevIndex === temoignages.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="bg-blue-300 py-20 px-6 text-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-purple-700 text-center mb-12">Témoignages</h2>

        <div className="relative">
          {/* Carrousel */}
          <div className="relative overflow-hidden rounded-lg">
            <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${index * 100}%)` }}>
              {temoignages.map((temoignage, idx) => (
                <div key={idx} className="w-full flex-shrink-0 px-4">
                  <div className="bg-yellow-50 p-6 rounded-lg shadow-lg">
                    <p className="text-xl font-medium text-gray-800 mb-4">{temoignage.contenu}</p>
                    <p className="text-sm text-gray-600">- {temoignage.nom}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Boutons de navigation */}
            <button
              onClick={prevTemoignage}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-purple-700 p-2 rounded-full shadow-lg hover:bg-gray-200"
            >
              &#10094;
            </button>
            <button
              onClick={nextTemoignage}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-purple-700 p-2 rounded-full shadow-lg hover:bg-gray-200"
            >
              &#10095;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarrouselTemoignages;
