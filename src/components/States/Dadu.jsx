import React from "react";
import PlacesJSON from "../../PlacesJSON";
import StatePage from "../StatePage";
import "../styles/StatePage.css";

function Dadu() {
  const name = "Dadu";
  const image =
    "https://res.cloudinary.com/www-travelpakistani-com/image/upload/w_900,h_360,c_fill,g_auto,q_30,dpr_1.0,f_auto/blogs/trkr2fcamtcthvs7pi2o.webp";
  const arr = ["Gorakh Hill Station","Kirthar National Park","Khudabad Mosque","Laal Shahbaz Qalandar"];
  const visitLocationsData = PlacesJSON.filter((place) =>
    arr.includes(place.name)
  );
  return (
    <div style = {{height:"1700px"}}>
      <StatePage
        stateName={name}
        stateImage={image}
        visitLocationsData={visitLocationsData}
        stateDesc={
          <div className="place__desc">
            <span>
              {" "}
              Dadu, a culturally rich city in Sindh, Pakistan, is known for its 
              proximity to historic sites like the ancient Amri ruins and the 
              spiritual center of Sehwan Sharif. With deep Sufi roots and scenic
              landscapes near the Kirthar Mountains, Dadu offers a unique blend 
              of history, spirituality, and natural beauty.
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

export default Dadu;
