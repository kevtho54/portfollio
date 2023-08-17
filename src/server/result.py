from flask import Flask, render_template, request
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)




@app.route('/submit_form', methods=['GET', 'POST'])
def submit_form():
    if request.method == 'POST':
        # Traitez les données du formulaire ici
        data = request.json #ici, j'utilise request.json car mon formulaire est envoyer au format json. cela me permet de convertir les donnée pour quelle puissent etre lues.
        name = data.get('name')
        firstname = data.get('firstname')
        email = data.get('email')
        message = data.get('message') 

        # Constructiion du contenu du mail qui me sera envoyer
        text_content = f"Name :{name} firstname:{firstname} email:{email} message: {message} "
        print(f"Name: {name}")
        print(f"Firstname: {firstname}")
        print(f"Email: {email}")
        print(f"Message: {message}")

        #Configurer l'email
        try:
            response = requests.post(
                "https://api.mailgun.net/v3/sandbox9881491b4b1c4deb829e5ea13b2e8dc6.mailgun.org/messages",
		    auth=("api", "e6e83cdda417fe86261272fda5be35c2-28e9457d-a3f10c5d"),
		    data={"from": "Kévin Thomassin <postmaster@sandbox9881491b4b1c4deb829e5ea13b2e8dc6.mailgun.org>",
			"to": "kev.developpeur@gmail.com",
			"subject": "formulaire de contact portfolio",
			"text": {text_content}}
            )
            if response.status_code == 200:
                return "Formulaire rempli avec succès"
            else:
                return "Erreur lors de l'envois du formulaire"
        except Exception as e:
            return str(e)
       

if __name__ == '__main__':
    app.run(debug=True)
