import TranscriptionCard from "../components/mainField/transcriptionCard/TranscriptionCard";
import LinksOfContactsCard from "../components/mainField/LinksOfContactsCard";

const HomePage: React.FC = () => {
    return (
        <div className="mt-5 w-100 h-100 d-flex flex-wrap justify-content-center align-self-center gap-4">
            <TranscriptionCard />
            <LinksOfContactsCard/>
        </div >

    )
};

export default HomePage