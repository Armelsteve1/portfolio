import styled from 'styled-components';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const FooterContainer = styled.footer`
  width: 100%;
  height: 100vh;
  background-color: #000;
  color: #fff;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  position: relative;
  font-family: 'Poppins', sans-serif;
`;

const BackgroundCircle = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  height: 200px;
  background: radial-gradient(
    circle,
    rgba(106, 13, 173, 0.8) 0%,
    rgba(255, 255, 255, 0) 70%
  );
  border-radius: 50%;
  z-index: 0;
`;

const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1200px;
  margin-bottom: 20px;
  position: relative;
  z-index: 1;

  .logo {
    display: flex;
    align-items: center;
    font-size: 24px;
    font-weight: bold;

    .dot {
      color: #6a0dad;
      font-size: 45px;
      font-weight: bold;
      margin-right: 5px;
      margin-top: -14px;
    }
  }

  .social-links a {
    color: #fff;
    margin: 0 10px;
    font-size: 20px;
    transition: color 0.3s;

    &:hover {
      color: #0077b5;
    }
  }
`;

const FooterCenter = styled.div`
  position: relative;
  z-index: 1;
  margin-top: -100px;

  .center-logo {
    display: flex;
    align-items: center;
    font-size: 48px;

    .dot {
      color: #6a0dad;
      font-size: 150px;
      font-weight: bold;
      margin-right: 10px;
      margin-top: -75px;
    }
  }
`;

const ContactText = styled.div`
  position: relative;
  z-index: 1;
  margin-top: 20px;
  font-size: 18px;
  color: #bbb;

  p {
    margin: 5px 0;
  }
`;

const CurvedBackground = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px; /* Adjusted height */
  background: linear-gradient(to bottom, transparent, #000);
  clip-path: ellipse(50% 100% at 50% 0%);
`;

const FooterBottom = styled.div`
  font-size: 14px;
  margin-top: 10px;
`;

const FooterLinkedIn = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  text-align: right;

  a {
    display: flex;
    align-items: center;
    color: #fff;
    text-decoration: none;
    font-size: 14px;

    .icon {
      font-size: 24px;
      margin-right: 10px;
    }

    &:hover {
      color: #0077b5;
    }
  }
`;

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
            href="https://www.linkedin.com"
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
      <ContactText>
        <p>N’hésitez pas à me contacter !</p>
        <p>Je suis disponible pour un CDI.</p>
      </ContactText>
      <CurvedBackground />
      <FooterBottom className="email">aouetchoua@gmail.com</FooterBottom>
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
