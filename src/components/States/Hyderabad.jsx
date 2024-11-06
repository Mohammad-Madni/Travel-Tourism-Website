import React from "react";
import StatePage from "../StatePage";
import "../styles/StatePage.css";
import PlacesJSON from "../../PlacesJSON";

function Hyderabad() {
  const arr = ["Qadam Gah Mola Ali", "Sindh Museum","University of Sindh Campus"];
  const visitLocationData = PlacesJSON.filter((place) =>
    arr.includes(place.name)
  );
  return (
    <div>
      <StatePage
        stateName="Hyderabad"
        stateImage={"https://www.shutterstock.com/image-photo/hyderabad-navalrai-market-clock-tower-260nw-1561085858.jpg"}
        stateDesc={
          <div className="place__desc">
            <span>
              {" "}
              Hyderabad, one of Sindh’s oldest cities, is a hub of cultural heritage
              and industry, known for its historic sites, bustling bazaars, and vibrant 
              Sindhi traditions. Famous for its handcrafted bangles and rich culinary flavors,
              Hyderabad offers a unique blend of history and modernity, capturing the essence
              of Sindh’s diverse culture.
            </span>
          </div>
        }
        visitLocationsData={visitLocationData}
      />
    </div>
  );
}

export default Hyderabad;
