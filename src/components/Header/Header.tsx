import React from 'react'
import { Typography } from '../Typography/Typography';
import { GoMarkGithub } from "react-icons/go";
import { HeaderContainer, Logo } from './style';


const Header = () => {
  return (
    <HeaderContainer>
      <Typography size="h2">
        <Logo><GoMarkGithub size="1.4em" style={{ color: '#33728f' }} /></Logo>

        GITHUB Search Repositories
      </Typography>
    </HeaderContainer>
  )
}

export default Header
