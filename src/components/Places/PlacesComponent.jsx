import React, { useEffect } from "react";
import PlacePage from "../PlacePage";
export function Faizpalace() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const images = [
    "https://upload.wikimedia.org/wikipedia/commons/f/fd/FaizMahal.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXgbgtYABn_miTZGFKENhSbbuN1SmccbPVyw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnGSRJf06Mz9ppGT6uMVint5Wx9PPyvSNhNMmiBjDVqSB9jxxc-sngFQ1G-WiXJe29ht4&usqp=CAU",
  ];
  const placeName = "Faiz Mahal";
  const stateName = "Khairpur";
  const placeImage =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVCHIQ8vqWc-Cmjv6HcLzKkcee5wDI-jm-1g&s";
  return (
    <div>
      <PlacePage
        placeName={placeName}
        id={placeName}
        stateName={stateName}
        placeDesc={
          <div>
            It was built by Mir Sohrab Khan in 1798 as the principal building serving
            as the sovereign's court for the royal palace complex of Talpur monarchs 
            of the Khairpur dynasty. Originally it included the ruler's chambers along
            with 16 waiting rooms for courtiers and guest rooms for royal guests alongside
            the durbar and dining halls. Additionally there was the Hathi Khana for 
            the royal elephant and the horses stables where there is a mango orchard today.
          </div>
        }
        imagesUrl={images}
        placeImage={placeImage}
      />
    </div>
  );
}
export function Manali() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const images = [
    "https://www.iwmbuzz.com/wp-content/uploads/2021/05/varanasi-the-country-of-gods-a-must-visit-pilgrimage-that-will-change-the-way-you-live.jpg",
    "https://www.iwmbuzz.com/wp-content/uploads/2021/05/varanasi-the-country-of-gods-a-must-visit-pilgrimage-that-will-change-the-way-you-live.jpg",
    "https://www.iwmbuzz.com/wp-content/uploads/2021/05/varanasi-the-country-of-gods-a-must-visit-pilgrimage-that-will-change-the-way-you-live.jpg",
  ];
  const placeName = "Manali";
  const stateName = "Himachal Pradesh";
  const placeImage =
    "https://digitalnomads.world/wp-content/uploads/2021/06/manali-digital-nomads.jpg";
  return (
    <div>
      <PlacePage
        placeName={placeName}
        id={placeName}
        stateName={stateName}
        placeDesc={
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet alias
            aperiam blanditiis temporibus rerum doloribus consequuntur hic
            dolores, voluptatum perferendis nobis beatae, sapiente omnis
            similique dolorum qui soluta voluptate maiores. Repudiandae
            doloremque sequi atque beatae molestiae sint tempore aspernatur
            cumque. Delectus nesciunt blanditiis laborum vel, aliquam
            dignissimos quidem voluptas earum!
          </div>
        }
        imagesUrl={images}
        placeImage={placeImage}
      />
    </div>
  );
}
export function AmberFort() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const images = ["", "", ""];
  const placeName = "Amber Fort";
  const stateName = "Rajasthan";
  const placeImage =
    "https://cdn.britannica.com/50/152850-050-2DB7645E/Wall-centre-background-Amer-Palace-Sun-Gate.jpg";
  return (
    <div>
      <PlacePage
        placeName={placeName}
        id={placeName}
        stateName={stateName}
        placeDesc={
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet alias
            aperiam blanditiis temporibus rerum doloribus consequuntur hic
            dolores, voluptatum perferendis nobis beatae, sapiente omnis
            similique dolorum qui soluta voluptate maiores. Repudiandae
            doloremque sequi atque beatae molestiae sint tempore aspernatur
            cumque. Delectus nesciunt blanditiis laborum vel, aliquam
            dignissimos quidem voluptas earum!
          </div>
        }
        imagesUrl={images}
        placeImage={placeImage}
      />
    </div>
  );
}
export function HawaPalace() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const images = ["", "", ""];
  const placeName = "Hawa Mahal";
  const stateName = "Rajasthan";
  const placeImage =
    "https://powcb.b-cdn.net/wp-content/uploads/2013/11/HawaMahal-Jaipur.jpg";
  return (
    <div>
      <PlacePage
        placeName={placeName}
        id={placeName}
        stateName={stateName}
        placeDesc={
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet alias
            aperiam blanditiis temporibus rerum doloribus consequuntur hic
            dolores, voluptatum perferendis nobis beatae, sapiente omnis
            similique dolorum qui soluta voluptate maiores. Repudiandae
            doloremque sequi atque beatae molestiae sint tempore aspernatur
            cumque. Delectus nesciunt blanditiis laborum vel, aliquam
            dignissimos quidem voluptas earum!
          </div>
        }
        imagesUrl={images}
        placeImage={placeImage}
      />
    </div>
  );
}
export function RedFort() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const images = ["", "", ""];
  const placeName = "Red Fort";
  const stateName = "Delhi";
  const placeImage =
    "https://www.culturalindia.net/iliimages/Red-Fort-ili-276-img-1.jpg";
  return (
    <div>
      <PlacePage
        placeName={placeName}
        id={placeName}
        stateName={stateName}
        placeDesc={
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet alias
            aperiam blanditiis temporibus rerum doloribus consequuntur hic
            dolores, voluptatum perferendis nobis beatae, sapiente omnis
            similique dolorum qui soluta voluptate maiores. Repudiandae
            doloremque sequi atque beatae molestiae sint tempore aspernatur
            cumque. Delectus nesciunt blanditiis laborum vel, aliquam
            dignissimos quidem voluptas earum!
          </div>
        }
        imagesUrl={images}
        placeImage={placeImage}
      />
    </div>
  );
}
export function CityPalace() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const images = ["", "", ""];
  const placeName = "City Palace";
  const stateName = "Udaipur,Rajasthan";
  const placeImage =
    "https://www.tripsavvy.com/thmb/F_XTmhy0PnapFJHi9qucbjU2tqQ=/1885x1414/smart/filters:no_upscale()/GettyImages-186667847-5c6c8e88c9e77c0001f24ee2.jpg";
  return (
    <div>
      <PlacePage
        placeName={placeName}
        id={placeName}
        stateName={stateName}
        placeDesc={
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet alias
            aperiam blanditiis temporibus rerum doloribus consequuntur hic
            dolores, voluptatum perferendis nobis beatae, sapiente omnis
            similique dolorum qui soluta voluptate maiores. Repudiandae
            doloremque sequi atque beatae molestiae sint tempore aspernatur
            cumque. Delectus nesciunt blanditiis laborum vel, aliquam
            dignissimos quidem voluptas earum!
          </div>
        }
        imagesUrl={images}
        placeImage={placeImage}
      />
    </div>
  );
}
