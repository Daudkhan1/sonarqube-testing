import React from "react";
import "./about.css";
import "./teams.css";
import Footer from "../components/Footer";
import sir from "../assets/sir.png";
import rehan from "../assets/rehan.png";
import ryan from "../assets/ryan.png";
import zaman from "../assets/zaman.png";
import mam from "../assets/mam.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import frontendIcon from "../assets/skillsIcon/frontend.png";
import TeamCard from "../components/TeamCard";

const Teams = () => {
  const skill = [
    {
      icon: frontendIcon,
      skill: "Front End",
    },
    {
      icon: frontendIcon,
      skill: "Back End",
    },
    {
      icon: frontendIcon,
      skill: "Full Stack",
    },
    {
      icon: frontendIcon,
      skill: "DevOps + DevSecOps",
    },
    {
      icon: frontendIcon,
      skill: "Artificial Intelligence",
    },
    {
      icon: frontendIcon,
      skill: "Machine Learning",
    },
    {
      icon: frontendIcon,
      skill: "Data Science",
    },
    {
      icon: frontendIcon,
      skill: "Cloud Computing",
    },
    {
      icon: frontendIcon,
      skill: "Blockchain",
    },
    {
      icon: frontendIcon,
      skill: "IoT",
    },
    {
      icon: frontendIcon,
      skill: "Cyber Security",
    },
    {
      icon: frontendIcon,
      skill: "UI/UX Design",
    },
    {
      icon: frontendIcon,
      skill: "Product Development",
    },
    {
      icon: frontendIcon,
      skill: "Project Management",
    },
    {
      icon: frontendIcon,
      skill: "Business Analysis",
    },
    {
      icon: frontendIcon,
      skill: "Data Analytics",
    },
    {
      icon: frontendIcon,
      skill: "Digital Marketing",
    },
    {
      icon: frontendIcon,
      skill: "UI / UX",
    },
  ];
  const team = [
    {
      name: "Chief Executive Officer",
      title:
        "CEO & Sponsor Having a background in finance and 25+ year of experience running diverse set of businesses ranging from retail to high tech startups.",
    },
    {
      name: "Director Operations",
      title:
        "20+ years of professional experience of working as a medical specialist and an educationalist.",
    },
    {
      name: "Director Engineering Services ",
      title:
        "Worked 7+ years as a technical lead and eventually as director mostly planning and formulating developments.",
    },
    {
      name: "Engineering  Director",
      title:
        "Skilled leader with 5+  years in engineering, expert at blending technical and managerial abilities, guiding startups to success in software products and services.",
    },
  ];

  return (
    <>
      <section className="gap">
        <div className="container pt-5 text-center">
          <h2 className="heading">Our Team</h2>
          <p>
            A diverse group of experts passionate about using the power of AI to
            solve real-world problems. With years of experience across various
            domains, we are committed to driving innovation, delivering
            high-quality solutions, and pushing the boundaries of technology to
            create a smarter future.
          </p>
        </div>
      </section>

      {/* <section className="right-gradient">
        <div className="container">
          <div className="pb-5 text-center">
            <h2 className="heading">Leadership</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="our-team-main">
                <div className="team-front">
                  <img
                    src={sir}
                    alt="img"
                    className="img-fluid"
                    style={{ width: "150px" }}
                  />
                  <h3>Waqar Mehboob Khan</h3>
                  <p>Chief Executive Officer</p>
                  <Link
                    to="https://www.linkedin.com/in/waqar-khan-b24a3a3/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-media-button"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      style={{ width: "35px" }}
                    />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="our-team-main">
                <div className="team-front">
                  <img
                    src={mam}
                    alt="img"
                    className="img-fluid"
                    style={{ width: "150px" }}
                  />
                  <h3>Humera Waqar</h3>
                  <p>Director Operations</p>
                  <Link
                    to="https://www.linkedin.com/in/humera-nabi-ab70b2169/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-media-button"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      style={{ width: "35px" }}
                    />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="our-team-main">
                <div className="team-front">
                  <img
                    src={rehan}
                    alt="img"
                    className="img-fluid"
                    style={{ width: "150px" }}
                  />
                  <h3>Rehan Hafeez</h3>
                  <p>Controller Operations</p>
                  <Link
                    to="https://www.linkedin.com/in/rehan-hafeez-683837119/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-media-button"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      style={{ width: "35px" }}
                    />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4 offset-lg-2 offset-md-0">
              <div className="our-team-main">
                <div className="team-front">
                  <img
                    src={ryan}
                    alt="img"
                    className="img-fluid"
                    style={{ width: "150px" }}
                  />
                  <h3>Rayan Soban</h3>
                  <p>Engineering Director</p>
                  <Link
                    to="https://www.linkedin.com/in/rayansoban/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-media-button"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      style={{ width: "35px" }}
                    />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="our-team-main">
                <div className="team-front">
                  <img
                    src={zaman}
                    alt="img"
                    className="img-fluid"
                    style={{ width: "150px" }}
                  />
                  <h3>Muhammad Zaman</h3>
                  <p>Director Engineering Services</p>
                  <Link
                    to="https://www.linkedin.com/in/zamanmughal/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-media-button"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      style={{ width: "35px" }}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="skills-section">
        <div className="container">
          <h2 className="heading text-center mb-5">
            Our Expertise and Technical Proficiencies
          </h2>
          <div className="row">
            {skill.map((item, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="skill-card d-flex align-items-center">
                  <div className="white-strip"></div>
                  <img
                    src={item.icon}
                    alt={`${item.skill} Icon`}
                    className="skill-icon ps-3"
                  />
                  <span className="skill-text pe-2">{item.skill}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Teams;
