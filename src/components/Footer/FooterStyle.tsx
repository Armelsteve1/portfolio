import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  height: 100vh;
  background-color: #000;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  font-family: 'Poppins', sans-serif;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 10px 0;
  }
`;

export const BackgroundCircle = styled.div`
  position: absolute;
  top: -5%;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  height: 300px;
  background: radial-gradient(
    circle,
    rgba(106, 13, 173, 0.8) 0%,
    rgba(255, 255, 255, 0) 70%
  );
  border-radius: 50%;
  z-index: 0;

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
    padding: 40px 0;
  }
`;

export const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1200px;
  position: relative;
  z-index: 1;

  .logo {
    display: flex;
    align-items: center;
    font-size: 24px;
    font-weight: bold;

    .dot {
      color: #6a0dad;
      font-size: 45px;
      font-weight: bold;
      margin-right: 5px;
      margin-top: -14px;
    }
  }

  .social-links a {
    color: #fff;
    margin: 0 10px;
    font-size: 20px;
    transition: color 0.3s;

    &:hover {
      color: #0077b5;
    }
  }
`;

export const FooterCenter = styled.div`
  z-index: 1;
  margin: 100px 0;

  .center-logo {
    display: flex;
    align-items: center;
    font-size: 36px;
    color: #fff;

    .dot {
      color: #6a0dad;
      font-size: 100px;
      font-weight: bold;
      margin-right: 10px;
      margin-top: -50px;
    }

    @media (max-width: 768px) {
      font-size: 24px;

      .dot {
        font-size: 60px;
        margin-top: -30px;
      }
    }
  }
`;

export const ContactText = styled.div`
  z-index: 1;
  font-size: 18px;
  color: #bbb;
  margin-bottom: 20px;

  p {
    margin: 5px 0;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const CurvedBackground = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 300px;
  background: #121111;
  clip-path: ellipse(50% 100% at 50% 100%);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  flex-direction: column;
  padding-bottom: 40px;

  @media (max-width: 768px) {
    height: 200px;
    padding-bottom: 20px;
  }
`;

export const FooterLinkedIn = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;

  a {
    display: flex;
    align-items: center;
    color: #fff;
    text-decoration: none;
    font-size: 14px;

    .icon {
      font-size: 24px;
      margin-right: 10px;
    }

    &:hover {
      color: #0077b5;
    }

    @media (max-width: 768px) {
      font-size: 12px;

      .icon {
        font-size: 20px;
      }
    }
  }
`;
