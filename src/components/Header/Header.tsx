import { useState, useRef, useEffect } from 'react';
import { useSpring } from 'react-spring';
import { motion } from 'framer-motion';
import {
  HeaderContainer,
  HeaderTop,
  Logo,
  Title,
  Subtitle,
  Experience,
  Highlight,
  NavLinkMobile,
  NavHeader,
  CloseButton,
  MobileNav as StyledMobileNav,
  Picto,
} from './HeaderStyles';
import ScrollPrompt from './ScrollPrompt';
import NavbarHeader from '../Navbar/NavbarHeader';

const mobileMenuVariants = {
  open: {
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 50,
      damping: 20,
    },
  },
  closed: {
    x: '100%',
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 30,
    },
  },
};

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

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

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.body.style.overflow = 'auto';
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <HeaderContainer>
      <HeaderTop>
        <NavbarHeader isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </HeaderTop>
      <StyledMobileNav
        as={motion.div}
        variants={mobileMenuVariants}
        initial="closed"
        animate={isMenuOpen ? 'open' : 'closed'}
        ref={menuRef}
      >
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
        <NavLinkMobile
          href="/Cv_Armel_Steve_OUETCHOUA.pdf"
          onClick={() => setMenuOpen(false)}
        >
          CV
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
