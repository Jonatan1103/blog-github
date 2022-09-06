import { Link } from "../../../../components/Link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProfileContainer, ProfileDetails, ProfilePicture } from "./styles";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUserGroup, faBuilding } from "@fortawesome/free-solid-svg-icons";
import { useCallback, useEffect, useState } from "react";
import { api } from "../../../../lib/axios";
import { Spinner } from "../../../../components/Spinner";

interface ProfileData {
  login: string
  bio: string
  avatar_url: string
  htmml_url: string
  name: string
  company?: string
  followers: number
}

export function Profile() {
  const [profileData, setProfileData] = useState<ProfileData>({} as ProfileData)
  const [isLoading, setIsLoading] = useState(true)

  const getProfileData = useCallback(async () => {
    try {
      setIsLoading(true)
      const response = await api.get('/users/Jonatan1103')
      setProfileData(response.data)

    } finally {
      setIsLoading(false)
    }
  }, [profileData])

  useEffect(() => {
    getProfileData()
  }, [])

  return (
    <ProfileContainer>
      {isLoading 
        ? <Spinner /> 
        : (
        <>
          <ProfilePicture src={profileData.avatar_url} />

          <ProfileDetails>

            <header>
              <h1>{profileData.name}</h1>
              <Link
                as="button"
                text='github'
                href={profileData.htmml_url}
                target="_blank"
              />
            </header>

            <p>
              {profileData.bio}
            </p>

            <ul>
              <li>
                <FontAwesomeIcon icon={faGithub} />
                {profileData.login}
              </li>

              {profileData?.company && (
                <li>
                  <FontAwesomeIcon icon={faBuilding} />
                  {profileData.company}
                </li>
              )}

              <li>
                <FontAwesomeIcon icon={faUserGroup} />
                {profileData.followers} seguidores
              </li>

            </ul>
          </ProfileDetails>
        </>
      )}
    </ProfileContainer>
  )
}