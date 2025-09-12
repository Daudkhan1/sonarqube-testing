import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Gallery from "../components/gallery";
import pic1 from "../assets/MaanzLife/1.webp";
import pic2 from "../assets/MaanzLife/2.webp";
import pic3 from "../assets/MaanzLife/3.webp";
import pic4 from "../assets/MaanzLife/4.webp";
import pic5 from "../assets/MaanzLife/5.webp";
import pic6 from "../assets/MaanzLife/6.webp";
import pic7 from "../assets/MaanzLife/7.webp";
import pic8 from "../assets/MaanzLife/8.webp";
import pic9 from "../assets/MaanzLife/9.webp";
import pic10 from "../assets/MaanzLife/10.webp";
import pic11 from "../assets/MaanzLife/11.webp";
import pic12 from "../assets/MaanzLife/12.webp";

function Career() {
  const galleryImages = [
    {
      img: pic1,
    },
    {
      img: pic2,
    },
    {
      img: pic3,
    },
    {
      img: pic4,
    },
    {
      img: pic5,
    },
    {
      img: pic6,
    },
    {
      img: pic7,
    },
    {
      img: pic8,
    },
    {
      img: pic9,
    },
    {
      img: pic10,
    },
    {
      img: pic11,
    },
    {
      img: pic12,
    },
  ];
  return (
    <>
      <section className="gap">
        <div className="container text-center  p-lg-5">
          <div>
            <h2 className="heading">
              Become A Valued Member Of A Community That Prioritizes Growth And
              Respect!
            </h2>
            <p className="mt-3">
              At Maanz AI, we embrace an open-door policy, fostering a
              feedback-oriented mindset that encourages continual learning and
              improvement.
            </p>
            <Link
              to="https://www.linkedin.com/company/maanz-ai/jobs/"
              target="blank"
            >
              <button className="btn btn-lg job-cta mt-3">
                See Open Positions
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="pt-5">
        <div className="container text-center">
          <h2 className="heading">Life at Maanz AI</h2>
          <p className="mb-5">
            We at Maanz AI are committed to nurturing a positive culture that
            empowers every member of our team to <br /> perform to their full
            potential.
          </p>

          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item"
              title="YouTube video"
              src="https://www.youtube.com/embed/vRp1wtzxwnw"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      <section className="gap">
        <div className="container text-center">
          <h2 className="heading"> Events</h2>
          <p>
            With a collective strength of 500+ skilled individuals, our
            cornerstones are productivity, responsibility, and accountability.
            <br /> But it is not just about putting in the hours, there is more
            to our story.
          </p>
          <div className="d-flex">
            <Gallery galleryImages={galleryImages} />
          </div>
        </div>
      </section>

      <section className="gap right-gradient">
        <div className="container text-center">
          <h3 className="mb-5 heading">Perks & Benefits</h3>
          <p>
            At Maanz AI, we love to look after the well-being of our talented
            employees. This is evident from the <br /> wide array of benefits we
            offer to them.
          </p>
          <div className="row text-center">
            <div className="col-md-4  p-box perk div-border">
              Health Insurance
            </div>
            <div className="col-md-4  p-box div-border">Paid Annual Leaves</div>
            <div className="col-md-4  p-box perk div-border">Sport & Gym</div>
            <div className="col-md-4  p-box div-border">Fuel Allowance</div>
            <div className="col-md-4  p-box perk div-border">
              Certifications & Trainings
            </div>
            <div className="col-md-4  p-box div-border">
              Thirteen Salary Incentive
            </div>
          </div>
          <div className="pt-5 pb-5">
            <Link
              to="https://www.linkedin.com/company/maanz-ai/jobs/"
              target="blank"
            >
              <button className=" btn btn-lg job-cta mt-3">
                Career Opportunities
              </button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Career;
