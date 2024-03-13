import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="footer">
      <p className="copyright">© {new Date().getFullYear()}. All rights reserved.</p>
      <p className="made-with"><small>Made with 💜 - <Link to="https://github.com/Pancratzia" target="_blank" className="author">Pancratzia</Link></small></p>
    </footer>
  )
}

export default Footer