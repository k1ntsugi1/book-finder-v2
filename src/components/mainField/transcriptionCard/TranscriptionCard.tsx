import cn from 'classnames';

import GlassElement from '../../GlassElement';

import NavigationTranscription from './transcriptionItems/NavigationTranscription';
import SettingTranscription from './transcriptionItems/SettingTranscription';

const TranscriptionCard: React.FC = () => {
  const classNamesOfContainerWrapper = cn('cursor-pointer');
  const classNamesOfChildrenWrapper = cn('d-flex flex-nowrap');
  const classNamesOfSVGContainer = cn('align-self-center d-flex flex-nowrap align-items-center');

  return (
    <GlassElement className="transcription-card-container color-text p-2 h-75 w-25 fs-6 rounded">
      <div className="h-100 d-flex flex-column justify-content-around">
        <NavigationTranscription
          classNamesOfContainerWrapper={classNamesOfContainerWrapper}
          classNamesOfChildrenWrapper={classNamesOfChildrenWrapper}
          classNamesOfSVGContainer={classNamesOfSVGContainer}
        />
        <SettingTranscription
          classNamesOfContainerWrapper={classNamesOfContainerWrapper}
          classNamesOfChildrenWrapper={classNamesOfChildrenWrapper}
          classNamesOfSVGContainer={classNamesOfSVGContainer}
        />
      </div>
    </GlassElement>
  );
};

export default TranscriptionCard;
