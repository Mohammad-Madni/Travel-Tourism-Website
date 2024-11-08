import React from "react";
import PlacePage from "../PlacePage";

export default function Faizmahal() {
  const images = [
    "http://heritage.eftsindh.com/sites/khairpur/images/thumb_faiz-mahal-02.jpg",
    "http://heritage.eftsindh.com/sites/khairpur/images/thumb_faiz-mahal-03.jpg",
    "http://heritage.eftsindh.com/sites/khairpur/images/thumb_faiz-mahal-05.jpg",
  ];
  const placeName = "Faizmahal";
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
            Faiz Mahal, located in Khairpur, Sindh, is a stunning
            18th-century palace built by the Talpur Mirs as a symbol
            of royal grandeur and architectural elegance. Known for
            its intricate design and lush gardens, the palace reflects
            the rich history and cultural heritage of the Khairpur State,
            making it a significant landmark in Sindh.
          </div>
        }
        imagesUrl={images}
        placeImage={placeImage}
      />
    </div>
  );
}
