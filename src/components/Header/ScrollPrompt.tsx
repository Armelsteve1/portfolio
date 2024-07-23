import React from 'react';
import {
  Character,
  Circle,
  GradientDot,
  RotatingText,
  ScrollContainer,
} from './HeaderStyles';

const ScrollPrompt: React.FC = () => {
  const text = ' Scrollez pour découvrir ';
  const characters = text.split('');
  return (
    <ScrollContainer
      onClick={() =>
        window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })
      }
    >
      <Circle>
        <RotatingText>
          {characters.map((char, index) => (
            <Character
              key={index}
              style={{
                transform: `rotate(${index * (360 / characters.length) - 90}deg) translate(70px) rotate(90deg)`,
              }}
            >
              {char}
            </Character>
          ))}
        </RotatingText>
        <GradientDot />
      </Circle>
    </ScrollContainer>
  );
};

export default ScrollPrompt;
