from flask import Flask, request, jsonify
import smtplib  # Import pour envoyer des e-mails via SMTP
from email.mime.text import MIMEText  # Import pour créer le contenu de l'e-mail en texte brut
from email.mime.multipart import MIMEMultipart  # Import pour créer le contenu de l'e-mail en HTML
from flask_cors import CORS  # Import pour gérer les demandes cross-origin
from decouple import config  # Import pour charger les variables d'environnement à partir d'un fichier .env
#import logging  # Import pour la journalisation

# Initialisation de l'application Flask
app = Flask(__name__)

# Configuration CORS pour gérer les demandes cross-origin
CORS(app, resources={r"/submit_form": {"origins": "http://localhost:3000"}})

# Chargement des informations d'identification depuis un fichier .env en utilisant python-decouple
SENDER_EMAIL = config('SENDER_EMAIL')
MAILTO = config('MAILTO')
SENDER_PASSWORD = config('SENDER_PASSWORD')

# Fonction pour envoyer un e-mail
def send_email(name, firstname, email, message):
    # Création du contenu de l'e-mail au format HTML
    html_content = f"""
    <table>
        <tr>
            <td><b>Nom:</b></td>
            <td> {name}</td>
        </tr>
        <tr>
            <td><b>prénom:</b></td>
            <td> {firstname}</td>
        </tr>
        <tr>
            <td><b>Email:</b></td>
            <td> {email}</td>
        </tr>
        <tr>
            <td><b>Message:</b></td>
            <td> {message}</td>
        </tr>
    </table>
    """

    # Création d'un objet MIMEMultipart pour l'e-mail
    message = MIMEMultipart()
    message['From'] = SENDER_EMAIL
    message['To'] = MAILTO
    message['Subject'] = 'Formulaire Portfollio'  # Sujet de l'e-mail

    # Attachement du contenu HTML à l'e-mail
    message.attach(MIMEText(html_content, 'html'))

    try:
        # Connexion au serveur SMTP d'Outlook et envoi de l'e-mail
        with smtplib.SMTP('smtp-mail.outlook.com', 587) as server:
            server.starttls()  # Activation du chiffrement TLS
            server.login(SENDER_EMAIL, SENDER_PASSWORD)  # Authentification
            server.sendmail(SENDER_EMAIL, MAILTO, message.as_string())  # Envoi de l'e-mail
        print("E-mail envoyé avec succès")
    except Exception as e:
        # Gestion des erreurs et journalisation
        #logging.error(f"Erreur lors de l'envoi de l'e-mail : {str(e)}")
        return jsonify({"error": str(e)})

# Route pour soumettre le formulaire
@app.route('/submit_form', methods=['POST'])
def submit_form():
    if request.method == 'POST':
        data = request.json
        name = data.get('name')
        firstname = data.get('firstname')
        email = data.get('email')
        message = data.get('message')

        try:
            send_email(name, firstname, email, message)  # Appel de la fonction d'envoi d'e-mail
            return jsonify({"message": "E-mail envoyé avec succès"})
        except Exception as e:
            print(e)
            return jsonify({"error": str(e)})

# Configuration de la journalisation pour enregistrer les erreurs dans un fichier
 #logging.basicConfig(filename='app.log', level=logging.DEBUG)

# Point d'entrée de l'application Flask
if __name__ == '__main__':
    app.run(debug=True)  # Démarrage de l'application en mode de débogage
