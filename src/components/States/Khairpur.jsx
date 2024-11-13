import React from "react";
import StatePage from "../StatePage";
import "../styles/StatePage.css";
import Khairpurimage from "../../videos/khairpur.jpg";
import PlacesJSON from "../../PlacesJSON";

function Khairpur() {
  const arr = ["Kot Diji Fort","Shrine of Sachal Sarmast","Faiz Mahal"];
  const visitLocationData = PlacesJSON.filter((place) =>
    arr.includes(place.name)
  );
  return (
    <div style={{height:"1600px"}}>
      <StatePage
        stateName="Khairpur"
        stateImage={Khairpurimage}
        visitLocationData={visitLocationData}
        stateDesc={
          <div className="place__desc">
            <span>
              {" "}
              Khairpur is a historic city in Sindh, celebrated for its royal palaces,
              rich Sufi heritage, and the stunning architecture of the Khairpur State
              era. It is known for its cultural significance and the lush dates
              that grow in its fertile landscape.
            </span>
          </div>
        }
        visitLocationsData={visitLocationData}
      />
    </div>
  );
}

export default Khairpur;
