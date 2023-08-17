import React, { useState, forwardRef } from "react";
import style from "../style/contact.module.css";
import axios from "axios";


const Contact = forwardRef((props,ref) => {
  // Définir les états pour chaque champ du formulaire
  const [name, setName] = useState("");
  const [firstname, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Gérer les soumissions du formulaire
  const handleSubmit = (event) => {
    event.preventDefault();
    // Traiter les données soumises ici (par exemple, les envoyer au serveur)
    
    axios.post("http://localhost:5000/submit_form",{name, firstname, email, message})
     .then(response => {
      console.log(response.data);
     })
     .catch(error => {
      console.log(error);
     });
  // Pour cet exemple, nous allons simplement les afficher dans la console
    console.log("Nom:", name);
    console.log("preNom:", firstname);
    console.log("Email:", email);
    console.log("Message:", message);

    // Réinitialiser le formulaire après la soumission
    setName("");
    setFirstName("");
    setEmail("");
    setMessage("");
  };

 
  
 

  return (
    <section ref={ref} id={style.contact}>
      <h2 className={style.contactTitle}>Formulaire de contact</h2>

      <form onSubmit={handleSubmit}>
        <div className={style.contenerContact}>
            <div className={style.name}>
              <label>Nom:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className={style.firstname}>
              <label>Prénom:</label>
              <input
                type="text"
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
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
});

export default Contact;
