import React, { useState } from "react";

interface InscriptionProps {
  addProfesseur: (data: Professeur) => void;
}

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
  email: string;
  motDePasse: string;
}

const Inscription: React.FC<InscriptionProps> = ({ addProfesseur }) => {
  const [nom, setNom] = useState("");
  const [prenoms, setPrenoms] = useState("");
  const [contact, setContact] = useState("");
  const [serie, setSerie] = useState("");
  const [niveau, setNiveau] = useState("Licence 1");
  const [filiere, setFiliere] = useState("");
  const [matieres, setMatieres] = useState("");
  const [commune, setCommune] = useState("");
  const [experience, setExperience] = useState("");
  const [email, setEmail] = useState("");
  const [motDePasse, setMotDePasse] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newProfesseur: Professeur = {
      nom,
      prenoms,
      contact,
      serie,
      niveau,
      filiere,
      matieres,
      commune,
      experience,
      email,
      motDePasse,
    };

    const anciens = JSON.parse(localStorage.getItem("professeurs") || "[]");
    const tous = [...anciens, newProfesseur];
    localStorage.setItem("professeurs", JSON.stringify(tous));

    addProfesseur(newProfesseur);

    alert("Inscription réussie !");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 bg-white p-6 rounded-lg shadow-md space-y-4"
    >
      <div id="inscription">
        <label htmlFor="nom" className="block text-sm font-medium text-gray-700">
          Nom
        </label>
        <input
          type="text"
          id="nom"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
        />
      </div>

      <div>
        <label htmlFor="prenoms" className="block text-sm font-medium text-gray-700">
          Prénoms
        </label>
        <input
          type="text"
          id="prenoms"
          value={prenoms}
          onChange={(e) => setPrenoms(e.target.value)}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
        />
      </div>

      <div>
        <label htmlFor="motDePasse" className="block text-sm font-medium text-gray-700">
          Mot de passe
        </label>
        <input
          type="password"
          id="motDePasse"
          value={motDePasse}
          onChange={(e) => setMotDePasse(e.target.value)}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
        />
      </div>

      <div>
        <label htmlFor="contact" className="block text-sm font-medium text-gray-700">
          Contact
        </label>
        <input
          type="tel"
          id="contact"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
        />
      </div>

      <div>
        <label htmlFor="serie" className="block text-sm font-medium text-gray-700">
          Série du Bac
        </label>
        <input
          type="text"
          id="serie"
          value={serie}
          onChange={(e) => setSerie(e.target.value)}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
        />
      </div>

      <div>
        <label htmlFor="niveau" className="block text-sm font-medium text-gray-700">
          Niveau
        </label>
        <select
          id="niveau"
          value={niveau}
          onChange={(e) => setNiveau(e.target.value)}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
        >
          <option value="Licence 1">Licence 1</option>
          <option value="Licence 2">Licence 2</option>
          <option value="Licence 3">Licence 3</option>
          <option value="Master">Master</option>
        </select>
      </div>

      <div>
        <label htmlFor="filiere" className="block text-sm font-medium text-gray-700">
          Filière
        </label>
        <input
          type="text"
          id="filiere"
          value={filiere}
          onChange={(e) => setFiliere(e.target.value)}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
        />
      </div>

      <div>
        <label htmlFor="matieres" className="block text-sm font-medium text-gray-700">
          Matières
        </label>
        <textarea
          id="matieres"
          value={matieres}
          onChange={(e) => setMatieres(e.target.value)}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
        />
      </div>

      <div>
        <label htmlFor="commune" className="block text-sm font-medium text-gray-700">
          Commune
        </label>
        <input
          type="text"
          id="commune"
          value={commune}
          onChange={(e) => setCommune(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
        />
      </div>

      <div>
        <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
          Expérience
        </label>
        <textarea
          id="experience"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-purple-600 transition"
      >
        Envoyer
      </button>
    </form>
  );
};

export default Inscription;
