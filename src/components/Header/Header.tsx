import { useState, useRef, useEffect } from 'react';
import { useSpring } from 'react-spring';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
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
import LanguageSelector from '../Navbar/LanguageSelector'; // Assurez-vous d'importer le sélecteur de langue ici

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
  const { t } = useTranslation();

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
          <Logo src="/aso_logo.webp" alt="Logo" />
          <CloseButton onClick={toggleMenu}>✕</CloseButton>
        </NavHeader>
        <NavLinkMobile href="#about" onClick={() => setMenuOpen(false)}>
          {t('about')}
        </NavLinkMobile>
        <NavLinkMobile href="#projects" onClick={() => setMenuOpen(false)}>
          {t('projects')}
        </NavLinkMobile>
        <NavLinkMobile
          href="/Cv_Armel_Steve_OUETCHOUA.pdf"
          onClick={() => setMenuOpen(false)}
        >
          CV
        </NavLinkMobile>
        <NavLinkMobile onClick={() => setMenuOpen(false)}>
          <LanguageSelector />
        </NavLinkMobile>
      </StyledMobileNav>
      <Title style={titleProps}>
        <Picto src="../leftPillule.svg" alt="Picto" />
        {t('headerTitle')}
      </Title>
      <Subtitle style={subtitleProps}>{t('subtitle')}</Subtitle>
      <Experience style={experienceProps}>
        {t('experienceText')} <Highlight>+ 3 {t('years')}</Highlight>
      </Experience>
      <ScrollPrompt />
    </HeaderContainer>
  );
};

export default Header;
