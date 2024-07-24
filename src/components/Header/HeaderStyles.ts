import styled, { keyframes } from 'styled-components';
import { animated } from 'react-spring';

// Keyframe animations
const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const arrowMovement = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const lineExpand = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
`;

// Header container
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
  position: relative;
`;

// Top part of the header
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

// Logo
export const Logo = styled.img`
  height: 90px;
`;

// Navigation
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

// Title and Subtitle styles
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

// Experience text
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

// Menu button
export const MenuButton = styled.button`
  display: block;
  background: none;
  border: none;
  color: #fff;
  font-size: 2rem;
  cursor: pointer;
  z-index: 1000; // Ensure it's above other elements
`;

// Mobile navigation
export const MobileNav = styled(animated.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background-color: #171615;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  padding: 2rem;
  box-sizing: border-box;
  overflow-y: auto;
  z-index: 999;
  transform: translateX(100%);
  @media (min-width: 768px) {
    width: 400px;
  }
`;

export const NavLinkMobile = styled.a`
  font-size: 2rem;
  color: #fff;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #6a0dad;
  }
`;

export const NavHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 2rem;
  cursor: pointer;
`;

// ScrollPrompt styles
export const ScrollContainer = styled.div`
  position: absolute;
  left: 25px;
  top: 64%;
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
  transform-origin: 50% 50%;
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

// Decorative elements
export const DecorativeElementsContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none; // Prevent interference with interactions
`;

export const DecorativeLine = styled.div`
  position: absolute;
  width: 100px;
  height: 2px;
  background: #fff;
  top: 50%;
  left: 20%;
  animation: ${lineExpand} 3s infinite alternate;
`;

export const DecorativeArrow = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  border-top: 2px solid #fff;
  border-right: 2px solid #fff;
  transform: rotate(45deg);
  top: 70%;
  left: 80%;
  animation: ${arrowMovement} 2s infinite;
`;
