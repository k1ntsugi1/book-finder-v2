import GlassElement from "../../GlassElement";

import NavigationTranscription from "./transcriptionItems/NavigationTranscription";
import SettingTranscription from "./transcriptionItems/SettingTranscription";

const TranscriptionCard: React.FC = () => {
    return (
        <GlassElement
            className="transcription-card-container color-text p-2 h-75 w-25 fs-6 rounded"
        >
            <div className="h-100 d-flex flex-column justify-content-around">
                <NavigationTranscription />
                <SettingTranscription />

            </div>
        </GlassElement>

    );
};

export default TranscriptionCard