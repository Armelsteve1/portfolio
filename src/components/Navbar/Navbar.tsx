import { useState, useEffect } from 'react';
import { FooterInfo, Logo, NavbarContainer, NavLinks } from './NavbarStyle';
const Navbar = () => {
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
