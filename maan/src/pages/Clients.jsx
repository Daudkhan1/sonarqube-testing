import React, { useState } from "react";
import Footer from "../components/Footer";
import { clientsCard } from "../static/list";
import { Link } from "react-router-dom";

const Clients = () => {
  const [cardList] = useState(clientsCard);
  const [list, setList] = useState(clientsCard);
  const [activeButton, setActiveButton] = useState("all");

  const best = (value) => {
    if (value === "all") {
      setList(cardList);
    } else {
      const newList = cardList.filter((item) => item.key === value);
      setList(newList);
    }
    setActiveButton(value);
  };

  const renderList = () => {
    return list.map((row, id) => (
      <div className="col-lg-4 col-md-6 col-sm-6  mb-4" key={id}>
        <div className="card h-100 p-3 card-bg border-0 mb-5">
          <img src={row.src} alt="pic" className="card-img-top img-fluid" />
          <div className="card-body ">
            <h2 className="card-title card-tag">{row.title}</h2>
            <p className="card-text">{row.btnTitle}</p>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <>
      <section className="gap">
        <div className="container text-center pt-5">
          <h2 className="heading mb-3">We Keep Our Customers Happy</h2>
          <p>
            At Maanz AI, our commitment to excellence is reflected in our
            successful projects across diverse industries.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="d-flex gap-3 mb-5 flex-wrap">
              <button
                className={`client-filter-button ${
                  activeButton === "all" ? "active" : ""
                }`}
                onClick={() => best("all")}
              >
                All
              </button>
              <button
                className={`client-filter-button ${
                  activeButton === "automotive" ? "active" : ""
                }`}
                onClick={() => best("automotive")}
              >
                Automotive
              </button>
              <button
                className={`client-filter-button ${
                  activeButton === "health" ? "active" : ""
                }`}
                onClick={() => best("health")}
              >
                Health
              </button>
              <button
                className={`client-filter-button ${
                  activeButton === "construction" ? "active" : ""
                }`}
                onClick={() => best("construction")}
              >
                Construction
              </button>
              <button
                className={`client-filter-button ${
                  activeButton === "mapping" ? "active" : ""
                }`}
                onClick={() => best("mapping")}
              >
                Mapping
              </button>
              <button
                className={`client-filter-button ${
                  activeButton === "environment" ? "active" : ""
                }`}
                onClick={() => best("environment")}
              >
                Environment
              </button>
              <button
                className={`client-filter-button ${
                  activeButton === "iot" ? "active" : ""
                }`}
                onClick={() => best("iot")}
              >
                IoT
              </button>
            </div>
            {renderList()}
          </div>
        </div>
      </section>

      <section className="gap">
        <div className="container text-center">
          <h2 className="heading">Testimonials</h2>
          <p className="mb-5">
            Take a look at testimonials from our prestigious clients and witness
            the impact of our excellence.
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
                      resources, which significantly elevated our projects. The
                      deep tech expertise of their team, coupled with their
                      innovative approach, truly set a new benchmark for
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
                      unique project requirements, ensuring that every solution
                      is tailored to our specific needs. This level of
                      customization and care has significantly contributed to
                      the success of our projects. Partnering with Maanz AI has
                      been a game-changer, elevating the quality and efficiency
                      of our operations to new heights.
                    </p>
                    <h4>Bineric</h4>
                  </div>
                  <div className="carousel-item">
                    <p>
                      Our journey with Maanz AI has been marked by exceptional
                      creativity and innovation. They have consistently offered
                      quality solutions that are both effective and efficient.
                      What truly impressed us is their pricing model, which
                      aligns perfectly with our expectations, providing great
                      value for our investment. Maanz AI's approach to
                      problem-solving and their ability to tailor solutions to
                      our specific needs have made a significant impact on our
                      operations. Their blend of creativity, quality, and
                      affordability makes them an ideal partner for any company
                      seeking cutting-edge AI solutions.
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

      <Footer />
    </>
  );
};

export default Clients;
