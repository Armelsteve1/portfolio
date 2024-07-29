import React from 'react';
import styled from 'styled-components';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects';
import Footer from './components/Footer';
import GlobalStyle from './components/GlobalStyle';
import Header from './components/Header/Header';
import Navbar from './components/Navbar';

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
  text-align: center;
  flex: 1;
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Container>
        <MainContent>
          <section id="header">
            <Header />
          </section>
          <section id="about">
            <AboutMe />
          </section>
          <section id="projects">
            <Projects />
          </section>
        </MainContent>
        <Footer />
      </Container>
    </>
  );
};

export default App;
