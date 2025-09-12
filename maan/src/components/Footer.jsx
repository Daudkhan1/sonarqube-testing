import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faYoutube,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <>
      <div>
        <footer className="footer">
          <div className="container p-4">
            <div className="row align-items-center">
              <div className="col-md-4 col-xs-12 d-flex justify-content-center footerNav p-0">
                <p style={{ fontSize: "smaller" }}>
                  <Link
                    to="/privacy-policy"
                    className="text-decoration-none text-white mr-1"
                  >
                    Privacy Policy
                  </Link>
                  | Terms of Use <br />© 2024 - Maanz-AI | All Rights Reserved
                </p>
              </div>
              <div className="col-md-4 p-0">
                <img src={logo} alt="" />
              </div>
              <div className="col-md-4 d-flex social-icons-container p-0">
                <Link
                  to="https://www.linkedin.com/company/maanz-ai/mycompany/"
                  target="blank"
                  className="m-1"
                  aria-label="Link to Linkedin"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </Link>
                <Link
                  to="https://www.youtube.com/@maanzai2040"
                  target="blank"
                  className="m-1"
                  aria-label="Link to Youtube"
                >
                  <FontAwesomeIcon icon={faYoutube} />
                </Link>
                <Link
                  to="https://medium.com/maanz-ai"
                  target="blank"
                  className="m-1"
                  aria-label="Link to Medium"
                >
                  <FontAwesomeIcon icon={faMedium} />
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
