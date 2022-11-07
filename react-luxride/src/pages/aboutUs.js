import React from "react";
import Conor from "../images/connor-wang-3ttFTqPQs5A-unsplash.jpg";
import Dan from "../images/dan-gold-kARZuSYMfrA-unsplash.jpg";
import Highway from "../images/fahrul-azmi-zN4mtLHkHn4-unsplash.jpg";
import carPic from "../images/roberto-nickson-Yp9FdEqaCdk-unsplash.jpg";
import "../CSS/about.css";
function About() {
  return (
    <>
      <div className="about-page">
        <section>
          <div className="about-title">
            <h1>About Us</h1>
          </div>
          <div className="about-text">
            <h2>We reimagine the way the world moves for the better</h2>
            <p>
              Movement is what we power. It’s our lifeblood. It runs through our
              veins. It’s what gets us out of bed each morning. It pushes us to
              constantly reimagine how we can move better. For you. For all the
              places you want to go. For all the things you want to get. For all
              the ways you want to earn. Across the entire world. In real time.
              At the incredible speed of now.
            </p>
          </div>
          <div className="float-container">
            <div className="float-child">
              <img src={Conor} alt="Conor" width="600" height="400" />
            </div>
            <div className="float-child">
              <h2> Rides and beyond </h2>
              <p>
                In addition to helping riders find a way to go from point A to
                point B, we're helping people order food quickly and affordably,
                removing barriers to healthcare, creating new freight-booking
                solutions, and helping companies provide a seamless employee
                travel experience. And always helping drivers and couriers earn.
                <br/><br/>We are a tech company that connects the physical and digital
                worlds to help make movement happen at the tap of a button.
                Because we believe in a world where movement should be
                accessible. So you can move and earn safely. In a way that’s
                sustainable for our planet. And regardless of your gender, race,
                religion, abilities, or sexual orientation, we champion your
                right to move and earn freely and without fear. Of course, we
                haven’t always gotten it right. But we’re not afraid of failure,
                because it makes us better, wiser, and stronger. And it makes us
                even more committed to do the right thing by our customers,
                local communities and cities, and our incredibly diverse set of
                international partners.
              </p>
            </div>
          </div>
          <div>
            <div className="float-container2">
              <div className="float-child1">
                <img src={Dan} alt="Dan" width="300" height="200" />
              </div>
              <div>
                <h2> Who's driving LuxRide </h2>
                <p>
                  We’re building a culture within Uber that emphasizes doing the
                  right thing, period, for riders, drivers, and employees. Find
                  out more about the team that’s leading the way.
                </p>
              </div>
              <div className="float-child2">
                <img src={Highway} alt="Highway" width="300" height="200" />
              </div>
              <div>
                <h2> Getting diversity right </h2>
                <p>
                  It’s our goal to create a workplace that is inclusive and
                  reflects the diversity of the cities we serve—where everyone
                  can be their authentic self, and where that authenticity is
                  celebrated as a strength. By creating an environment where
                  people from every background can thrive, we’ll make Uber a
                  better company—for our employees and our customers.
                </p>
              </div>
              <div className="float-child3">
                <img src={carPic} alt="CarPic" width="300" height="200" />
              </div>
              <div>
                <h2> Acting with integrity </h2>
                <p>
                  Uber's Ethics & Compliance Program Charter outlines our
                  commitment to integrity at the highest levels within the
                  company. Transparency is critical to an ethical culture; we
                  achieve this through our Integrity Helpline and suite of
                  scalable and effective compliance initiatives
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
export default About;
