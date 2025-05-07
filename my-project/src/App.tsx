import { useState } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Accueil from "./Components/Accueil";
import Propos from "./Components/Propos";
import Services from "./Components/Services";
import Statistique from "./Components/Statistique";
import Temoignage from "./Components/Temoignage";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Inscription from "./Components/Inscription";
import Login from "./Components/Login";

const App = () => {
  type Professeur = {
    nom: string;
    prenoms: string;
    contact: string;
    serie: string;
    niveau: string;
    filiere: string;
    matieres: string;
    commune: string;
    experience: string;
  };

  const [professeurs, setProfesseurs] = useState<Professeur[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // État pour la connexion

  const addProfesseur = (data: Professeur) => {
    setProfesseurs((prevProfesseurs) => [...prevProfesseurs, data]);
  };

  return (
    <div>
      <Navbar />
      <Accueil professeurs={professeurs} />
      <Propos />
      <Services />
      <Statistique />
      <Temoignage />
      <Contact />
      <Footer />

      {/* Ces deux composants pourraient être affichés via des routes plus tard */}
      <Inscription addProfesseur={addProfesseur} />
      <Login setIsLoggedIn={setIsLoggedIn} />
    </div>
  );
};

export default App;
