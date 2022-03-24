import facebook from "../assets/images/facebok.png";
import linkedin from "../assets/images/linkedin.png";

export default function Footer() {
  return (
    <footer className="footer">
      <span>
        <a className="footer-link" href="https://www.linkedin.com/">
          <img src={linkedin} alt="linkedin logo" />
        </a>
        <a className="footer-link" href="https://www.facebook.com">
          <img src={facebook} alt="Facebook logo" />
        </a>
      </span>
      <small className="copyright">2022@ smart-tracker, Sweden.</small>
    </footer>
  );
}
