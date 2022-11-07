import { RefObject } from 'react';
import { useAppSelector } from '../../store/hooks';

import StraightProgressBar from './progressBars/StraightProgressBar';
import CircleProgressBar from './progressBars/CircleProgressBar';
import ElementOfScrollIntoView from './ElementOfScrollIntoView';

const ProgressSection: React.FC<{ upperBlockRef?: RefObject<HTMLDivElement> }> = (props) => {
  const { upperBlockRef } = props;
  const { percentOfFilling } = useAppSelector((store) => store.uiProgressBar);
  const { typeOfProgressBar } = useAppSelector((store) => store.uiProgressBar);

  return (
    <div className="progress-section">
      {typeOfProgressBar === 'straight' ? <StraightProgressBar /> : <CircleProgressBar />}
      {upperBlockRef && percentOfFilling > 40 && (
        <ElementOfScrollIntoView
          elementOfBreakPoint={upperBlockRef}
          className="background-color-sidebar color-progressBar "
        />
      )}
    </div>
  );
};

export default ProgressSection;
