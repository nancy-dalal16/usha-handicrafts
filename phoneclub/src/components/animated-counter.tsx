import React from 'react';
import { useSpring, animated } from 'react-spring';
import Plus from 'assets/icons/plus-icon';
import Minus from 'assets/icons/minus-icon';
import Trash from 'assets/icons/trash';
import IconButton from './icon-button';
import {
  AnimatedCounterBaseWrapper,
  AnimatedCounterBase,
  AnimatedCounterValue,
} from './utils/theme';

type AnimatedCounterProps = {
  className?: string;
  value: number;
  onDecrement: (e: any) => void;
  onIncrement: (e: any) => void;
};

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  className = '',
  onDecrement,
  onIncrement,
  value,
}) => {
  const width = useSpring({
    width: value ? 110 : 35,
    height: '100%',
    // boxShadow: value ? '0 5px 10px rgba(0,0,0,0.16)' : 'none',
  });

  const classNames = AnimatedCounterBaseWrapper + ' ' + className;

  return (
    <div className={classNames}>
      <animated.div style={width}>
        <div className={AnimatedCounterBase}>
          <IconButton
            onClick={onDecrement}
            className="h-full w-35px text-white bg-gray-900 transition duration-300 hover:bg-gray-3a focus:outline-none"
          >
            {value > 1 ? <Minus /> : <Trash />}
          </IconButton>
          <span className={AnimatedCounterValue}>{value ? value : '0'}</span>
          <IconButton
            onClick={onIncrement}
            className="h-full w-35px text-white bg-gray-900 transition duration-300 hover:bg-gray-3a focus:outline-none"
          >
            <Plus />
          </IconButton>
        </div>
      </animated.div>
    </div>
  );
};

export default AnimatedCounter;
