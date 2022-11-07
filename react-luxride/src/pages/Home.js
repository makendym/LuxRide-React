import Image from "../images/HomeLogo.png";
import "../CSS/home.css";
import { useState } from "react";
import Login from "../components/login";
import Button from "react-bootstrap/Button";
import { FaSearchLocation } from "react-icons/fa";
import Skyline from "../images/brad-knight-huWlb1NP67w-unsplash.jpg";
import Family from "../images/kateryna-hliznitsova-OVe2JXUS0qY-unsplash.jpg";
function Home() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <section>
        <div className="home">
          <h1 className="home-title">
            <img
              alt=""
              src={Image}
              width="300"
              height="170"
              className="d-inline-block align-top"
            />{" "}
          </h1>
          <div className="home-body">
            <p>
              WITH OUR TECHNOLOGY WE GUARANTY SAFETY <br /> AND COMFORT
            </p>
            <h2>
              Enjoy your ride <br /> in style
            </h2>
            <br />
            <Button
              style={{
                backgroundColor: "white",
                color: "#E2163B",
                borderRadius: "30px",
                textDecoration: "none",
              }}
              variant="link"
              size="lg"
              onClick={() => {
                setOpenModal(true);
              }}
              active
            >
              {<FaSearchLocation />} Let's Ride
            </Button>
          </div>
        </div>
      </section>
      <section className="section1">
        <div className="float-container">
          <div className="float-child">
            <img src={Skyline} alt="skyline" width="600" height="400" />
          </div>
          <div className="float-child">
            <h1>Luxride for Business</h1>
            <p>Transform the way your comopany moves</p>
            <Button
              style={{
                backgroundColor: "white",
                color: "#E2163B",
                borderRadius: "30px",
                textDecoration: "none",
              }}
              variant="link"
              size="lg"
              active
            >
              See how
            </Button>
            {openModal && <Login handleClose={setOpenModal} />}
          </div>
        </div>
      </section>
      <section className="section2">
        <div>
          <h1>Bringing more luxury to every ride</h1>
          <p>
            A ride is more than just a ride. It's a gateway to opportunities and
            jobs. A connection to community. With Luxride you have the option to
            ride in style
          </p>
        </div>
      </section>
      <section className="section3">
        <div className="float-container">
          <div className="float-child">
            <img src={Family} alt="family" width="600" height="400" />
          </div>
          <div className="float-child">
            <h3>Safety</h3>
            <h1>Your safety comes first. Always.</h1>
            <p>
              We look out for you before, during, and after every single ride.
              And we monitor rides to help you get where you need to go. If you
              ever need it, we’re standing by, ready to help.
            </p>
            <div className="button-sec3">
              <Button
                style={{
                  backgroundColor: "white",
                  color: "#E2163B",
                  borderRadius: "30px",
                  textDecoration: "none",
                }}
                variant="link"
                size="lg"
                href="/safety"
                active
              >
                Learn about safety
              </Button>
              <Button
                style={{
                  backgroundColor: "white",
                  color: "#E2163B",
                  borderRadius: "30px",
                  textDecoration: "none",
                }}
                variant="link"
                size="lg"
                active
              >
                Community guidelines
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Home;
