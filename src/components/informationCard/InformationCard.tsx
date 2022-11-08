import { useRef, useEffect } from 'react';
import cn from 'classnames';

import GlassElement from '../GlassElement';

import { sizes } from './sizes';

interface IProps {
  message: string;
  size?: string;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

const InformationCard: React.FC<IProps> = (props) => {
  const { children, message, className, size = 's', onClick = () => {} } = props;

  const textRef = useRef<HTMLSpanElement>(null);
  const classNames = cn('color-text align-self-center border rounded', className);

  useEffect(() => {
    const text = textRef.current!.innerHTML;
    const lengthOfText = text.length - 1;

    const idsOfTimeouts: ReturnType<typeof setTimeout>[] = [];

    const printText = (position: number) => {
      textRef.current!.innerHTML = text.substring(0, position);
    };

    const setTimeoutes = (position: number) => {
      if (lengthOfText === 0 || position > lengthOfText) return;
      const idOfTimeout: ReturnType<typeof setTimeout> = setTimeout(
        () => printText(position),
        (position + 1) * 150
      );
      idsOfTimeouts.push(idOfTimeout);
      setTimeoutes(position + 1);
    };

    setTimeoutes(0);

    return () => {
      idsOfTimeouts.forEach((id) => clearTimeout(id));
    };
  });

  return (
    <GlassElement className={classNames} style={sizes[size]}>
      <div className="h-100 centered-content border rounded" onClick={onClick}>
        {children}
        <span className="ps-3" ref={textRef}>
          {message}
        </span>
        <span
          className="background-color-text blinking"
          style={{
            width: '3px',
            height: '1rem'
          }}
        ></span>
      </div>
    </GlassElement>
  );
};

export default InformationCard;
