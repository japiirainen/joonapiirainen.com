import React from 'react'
import { css } from '@emotion/core'
import Icons from './Icons'

function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer
            css={css`
                text-align: center;
                color: #ccc;
                font-size: 14px;
            `}
        >
            <Icons />
            <p>© Joona Piirainen {currentYear}</p>
        </footer>
    )
}

export default Footer
