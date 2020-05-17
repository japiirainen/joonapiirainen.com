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
      <SocialLink href="https://www.instagram.com/japiirainen/" target="_blank">
        <IgIcon />
      </SocialLink>
      <SocialLink
        href="https://www.facebook.com/piirainenjoona/"
        target="_blank"
      >
        <FbIcon />
      </SocialLink>
      <SocialLink href="https://github.com/japiirainen" target="_blank">
        <GhIcon />
      </SocialLink>
      <SocialLink
        href="https://www.linkedin.com/in/joona-piirainen-a026351a8/"
        target="_blank"
      >
        <LiIcon />
      </SocialLink>
    </div>
  )
}

export default Icons
