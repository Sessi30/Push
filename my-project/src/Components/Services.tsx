import { useEffect, useState } from "react";
import basImg from "../Images/bas.webp";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const element = document.getElementById("services");
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

  const services = [
    {
      title: "Cours à domicile",
      description:
        "Un professeur vient chez vous pour aider votre enfant dans un environnement familier. Idéal pour un suivi personnalisé et rassurant.",
    },
    {
      title: "Cours à distance",
      description:
        "Votre enfant peut suivre ses cours via Internet en toute sécurité. Adapté aux familles éloignées ou avec un emploi du temps chargé.",
    },
    {
      title: "Cours d'informatique et d'anglais",
      description:
        "Nous proposons des formations modernes en informatique (bureautique, secrétariat, les bases de l'informatique…) et en anglais pour renforcer les compétences utiles à l’école et dans la vie.",
    },
    {
      title: "Cours particuliers",
      description:
        "Un professeur pour une matière spécifique. Idéal pour améliorer ses résultats en maths, français, physique-chimie, etc.",
    },
  ];

  return (
    <div id="services" className="bg-blue-100 py-20 px-6 text-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">
          Nos Services
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-lg shadow-md transform transition duration-700 ease-in-out hover:scale-105 hover:shadow-xl ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 500}ms` }}
            >
              <h3 className="text-xl font-semibold text-purple-700 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Séparateur */}
      <div className="w-full h-px bg-purple-300 my-8"></div>

      {/* Section Statistiques */}
      <div className="relative w-full h-[400px] overflow-hidden group">
        <img
          src={basImg}
          alt="Statistiques"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-purple-500 space-y-4 text-center">
          <h2 className="text-5xl font-bold opacity-0 translate-y-10 group-hover:translate-y-0 group-hover:opacity-100 transition duration-700 delay-100">
             Nos réussites
          </h2>
          <p className="text-lg opacity-0 translate-y-10 group-hover:translate-y-0 group-hover:opacity-100 transition duration-700 delay-300">
            + élèves formés
          </p>
          <p className="text-lg opacity-0 translate-y-10 group-hover:translate-y-0 group-hover:opacity-100 transition duration-700 delay-500">
            95% de satisfaction
          </p>
          <p className="text-lg opacity-0 translate-y-10 group-hover:translate-y-0 group-hover:opacity-100 transition duration-700 delay-700">
            Présents dans plusieurs villes
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
