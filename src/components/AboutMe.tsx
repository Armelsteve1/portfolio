import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  margin: 2rem 0;
  padding: 2rem;
  background-color: #111;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #fff;
`;

const Text = styled.p`
  font-size: 1.2rem;
  color: #ccc;
`;

const AboutMe: React.FC = () => {
  return (
    <Section>
      <Title>About Me</Title>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia
        odio vitae vestibulum vestibulum.
      </Text>
    </Section>
  );
};

export default AboutMe;
