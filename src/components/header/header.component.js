import React from 'react';
import {
  HeaderContainer,
  TitleContainer,
  Title,
  LinksContainer,
  HeaderLink,
  TitleShort
} from './header.styles';

const Header = () => (
  <HeaderContainer>
    <TitleContainer to='/ketki-me'>
      <Title>Ketki Bhuyar</Title>
      <TitleShort>Ketki</TitleShort>
    </TitleContainer>
    <LinksContainer>
      <HeaderLink to='/projects'>Projects</HeaderLink>
      <HeaderLink to='/education'>Education</HeaderLink>
    </LinksContainer>
  </HeaderContainer>
);

export default Header;