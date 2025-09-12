import React from "react";
import "../../services/services.css";
import { Helmet } from "react-helmet";

import { CyberSecurityList } from "../../../static/CyberSecurityList";

import cyber1 from "../../../assets/services/cyber/network.webp";
import cyber2 from "../../../assets/services/cyber/app.webp";
import cyber3 from "../../../assets/services/cyber/iam.webp";
import cyber4 from "../../../assets/services/cyber/it.webp";

import tqs from "../../../assets/services/tqs.png";
import cca from "../../../assets/services/cca.png";
import se from "../../../assets/services/se.png";
import dsa from "../../../assets/services/dsa.png";
import sat from "../../../assets/services/sat.png";
import ci from "../../../assets/services/ci.png";

import Footer from "../../../components/Footer";
import { Link } from "react-router-dom";

function CyberSecurity() {
  const data = [
    {
      id: 1,
      title: "Cyber Security",
      subtitle:
        "Maanz AI pioneers holistic cybersecurity, ensuring digital resilience against evolving threats. ",
      button_title: "Network Security",
      content:
        "Maanz AI fortifies digital landscapes with advanced network security, deploying firewalls, intrusion detection systems, and VPNs for robust protection against cyber threats.",
      imageUrl: cyber1,
    },
    {
      id: 2,
      title: "Cyber Security",
      subtitle:
        "Maanz AI pioneers holistic cybersecurity, ensuring digital resilience against evolving threats. ",
      button_title: "Application Security",
      content:
        "Securing the entire development lifecycle, Maanz AI ensures application resilience through code 	reviews, web application firewalls, penetration testing and stringent security audits.",
      imageUrl: cyber2,
    },
    {
      id: 3,
      title: "Cyber Security",
      subtitle:
        "Maanz AI pioneers holistic cybersecurity, ensuring digital resilience against evolving threats. ",
      button_title: "Identity and Access Management",
      content:
        "Maanz AI safeguards digital identities, implementing multi-factor authentication, access control policies, and efficient user provisioning for enhanced security.",
      imageUrl: cyber3,
    },
    {
      id: 4,
      title: "Cyber Security",
      subtitle:
        "Maanz AI pioneers holistic cybersecurity, ensuring digital resilience against evolving threats. ",
      button_title: "IT Governance",
      content:
        "Ensuring organizational resilience, Maanz AI excels in IT governance, conducting risk 	assessments, monitoring compliance, and developing robust incident response and risk mitigating plans.",
      imageUrl: cyber4,
    },
  ];

  return (
    <>
      <Helmet>
        <meta
          name="keywords"
          content="cybersecurity services, e-commerce cybersecurity services"
        ></meta>
        <title>
          Best Cybersecurity Services for Businesses in USA | Cybersecurity
          Consulting Services | Maanz AI
        </title>
        <meta
          name="description"
          content="Maanz AI is a US based cybersecurity company delivering services and managing cyber risk on behalf of our valued distribution and technology."
        ></meta>
      </Helmet>
      <section className="text-center gap">
        <div className="container   pt-5">
          <div className="hero-text">
            <h2 className="heading">{data[1].title}</h2>
            <p>{data[1].content}</p>
          </div>
        </div>
      </section>

      <section className="ai-services-bg">
        <div className="container">
          {CyberSecurityList.map((service, index) => (
            <div key={index} className="row align-items-center pb-5">
              <div className="col-md-7 col-sm-12">
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <div>
                  <Link to="/contact">
                    <button className="btn service-cta me-2">Contact us</button>
                  </Link>
                  <Link to="/clients">
                    <button className="btn service-cta">Use Cases</button>
                  </Link>
                </div>
              </div>
              <div className="col-md-5 col-sm-12">
                <img
                  src={service.src}
                  alt={service.title}
                  className="img-fluid images"
                />
              </div>
              <hr className="bottomLine" />
            </div>
          ))}
        </div>
      </section>

      <section className="gap">
        <div className="container text-center align-items-center justify-content-center">
          <h1 className="heading">We Go Beyond Traditional Offerings!</h1>
          <p>
            Our commitment is centered around delivering exceptional solutions,
            coupled with the optimal blend of talent and infrastructure, <br />
            ensuring success in every facet of your project.
          </p>
          {/* Talent Management */}
          <div className="container">
            <div className="row pt-5 align-items-center ">
              <h4 className="w-100 mb-5">Talent Management</h4>

              <div className="col-md-6 d-flex justify-content-lg-end justify-content-sm-center">
                <div className="card  mr-lg-4 mr-md-0 mr-sm-0 mb-4 small-card">
                  <div className="card-body text-center">
                    <h6 className="card-title mb-3 font-weight-bold">
                      {" "}
                      Onboarding
                    </h6>
                    <p className="card-text">
                      Quick and seamless integration of talent.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 d-flex">
                <div className="card ml-lg-4 ml-md-0 mb-4 small-card">
                  <div className="card-body text-center">
                    <h6 className="card-title mb-3 font-weight-bold">
                      Offboarding
                    </h6>
                    <p className="card-text">
                      Smooth transitions when projects conclude.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Infrastructure Management */}
          <div className="container">
            <div className="row pt-5">
              <h4 className="w-100 mb-5">Infrastructure Management</h4>
              <div className="col-lg-4 col-md-6 d-flex justify-content-lg-end justify-content-sm-end">
                <div className="card mb-4 small-card">
                  <div className="card-body text-center">
                    <h6 className="card-title mb-3 font-weight-bold">
                      IDs Management
                    </h6>
                    <p className="card-text">
                      Efficient and secure handling of user identities.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex align-items-center justify-content-lg-center justify-content-sm-start">
                <div className="card mb-4 small-card">
                  <div className="card-body text-center">
                    <h6 className="card-title mb-3 font-weight-bold">
                      Working Space
                    </h6>
                    <p className="card-text">
                      Collaborative workspaces to ensure success.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex justify-content-lg-start justify-content-md-end">
                <div className="card mb-4 small-card">
                  <div className="card-body text-center">
                    <h6 className="card-title mb-3 font-weight-bold">
                      Performance Analytics
                    </h6>
                    <p className="card-text">
                      In-depth analysis to optimize performance.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 d-flex justify-content-lg-end justify-content-md-start ">
                <div className="card mr-lg-4 mr-md-0 mb-4  small-card">
                  <div className="card-body text-center">
                    <h6 className="card-title mb-3 font-weight-bold">
                      Regulatory Compliance
                    </h6>
                    <p className="card-text">
                      Adherence to industry regulations and standards.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 d-flex  justify-content-lg-start justify-content-md-end">
                <div className="card ml-lg-4 ml-md-0 mb-4 small-card">
                  <div className="card-body text-center">
                    <h6 className="card-title mb-3 font-weight-bold">
                      Data Integrity
                    </h6>
                    <p className="card-text">
                      Area access controls and GDPR compliance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-5 pb-5">
            <Link to="/contact">
              <button className="btn btn-outline-light">
                Begin Your Journey With Us
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="pt-5 pb-5">
        <div className="container text-center ">
          <div className="row mb-5">
            <h2 className="heading">Why Maanz AI is Your Best Choice?</h2>
          </div>
          <div className="row align-items-end">
            <div className="col-lg-4 col-md-4">
              <img
                src={tqs}
                alt="Customer-Centrism"
                className="mb-4 offering-icon"
              />
              <h6 className="core-values-heading">Top Quality Solutions</h6>
            </div>
            <div className="col-lg-4 col-md-4">
              <img
                src={cca}
                alt="Collaboration and Teamwork"
                className="mb-4 offering-icon"
              />
              <h6 className="core-values-heading">Client Centric Approach</h6>
            </div>
            <div className="col-md-4">
              <img src={se} alt="Empowerment" className="mb-4 offering-icon" />
              <h6 className="core-values-heading">Scalability Expertise</h6>
            </div>
          </div>

          <div className="row align-items-end pt-5">
            <div className="col-lg-4 col-md-4">
              <img
                src={dsa}
                alt="Responsibility"
                className="mb-4 offering-icon"
              />
              <h6 className="core-values-heading">Data Security Assurance</h6>
            </div>
            <div className="col-lg-4 col-md-4">
              <img src={sat} alt="Integrity" className="mb-4 offering-icon" />
              <h6 className="core-values-heading">
                State of the Art Technology
              </h6>
            </div>
            <div className="col-lg-4 col-md-4">
              <img
                src={ci}
                alt="Equality & Fairness"
                className="mb-4 offering-icon"
              />
              <h6 className="core-values-heading">Continuous Innovation</h6>
            </div>
          </div>

          <div className="pt-5 pb-5">
            <Link to="/clients">
              <button className="btn btn-outline-light">
                Discover Client’s Feedback
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default CyberSecurity;
