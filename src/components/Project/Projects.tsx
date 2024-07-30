import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLock, FaGithub } from 'react-icons/fa';
import LazyLoad from 'react-lazyload';
import {
  Card,
  CardContainer,
  Experience,
  IconContainer,
  LockedCard,
  ProjectsContainer,
  ScrollIndicator,
  Subtitle,
} from './ProjectStyle';

const projects = [
  {
    id: 2,
    image: '/BackOfficeView.webp',
    link: '#',
    githubLink: 'https://github.com/Armelsteve1/cozco-backoffice-backend.git',
  },
  {
    id: 1,
    image: '/payfoodWeb.webp',
    link: '#',
    githubLink: 'https://github.com/Armelsteve1/Payfood_aws.git',
  },
  {
    id: 3,
    image: '/portfolio.webp',
    link: '#',
    githubLink: 'https://github.com/Armelsteve1/portfolio.git',
  },
  {
    id: 4,
    image: '/safeGo.webp',
    link: '#',
    githubLink: 'https://github.com/Armelsteve1/Safego.git',
  },
];

const Projects = () => {
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  const handleScroll = (e: any) => {
    const container = e.target as HTMLDivElement;
    const maxScrollLeft = container.scrollWidth - container.clientWidth;

    setShowScrollIndicator(container.scrollLeft < maxScrollLeft - 10);
  };

  return (
    <ProjectsContainer>
      <Subtitle>Mes Projets</Subtitle>
      <Experience>Voici quelques projets récents que j'ai réalisés.</Experience>
      <ScrollIndicator visible={showScrollIndicator}>
        <p>SCROLLEZ</p>
        <div className="arrow" />
      </ScrollIndicator>
      <CardContainer onScroll={handleScroll}>
        {projects.map((project, index: number) =>
          index < projects.length - 1 ? (
            <LazyLoad key={project.id} height={550} offset={100}>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
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
                      <IconContainer>
                        <FaGithub size={24} />
                      </IconContainer>
                    </motion.div>
                  )}
                </Card>
              </a>
            </LazyLoad>
          ) : (
            <LockedCard
              key={project.id}
              style={{ backgroundImage: `url(${project.image})` }}
              onMouseEnter={() => setHoveredCardIndex(index)}
              onMouseLeave={() => setHoveredCardIndex(null)}
            >
              {hoveredCardIndex === index && (
                <div style={{ color: 'black' }}>Bientôt Disponible</div>
              )}
              <FaLock className="lock-icon" />
            </LockedCard>
          )
        )}
      </CardContainer>
    </ProjectsContainer>
  );
};

export default Projects;
