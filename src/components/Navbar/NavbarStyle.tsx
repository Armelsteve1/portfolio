import styled from 'styled-components';

export const NavbarContainer = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
  max-width: 1000px;
  background: rgba(26, 26, 26, 0.7);
  backdrop-filter: blur(12px);
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  border: 1px solid #333;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    font-size: 1rem;
    display: flex;
    align-items: center;
    padding: 10px 20px;
    border-radius: 8px;
    transition:
      background-color 0.3s,
      color 0.3s;

    &.active {
      background-color: #4d00ca;
      color: #fff;
    }

    &:hover {
      color: #ccc;
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 1.5em;

  img {
    margin-right: 10px;
    height: 30px;
  }
`;

export const FooterInfo = styled.div`
  color: #ccc;
  font-size: 0.9rem;
  display: flex;
  align-items: center;

  a {
    color: #4d00ca;
    margin-left: 5px;
    text-decoration: none;
  }
`;
