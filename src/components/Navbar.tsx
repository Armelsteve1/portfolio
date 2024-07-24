import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';

const NavbarContainer = styled(animated.div)`
  position: fixed;
  bottom: 20px;
  left: 16%;
  transform: translateX(-50%);
  width: 65%;
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
    display: none; /* Masquer la navbar sur les écrans de moins de 768px */
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

    &.active {
      color: #fff;
      background: #4d00ca;
      padding: 27px 20px;
      border-radius: 8px;
    }

    &:hover {
      color: #ccc;
    }

    img {
      margin-right: 8px;
      height: 20px;
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
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarProps = useSpring({
    opacity: showNavbar ? 1 : 0,
    transform: showNavbar ? 'translateY(0%)' : 'translateY(100%)',
    config: { tension: 250, friction: 20 },
  });

  return (
    <NavbarContainer style={navbarProps}>
      <Logo>
        <img src="../aso_logo.png" alt="Logo" style={{ height: '90px' }} />
      </Logo>
      <NavLinks>
        <a href="/home" className="active">
          Accueil
        </a>
        <a href="/about">À propos</a>
        <a href="/projects">Projets</a>
        <a href="/contact">Contact</a>
      </NavLinks>
      <FooterInfo>
        ©Website coded by
        <a href="https://your-link.com">Armel Steve</a>
      </FooterInfo>
    </NavbarContainer>
  );
};

export default Navbar;
