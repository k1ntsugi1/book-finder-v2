import { useRef, useEffect } from 'react';
import cn from 'classnames';

import GlassElement from './GlassElement';

interface IProps {
  message: string;
  className?: string;
  children?: React.ReactNode;
}

const SmallInformationCard: React.FC<IProps> = (props) => {
  const { children, message, className } = props;

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
    <GlassElement
      className={classNames}
      style={{
        width: '200px',
        height: '100px'
      }}
    >
      <div className="h-100 centered-content border rounded">
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

export default SmallInformationCard;
