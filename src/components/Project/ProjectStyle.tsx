import styled from 'styled-components';
import { animated } from 'react-spring';

export const ProjectsContainer = styled.section`
  width: 100%;
  padding: 20px 0;
  background-color: #000;
  color: #fff;
  text-align: center;
  position: relative;
`;
export const Subtitle = styled(animated.h1)`
  font-size: 6vw;
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
  font-size: 3vw;
  margin-top: 4rem;
  color: #888;
  position: relative;
  @media (max-width: 768px) {
    font-size: 3vw;
  }
  @media (max-width: 480px) {
    font-size: 4vw;
  }
`;

interface ScrollIndicatorProps {
  visible: boolean;
}

export const ScrollIndicator = styled.div<ScrollIndicatorProps>`
  position: absolute;
  bottom: 20px;
  right: 20px;
  text-align: right;
  z-index: 10;
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};

  p {
    font-size: 2.5vw;
    color: #fff;
    margin: 0;
  }

  .arrow {
    display: inline-block;
    width: 60px;
    height: 2px;
    background-color: #fff;
    position: relative;
    margin-top: 10px;

    &::after {
      content: '';
      position: absolute;
      top: -6px;
      right: -10px;
      width: 0;
      height: 0;
      border-top: 8px solid transparent;
      border-bottom: 8px solid transparent;
      border-left: 10px solid #fff;
    }
  }
`;

export const CardContainer = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  gap: 20px;
  padding: 10px 20px;

  &::-webkit-scrollbar {
    display: none;
  }
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
`;

export const Card = styled.div`
  flex: 0 0 auto;
  width: 500px;
  height: 550px;
  border-radius: 10px;
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  scroll-snap-align: start;
  transition: transform 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;

  &:hover {
    transform: scale(1.05);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(0.2px);
    z-index: 1;
  }

  .drag-circle {
    position: absolute;
    width: 100px;
    height: 100px;
    background-color: rgba(75, 0, 130, 0.8);
    border-radius: 50%;
    color: white;
    display: none;
    align-items: center;
    justify-content: center;
    z-index: 2;
    pointer-events: none;
    transform: translate(-50%, -50%);
  }

  &:hover .drag-circle {
    display: flex;
  }
`;

export const LockedCard = styled(Card)`
  &::before {
    backdrop-filter: blur(0.5px);
  }

  .lock-icon {
    font-size: 50px;
    color: white;
    position: absolute;
    z-index: 2;
  }

  .message {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
    background-color: rgba(0, 0, 0, 0.3);
    padding: 10px 20px;
    border-radius: 5px;
    z-index: 2;
  }
`;
export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #333;
  color: #fff;
`;
