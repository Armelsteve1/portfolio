import { motion } from 'framer-motion';
import styled from 'styled-components';

const CardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 90px;
  margin-top: 3rem;
`;

const Card = styled(motion.div)`
  background: linear-gradient(to right, #1a1a1a, #6a0dad);
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  text-align: center;
  width: 300px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  transition:
    transform 0.3s ease-in-out,
    box-shadow 0.3s ease-in-out;
  color: #fff;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.4);
  }
`;

const PinIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 24px;
  height: 24px;
  background-image: url('/path/to/pin-icon.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const Text = styled.h3`
  margin: 0;
  font-size: 1.5rem;
  color: #ffffff;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`;

const cards = [
  { text: 'Master II', icon: '/aso_logo.png' },
  { text: "+4 ans d'exp.", icon: '/aso_logo.png' },
  { text: 'Bonne Pratique', icon: '/aso_logo.png' },
];

const CardComponent = () => (
  <CardGrid>
    {cards.map((card, index) => (
      <Card
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.3, duration: 0.5 }}
      >
        <PinIcon style={{ backgroundImage: `url(${card.icon})` }} />
        <Text>{card.text}</Text>
      </Card>
    ))}
  </CardGrid>
);

export default CardComponent;
