import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const HeaderContainer = styled.div`
  width: 100%;
  padding: 0 20px;
  height: 80px;
  background-color: rgb(233 229 229 / 52%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media screen and (max-width: 600px) {
    padding: 0 5px;
  }
`;

export const TitleContainer = styled(Link)`
  display: grid;
  place-items: center;
  color: black;
  text-decoration: none;
  height: 100%;
  margin: 15px;
`;

export const Title = styled.p`
  color: #444;
  font-family: sans-serif;
  font-size: 26px;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const TitleShort = styled.p`
  display: none;
  color: #444;
  font-family: sans-serif;
  font-size: 26px;
  @media screen and (max-width: 600px) {
    display: unset;
  }
`;

export const LinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media screen and (max-width: 600px) {
    justify-content: center;
  }
`;

export const HeaderLink = styled(Link)`
  display: grid;
  place-items: center;
  height: 100%;
  text-decoration: none;
  color: black;
  padding: 10px 15px;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  transition: all .3s;
  @media screen and (max-width: 600px) {
    padding: 10px 10px;
    font-size: 14px;
  }
  :hover {
    padding-bottom: 15px;
    border-bottom: 2px solid gray;
  }
`;