import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();

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
          <p>{t('footer.contactUs')}</p>
          <p>{t('footer.available')}</p>
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
