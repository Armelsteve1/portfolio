import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styled, { css, keyframes } from 'styled-components';
import { FaChevronDown } from 'react-icons/fa';
import { FiFlag, FiGlobe } from 'react-icons/fi';

const LanguageSelectorContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const LanguageButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 1.6rem;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    color: #6a0dad;
  }
`;

const dropdownAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Dropdown = styled.div<{ open: boolean }>`
  position: absolute;
  background-color: #000;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  display: none;
  animation: ${dropdownAnimation} 0.3s ease-out;

  ${(props) =>
    props.open &&
    css`
      display: block;
    `}
`;

const DropdownItem = styled.a`
  color: #fff;
  padding: 12px 16px;
  text-decoration: none;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #6a0dad;
  }
`;

const FlagIcon = styled.span`
  width: 24px;
  height: 24px;
  margin-right: 8px;
  display: flex;
  align-items: center;
`;

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setDropdownOpen(false);
  };

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <LanguageSelectorContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={dropdownRef}
    >
      <LanguageButton>
        <FiGlobe style={{ marginRight: '8px' }} />
        {i18n.language === 'en' ? 'English' : 'Français'}
        <FaChevronDown style={{ marginLeft: '8px' }} />
      </LanguageButton>
      <Dropdown open={dropdownOpen}>
        <DropdownItem onClick={() => changeLanguage('fr')}>
          <FlagIcon>
            <FiFlag />
          </FlagIcon>
          Français
        </DropdownItem>
        <DropdownItem onClick={() => changeLanguage('en')}>
          <FlagIcon>
            <FiFlag />
          </FlagIcon>
          English
        </DropdownItem>
      </Dropdown>
    </LanguageSelectorContainer>
  );
};

export default LanguageSelector;
