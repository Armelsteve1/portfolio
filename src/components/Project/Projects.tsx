import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaLock, FaGithub } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const container = document.getElementById('card-container');
    if (container) {
      container.scrollLeft = 0;
    }
  }, []);

  const handleScroll = (e: any) => {
    const container = e.target as HTMLDivElement;
    const maxScrollLeft = container.scrollWidth - container.clientWidth;

    setShowScrollIndicator(container.scrollLeft < maxScrollLeft - 10);
  };

  return (
    <ProjectsContainer>
      <Subtitle>{t('myprojects.subtitle')}</Subtitle>
      <Experience>{t('myprojects.experience')}</Experience>
      <ScrollIndicator visible={showScrollIndicator}>
        <p>{t('myprojects.scrollIndicator')}</p>
        <div className="arrow" />
      </ScrollIndicator>
      <CardContainer id="card-container" onScroll={handleScroll}>
        {projects.map((project, index: number) =>
          index < projects.length - 1 ? (
            <a
              key={project.id}
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
          ) : (
            <LockedCard
              key={project.id}
              style={{ backgroundImage: `url(${project.image})` }}
              onMouseEnter={() => setHoveredCardIndex(index)}
              onMouseLeave={() => setHoveredCardIndex(null)}
            >
              {hoveredCardIndex === index && (
                <div style={{ color: 'black' }}>
                  {t('myprojects.comingSoon')}
                </div>
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
