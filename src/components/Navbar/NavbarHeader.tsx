import { Nav, NavLink, Logo, MenuButton } from '../Header/HeaderStyles';

const NavbarHeader = ({ isMenuOpen, toggleMenu }: any) => {
  return (
    <>
      <Logo src="/aso_logo.webp" alt="Logo" />
      <Nav>
        <NavLink href="#about">À propos</NavLink>
        <NavLink href="#projects">Projets</NavLink>
        <NavLink
          href="/Cv_Armel_Steve_OUETCHOUA.pdf"
          download="Cv_Armel_Steve_OUETCHOUA.pdf"
        >
          CV
        </NavLink>
      </Nav>
      {!isMenuOpen && <MenuButton onClick={toggleMenu}>Menu ☰</MenuButton>}
    </>
  );
};

export default NavbarHeader;
