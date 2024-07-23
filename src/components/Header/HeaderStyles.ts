import styled from 'styled-components';
import { animated } from 'react-spring';
import { keyframes } from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: #000;
  color: #fff;
  text-align: center;
  padding: 2rem;
  box-sizing: border-box;
`;

export const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 2rem;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  box-sizing: border-box;
`;

export const Logo = styled.img`
  height: 90px;
`;

export const Nav = styled.nav`
  display: none;
`;

export const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.3s;

  &:hover {
    color: #6a0dad;
  }
`;

export const Title = styled(animated.h1)`
  font-size: 8vw;
  font-weight: bold;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 10vw;
  }
  @media (max-width: 480px) {
    font-size: 12vw;
  }
`;

export const Subtitle = styled(animated.h1)`
  font-size: 8vw;
  font-weight: bold;
  margin: 0;
  background: linear-gradient(to right, #fff, #6a0dad);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 768px) {
    font-size: 10vw;
  }
  @media (max-width: 480px) {
    font-size: 12vw;
  }
`;

export const Experience = styled(animated.p)`
  font-size: 2vw;
  margin-top: 1rem;
  color: #888;
  position: relative;
  @media (max-width: 768px) {
    font-size: 3vw;
  }
  @media (max-width: 480px) {
    font-size: 4vw;
  }
`;

export const MenuButton = styled.button`
  display: block;
  background: none;
  border: none;
  color: #fff;
  font-size: 2rem;
  cursor: pointer;
`;

export const MobileNav = styled(animated.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #000;
  position: absolute;
  top: 70px;
  right: 0;
  left: 0;
  padding: 1rem;
  box-sizing: border-box;
  overflow: hidden;
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const ScrollContainer = styled.div`
  position: absolute;
  left:25px; 
  top: 38%;
  transform:
  display: flex;
  align-items: center;
`;

export const Circle = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RotatingText = styled.div`
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotate} 30s linear infinite;
`;

export const Character = styled.span`
  position: absolute;
  transform-origin: 25% 25%;
  color: white;
  font-size: 15px;
  font-weight: bold;
  white-space: nowrap;
`;

export const GradientDot = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ff00ff, #00ffff);
  position: absolute;
`;
