import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import "../App.css";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";

//mobile view
import im1mblMobile from "../assets/homePageService/annotation.webp";
import im2mblMobile from "../assets/homePageService/embedd.webp";
import im3mblMobile from "../assets/homePageService/web.webp";
import im4mblMobile from "../assets/homePageService/predictive.webp";
import im5mblMobile from "../assets/homePageService/nlp.webp";
import im6mblMobile from "../assets/homePageService/vision.webp";
import im7mblMobile from "../assets/homePageService/cybertext.webp";
import im8mblMobile from "../assets/homePageService/SMStext.webp";

//web view
import im2 from "../assets/homePageServiceBlank/embedd.webp";
import im3 from "../assets/homePageServiceBlank/web.webp";
import im4 from "../assets/homePageServiceBlank/predictive.webp";
import im1 from "../assets/homePageServiceBlank/annotation.webp";
import im5 from "../assets/homePageServiceBlank/nlp.webp";
import im6 from "../assets/homePageServiceBlank/vision.webp";
import im7 from "../assets/homePageServiceBlank/cyber.webp";
import im8 from "../assets/homePageServiceBlank/SMS.webp";

import main from "../assets/main.webm";
import cube from "../assets/cube.webp";

import phone from "../assets/phone.png";
import mail from "../assets/mail.png";
import tick from "../assets/tick.png";
import individual from "../assets/individual.png";
import scrum from "../assets/scrum.png";
import offshore from "../assets/offshore.png";

import CollapsibleCard from "./CollapsibleCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import InteractiveTiles from "./InteractiveTiles";

function Home() {
  const [dimensions, setDimensions] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const handleResize = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  React.useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [lastWord, setLastWord] = useState(" Deep-Tech");

  useEffect(() => {
    const words = [" Deep-Tech", " Devices", " Solutions", " Development"];
    let index = 0;

    const interval = setInterval(() => {
      setLastWord(words[index]);
      index = (index + 1) % words.length;
    }, 2000);

    setTimeout(() => {
      clearInterval(interval);
    }, 100000);

    return () => clearInterval(interval);
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "" || !validateEmail(email) || message.trim() === "") {
      setError(true);
      setSuccess(false);
      setTimeout(() => {
        setError(false);
      }, 4000);
      return;
    }

    const serviceID = "service_pzuv2vc";
    const templateID = "template_xz0g75c";
    const userID = "i57sCGlaaDbm4eG5H";

    const data = {
      name: name,
      email: email,
      message: message,
    };

    emailjs
      .send(serviceID, templateID, data, userID)
      .then((response) => {
        setSuccess(true);
        setName("");
        setEmail("");
        setMessage("");
        setError(false);
        setTimeout(() => {
          setSuccess(false);
        }, 4000);
      })
      .catch((error) => {
        setError(true);
        setSuccess(false);
        setTimeout(() => {
          setError(false);
        }, 4000);
      });
  };

  const cardsData = [
    {
      imageUrl: im1,
      imageUrlMobile: im1mblMobile,
      title: "Annotation Services",
      content:
        "At Maanz AI, we offer data labeling and tagging services using over 450...",
    },
    {
      imageUrl: im2,
      imageUrlMobile: im2mblMobile,
      title: "Embedded Systems",
      content:
        "Embedded systems are like smart brains hidden inside everyday things...",
    },
    {
      imageUrl: im3,
      imageUrlMobile: im3mblMobile,
      title: "Web & Mobile Development",
      content:
        "At Maanz AI, we create scalable websites and mobile apps that fit your needs...",
    },
    {
      imageUrl: im4,
      imageUrlMobile: im4mblMobile,
      title: "Predictive & Data Analytics",
      content:
        "Experts at Maanz AI are known to create smart models that help you build trends...",
    },
    {
      imageUrl: im5,
      imageUrlMobile: im5mblMobile,
      title: "Computational Linguistics",
      content:
        "We construct language models that empower computers to comprehend...",
    },
    {
      imageUrl: im6,
      imageUrlMobile: im6mblMobile,
      title: "Computer Vision",
      content:
        "Maanz AI excels in computer vision, leveraging advanced technologies...",
    },
    {
      imageUrl: im7,
      imageUrlMobile: im7mblMobile,
      title: "Cyber Security",
      content:
        "Maanz AI pioneers holistic cybersecurity, ensuring digital resilience against evolving threats...",
    },
    {
      imageUrl: im8,
      imageUrlMobile: im8mblMobile,
      title: "Digital Healthcare",
      content:
        "Beyond software solutions, Maanz AI is now at the forefront of healthcare with...",
    },
  ];
  // Custom Arrow Component
  const CustomArrow = ({ onClick, direction }) => (
    <div className={`custom-arrow custom-${direction}`} onClick={onClick}>
      <FontAwesomeIcon
        icon={direction === "prev" ? faChevronLeft : faChevronRight}
      />
    </div>
  );

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableHeight: true,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomArrow direction="prev" />,
    nextArrow: <CustomArrow direction="next" />,
  };

  if (dimensions.width > 1000 && dimensions.width < 1140) {
    sliderSettings.slidesToShow = 4;
  } else if (dimensions.width >= 1140) {
    sliderSettings.slidesToShow = 3;
  } else {
    sliderSettings.slidesToShow = 1;
  }

  const tileData = [
    { title: "6", value: "Tier 1's" },
    { title: "5", value: "OEMs" },
    { title: "70M", value: "Images" },
    { title: "1.8B", value: "Annotation Points" },
    // Add more tiles as needed
  ];

  return (
    <>
      <Helmet>
        <meta
          name="keywords"
          content="Ai & Software Development Company, Best Artificial Intelligence Company"
        ></meta>
        <title>World's Best Ai & Software Development Company | Maanz Ai</title>
        <meta
          name="description"
          content="Maanz Ai is the World's Best Ai & Software Development Company. We specialize in crafting customized solutions with advanced technology for niche clients."
        ></meta>
      </Helmet>
      <section className="gap">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-lg-6 col-md-12 hero-bg">
              <h1 className="main-heading display-md-3">
                <span id="first-part" className="mr-2">
                  Empowering <br />
                  Innovation Through Scalable
                </span>
                <span id="last-word" className="gradient-text">
                  {lastWord}
                </span>
              </h1>
              <p>
                With the help of our expert teams that streamline AI, app
                development, cloud services, and more for cost-effective,
                efficient solutions across various industries.
              </p>
              <Link to="/contact">
                <button className="btn btn-outline-light ">Get Started!</button>
              </Link>
            </div>
            <div className="col-md-6 d-lg-block d-md-none">
              <video
                width="100%"
                height="100%"
                autoPlay
                muted
                loop
                className="hero-gif"
              >
                <source src={main} type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      <section className="gap">
        <div className="container">
          <h2 className="heading text-center">Our Specialized Services</h2>
          <p className="mb-5 text-center">
            Your ultimate destination for a comprehensive array of cutting-edge
            services.
          </p>
          <div className="container">
            <Slider {...sliderSettings}>
              {cardsData.map((card, index) => (
                <div key={index}>
                  <CollapsibleCard
                    imageUrl={
                      dimensions.width > 1140
                        ? card.imageUrl
                        : card.imageUrlMobile
                    }
                    title={card.title}
                    content={card.content}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      <section className="gap">
        <div className="container text-center animation" data-aos="fade-up">
          <h2 className="heading">Offerings</h2>
          <p className="mb-5">
            We are dedicated to delivering top-notch solutions with the right
            talent and infrastructure, <br /> ensuring success in every project
            aspect.
          </p>
          <div className="row align-items-end">
            <div className="col-md-4">
              <img
                src={individual}
                alt="individual"
                className="mb-4 offering-icon"
              />
              <h4 className="mb-5">Indviduals</h4>
            </div>
            <div className="col-md-4">
              <img src={scrum} alt="scum" className="mb-4 offering-icon" />
              <h4 className="mb-5">Scrum Teams</h4>
            </div>
            <div className="col-md-4">
              <img
                src={offshore}
                alt="offshore office"
                className="mb-4 offering-icon"
              />
              <h4 className="mb-5">Offshore Offices</h4>
            </div>
          </div>
        </div>
      </section>

      <div className="container-fluid hero-section">
        <section className="gap ">
          <div className="container text-center animation" data-aos="fade-up">
            <h2 className="heading">Testimonials</h2>
            <p className="mb-5">
              Take a look at testimonials from our prestigious clients and
              witness the impact of our excellence.
            </p>
            <div className="row pt-5">
              <div className="col-12">
                <div
                  id="carouselExampleIndicators"
                  className="carousel slide slider-bg"
                  data-ride="carousel"
                  data-interval="4000"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <p>
                        We were thoroughly impressed with Maanz AI's technical
                        resources, which significantly elevated our projects.
                        The deep tech expertise of their team, coupled with
                        their innovative approach, truly set a new benchmark for
                        excellence. Collaborating with Maanz AI has been a
                        game-changer for us, bringing a level of sophistication
                        and efficiency that surpassed our expectations. They are
                        the gold standard in the AI industry, and we highly
                        recommend their services to anyone seeking cutting-edge
                        solutions.
                      </p>
                      <h4>AAI</h4>
                    </div>
                    <div className="carousel-item">
                      <p>
                        Maanz AI has proven to be an invaluable partner to
                        Bineric. Their annotation services stand out for their
                        precision and meticulous attention to detail. What truly
                        sets them apart is their commitment to understanding our
                        unique project requirements, ensuring that every
                        solution is tailored to our specific needs. This level
                        of customization and care has significantly contributed
                        to the success of our projects. Partnering with Maanz AI
                        has been a game-changer, elevating the quality and
                        efficiency of our operations to new heights.
                      </p>
                      <h4>Bineric</h4>
                    </div>
                    <div className="carousel-item">
                      <p>
                        Our journey with Maanz AI has been marked by exceptional
                        creativity and innovation. They have consistently
                        offered quality solutions that are both effective and
                        efficient. What truly impressed us is their pricing
                        model, which aligns perfectly with our expectations,
                        providing great value for our investment. Maanz AI's
                        approach to problem-solving and their ability to tailor
                        solutions to our specific needs have made a significant
                        impact on our operations. Their blend of creativity,
                        quality, and affordability makes them an ideal partner
                        for any company seeking cutting-edge AI solutions.
                      </p>
                      <h4>Spoor</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-5 pb-5">
              <Link to="/contact">
                <button className="btn btn-outline-light">
                  Start My Journey Now!
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>

      <section className="gap">
        <div className="container animation" data-aos="fade-up">
          <div className="row">
            <div className="col-md-6">
              <h2 className="heading">We Are Here to Support You </h2>
              <p>
                We specialize in crafting customized solutions with advanced
                technology for niche clients. Our team of 500+ experts, possess
                extensive experience and expertise in a comprehensive software
                stack. We deliver cutting-edge solutions tailored to client’s
                unique needs. We are legally registered with:
              </p>
              <div className="row">
                <div className="col-6">
                  <p className="d-flex gap-3">
                    <span>
                      <img src={tick} alt="tick" />
                    </span>
                    PSEB
                  </p>
                </div>
                <div className="col-6">
                  <p className="d-flex gap-3">
                    <span>
                      <img src={tick} alt="tick" />
                    </span>
                    ICCI
                  </p>
                </div>
                <div className="col-6">
                  <p className="d-flex gap-3">
                    <span>
                      <img src={tick} alt="tick" />
                    </span>
                    GPCCI
                  </p>
                </div>
                <div className="col-6">
                  <p className="d-flex gap-3">
                    <span>
                      <img src={tick} alt="tick" />
                    </span>
                    PASHA
                  </p>
                </div>
                <div className="col-6">
                  <p className="d-flex gap-3">
                    <span>
                      <img src={tick} alt="tick" />
                    </span>
                    SOP
                  </p>
                </div>
                <div className="col-6">
                  <p className="d-flex gap-3">
                    <span>
                      <img src={tick} alt="tick" />
                    </span>
                    DUN & BRADSTREET
                  </p>
                </div>
              </div>
              <div className="pt-5 pb-5">
                <Link to="/contact">
                  <button className="btn btn-outline-light">
                    Discover Your Posibilities
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src={cube}
                alt="cube"
                className="img-fluid hover-3d d-none d-lg-block d-md-block d-sm-none"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="gap" data-aos="fade-up">
        <div className="container text-center">
          <h2 className="heading">Milestones</h2>
          <p className="mb-5">
            Maanz AI's trailblazing achievements redefine the future of
            artificial intelligence.
          </p>
          <div>
            <InteractiveTiles data={tileData} />
          </div>
        </div>
      </section>

      <section className="gap left-gradient">
        <div className="container animation" data-aos="fade-up">
          <div className="row">
            <div className="col-md-6 col-sm-12 text-center mb-5">
              <h2 className="heading mb-5 small-gap">Reach Out</h2>
              <form
                className="pr-lg-5 pr-sm-0 mt-5 pt-5"
                onSubmit={handleSubmit}
              >
                <div className="form-row">
                  <div className="form-group col-md-6 mb-5">
                    <input
                      type="text"
                      required
                      className="form-control border-0 border-bottom border-dark custom-input"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="form-group col-md-6 mb-5">
                    <input
                      type="email"
                      required
                      className="form-control border-0 border-bottom border-dark custom-input"
                      id="email"
                      value={email}
                      pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                      placeholder="Enter your email"
                      onChange={(e) => setEmail(e.target.value)}
                      title="Please enter a valid email address"
                    />
                  </div>
                </div>

                <div className="form-group mb-5">
                  <textarea
                    required
                    className="form-control border-0 border-bottom border-dark custom-input"
                    id="message"
                    rows="1"
                    value={message}
                    placeholder="Type your message here"
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>

                <button type="submit" className="btn job-cta w-100">
                  Submit
                </button>
                {success && (
                  <div className="alert alert-success mt-3" role="alert">
                    Email sent successfully!
                  </div>
                )}
                {error && (
                  <div className="alert alert-danger mt-3" role="alert">
                    Please fill in all fields correctly before submitting.
                  </div>
                )}
              </form>
              <div className="vertical-line d-none d-lg-block d-md-none"></div>
            </div>
            <div className="col-md-6 col-sm-12 pl-lg-5 pl-sm-0 ">
              <h2 className="heading mb-5 text-center">Contact US</h2>
              <div className="mb-4 d-flex gap-3 align-items-center">
                <span className="mr-1">
                  <img src={phone} alt="phone-img" />
                </span>
                <h5>+92512895034</h5>
              </div>
              <h5 className="mb-5 d-flex gap-3">
                <span className="mr-1">
                  <img src={mail} alt="mail-icon" />
                </span>
                info@maanz-ai.com
              </h5>

              <h4>Head-Office</h4>
              <h5 className="contact-section-h">USA:</h5>
              <p className="contact-section-p mb-5">
                Maanz AI LLC 312 W 2nd St Unit #A3286 Casper, WY 82601
              </p>

              <h4>Development-Offices</h4>

              <h5 className="contact-section-h">Islamabad:</h5>
              <p className="contact-section-p">
                8th floor North Side, ISE Tower, Jinnah Avenue, Islamabad,
                Pakistan
              </p>
              <h5 className="contact-section-h">Lahore:</h5>
              <p className="contact-section-p">
                The Central 251 Block L - Phase 2, Johar Town, Lahore, Pakistan
              </p>
            </div>
          </div>
          <div className="map text-center animation" data-aos="fade">
            <div className="pt-5">
              <iframe
                title="address"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2925.1081554544735!2d-106.33164712347768!3d42.849449404042566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8760bca480ca44a5%3A0xfcb106b13f74bbc4!2s312%20W%202nd%20St%20a3286%2C%20Casper%2C%20WY%2082601%2C%20USA!5e0!3m2!1sen!2s!4v1704364934271!5m2!1sen!2s"
                width="100%"
                height="300px"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;
