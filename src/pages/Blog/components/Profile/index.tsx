import { Link } from "../../../../components/Link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProfileContainer, ProfileDetails, ProfilePicture } from "./styles";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUserGroup, faBuilding } from "@fortawesome/free-solid-svg-icons";


export function Profile() {
  return (
    <ProfileContainer>
      <ProfilePicture src="https://github.com/Jonatan1103.png"/>

      <ProfileDetails>

        <header>
          <h1>Jonatan Santos</h1>
          <Link text='github' href='#'/>
        </header>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae atque libero omnis optio quidem aliquam sint odio praesentium repellendus quod explicabo voluptate, expedita incidunt, suscipit quaerat veritatis ipsa ratione iure!
        </p>

        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub}/>
            jhow-1103
          </li>

          <li>
            <FontAwesomeIcon icon={faBuilding}/>
            Bertioga
          </li>

          <li>
            <FontAwesomeIcon icon={faUserGroup}/>     
            2 seguidores
          </li>

        </ul>
      </ProfileDetails>
    </ProfileContainer>
  )
}