import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation("global");
  return (
    <footer className="footer">
      <p className="copyright">© {new Date().getFullYear()}. {t("footer.copyright")}</p>
      <p className="made-with"><small>{t("footer.made")} - <Link to="https://github.com/Pancratzia" target="_blank" className="author">Pancratzia</Link></small></p>
    </footer>
  )
}

export default Footer