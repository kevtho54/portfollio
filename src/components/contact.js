import React, { useState } from "react";
import style from "../style/contact.module.css";

const Contact = () => {
  // Définir les états pour chaque champ du formulaire
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Gérer les soumissions du formulaire
  const handleSubmit = (event) => {
    event.preventDefault();
    // Traiter les données soumises ici (par exemple, les envoyer au serveur)
    // Pour cet exemple, nous allons simplement les afficher dans la console
    console.log("Nom:", nom);
    console.log("preNom:", prenom);
    console.log("Email:", email);
    console.log("Message:", message);

    // Réinitialiser le formulaire après la soumission
    setNom("");
    setPrenom("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id={style.contact}>
      <h3 className={style.contactTitle}>Formulaire de contact</h3>

      <form onSubmit={handleSubmit}>
        <div className={style.contenerContact}>
            <div className={style.name}>
              <label>Nom:</label>
              <input
                type="text"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                required
              />
            </div>

            <div className={style.firstname}>
              <label>Prénom:</label>
              <input
                type="text"
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
                required
              />
            </div>

            <div className={style.email}>
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

          <div className={style.message}>
            <label>Message:</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
        <button className={style.btnContact} type="submit">Envoyer</button>
        </div>

      </form>
    </section>
  );
};

export default Contact;
