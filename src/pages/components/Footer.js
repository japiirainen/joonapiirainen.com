import React from "react";
import { css } from "@emotion/core"




function Footer() {
  const currentYear = new Date().getFullYear();

  

  return (
    <footer
    css={css`
    position: absolute;
    text-align: center;
    justify-content: center;
    bottom: 0;
    width: 100%;
    height: 2.5rem;
    color: #ccc;
    font-size: 14px;
    `}
    >
      <p>© Joona Piirainen {currentYear}</p>
    </footer>
  );
}

export default Footer;