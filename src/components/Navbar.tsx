import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
  max-width: 1000px;
  background: rgba(26, 26, 26, 0.7);
  backdrop-filter: blur(12px);
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  border: 1px solid #333;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    font-size: 1rem;
    display: flex;
    align-items: center;
    padding: 10px 20px;
    border-radius: 8px;
    transition:
      background-color 0.3s,
      color 0.3s;

    &.active {
      background-color: #4d00ca;
      color: #fff;
    }

    &:hover {
      color: #ccc;
    }
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 1.5em;

  img {
    margin-right: 10px;
    height: 30px;
  }
`;

const FooterInfo = styled.div`
  color: #ccc;
  font-size: 0.9rem;
  display: flex;
  align-items: center;

  a {
    color: #4d00ca;
    margin-left: 5px;
    text-decoration: none;
  }
`;

const Navbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>('header');
  const [showNavbar, setShowNavbar] = useState(true);

  const handleLinkClick = (
    link: string,
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();
    const element = document.getElementById(link);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveLink(link);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let currentSection = 'header';

      if (scrollY > 100) {
        currentSection = 'about';
      }

      const aboutSection = document.getElementById('about');
      if (
        aboutSection &&
        scrollY > aboutSection.offsetTop + aboutSection.clientHeight - 100
      ) {
        currentSection = 'projects';
      }

      if (currentSection !== activeLink) {
        setActiveLink(currentSection);
      }

      setShowNavbar(scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeLink]);

  return (
    <NavbarContainer style={{ opacity: showNavbar ? 1 : 0 }}>
      <Logo>
        <img src="../aso_logo.png" alt="Logo" style={{ height: '90px' }} />
      </Logo>
      <NavLinks>
        <a
          href="#header"
          className={`nav-link ${activeLink === 'header' ? 'active' : ''}`}
          onClick={(e) => handleLinkClick('header', e)}
        >
          Accueil
        </a>
        <a
          href="#about"
          className={`nav-link ${activeLink === 'about' ? 'active' : ''}`}
          onClick={(e) => handleLinkClick('about', e)}
        >
          À propos
        </a>
        <a
          href="#projects"
          className={`nav-link ${activeLink === 'projects' ? 'active' : ''}`}
          onClick={(e) => handleLinkClick('projects', e)}
        >
          Projets
        </a>
      </NavLinks>
      <FooterInfo>
        ©Website coded by
        <a href="https://www.linkedin.com/in/armel-steve-ouetchoua-a1467b225/">
          Armel Steve
        </a>
      </FooterInfo>
    </NavbarContainer>
  );
};

export default Navbar;
