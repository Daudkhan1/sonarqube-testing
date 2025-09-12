import React, { useEffect, useState } from "react";
import AOS from "aos";
import Footer from "../components/Footer";
import "./about.css";
import mvg from "../assets/3D_art_future_mvg.webp";
import cv1 from "../assets/corevalues/cv1_customer_centrism.png";
import cv2 from "../assets/corevalues/cv2_collaboration_and_teamwork.png";
import cv3 from "../assets/corevalues/cv3_empowerment.png";
import cv4 from "../assets/corevalues/cv4_responsibility.png";
import cv5 from "../assets/corevalues/cv5_integrity.png";
import cv6 from "../assets/corevalues/cv6_equality_and_fairness.png";
import isl from "../assets/islamabad.png";
import lhr from "../assets/lahore.png";
import devil from "../assets/devils.png";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Helmet>
        <meta
          name="keywords"
          content="generative ai development company, ai development solutions"
        ></meta>
        <title>
          generative ai development company | Ai consulting & solutions
        </title>
        <meta
          name="description"
          content="Maanz Ai is generative AI development company, we offer best ai services and solutions which is included app development, software development, data labeling servics."
        ></meta>
      </Helmet>
      <section className="gap text-center">
        <div className="container main-content pt-5 ">
          <div>
            <h1 className="heading">About Us</h1>
            <p className="mb-5">
              Maanz AI is a hub of intelligent solutions, dedicated to
              pioneering excellence in artificial intelligence to redefine
              <br />
              industries for a more intelligent future.
            </p>
            <Link to="/contact">
              <button className=" mb-5 btn btn-outline-light">
                Let's Work Together
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="">
        <div className="container animation" data-aos="fade-up">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img src={mvg} alt="pic" className="img-fluid hover-3d" />
            </div>
            <div className="col-md-6">
              <div className="row">
                <h5 className="mb-3 mvg-heading">Mission</h5>
                <p className="mb-5">
                  Pioneering AI excellence to reshape industries for a smarter
                  future.
                </p>
              </div>
              <div className="row">
                <h5 className="mb-3 mvg-heading">Vision</h5>
                <p className="mb-5">
                  Our vision is to provide high quality solutions and continue
                  advancement in the field of AI.
                </p>
              </div>
              <div className="row">
                <h5 className="mb-3 mvg-heading">Goal</h5>
                <p>
                  We are committed to offering equal opportunities and
                  incentives to everyone. This serves as our driving force to
                  contribute towards creating a better world for all.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="gap">
        <div className="container text-center animation" data-aos="fade-up">
          <div className="row mb-5">
            <h2 className="heading">Our Values</h2>
            <p className="mb-15">
              We have taken the time to consolidate our six core values. They
              shape the way we work with our clients <br /> and are the
              foundation for Maanz AI’s culture.
            </p>
          </div>
          <div className="row align-items-end">
            <div className="col-md-4">
              <img
                src={cv1}
                alt="Customer-Centrism"
                className="mb-4 offering-icon"
              />
              <h6 className="core-values-heading">Customer-Centrism</h6>
              <p className="core-values-p">
                At Maanz AI, the interests and needs of our customers are
                paramount, guiding our actions and decisions in every aspect.
              </p>
            </div>
            <div className="col-md-4">
              <img
                src={cv2}
                alt="Collaboration and Teamwork"
                className="mb-4 offering-icon"
              />
              <h6 className="core-values-heading">
                Collaboration and Teamwork
              </h6>
              <p className="core-values-p">
                Our exceptional results are a product of collaboration and
                teamwork ingrained at every level of our organization.
              </p>
            </div>
            <div className="col-md-4">
              <img src={cv3} alt="Empowerment" className="mb-4 offering-icon" />
              <h6 className="core-values-heading">Empowerment</h6>
              <p className="core-values-p">
                Emphasizing empowerment as a core value, we champion autonomous
                decision-making across all hierarchies.
              </p>
            </div>
          </div>

          <div className="row align-items-end pt-5">
            <div className="col-md-4">
              <img
                src={cv4}
                alt="Responsibility"
                className="mb-4 offering-icon"
              />
              <h6 className="core-values-heading">Responsibility</h6>
              <p className="core-values-p">
                With empowerment comes the duty to carry out tasks to the best
                of our abilities, reflecting our commitment to goals.
              </p>
            </div>
            <div className="col-md-4">
              <img src={cv5} alt="Integrity" className="mb-4 offering-icon" />
              <h6 className="core-values-heading">Integrity</h6>
              <p className="core-values-p">
                Ethics and integrity serve as the bedrock of all our activities
                at Maanz AI, guiding our conduct with unwavering principles.
              </p>
            </div>
            <div className="col-md-4">
              <img
                src={cv6}
                alt="Equality & Fairness"
                className="mb-4 offering-icon"
              />
              <h6 className="core-values-heading">Equality & Fairness</h6>
              <p className="core-values-p">
                Everyone at Maanz AI is treated as equals, get the dignity,
                respect they deserve and their differences are celebrated.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container-fluid hero-section">
        <section className="gap">
          <div
            className="container text-center animation mb-5"
            data-aos="fade-up"
          >
            <h2 className="heading">Corporate Social Responsibility</h2>
            <p className="mb-5">
              At Maanz AI, our commitment to corporate social responsibility is
              reflected in our <br /> diverse activities, aiming to make the
              world a better place.
            </p>
            <div className="row pt-5">
              <div className="col-12">
                <div
                  id="carouselExampleIndicators"
                  className="carousel slide slider-bg"
                  data-ride="carousel"
                  data-interval="3000"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <h4>Specially Abled Employees </h4>
                      <p>
                        We have extended our team of specially abled people
                        having expertise in data annotation. Our goal is to
                        contribute to society by creating career opportunities
                        for those with unique talents.
                      </p>
                    </div>
                    <div className="carousel-item">
                      <h4>Mehboob Ali Khan Computer Lab </h4>
                      <p>
                        Empowering local children in Tando Jan Muhammad by
                        providing computer education, breaking the chains of
                        illiteracy, and fostering a brighter future.
                      </p>
                    </div>
                    <div className="carousel-item">
                      <h4>Tree Plantation </h4>
                      <p>
                        Combating deforestation and contributing to
                        environmental preservation, making Pakistan a greener
                        and more sustainable place to live.
                      </p>
                    </div>
                    <div className="carousel-item">
                      <h4>Installation of Reverse Osmosis Plant </h4>
                      <p>
                        Addressing the pressing need for clean drinking water in
                        Tando Jan Muhammad, improving community health,
                        well-being, and overall quality of life.
                      </p>
                    </div>
                    <div className="carousel-item">
                      <h4>Blood Donation Drive </h4>
                      <p>
                        Actively participating in regular blood donation
                        initiatives, saving lives and building a healthier,
                        safer community.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="pt-5 pb-5">
        <div className="container text-center animation" data-aos="fade-up">
          <h2 className="heading">Locations</h2>
          <p className="mb-5">
            We currently operate in Islamabad and Lahore, with our workforce
            exceeding 500 employees.
          </p>

          <div className="row align-items-end">
            <div className="col-md-4">
              <h2 className="location-heading">
                <b> Head-Office </b>
              </h2>
              <div className="row">
                <div className="col-md-12 section-border-right">
                  <img src={devil} alt="USA" className="img-fluid  mb-3" />
                  <h2 className="location-heading mb-5">Wyoming,US</h2>
                </div>
              </div>
            </div>

            <div className="col-md-8">
              <h2 className="location-heading pt-5">
                {" "}
                <b> Development Offices </b>
              </h2>

              <div className="row align-items-end">
                <div className="col-md-6">
                  <img src={isl} alt="Islamabad" className="img-fluid  mb-3" />
                  <h2 className="location-heading mb-5">Islamabad</h2>
                </div>
                <div className="col-md-6">
                  <img src={lhr} alt="Lahore" className="img-fluid mb-3" />
                  <h2 className="location-heading mb-5">Lahore</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;
