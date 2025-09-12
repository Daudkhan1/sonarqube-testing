import React from "react";
import "../../services/services.css";
import { Helmet } from "react-helmet";
import { AIServices } from "../../../static/AIList";

import ai2 from "../../../assets/services/ai/ML.webp";
import ai1 from "../../../assets/services/ai/LLM.webp";
import ai3 from "../../../assets/services/ai/NLP.webp";

import tqs from "../../../assets/services/tqs.png";
import cca from "../../../assets/services/cca.png";
import se from "../../../assets/services/se.png";
import dsa from "../../../assets/services/dsa.png";
import sat from "../../../assets/services/sat.png";
import ci from "../../../assets/services/ci.png";

import Footer from "../../../components/Footer";
import { Link } from "react-router-dom";
import "./AI.css";

function AI() {
  const data = [
    {
      id: 1,
      title: "Artificial Intelligence ",
      subtitle:
        "Our AI mastery includes programming, computer vision, and deep learning ensuring precise solutions.",
      button_title: "Large Language Models",
      content:
        "We specialize in leveraging cutting-edge technologies, including state-of-the-art language models, to develop intelligent solutions. Since our team is adept at working with large language models, this enables us to address complex language-related tasks such as natural language understanding, text generation, and sentiment analysis.",
      imageUrl: ai1,
    },
    {
      id: 2,
      title: "Artificial Intelligence ",
      subtitle:
        "Our AI mastery includes programming, computer vision, and deep learning ensuring precise solutions.",
      button_title: "Machine Learning",
      content:
        "At Maanz AI, our expertise in machine learning sets us apart. Our team possesses a deep understanding of machine learning algorithms, techniques, and methodologies. Whether it is predictive modeling, pattern recognition, or optimizing decision-making processes, we are your go to destination for all.",
      imageUrl: ai2,
    },
    {
      id: 3,
      title: "Artificial Intelligence ",
      subtitle:
        "Our AI mastery includes programming, computer vision, and deep learning ensuring precise solutions.",
      button_title: "Natural Language Processing",
      content:
        "Our team possesses advanced capabilities in understanding, interpreting, and generating human language, allowing us to create sophisticated natural language processing from sentiment analysis and language to information extraction. Our expertise in these models empowers us to build intelligent solutions.",
      imageUrl: ai3,
    },
  ];

  return (
    <>
      <Helmet>
        <meta
          name="keywords"
          content="Artificial intelligence services, artificial intelligence solutions"
        ></meta>
        <title>
          Best Artificial Intelligence Services and Solutions in USA | Maanz AI
        </title>
        <meta
          name="description"
          content="Maanz AI offers best data & artificial intelligence (AI) services and solutions. We Offers Large Language Models, Machine Learning and Natural Language Processing"
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
          {AIServices.map((service, index) => (
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

export default AI;
