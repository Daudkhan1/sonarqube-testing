import React from "react";
import "../../services/services.css";
import { Helmet } from "react-helmet";

import { MedicalList } from "../../../static/MedicalList";

import m1 from "../../../assets/services/medical/ipd.jpg";
import m2 from "../../../assets/services/medical/opd.webp";

import tqs from "../../../assets/services/tqs.png";
import cca from "../../../assets/services/cca.png";
import se from "../../../assets/services/se.png";
import dsa from "../../../assets/services/dsa.png";
import sat from "../../../assets/services/sat.png";
import ci from "../../../assets/services/ci.png";

import Footer from "../../../components/Footer";
import { Link } from "react-router-dom";

function Medical() {
  const data = [
    {
      id: 1,
      title: "Digital Health Solutions",
      subtitle:
        "Beyond software solutions Maanz AI is now at the forefront in the healthcare sector with its innovative digital health solutions.",
      button_title: "Virtual Healthcare Services",
      content:
        "Our Virtual Healthcare Services revolutionize healthcare delivery by extending medical practice virtually, enhancing accessibility for patients.",
      imageUrl: m1,
    },
    {
      id: 2,
      title: "Digital Health Solutions",
      subtitle:
        "Beyond software solutions Maanz AI is now at the forefront in the healthcare sector with its innovative digital health solutions.",
      button_title: "Digital Healthcare Records",
      content:
        "Our Digital Healthcare Record System helps to ease administrative burdens, empowering healthcare providers to focus on delivering quality care.",
      imageUrl: m2,
    },
  ];

  return (
    <>
      <Helmet>
        <meta
          name="keywords"
          content="Digital Health Solutions, Healthcare Services"
        ></meta>
        <title>
          Best Digital Health Solutions Services in USA | Best Healthcare
          Services | Maanz AI
        </title>
        <meta
          name="description"
          content="Maanz AI is now at the forefront in the healthcare sector with its innovative digital health solutions. We offers Virtual Healthcare Services, Digital Healthcare Records."
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
          {MedicalList.map((service, index) => (
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

export default Medical;
