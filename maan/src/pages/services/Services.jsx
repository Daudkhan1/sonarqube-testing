import React, { useState } from "react";
import "../services/services.css";
import { Helmet } from "react-helmet";

import ServicesCustomCard from "./ServicesCustomCard";
import ServicesCustomCardRev from "./ServicesCustomCard_Rev";

import ai1 from "../../assets/services/ai/LLM.webp";
import ai2 from "../../assets/services/ai/ML.webp";
import ai3 from "../../assets/services/ai/NLP.webp";

import ann1 from "../../assets/services/annotation/image.webp";
import ann2 from "../../assets/services/annotation/text.webp";
import ann3 from "../../assets/services/annotation/audio.webp";
import ann4 from "../../assets/services/annotation/video.webp";
import ann5 from "../../assets/services/annotation/lidar.webp";

import app1 from "../../assets/services/app/mobile.webp";
import app2 from "../../assets/services/app/web.webp";

import em1 from "../../assets/services/embed/autosar.webp";
import em2 from "../../assets/services/embed/iot.webp";
import em3 from "../../assets/services/embed/rtos.webp";

import cld1 from "../../assets/services/cloud/cloud.webp";
import cld2 from "../../assets/services/cloud/devops.webp";

import cyber1 from "../../assets/services/cyber/network.webp";
import cyber2 from "../../assets/services/cyber/app.webp";
import cyber3 from "../../assets/services/cyber/iam.webp";
import cyber4 from "../../assets/services/cyber/it.webp";

import sim1 from "../../assets/services/sim/vr.webp";
import sim2 from "../../assets/services/sim/ar.webp";
import sim3 from "../../assets/services/sim/aisim.webp";

import m1 from "../../assets/services/medical/ipd.jpg";
import m2 from "../../assets/services/medical/opd.webp";

import tqs from "../../assets/services/tqs.png";
import cca from "../../assets/services/cca.png";
import se from "../../assets/services/se.png";
import dsa from "../../assets/services/dsa.png";
import sat from "../../assets/services/sat.png";
import ci from "../../assets/services/ci.png";

import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

function Services() {
  const dataSelection1 = [
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

    // Add more data with unique titles as needed
  ];
  const dataSelection2 = [
    {
      id: 5,
      title: "Annotation and Tagging Services",
      subtitle:
        "Proudly delivering top-notch labeling services with precision and reliability.",
      button_title: "LiDAR",
      content:
        "At Maanz AI, our commitment to precision extends to the realm of LiDAR annotation services. Leveraging advanced techniques and cutting-edge tools, our dedicated team excels in annotating LiDAR data. Whether it is identifying objects, classifying point clouds, or generating detailed 3D models, we meet the unique requirements of diverse projects.",
      imageUrl: ann5,
    },
    {
      id: 1,
      title: "Annotation and Tagging Services",
      subtitle:
        "Proudly delivering top-notch labeling services with precision and reliability.",
      button_title: "Image",
      content:
        "At Maanz AI, our image labeling services are unparalleled as our team employs advanced techniques and state-of-the-art tools to ensure that each image is annotated with the utmost accuracy, providing clients with high-quality labeled datasets. ",
      imageUrl: ann1,
    },
    {
      id: 2,
      title: "Annotation and Tagging Services",
      subtitle:
        "Proudly delivering top-notch labeling services with precision and reliability.",
      button_title: "Text",
      content:
        "We also stand out for our exceptional text labeling services. Whether it is sentiment analysis, entity recognition, or text categorization, our team is adept at annotating and tagging textual data with precision.",
      imageUrl: ann2,
    },
    {
      id: 3,
      title: "Annotation and Tagging Services",
      subtitle:
        "Proudly delivering top-notch labeling services with precision and reliability.",
      button_title: "Audio",
      content:
        "At Maanz AI, our team holds expertise in annotating audio datasets. We employ sophisticated techniques and tools to provide clients with labeled datasets that serve as a foundation for developing advanced applications.",
      imageUrl: ann3,
    },
    {
      id: 4,
      title: "Annotation and Tagging Services",
      subtitle:
        "Proudly delivering top-notch labeling services with precision and reliability.",
      button_title: "Video",
      content:
        "When it comes to video data, Maanz AI offers comprehensive video labeling services to meet diverse needs. Whether it is object tracking, action recognition, or scene annotation, our team excels in annotating video content with precision.",
      imageUrl: ann4,
    },

    // Add more data with unique titles as needed
  ];
  const dataSelection3 = [
    {
      id: 1,
      title: "App Development",
      subtitle:
        "From UI/UX to mobile, web, QA, and backend development, we ensure scalable applications.",
      button_title: "Mobile",
      content:
        "At Maanz AI, our mobile app development services are at the forefront of innovation, designed to cater to the dynamic needs of today's mobile landscape. From conceptualization to deployment, we prioritize user experience, performance, and functionality to ensure that clients receive customized and high-quality applications.",
      imageUrl: app1,
    },
    {
      id: 2,
      title: "App Development",
      subtitle:
        "From UI/UX to mobile, web, QA, and backend development, we ensure scalable applications.",
      button_title: "Web",
      content:
        "Our expert web developers are proficient in a range of technologies and frameworks, enabling us to create websites that not only meet but exceed client expectations. Whether it is building from scratch or enhancing existing web applications, our team is dedicated to delivering the best web solutions. ",
      imageUrl: app2,
    },
    // Add more data with unique titles as needed
  ];
  const dataSelection4 = [
    {
      id: 1,
      title: "Embedded Systems",
      subtitle:
        "Specializing in sensor integration, debugging, security, software, and assembly programming for smart industry solutions.",
      button_title: "AUTOSAR",
      content:
        "Our primary expertise within the realm of embedded systems lies in AUTOSAR. We excel in leveraging AUTOSAR's framework for seamless integration, efficient software development, and enhanced communication within complex automotive systems ensuring   that our clients benefit from cutting-edge technology and solutions that meet the highest industry standards. ",
      imageUrl: em1,
    },
    {
      id: 2,
      title: "Embedded Systems",
      subtitle:
        "Specializing in sensor integration, debugging, security, software, and assembly programming for smart industry solutions.",
      button_title: "IOT Integration",
      content:
        "Maanz AI excels in the integration of embedded systems with the Internet of Things (IoT). Our capabilities span from developing IoT-enabled devices to creating robust communication protocols for seamless connectivity. We leverage our expertise to design smart and interconnected embedded solutions, enabling clients to harness the full potential of IoT for their applications.",
      imageUrl: em2,
    },
    {
      id: 3,
      title: "Embedded Systems",
      subtitle:
        "Specializing in sensor integration, debugging, security, software, and assembly programming for smart industry solutions.",
      button_title: "RTOS",
      content:
        "We possess a deep understanding of Real-time Operating Systems. Our expertise extends to designing and implementing embedded systems that require precise and timely responses since our team is adept at utilizing RTOS to ensure optimal performance and reliability.",
      imageUrl: em3,
    },
    // Add more data with unique titles as needed
  ];
  const dataSelection5 = [
    {
      id: 1,
      title: "Cloud Services",
      subtitle:
        "We have cloud expertise in computing platforms, DevOps, scripting, and security, ensuring optimal performance.",
      button_title: "Intercloud Capabilities",
      content:
        "Leveraging the capabilities of Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP) helps us in providing a comprehensive and flexible cloud infrastructure. Our cross-cloud capabilities ensure versatility and the ability to tailor solutions to the unique requirements of diverse projects and clients.",
      imageUrl: cld1,
    },
    {
      id: 2,
      title: "Cloud Services",
      subtitle:
        "We have cloud expertise in computing platforms, DevOps, scripting, and security, ensuring optimal performance.",
      button_title: "DevOps",
      content:
        "In the fast realm of software development, DevOps stands as a transformative philosophy, and at Maanz AI, we embody its principles to drive efficiency and innovation. Our DevOps services are designed to streamline the entire software development lifecycle, from code creation to deployment and beyond. ",
      imageUrl: cld2,
    },
  ];
  const dataSelection6 = [
    {
      id: 1,
      title: "Simulation",
      subtitle:
        "At Maanz AI, we pride ourselves on offering cutting-edge simulation services that transcend traditional boundaries, providing our clients with immersive and realistic experiences.",
      button_title: "Virtual Reality",
      content:
        "From interactive training modules to lifelike scenarios, our VR simulations offer a sensory-rich experience that replicates real-world situations.",
      imageUrl: sim1,
    },
    {
      id: 2,
      title: "Simulation",
      subtitle:
        "At Maanz AI, we pride ourselves on offering cutting-edge simulation services that transcend traditional boundaries, providing our clients with immersive and realistic experiences.",
      button_title: "Augmented Reality",
      content:
        "Augmented Reality simulations are ideal for enhancing real-time decision-making processes. From maintenance procedures to architectural visualization, our goal is to empower users to interact with their environment in ways previously unimaginable. ",
      imageUrl: sim2,
    },
    {
      id: 3,
      title: "Simulation",
      subtitle:
        "At Maanz AI, we pride ourselves on offering cutting-edge simulation services that transcend traditional boundaries, providing our clients with immersive and realistic experiences.",
      button_title: "Reinforcement Learning",
      content:
        "At Maanz AI, our proficiency extends to reinforcement learning, empowering us to design intelligent systems that adapt and learn from experiences, fostering advanced and adaptive AI solutions.",
      imageUrl: sim3,
    },
    // Add more data with unique titles as needed
  ];
  const dataSelection7 = [
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
    // Add more data with unique titles as needed
  ];
  const dataSelection8 = [
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

  const uniqueTitles1 = [
    ...new Set(dataSelection1.map((card1) => card1.button_title)),
  ];
  const uniqueTitles2 = [
    ...new Set(dataSelection2.map((card2) => card2.button_title)),
  ];
  const uniqueTitles3 = [
    ...new Set(dataSelection3.map((card3) => card3.button_title)),
  ];
  const uniqueTitles4 = [
    ...new Set(dataSelection4.map((card4) => card4.button_title)),
  ];
  const uniqueTitles5 = [
    ...new Set(dataSelection5.map((card5) => card5.button_title)),
  ];
  const uniqueTitles6 = [
    ...new Set(dataSelection6.map((card6) => card6.button_title)),
  ];
  const uniqueTitles7 = [
    ...new Set(dataSelection7.map((card7) => card7.button_title)),
  ];
  const uniqueTitles8 = [
    ...new Set(dataSelection8.map((card5) => card5.button_title)),
  ];

  const dataSelections = [
    dataSelection1,
    dataSelection2,
    dataSelection3,
    dataSelection4,
    dataSelection5,
    dataSelection6,
    dataSelection7,
    dataSelection8,
  ];
  const uniqueTitlesArr = [
    uniqueTitles1,
    uniqueTitles2,
    uniqueTitles3,
    uniqueTitles4,
    uniqueTitles5,
    uniqueTitles6,
    uniqueTitles7,
    uniqueTitles8,
  ];

  const [selectedTitles, setSelectedTitles] = useState(
    uniqueTitlesArr.map((titles) => titles[0])
  );

  const handleTitleSelection = (index, button_title) => {
    const newSelectedTitles = [...selectedTitles];
    newSelectedTitles[index] = button_title;
    setSelectedTitles(newSelectedTitles);
  };

  return (
    <>
      <Helmet>
        <meta
          name="keywords"
          content="ai development services, software development services, data labeling services"
        ></meta>
        <title>
          Best Ai development services providers | Ai app development services
        </title>
        <meta
          name="description"
          content="Our engineers can provide you the best AI development services tailored to your needs. Our services are Annotation and Tagging Services, Embedded Systems services, Simulation Services"
        ></meta>
      </Helmet>
      <section className="text-center gap">
        <div className="container   pt-5">
          <div className="hero-text">
            <h2 className="heading">Our Services</h2>
            <p>
              At Maanz AI, our proficiency extends across a dynamic spectrum of
              skills and capabilities, <br /> positioning us as your ideal
              partner for cutting-edge projects.
            </p>
          </div>
        </div>
      </section>

      <section className="">
        <div className="container">
          {dataSelections.map((dataSelection, index) => {
            const CardComponent =
              index % 2 === 0 ? ServicesCustomCard : ServicesCustomCardRev;

            return (
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: index % 2 !== 0 ? "row-reverse" : "row",
                }}
              >
                <CardComponent
                  title={
                    dataSelection.find(
                      (card) => card.button_title === selectedTitles[index]
                    )?.title || ""
                  }
                  subtitle={
                    dataSelection.find(
                      (card) => card.button_title === selectedTitles[index]
                    )?.subtitle || ""
                  }
                  content={
                    dataSelection.find(
                      (card) => card.button_title === selectedTitles[index]
                    )?.content || ""
                  }
                  imageUrl={
                    dataSelection.find(
                      (card) => card.button_title === selectedTitles[index]
                    )?.imageUrl || ""
                  }
                  uniqueTitles={uniqueTitlesArr[index]}
                  handleTitleSelection={(button_title) =>
                    handleTitleSelection(index, button_title)
                  }
                />
              </div>
            );
          })}
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

export default Services;
