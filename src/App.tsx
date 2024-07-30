import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Project/Projects';
import Footer from './components/Footer/Footer';
import GlobalStyle, { Container, MainContent } from './components/GlobalStyle';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

const App = () => {
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
