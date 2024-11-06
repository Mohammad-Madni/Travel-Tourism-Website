import React, { useEffect } from "react";
import { auth } from "../firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import "firebase/compat/auth";
import "./styles/Home.css";
import "firebase/compat/firestore";
import Card from "./Card.jsx";
import AlertDialog from "./mui/AlertDialog.jsx";
import { useHistory } from "react-router-dom";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [user] = useAuthState(auth);
  const history = useHistory();
  if (user)
    return (
      <div className="Home">
        <hr />
        <div className="project">
          <div className="ad">
            <h1>&nbsp;&nbsp;Your Travel Guide is Here</h1>
          </div>
        </div>
        <hr />
        <div className="">
          <h1 className="text-left m-4">
            Hey {user.displayName.split(" ")[0]},
            <br /> Welcome to Travel&Tourism
          </h1>
          <div className="homeDesc"></div>
        </div>
        <div className="project">
          <p>
            <h2 className="mainHeadings">&nbsp;&nbsp;About our Project</h2>
          </p>
          <div className="project_desc">
            Going out for travel and tourism is a much-needed escape from our
            daily routine as it helps us rejuvenate with our cultural & heritage
            sites and gives us the dose of joy and entertainment that we usually 
            miss out due to our busy work schedule.
            Once deciding to go out on a trip planning one can be quite tricky 
            and overwhelming in some cases, especially for people with no prior
            knowledge or experience travelling and going out for a trip.​
            <br />Our Project aims at solving this problem, by creating a ​
            website that gives a detailed overview regarding all the​ famous and
            well-known tourist locations in Sindh. Any ​ person shall be able to
            open the site and simply choose a city they would like to
            visit and our website shall ​ provide them with details of the
            famous locations and ​ sites that are worth visiting in that city.
            ​
          </div>
        </div>

        <div className="travel" id="travel">
          <div className="filler"></div>
          <h1 className = "headingStates">Sites to Travel</h1>
          <div className="filler2"></div>
          <Card
            photoUrl={
              "https://preview.redd.it/6xl3fgbqf7r71.jpg?width=1080&crop=smart&auto=webp&s=be1b299df60eba703b97cfef281a95bea12ea61b"
            }
            name={"Khairpur"}
            description={
              "Khairpur is a historic city in Sindh, celebrated for its royal palaces, rich Sufi heritage, and the stunning architecture of the Khairpur State era. It is known for its cultural significance and the lush dates."
            }
            key={Math.random()}
          />
          <Card
            photoUrl={
              "https://res.cloudinary.com/www-travelpakistani-com/image/upload/w_900,h_360,c_fill,g_auto,q_30,dpr_1.0,f_auto/blogs/trkr2fcamtcthvs7pi2o.webp"
            }
            name={"Dadu"}
            description={
              "Dadu, is known for its rich cultural heritage and proximity to the stunning landscapes of Gorakh Hill, Sindh's only hill station. Famous for its folk traditions and historic sites, Dadu offers a blend of natural beauty and cultural depth, making it a unique destination in the province."
            }
            key={Math.random()}
          />
          
          <Card
            photoUrl={
              "https://as2.ftcdn.net/v2/jpg/09/09/92/75/1000_F_909927545_hNTqA4mo0nbOnNx7byoEtGGa2qXOn6yD.jpg"
            }
            name={"Larkana"}
            description={
              "Larkana is a historic city in Sindh, renowned for its rich cultural heritage and as the gateway to the ancient Indus Valley site of Mohenjo-Daro. It reflects a blend of ancient traditions and vibrant local culture."
            }
            key={Math.random()}
          />

          <Card
            photoUrl={
              "https://www.shutterstock.com/image-photo/hyderabad-navalrai-market-clock-tower-260nw-1561085858.jpg"
            }
            name={"Hyderabad"}
            description={
              "Hyderabad, one of Sindh’s oldest cities, is a hub of cultural heritage and industry, known for its historic sites, bustling bazaars, and vibrant Sindhi traditions. Famous for its handcrafted bangles and rich culinary flavors,"
            }
            key={Math.random()}
          />
          <Card
            photoUrl={
              "https://scontent.fisb3-2.fna.fbcdn.net/v/t1.6435-9/118155790_753993272107854_4659717914789119718_n.jpg?stp=dst-jpg_p180x540&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=IgThhtdQkhUQ7kNvgH59e5u&_nc_zt=23&_nc_ht=scontent.fisb3-2.fna&_nc_gid=A2SuJ--oBJnNzPQSWfILPLD&oh=00_AYA_ywIl6vXcSVawREml6-bQPw7gYeR9qeVCCLQu8rAUfg&oe=67531885"
            }
            name={"Umarkot"}
            description={
              "Umarkot, a historic city is celebrated as the birthplace of the Mughal Emperor Akbar and is known for its ancient fort, rich folklore, and vibrant Hindu-Muslim cultural blend. This city embodies a unique heritage, drawing visitors to its architectural landmarks and traditional festivals."
            }
            key={Math.random()}
          />

        </div>
      </div>
    );
  else
    return (
      <div className="pls-login">
        <AlertDialog
          heading="Login Required"
          exit="Quit"
          confirmText="Proceed to Login Page"
          text="Please login to continue to view Places and Destinations"
          main={() => {
            history.push("/login");
          }}
          quit={() => {
            history.push("/");
          }}
        />
      </div>
    );
}

export default Home;
