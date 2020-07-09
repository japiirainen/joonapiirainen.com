import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { Link } from 'gatsby'
import DarkModeToggle from './DarkModeToggle'

const NavLink = styled(Link)`
    text-decoration: none;
    font-size: 1rem;
    font-weight: ${(props) => props.fontWeight || 'normal'};
    line-height: 1;
    margin: 0 0.5rem 0 0;
    padding: 0.25rem;

    &.current-page {
        border-bottom: 2px solid #222;
    }

    &:last-of-type {
        margin-right: 0;
    }
`

const Header = () => (
    <header
        css={css`
            border-bottom: 1.5px dashed #555;
            display: flex;
            justify-content: space-between;
            padding: 0.5rem calc((100vw - 550px - 0.5rem) / 2);

            .jp {
                font-size: 1.3rem;

                @media (max-width: 850px) {
                    font-size: 0.9rem;
                }
            }
            .contact {
                margin: 1rem;

                @media (max-width: 850px) {
                    font-size: 0.8rem;
                }
            }
        `}
    >
        <DarkModeToggle />
        <NavLink to="/" fontWeight="bold" className="jp">
            joonapiirainen.com
        </NavLink>

        <nav
            css={css`
                margin-top: 0;
            `}
        >
            <NavLink
                to="/contact/"
                activeClassName="current-page"
                className="contact"
            >
                Contact
            </NavLink>
        </nav>
        {}
    </header>
)

export default Header
