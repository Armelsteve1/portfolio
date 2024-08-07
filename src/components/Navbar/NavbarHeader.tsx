import { useTranslation } from 'react-i18next';
import { Nav, NavLink, Logo, MenuButton } from '../Header/HeaderStyles';
import LanguageSelector from './LanguageSelector';
import styled from 'styled-components';

const LanguageSelectorHeaderContainer = styled.div`
  position: relative;
  display: inline-block;
  margin-left: auto;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavbarHeader = ({ isMenuOpen, toggleMenu }: any) => {
  const { t } = useTranslation();

  return (
    <>
      <Logo src="/aso_logo.webp" alt="Logo" />
      <LanguageSelectorHeaderContainer>
        <LanguageSelector />
      </LanguageSelectorHeaderContainer>
      <Nav>
        <NavLink href="#home">{t('navbar.home')}</NavLink>
        <NavLink href="#about">{t('navbar.about')}</NavLink>
        <NavLink href="#projects">{t('navbar.projects')}</NavLink>
        <NavLink
          href="/Cv_Armel_Steve_OUETCHOUA.pdf"
          download="Cv_Armel_Steve_OUETCHOUA.pdf"
        >
          {t('navbar.cv')}
        </NavLink>
        <NavLink>
          {' '}
          <LanguageSelector />
        </NavLink>
      </Nav>
      {!isMenuOpen && (
        <MenuButton onClick={toggleMenu}>{t('navbar.menu')}</MenuButton>
      )}
    </>
  );
};

export default NavbarHeader;
