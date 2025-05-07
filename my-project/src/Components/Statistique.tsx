import { useEffect, useState } from "react";
import reussiImg from "../Images/reussi.jpg"; // Image de l'élément des cartes, mais pas utilisée pour l'image à gauche

const niveaux = [
  {
    titre: "CP au CM1",
    pourcentage: "95%",
    description: "Nos élèves de CP au CM1 réussissent brillamment grâce à un accompagnement ludique et structuré. 95% d'entre eux améliorent leur lecture, écriture et calcul dès les 2 premiers mois.",
  },
  {
    titre: "CM2",
    pourcentage: "93%",
    description: "En CM2, la préparation au CEP est notre priorité. 93% de nos élèves réussissent l'examen avec mention grâce à une méthodologie ciblée.",
  },
  {
    titre: "6ème à 4ème",
    pourcentage: "90%",
    description: "Nos répétiteurs aident à consolider les bases. 90% des élèves progressent de deux points ou plus en moins de 3 mois.",
  },
  {
    titre: "3ème",
    pourcentage: "92%",
    description: "Préparation sérieuse au BEPC. 92% de réussite grâce à un suivi intensif et des révisions personnalisées.",
  },
  {
    titre: "2nd à 1ère",
    pourcentage: "88%",
    description: "Nos répétiteurs accompagnent les apprenants dans toutes les matières. 88% d'amélioration significative en compréhension des notions.",
  },
  {
    titre: "Terminale A, B, C, D",
    pourcentage: "94%",
    description: "Nos meilleurs résultats ! 94% de réussite au BAC, toutes séries confondues. Suivi intensif, conseils méthodologiques et simulations d’examen.",
  },
];

const Statistique = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const element = document.getElementById("statistiques");
      if (element) {
        const top = element.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
          setIsVisible(true);
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div id="statistiques" className="bg-blue-100 py-20 px-6 text-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Section du titre "Nos Statistiques" */}
        <div className="flex justify-center mb-8">
          <h2 className="text-3xl font-bold text-blue-700">Nos Statistiques</h2>
        </div>

        {/* Cartes à droite */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {niveaux.map((niveau, index) => (
            <div
              key={index}
              className={`bg-white p-5 rounded-lg shadow-md flex items-center space-x-4 transform transition-all duration-700 ease-out hover:scale-[1.02] hover:shadow-lg ${
                isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 500}ms` }}
            >
              {/* Image de l'élément */}
              <div className="flex-shrink-0">
                <img
                  src={reussiImg}
                  alt=""
                  className="w-16 h-16 object-contain rounded"
                />
              </div>
              {/* Texte de l'élément */}
              <div className="flex-grow">
                <h3 className="text-lg font-bold text-purple-700">
                  {niveau.titre} – {niveau.pourcentage} de réussite
                </h3>
                <p className="text-sm text-black opacity-100">{niveau.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-px bg-blue-400 my-8"></div>
    </div>
  );
};

export default Statistique;
