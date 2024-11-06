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
        stateDesc={
          <div className="place__desc">
            <span>
              {" "}
              Khairpur is a historic city in Sindh, celebrated for its royal palaces,
              rich Sufi heritage, and the stunning architecture of the Khairpur State
              era. It is known for its cultural significance and the lush dates
              that grow in its fertile landscape.
            </span>
            <p>
              <hr />
              The city is home to stunning palaces, including the majestic Faiz Mahal,
              and is deeply rooted in Sufi culture, attracting visitors to its revered
              shrines and festivals. Known for its abundant date orchards, 
              Khairpur offers a unique blend of heritage, architecture, and 
              natural beauty, making it a fascinating destination for those exploring
              Sindh’s cultural landscape.
            </p>
          </div>
        }
        visitLocationsData={visitLocationData}
      />
    </div>
  );
}

export default Khairpur;
