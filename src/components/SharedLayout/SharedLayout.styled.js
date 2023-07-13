import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: black;
  }
`;

export const NameLink = styled(NavLink)`
  text-decoration: none;
  color: black;
`;

export const Header = styled.header`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 15px;
  border-bottom: 1px solid black;

  > nav {
    display: flex;
  }

  @media (min-width: 1200px) {
    max-width: 1280px;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  gap: 12px;
`;

export const Name = styled.h3`
  margin: 0;
  cursor: pointer;
  padding: 10px;
  border-radius: 10px;
  transition: color 0.3s ease-in-out;
  &:hover {
    opacity: 0.5;
  }
`;
