import React from "react"
import { css } from "@emotion/core"
import SocialLink from "./SocialLink"
import IgIcon from "../../socialIcons/instagram-brands.svg"
import FbIcon from "../../socialIcons/facebook-square-brands.svg"
import GhIcon from "../../socialIcons/github-brands.svg"
import LiIcon from "../../socialIcons/linkedin-brands.svg"

const Icons = () => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        a {
          margin-top: 2rem;
        }
      `}
    >
      <SocialLink to="instagram">
        <IgIcon />
      </SocialLink>
      <SocialLink to="facebook">
        <FbIcon />
      </SocialLink>
      <SocialLink>
        <GhIcon />
      </SocialLink>
      <SocialLink to="linkdein">
        <LiIcon />
      </SocialLink>
    </div>
  )
}

export default Icons
