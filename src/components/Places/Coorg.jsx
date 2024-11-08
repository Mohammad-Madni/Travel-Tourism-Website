import React from "react";
import PlacePage from "../PlacePage";

export default function Faizmahal() {
  const images = [
    "http://heritage.eftsindh.com/sites/khairpur/images/thumb_faiz-mahal-02.jpg",
    "http://heritage.eftsindh.com/sites/khairpur/images/thumb_faiz-mahal-03.jpg",
    "http://heritage.eftsindh.com/sites/khairpur/images/thumb_faiz-mahal-05.jpg",
  ];
  const placeName = "Faiz Mahal";
  const stateName = "Khairpur";
  const placeImage = "https://heritage.eftsindh.com/sites/khairpur/images/faiz-mahal-01.jpg";
  return (
    <div>
      <PlacePage
        placeName={placeName}
        id={placeName}
        stateName={stateName}
        placeDesc={
          <div className="place__desc">
            Nestled amid evergreen hills that line the southernmost edge of
            Karnataka is the luscious Kodagu (Coorg) region, gifted with emerald
            landscapes and hectares of plantations. A major centre for coffee
            and spice production, this rural expanse is also home to the Kodava
            people, who are divided into 1000 clans. The uneven terrain and cool
            climate make it a fantastic area for trekking, birdwatching or
            lazily ambling down little-trodden paths winding around carpeted
            hills. All in all, Kodagu is rejuvenation guaranteed
          </div>
        }
        imagesUrl={images}
        placeImage={placeImage}
      />
    </div>
  );
}
