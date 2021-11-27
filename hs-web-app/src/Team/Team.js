import React from "react";
import './Team.css';
import { RayProfile } from "./Components/RayProfile/RayProfile"
import { TeamIntroduction } from "./Components/TeamIntroduction/TeamIntroduction"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Semester } from './Components/Semester/Semester'
gsap.registerPlugin(ScrollTrigger);

const query = `{
  teamCollection {
    items{
      name
      avatar{
        url
      }
      title
      organization
    	semester
      otherInfo
      link
      position
    }
  }
}
`;


function Team() {

  const [teamData, setTeamData] = React.useState([]);

  const spring2021Key = "Spring_2021";
  const fall2020Key = "Fall_2020";
  const fall2021Key = "Fall_2021";
  const semesterMap = new Map();
  semesterMap.set(spring2021Key, "Members in 2021 Spring");
  semesterMap.set(fall2020Key, "Members in 2020 Fall");
  semesterMap.set(fall2021Key, "Members in 2021 Fall");

  React.useEffect(() => {
    window.fetch(process.env.REACT_APP_CONTENFULSPACE, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Authenticate the request
        Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
      },
      // send the GraphQL query
      body: JSON.stringify({ query }),
    })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }

        setTeamData(data.teamCollection.items);
      });
  }, []);

  const getRayProfileData = () => {
    var rayProfile = teamData.filter(x => x.semester === "Professor");
    if (rayProfile.length > 0) {
      return rayProfile[0];
    }
    return null;
  }

  return (
    <div>
      <TeamIntroduction />
      <RayProfile data={getRayProfileData()} />
      <Semester semesterName={semesterMap.get(fall2021Key)} profileList={teamData.filter(x => x.semester === fall2021Key).reverse()} id={fall2021Key} />
      <Semester semesterName={semesterMap.get(spring2021Key)} profileList={teamData.filter(x => x.semester === spring2021Key).reverse()} id={spring2021Key} />
      <Semester semesterName={semesterMap.get(fall2020Key)} profileList={teamData.filter(x => x.semester === fall2020Key).reverse()} id={fall2020Key} />
    </div>
  );
}

export default Team;
