import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Project/Projects';
import Footer from './components/Footer/Footer';
import GlobalStyle, { Container, MainContent } from './components/GlobalStyle';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import ErrorBoundary from './components/ErrorBoundary';

const App = () => {
  useEffect(() => {
    const trackingId = import.meta.env.VITE_GA_TRACKING_ID;
    if (trackingId) {
      ReactGA.initialize(trackingId);
      ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
    } else {
      console.error('Google Analytics tracking ID is not defined.');
    }
  }, []);

  return (
    <ErrorBoundary>
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
    </ErrorBoundary>
  );
};

export default App;
