import SearchItem from "./settingItems/SearchItem";
import StylingItem from "./settingItems/StylingItem";

const SettingSection: React.FC<{classnamesOfSidebarElement: string}> = (props) => {
    const { classnamesOfSidebarElement } = props;
    
    return (
        <div className="mx-auto">
            <SearchItem classnamesOfSidebarElement={classnamesOfSidebarElement}/>
            <StylingItem classnamesOfSidebarElement={classnamesOfSidebarElement}/>
        </div>
    )
};

export default SettingSection;