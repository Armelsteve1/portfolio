import React from 'react';
import styled from 'styled-components';
import Header from './components/Header/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GlobalStyle from './components/GlobalStyle';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #000;
  color: #fff;
  position: relative;
`;

const MainContent = styled.main`
  width: 100%;
  padding: 2rem;
  text-align: center;
  flex: 1;
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <MainContent>
          <AboutMe />
          <Projects />
          <Contact />
        </MainContent>
        <Footer />
      </Container>
    </>
  );
};

export default App;
