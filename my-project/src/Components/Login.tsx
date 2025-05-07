import { useState } from "react";

interface LoginProps {
  setIsLoggedIn: (value: boolean) => void;
}

const Login: React.FC<LoginProps> = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [motDePasse, setMotDePasse] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const storedProfesseurs = JSON.parse(localStorage.getItem("professeurs") || "[]");

    const professeur = storedProfesseurs.find(
      (p: { email: string; motDePasse: string }) =>
        p.email === email && p.motDePasse === motDePasse
    );

    if (professeur) {
      localStorage.setItem("isLoggedIn", "true");
      setIsLoggedIn(true);
      alert("Connexion réussie !");
      // Ici tu peux ajouter une redirection ou afficher une section spéciale
    } else {
      alert("Identifiants incorrects.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Connexion</h2>

      <div id="se connecter" className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full border px-3 py-2 rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="motDePasse" className="block text-sm font-medium text-gray-700">Mot de passe</label>
        <input
          type="password"
          id="motDePasse"
          value={motDePasse}
          onChange={(e) => setMotDePasse(e.target.value)}
          className="mt-1 block w-full border px-3 py-2 rounded"
          required
        />
      </div>

      <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-purple-600">
        Se connecter
      </button>
    </form>
  );
};

export default Login;
