import { Link } from "../../../../components/Link";
import { ProfileContainer, ProfileDetails, ProfilePicture } from "./styles";

export function Profile() {
  return (
    <ProfileContainer>
      <ProfilePicture src="https://github.com/Jonatan1103.png"/>

      <ProfileDetails>
        <header>
          <h1>Jonatan Santos</h1>
          <Link text='github' href='#'/>
        </header>
      </ProfileDetails>
    </ProfileContainer>
  )
}