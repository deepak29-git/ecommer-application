import '../Footer/Footer.css'
import linkedin from '../../assets/linkedin.png'
import twitter from '../../assets/twitter.png'
import instagram from '../../assets/instagram.png'
import github from '../../assets/github.png'


export const Footer = () => {
  return (
    <footer className="footer-section">
    <p className="center-text mb-half">Develped by Deepak Goyal</p>
    <ul className="social-media">
      <li className="non-bullet">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/deepak-goyal-584157179/"
          ><img
            className="icon footer-icon"
            src={linkedin}
            alt="linkedin"
        /></a>
      </li>
      <li className="non-bullet">
        <a
          target="_blank"
          href="https://github.com/deepak29-git"
          ><img
            className="icon footer-icon"
            src={github}
            alt="linkedin"
        /></a>
      </li>
      <li className="non-bullet">
        <a target="_blank" href="https://twitter.com/deepak887180"
          ><img
            className="icon footer-icon"
            src={twitter}
            alt="twitter"
        /></a>
      </li>
      <li className="non-bullet">
        <a target="_blank" href="https://www.instagram.com/deepak_goyal_1996/"
          ><img
            className="icon footer-icon"
            src={instagram}
            alt="instagram"
        /></a>
      </li>
    </ul>
  </footer>
  )
};

