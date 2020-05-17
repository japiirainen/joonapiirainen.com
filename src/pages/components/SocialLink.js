import styled from "@emotion/styled"
import { Link } from "gatsby"

const SocialLink = styled(Link)`
  color: #555;
  svg {
    margin: 5px;
    padding: 15px;
    width: 30px;
    height: 30px;
  }

  svg:hover {
    opacity: 0.7;
  }
`

export default SocialLink
