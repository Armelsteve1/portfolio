import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaLock } from 'react-icons/fa';
import { animated } from 'react-spring';
import LazyLoad from 'react-lazyload';

const ProjectsContainer = styled.section`
  width: 100%;
  padding: 20px 0;
  background-color: #000;
  color: #fff;
  text-align: center;
  position: relative;
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

const CardContainer = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  gap: 20px;
  padding: 10px 20px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Card = styled.div`
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

const LockedCard = styled(Card)`
  &::before {
    backdrop-filter: blur(1px);
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

const projects = [
  {
    id: 2,
    image: '/BackOfficeView.png',
    link: '#',
  },
  {
    id: 1,
    image: '/payfoodWeb.png',
    link: '#',
  },
  {
    id: 3,
    image: '/portfolio.png',
    link: '#',
  },
  {
    id: 4,
    image: '/safeGo.png',
    link: '#',
  },
];

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

const Projects = () => {
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.target as HTMLDivElement;
    const maxScrollLeft = container.scrollWidth - container.clientWidth;

    setShowScrollIndicator(container.scrollLeft < maxScrollLeft - 10);
  };

  return (
    <ProjectsContainer>
      <Subtitle>Mes Projets</Subtitle>
      <Experience>
        Voici quelques projets récents sur lesquels j'ai travaillé.
      </Experience>
      <ScrollIndicator visible={showScrollIndicator}>
        <p>SCROLLEZ</p>
        <div className="arrow" />
      </ScrollIndicator>
      <CardContainer onScroll={handleScroll}>
        {projects.map((project, index: number) =>
          index < projects.length - 1 ? (
            <LazyLoad key={project.id} height={550} offset={100}>
              <Card
                style={{ backgroundImage: `url(${project.image})` }}
                onMouseEnter={() => setHoveredCardIndex(index)}
                onMouseLeave={() => setHoveredCardIndex(null)}
              >
                {hoveredCardIndex === index && (
                  <motion.div
                    className="drag-circle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    whileHover={{
                      scale: 1.1,
                      x: 0,
                      y: 0,
                      transition: { type: 'spring', stiffness: 300 },
                    }}
                  >
                    Drag
                  </motion.div>
                )}
              </Card>
            </LazyLoad>
          ) : (
            <LockedCard
              key={project.id}
              style={{ backgroundImage: `url(${project.image})` }}
              onMouseEnter={() => setHoveredCardIndex(index)}
              onMouseLeave={() => setHoveredCardIndex(null)}
            >
              <FaLock className="lock-icon" />
              {hoveredCardIndex === index && (
                <div style={{ color: 'black' }}>Bientôt Disponible</div>
              )}
            </LockedCard>
          )
        )}
      </CardContainer>
    </ProjectsContainer>
  );
};

export default Projects;
