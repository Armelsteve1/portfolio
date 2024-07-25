import * as React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const NavMenu = styled(motion.ul)`
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 100px;
  left: 50px;
`;

const NavItem = styled(motion.li)`
  margin: 20px 0;
  font-size: 1.5rem;
  color: #000;
`;

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const itemVariants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: -50 },
};

export const Navigation = () => (
  <NavMenu variants={variants}>
    <NavItem variants={itemVariants}>
      <a href="#about">À propos</a>
    </NavItem>
    <NavItem variants={itemVariants}>
      <a href="#projects">Projets</a>
    </NavItem>
    <NavItem variants={itemVariants}>
      <a href="#contact">Contact</a>
    </NavItem>
  </NavMenu>
);
