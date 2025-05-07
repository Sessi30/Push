import React, { useState } from "react";
import emailjs from "emailjs-com";

// Typage de l'événement (e) pour handleSubmit et handleChange
const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.nom + " " + formData.prenom,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        "service_id", // Remplace par ton service ID
        "template_id", // Remplace par ton template ID
        templateParams,
        "user_id" // Remplace par ton user ID
      )
      .then(
        (response) => {
          console.log("Message envoyé : ", response);
          alert("Message envoyé avec succès !");
          setFormData({
            nom: "",
            prenom: "",
            email: "",
            message: "",
          });
        },
        (err) => {
          console.log("Erreur lors de l'envoi : ", err);
          alert("Une erreur est survenue. Veuillez réessayer.");
        }
      );
  };

  return (
    <div className="max-w-screen-xl mx-auto p-8">
      <div className="flex justify-between space-x-8">
        {/* Informations à gauche */}
        <div className="w-1/3">
          <h2 className="text-3xl font-bold mb-4 text-blue-600">Nos coordonnées</h2>
          <p><strong>Nom :</strong> EduHelper</p>
          <p><strong>Email :</strong> estherdjossouakan@gmail.com</p>
          <p><strong>Téléphone :</strong> +229 01 91818521</p>
          <p><strong>Adresse :</strong> Abomey-Calavi, Bénin</p>
        </div>

        {/* Formulaire à droite */}
        <div className="w-2/3">
          <h2 className="text-3xl font-bold mb-4 text-purple-600">Contactez-mous</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="nom"
              placeholder="Nom"
              value={formData.nom}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
            <input
              type="text"
              name="prenom"
              placeholder="Prénom"
              value={formData.prenom}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Votre email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
            <textarea
              name="message"
              placeholder="Votre message"
              value={formData.message}
              onChange={handleChange}
              rows={5} // Utilise une valeur numérique ici (pas de "rows" en chaîne)
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
            <button
              type="submit"
              className="w-full p-3 bg-blue-600 text-white font-bold rounded-md hover:bg-purple-600"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
      <div className="w-full h-px bg-purple-300 my-8"></div>
    </div>
  );
};

export default Contact;
