import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Character,
  Circle,
  GradientDot,
  RotatingText,
  ScrollContainer,
} from './HeaderStyles';

const ScrollPrompt: React.FC = () => {
  const { t } = useTranslation();
  const text = t('scrollPrompt');
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
                transform: `rotate(${
                  index * (360 / characters.length) - 90
                }deg) translate(70px) rotate(90deg)`,
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
