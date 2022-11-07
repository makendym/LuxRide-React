import React from "react";
import "../CSS/safety.css";
import City from "../images/zac-ong-JHN1-mpgXjo-unsplash.jpg";
import background from "../images/maksym-kaharlytskyi-Q9y3LRuuxmg-unsplash.jpg";
import police from "../images/scott-rodgerson-ffH_GkINfyY-unsplash.jpg";
function Safety() {
  return (
    <>
      <div className="about-page">
        <section>
          <div className="float-container">
            <div className="float-child">
              <h1>Our commitment to safety</h1>
              <p>
                We want you to move freely, make the most of your time, and be
                connected to the people and places that matter most to you.
                <br /> <br /> That’s why we’re committed to safety—from the
                creation of new standards to the development of technology with
                the aim of reducing incidents.
              </p>
            </div>{" "}
            <div className="float-child">
              <img src={City} alt="city" width="500" height="300" />
            </div>
          </div>
          <div>
            <div className="float-container2">
              <div>
                <h2> Masks are no longer required</h2>
                <p>
                  Riders and drivers are not required to wear masks when using
                  Uber.* <br />
                  However, the CDC still recommends wearing a mask if you have
                  certain personal risk factors and/or high transmission levels
                  in your area. <br />
                  Remember: many people still feel safer wearing a mask because
                  of personal or family health situations, so please be
                  respectful of their preferences. And if you ever feel
                  uncomfortable, you can always cancel the trip.
                </p>
              </div>

              <div>
                <h2> Updating our no-front-seat policy </h2>
                <p>
                  Riders are no longer required to sit in the back seat.
                  However, to give drivers space, we ask that riders only use
                  the front seat if it’s required because of the size of their
                  group.
                </p>
              </div>
              <div>
                <h2> Thank you for helping take care of one another </h2>
                <p>
                  We know the pandemic has been difficult. But you’ve continued
                  to go the extra mile to help protect our communities—whether
                  it’s wearing a mask, making space for one another, or giving
                  drivers the respect they deserve. Thank you for that.
                  <br />
                  It’s still important to take safety precautions while riding,
                  driving, and delivering. So make sure to roll down the windows
                  for extra airflow, sanitize your hands before and after trips
                  or deliveries, and always cover your cough or sneeze.
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="float-container">
          <div className="float-child">
            <img src={background} alt="background" width="500" height="300" />
          </div>
          <div className="float-child">
            <h1>All drivers are background checked before their first trip</h1>
            <p>
              Before anyone can drive with Uber, they must undergo a multi-step
              safety screen, including being checked for driving violations,
              impaired driving, violent crime, and other checks. In addition,
              Uber rescreens drivers every year¹ and uses technology to look for
              issues in between.
            </p>
          </div>
        </div>
        <div className="float-container">
          <div className="float-child">
            <h1>There’s emergency help if you need it</h1>
            <p>
              In an emergency, speed and accuracy are critical. If you call 911
              from the Uber app, the app displays your live location and trip
              details, so you can share them with the emergency dispatcher. And
              in a growing number of US cities, this information is
              automatically provided to the authorities.
            </p>
          </div>
          <div className="float-child">
            <img src={police} alt="police pic" width="500" height="300" />
          </div>
        </div>
        <div>
          <p>
            *Masks may still be required by law in some areas. Please check your
            local requirements regarding COVID-19 safety protocols. Everyone
            using the Uber platform is required to comply with applicable laws
            and regulations while doing so. <br />
            Screenshots may differ from your in-app experience. The material
            provided on this web page is intended for informational purposes
            only and may not be applicable in your country, region, or city. It
            is subject to change and may be updated without notice.
          </p>
        </div>
      </div>
    </>
  );
}

export default Safety;
