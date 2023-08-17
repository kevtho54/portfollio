import style from "../style/footer.module.css";
import linkedin from "../assets/Linkedin.png";

function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.containerFooter}>
        <ul className={style.socialIcons}>
          <li>
            <a
              href="https://www.linkedin.com/in/kevin-thomassin-6589b41a8/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={style.imgFooter}
                src={linkedin}
                alt="profil linkedin"
              />
            </a>
          </li>
        </ul>
        <p>© 2023 Thomassin Kévin. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

export default Footer;
