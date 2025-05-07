
const Footer = () => {
  const scrollToSection = (id: string): void => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer  className="relative text-white py-20 bg-blue-300 bg-center ">
      <div className="bg-opacity-60 py-10 px-6 md:px-20">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Colonne gauche */}
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-4">Coordonnées</h3>
            <p>📍 Abomey-Calavi, Bénin</p>
            <p>📧 estherdjossouakan@gmail.com</p>
            <p>📞 +229 01 91818521</p>
          </div>

          {/* Colonne droite */}
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-4">Navigation</h3>
            <ul className="space-y-2 cursor-pointer">
              <li className="hover:underline" onClick={() => scrollToSection("accueil")}>Accueil</li>
              <li className="hover:underline" onClick={() => scrollToSection("services")}>Services</li>
              <li className="hover:underline" onClick={() => scrollToSection("inscription")}>Inscription</li>
              <li className="hover:underline" onClick={() => scrollToSection("se-connecter")}>Se connecter</li>
              <li className="hover:underline" onClick={() => scrollToSection("a-propos")}>À propos</li>
              <li className="hover:underline" onClick={() => scrollToSection("professeurs")}>Voir nos professeurs</li>
            </ul>
            <button
              onClick={scrollToTop}
              className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-purple-600 transition"
            >
              Retourner en haut
            </button>
          </div>
        </div>

        {/* Bas du footer */}
        <div className="mt-10 border-t border-black pt-6 text-center">
          <div className="flex justify-center items-center space-x-2 mb-2">
            <span className="text-lg font-bold">EduHelper</span>
          </div>
          <p className="text-sm text-black">
            Merci de votre confiance. Nous nous engageons à vous fournir un service de qualité, chaque jour.
          </p>
          <p>Copyright © {new Date().getFullYear()} -  Tous droits réservés <br />estherdjossouakan@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
