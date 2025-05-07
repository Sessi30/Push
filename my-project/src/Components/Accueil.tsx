import { useEffect, useState } from 'react';
import img  from "../Images/enseignant.webp";
import ProImg  from"../Images/Pro.png";
import femmeImg from "../Images/femme.jpg";
import garconImg from"../Images/garcon.jpg";




interface Professeur {
  nom: string;
  prenoms: string;
  contact: string;
  serie: string;
  niveau: string;
  filiere: string;
  matieres: string;
  commune: string;
  experience: string;
}




const Accueil = ({ professeurs }: { professeurs: Professeur[] }) => {
  const [animate, setAnimate] = useState(false);
  const [showProfesseurs, setShowProfesseurs] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 1000);
  }, []);

  const afficherProfesseurs = () => {
    setShowProfesseurs(true);
    // Pour faire défiler vers la section une fois visible
    setTimeout(() => {
      const section = document.getElementById('professeurs');
      section?.scrollIntoView({ behavior: 'smooth' });
    }, 100); // on attend un peu que la section soit rendue
  };

  return (
    <div id='accueil' className="w-screen text-white bg-black bg-opacity-50 backdrop-blur-md p-8 rounded-xl">
      {/* Section accueil avec image */}
      <div
        className="h-screen bg-cover bg-center relative"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 space-y-6">
          <h1
            className={`text-4xl md:text-5xl font-bold transition-all duration-500 ${
              animate ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            <span className="text-purple-500">Bienvenue sur EduHelper!</span> <br />
            Trouvez le Répétiteur <br /> Parfait pour Votre Enfant
          </h1>

          <p
            className={`text-md md:text-lg max-w-xl transition-opacity duration-1500 delay-500 ${
              animate ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Une plateforme simple pour aider votre enfant à réussir <br />
            avec les meilleurs professeurs particuliers.
          </p>

          <button
            onClick={afficherProfesseurs}
            className={`mt-16 bg-blue-600 text-white-700 font-semibold px-6 py-3 rounded-lg hover:bg-purple-600 transition-opacity duration-1500 delay-1000 ${
              animate ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Voir nos professeurs
          </button>
        </div>
      </div>

      {/* Section des professeurs affichée uniquement après clic */}
      {showProfesseurs && (
        <div
          id="professeurs"
          className="bg-white text-gray-800 py-16 px-8 animate-fade-in"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Nos Professeurs</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-100 p-6 rounded-lg shadow-lg text-center">
                <img src={ProImg} alt=""  className="w-32 h-32 mx-auto rounded-full object-cover mb-4" />
              <h3 className="text-xl font-semibold mb-2">Mme Aissatou Diallo</h3>
              <p>Matière : Mathématiques</p>
              <p>Expérience : 5 ans vit à Abomey-Calavi</p>
            </div>

            <div className="bg-blue-100 p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-2">M. Mamadou Bah</h3>
              <img src={garconImg} alt=""  className="w-32 h-32 mx-auto rounded-full object-cover mb-4" />
              <p>Matière : Physique-Chimie</p>
              <p>Expérience : 3 ans vit à Pahou</p>
            </div>

            <div className="bg-blue-100 p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-2">Mme Fatou Camara</h3>
              <img src={femmeImg} alt=""  className="w-32 h-32 mx-auto rounded-full object-cover mb-4" />
              <p>Matière : Français</p>
              <p>Expérience : 4 ans vit à Ouidah</p>
            </div>
            <div className="bg-blue-100 p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-2">Mme Fatou Camara</h3>
              <img src={ProImg} alt=""  className="w-32 h-32 mx-auto rounded-full object-cover mb-4" />
              <p>Cours primaire</p>
              <p>Expérience : 4 ans vit à Ouidah</p>
            </div>
            <div className="bg-blue-100 p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-2">Mme Fatou Camara</h3>
              <img src={garconImg} alt=""  className="w-32 h-32 mx-auto rounded-full object-cover mb-4" />
              <p>Matière : Anglais</p>
              <p>Expérience : 4 ans vit à Dassa</p>
            </div>
            <div className="bg-blue-100 p-6 rounded-lg shadow-lg text-center">
            <img src={femmeImg} alt=""  className="w-32 h-32 mx-auto rounded-full object-cover mb-4" />
              <h3 className="text-xl font-semibold mb-2">Mme Fatou Camara</h3>
              <p>Cours primaire</p>
              <p>Expérience : 4 ans vit à Cotonou</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Accueil;
