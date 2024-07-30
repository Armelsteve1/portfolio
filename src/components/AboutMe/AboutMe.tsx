import React from 'react';
import styled from 'styled-components';
import TechnologyCard from './TechnologyCard';
import { Technology } from './types';
import CardComponent from './CardComponent';
import ScrollSection from './ScrollSection';

const Section = styled.section`
  position: relative;
  padding: 3rem 2rem;
  background: linear-gradient(to right, #ffffff, #eeeeff);
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const Description = styled.p`
  font-size: 1.5rem;
  color: #555;
  margin-bottom: 2rem;
`;
const Title = styled.h2`
  font-size: 3rem;
  color: #333;
  font-weight: bold;
`;
const Highlight = styled.span`
  color: #6200ea;
  font-size: 3.2rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const TextSection = styled.article`
  flex: 2;
  padding-right: 20px;

  @media (max-width: 768px) {
    padding-right: 0;
    margin-bottom: 20px;
    text-align: center;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    border-radius: 15px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    max-width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    order: -1; /* Place l'image en haut */
    margin-bottom: 20px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 0px;
  margin-top: 0rem;
  width: 100%;
  max-width: 1200px;
`;

const AboutMe: React.FC = () => {
  const technologies: Technology[] = [
    {
      name: 'JavaScript',
      imageUrl:
        'https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png',
    },
    {
      name: 'Java',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg',
    },
    {
      name: 'ReactJS',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    },
    {
      name: 'NodeJS',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
    },
    {
      name: 'TypeScript',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
    },
    {
      name: 'AWS',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
    },
    {
      name: 'Docker',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg',
    },
    {
      name: 'NextJS',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg',
    },
  ];

  return (
    <>
      <Section>
        <Header>
          <Title>
            <Highlight>VOUS</Highlight> VOULEZ EN SAVOIR PLUS <br /> SUR{' '}
            <Highlight>MOI</Highlight> ?
          </Title>
        </Header>
        <Content>
          <TextSection>
            <Description>
              Bonjour, je suis Armel Steve OUETCHOUA, développeur fullstack
              passionné avec plus de quatre ans d'expérience dans la création de
              solutions web innovantes. Mon parcours professionnel m'a permis de
              travailler sur une large gamme de projets, allant de sites
              vitrines à des applications web complexes, me permettant d'affiner
              mes compétences techniques et mon sens du design.
            </Description>
            <Description>
              Je suis animé par une curiosité constante pour les nouvelles
              technologies et une volonté d'adopter les meilleures pratiques
              pour offrir des expériences utilisateur optimales. Ces dernières
              années, j'ai eu le privilège de collaborer avec des équipes
              exceptionnelles sur des projets stimulants, renforçant ma capacité
              à innover et à résoudre des défis techniques.
            </Description>
            <Description>
              Mon ambition est de continuer à apprendre, à évoluer, et à
              partager mes connaissances pour aider les entreprises à atteindre
              leurs objectifs. Je suis toujours à la recherche de nouvelles
              opportunités pour créer des solutions web performantes et
              impactantes.
            </Description>
          </TextSection>
          <ImageContainer>
            <img src="../aso_logo.png" alt="A propos de moi" />
          </ImageContainer>
        </Content>
        <CardComponent />
        <Grid>
          {technologies.map((tech) => (
            <TechnologyCard
              key={tech.name}
              name={tech.name}
              imageUrl={tech.imageUrl}
            />
          ))}
        </Grid>
      </Section>
      <ScrollSection />
    </>
  );
};

export default AboutMe;
