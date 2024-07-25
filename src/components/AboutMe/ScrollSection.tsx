import { motion } from 'framer-motion';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  background: #000;
  color: #000;
  padding: 50px 0;
  margin-top: -30px;
  transform: skewY(1deg);
`;

const MovingTextContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MovingText = styled(motion.div)`
  font-size: 5rem;
  font-weight: bold;
  white-space: nowrap;
  position: absolute;
  color: #fff;
`;

const CTAWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 150px;
`;

const CVButton = styled.a`
  display: inline-block;
  padding: 20px 40px;
  font-size: 1.5rem;
  color: #fff;
  background-color: #000;
  border: 2px solid #fff;
  border-radius: 50%;
  text-align: center;
  text-decoration: none;
  margin-top: 20px;
  transition:
    background-color 0.3s,
    transform 0.3s;

  &:hover {
    background-color: #444;
    transform: scale(2.1);
  }
`;

const ScrollSection = () => {
  return (
    <Wrapper>
      <MovingTextContainer>
        <MovingText
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ duration: 10, ease: 'linear', repeat: Infinity }}
        >
          Développeur Full-Stack
        </MovingText>
      </MovingTextContainer>
      <CTAWrapper>
        <p style={{ fontSize: '1.5rem', margin: '20px 0', color: '#fff' }}>
          Intéressé par mon profil?
        </p>
        <CVButton
          href="/Cv_Armel_Steve_OUETCHOUA.pdf"
          download="Cv_Armel_Steve_OUETCHOUA.pdf"
        >
          CV
        </CVButton>
      </CTAWrapper>
    </Wrapper>
  );
};

export default ScrollSection;
