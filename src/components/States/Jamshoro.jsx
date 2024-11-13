import React from "react";
import StatePage from "../StatePage";
import "../styles/StatePage.css";

function Jamshoro() {
  const name = "Jamshoro";
  const image =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHpM2gydYopV2mg0M6ZRDnurqPGy5jtoQM3EghYGlEjt4SoOOcVyGpOOHm8erHfEbaWOE&usqp=CAU";

  const visitLocationsData = [
    {
      name: "Ranikot Fort, Kirthar National Park",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHpM2gydYopV2mg0M6ZRDnurqPGy5jtoQM3EghYGlEjt4SoOOcVyGpOOHm8erHfEbaWOE&usqp=CAU",
      desc: "Jamshoro is a city and the capital of Jamshoro District, located in Sindh, Pakistan. It is on the right bank of the Indus River, approximately 18 km northwest of Hyderabad and 150 km northeast from the provincial capital of Sindh, Karachi. This city is popularly known as Education City.",
    },
  ];
  return (
    <div>
      <StatePage
        stateName={name}
        stateImage={image}
        visitLocationsData={visitLocationsData}
        stateDesc={
          <div className="state-desc">
            <span>
              {" "}
              State Description goes here <br />
              State Description goes here
            </span>
            <span>
              State Description goes here
              <br />
              State Description goes here
            </span>
          </div>
        }
      />
    </div>
  );
}

export default Jamshoro;
