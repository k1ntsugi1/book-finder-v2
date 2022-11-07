import cn from 'classnames';
import React from 'react';

interface IProps {
  children: React.ReactNode;
  className?: string;
  onClickHandler?: () => void;
}

const RunnerElement: React.FC<IProps> = (props) => {
  const { className, children, onClickHandler } = props;

  const classNamesOfContainer = cn('container-element-runner', className);
  const classNamesOfFrontElement = cn('element-runner front-element-runner');
  const classNamesOfBackElement = cn('element-runner back-element-runner');

  return (
    <div className={classNamesOfContainer} onClick={onClickHandler}>
      {React.Children.map(children, (child, index) => {
        return (
          <div className={index === 0 ? classNamesOfFrontElement : classNamesOfBackElement}>
            {child}
          </div>
        );
      })}
    </div>
  );
};
export default RunnerElement;
