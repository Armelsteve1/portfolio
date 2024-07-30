import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import {
  FooterContainer,
  BackgroundCircle,
  FooterTop,
  FooterCenter,
  CurvedBackground,
  ContactText,
  FooterLinkedIn,
} from './FooterStyle';
const Footer = () => {
  return (
    <FooterContainer>
      <BackgroundCircle />
      <FooterTop>
        <div className="logo">
          <span className="dot">.</span>ASO
        </div>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/armel-steve-ouetchoua-a1467b225/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a href="mailto:aouetchoua@gmail.com">
            <FaEnvelope />
          </a>
        </div>
      </FooterTop>
      <FooterCenter>
        <div className="center-logo">
          <span className="dot">.</span>Armel Steve OUETCHOUA
        </div>
      </FooterCenter>
      <CurvedBackground>
        <ContactText>
          <p>N’hésitez pas à me contacter !</p>
          <p>Je suis disponible pour un CDI. À bientôt ! 😊</p>
        </ContactText>
      </CurvedBackground>
      <FooterLinkedIn>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="icon" />
          Armel Steve OUETCHOUA
        </a>
      </FooterLinkedIn>
    </FooterContainer>
  );
};

export default Footer;
