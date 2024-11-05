import React from "react";
import StatePage from "../StatePage";
import "../styles/StatePage.css";

function Larkana() {
  const name = "Larkana";
  const image =
    "https://as1.ftcdn.net/v2/jpg/09/09/92/72/1000_F_909927270_ku8rHDFsNgltCz9M8oexXFWcZ0HTA101.jpg";

  const visitLocationsData = [
    {
      name: "place name",
      image:
        "https://as1.ftcdn.net/v2/jpg/09/09/92/72/1000_F_909927270_ku8rHDFsNgltCz9M8oexXFWcZ0HTA101.jpg",
      desc: "Description of the place",
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

export default Larkana;
