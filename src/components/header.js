import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
`
const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`
const MenuLink = styled(Link)`
  color: white;
  text-decoration: none;
`
const MenuList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  margin: 0;
  > li {
    margin-right: 10px;
    margin-bottom: 0;
  }
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <MenuList>
        <li>
          <MenuLink to="/">Home</MenuLink>
        </li>
        <li>
          <MenuLink to="/about">About</MenuLink>
        </li>
      </MenuList>
    </HeaderContainer>
  </HeaderWrapper>
)

export default Header
