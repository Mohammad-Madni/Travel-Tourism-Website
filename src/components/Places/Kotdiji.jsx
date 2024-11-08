import React from "react";
import PlacePage from "../PlacePage";

export default function Kotdiji() {
  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTChzLOElHugGTPOc8ansu7B-bsU1curI61Lw&s",
    "https://img.freepik.com/premium-photo/kot-diji-fort-fortress-ahmadabad-khairpur-district-pakistan_134785-18665.jpg",
    "https://t3.ftcdn.net/jpg/05/06/36/04/360_F_506360495_D56kLjbc4QE2PGra2BElUKjHpsFGv8Wt.jpg",
  ];
  const placeName = "Kot Diji Fort";
  const stateName = "Khairpur";
  const placeImage =
    "https://t4.ftcdn.net/jpg/03/83/14/87/360_F_383148722_kKBgCNLFRbzk5Ys2ArX7da8tQ1MwpONQ.jpg";
  return (
    <div>
      <PlacePage
        placeName={placeName}
        id={placeName}
        stateName={stateName}
        placeDesc={
          <div>
            Kot Diji Fort, located near Khairpur in Sindh, Pakistan, 
            is a historic fortification built by the Talpur dynasty in 
            the 18th century. Known for its strategic hilltop position 
            and robust structure, the fort exemplifies ancient military 
            architecture and offers panoramic views, standing as a symbol 
            of Sindh’s rich historical and cultural legacy.
          </div>
        }
        imagesUrl={images}
        placeImage={placeImage}
      />
    </div>
  );
}
