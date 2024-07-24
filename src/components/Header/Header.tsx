import styled from 'styled-components';
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
  Highlight,
  MenuButton,
  NavLinkMobile,
  NavHeader,
  CloseButton,
  MobileNav as StyledMobileNav,
} from './HeaderStyles';
import ScrollPrompt from './ScrollPrompt';

const Picto = styled.img`
  margin-right: 5px;
  height: 90px;

  @media (max-width: 768px) {
    display: none;
  }
`;

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

  const menuAnimation = useSpring({
    transform: isMenuOpen ? 'translateX(0%)' : 'translateX(100%)',
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
        {!isMenuOpen && <MenuButton onClick={toggleMenu}>Menu ☰</MenuButton>}
      </HeaderTop>
      <StyledMobileNav style={menuAnimation} ref={menuRef}>
        <NavHeader>
          <Logo src="/aso_logo.png" alt="Logo" />
          <CloseButton onClick={toggleMenu}>✕</CloseButton>
        </NavHeader>
        <NavLinkMobile href="#about" onClick={() => setMenuOpen(false)}>
          À propos
        </NavLinkMobile>
        <NavLinkMobile href="#projects" onClick={() => setMenuOpen(false)}>
          Projets
        </NavLinkMobile>
        <NavLinkMobile href="#contact" onClick={() => setMenuOpen(false)}>
          Contact
        </NavLinkMobile>
      </StyledMobileNav>
      <Title style={titleProps}>
        <Picto src="../leftPillule.svg" alt="Picto" />
        DÉVELOPPEUR
      </Title>
      <Subtitle style={subtitleProps}>FULLSTACK</Subtitle>
      <Experience style={experienceProps}>
        UNE EXPERTISE DE <Highlight>+ 4 ANS DANS LE DEV</Highlight>
      </Experience>
      <ScrollPrompt />
    </HeaderContainer>
  );
};

export default Header;
