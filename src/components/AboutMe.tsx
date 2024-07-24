import React from 'react';
import Navbar from './Navbar'; // Assurez-vous que le chemin est correct
import styled from 'styled-components';

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

const Title = styled.h2`
  font-size: 3rem;
  color: #333;
  font-weight: bold;
`;

const Highlight = styled.span`
  color: #6200ea; /* Purple color for highlights */
  font-size: 3.2rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  max-width: 1200px;
`;

const TextSection = styled.div`
  flex: 2;
  padding-right: 20px;
`;

const Description = styled.p`
  font-size: 1.5rem;
  color: #555;
  margin-bottom: 2rem;
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
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 3rem;
  width: 100%;
  max-width: 1200px;
`;

const Card = styled.div`
  background: #1a1a1a;
  border-radius: 15px;
  padding: 20px;
  color: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  text-align: center;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
  }

  img {
    width: 60px;
    margin-bottom: 1rem;
  }

  h3 {
    margin: 1rem 0;
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
    color: #ccc;
  }
`;

const AboutMe: React.FC = () => {
  const cards = [
    {
      title: 'Master II',
      description: 'Formation en développement web avancé.',
      image: '../path/to/image1.png', // Remplacez par le chemin correct
    },
    {
      title: "+3 ans d'exp.",
      description: 'Expérience professionnelle en développement web.',
      image: '../path/to/image2.png', // Remplacez par le chemin correct
    },
    {
      title: 'JavaScript',
      description: 'Mon domaine de prédilection.',
      image: '../path/to/image3.png', // Remplacez par le chemin correct
    },
  ];

  return (
    <>
      <Navbar />
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
              Bonjour, je m’appelle Armel Steve OUETCHOUA, je suis un
              développeur fullstack passionné avec plus de 4 ans d'expérience
              dans la création de solutions web innovantes. J'ai travaillé sur
              divers projets allant de sites vitrines à des applications web
              complexes. J'aime explorer de nouvelles technologies et appliquer
              les meilleures pratiques pour créer des expériences utilisateur
              optimales.
            </Description>
            <Description>
              Ces 4 dernières années, j'ai eu l'occasion de travailler avec des
              équipes incroyables sur des projets stimulants, qui m'ont permis
              d'améliorer mes compétences techniques et mon sens du design. Mon
              objectif est de continuer à apprendre et à partager mes
              connaissances pour aider les entreprises à atteindre leurs
              objectifs.
            </Description>
          </TextSection>
          <ImageContainer>
            <img src="../aso_logo.png" alt="A propos de moi" />
          </ImageContainer>
        </Content>
        <Grid>
          {cards.map((card, index) => (
            <Card key={index}>
              <img src={card.image} alt={card.title} />
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </Card>
          ))}
        </Grid>
      </Section>
    </>
  );
};

export default AboutMe;
