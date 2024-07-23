import React, { useState, useEffect, useRef } from 'react';
import { useSpring } from 'react-spring';
import {
  HeaderContainer,
  HeaderTop,
  Logo,
  Nav,
  NavLink,
  Title,
  Subtitle,
  Experience,
  MenuButton,
  MobileNav,
} from './HeaderStyles';
import ScrollPrompt from './ScrollPrompt';

const Header: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const titleProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 200,
  });
  const subtitleProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 400,
  });
  const experienceProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 600,
  });
  const menuProps = useSpring({
    maxHeight: isMenuOpen ? '200px' : '0px',
    opacity: isMenuOpen ? 1 : 0,
  });

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <HeaderContainer>
      <HeaderTop>
        <Logo src="/aso_logo.png" alt="Logo" />
        <Nav>
          <NavLink href="#about">À propos</NavLink>
          <NavLink href="#projects">Projets</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </Nav>
        <MenuButton onClick={toggleMenu}>☰</MenuButton>
      </HeaderTop>
      <MobileNav style={menuProps} ref={menuRef}>
        <NavLink href="#about" onClick={() => setMenuOpen(false)}>
          À propos
        </NavLink>
        <NavLink href="#projects" onClick={() => setMenuOpen(false)}>
          Projets
        </NavLink>
        <NavLink href="#contact" onClick={() => setMenuOpen(false)}>
          Contact
        </NavLink>
      </MobileNav>
      <Title style={titleProps}>DÉVELOPPEUR</Title>
      <Subtitle style={subtitleProps}>FULLSTACK</Subtitle>
      <Experience style={experienceProps}>
        UNE EXPERTISE DE + 4 ANS DANS LE DEV
      </Experience>
      <ScrollPrompt />
    </HeaderContainer>
  );
};

export default Header;
