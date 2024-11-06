import React from "react";
import StatePage from "../StatePage";
import "../styles/StatePage.css";

function Umarkot() {
  const name = "Umarkot";
  const image =
    "https://scontent.fisb3-2.fna.fbcdn.net/v/t1.6435-9/118155790_753993272107854_4659717914789119718_n.jpg?stp=dst-jpg_p180x540&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=IgThhtdQkhUQ7kNvgH59e5u&_nc_zt=23&_nc_ht=scontent.fisb3-2.fna&_nc_gid=A2SuJ--oBJnNzPQSWfILPLD&oh=00_AYA_ywIl6vXcSVawREml6-bQPw7gYeR9qeVCCLQu8rAUfg&oe=67531885";

  const visitLocationsData = [
    {
      name: "Umerkot Fort, Akbar's birthplace",
      image:
        "https://scontent.fisb3-2.fna.fbcdn.net/v/t1.6435-9/118155790_753993272107854_4659717914789119718_n.jpg?stp=dst-jpg_p180x540&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=IgThhtdQkhUQ7kNvgH59e5u&_nc_zt=23&_nc_ht=scontent.fisb3-2.fna&_nc_gid=A2SuJ--oBJnNzPQSWfILPLD&oh=00_AYA_ywIl6vXcSVawREml6-bQPw7gYeR9qeVCCLQu8rAUfg&oe=67531885",
      desc: "Umarkot, a historic city is celebrated as the birthplace of the Mughal Emperor Akbar & is known for its ancient fort, rich folklore, and vibrant Hindu-Muslim cultural blend. This city embodies a unique heritage, drawing visitors to its architectural landmarks and traditional festivals.",
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

export default Umarkot;
