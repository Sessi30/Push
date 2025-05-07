import elevesImg from "../Images/eleves.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-blue-100 text-gray-800 px-6 py-16">
      <div className="max-w-6xl mx-auto bg-white p-10 rounded-lg shadow-md grid md:grid-cols-2 gap-10 items-center">
        {/* Texte à gauche */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
            À propos de EduHelper
          </h1>

          <p className="text-lg mb-4 leading-relaxed text-justify">
            Chez <span className="font-semibold text-purple-600">EduHelper</span>, nous croyons que chaque enfant a le potentiel de réussir avec un bon accompagnement. C’est pourquoi nous mettons à votre disposition des répétiteurs <span className="font-semibold">qualifiés, pédagogues et expérimentés</span>.
          </p>

          <p className="text-lg mb-4 leading-relaxed text-justify">
            Tous nos enseignants ont au minimum un <span className="font-semibold">niveau Bac +3</span>, et plusieurs disposent de diplômes avancés dans leur domaine. Qu’il s’agisse de matières scientifiques, littéraires ou linguistiques, nos professeurs sont rigoureusement sélectionnés.
          </p>

          <p className="text-lg mb-4 leading-relaxed text-justify">
            Grâce à notre approche personnalisée, nos <span className="font-semibold text-purple-600">statistiques de satisfaction parentale et de progression des élèves sont les meilleures du secteur</span>. Nous suivons de près chaque accompagnement pour garantir l’excellence.
          </p>

          <p className="text-lg font-medium mt-6 text-center text-purple-700">
          EduHelper: l’éducation avec confiance.
          </p>
        </div>

        {/* Image à droite */}
        <div className="flex justify-center">
          <img
            src={elevesImg}
            alt="Nos professeurs"
            className="w-full max-w-md rounded-lg shadow-md object-cover"
          />
        </div>
      </div>
      {/* Ligne de séparation */}
     <div className="w-full h-px bg-purple-300 my-8"></div>

    </div>
  );
};

export default About;
