import { ReactComponent as List } from '../../../assets/svg/list.svg'

interface IProps {
    showStateOfSidebar: string,
    setShowStateOfSidebar: (newStatus: string) => void
}

const SidebarToggler: React.FC<IProps> = (props) => {
    const { showStateOfSidebar, setShowStateOfSidebar } = props;
    const showStateOfSidebarHandler = () => {
        const newStatus = showStateOfSidebar === 'show' ? 'hidden' : 'show';
        setShowStateOfSidebar(newStatus);
    }
    return (
        <div className="list cursor-pointer" onClick={showStateOfSidebarHandler}>
            <List width='30' height='30' />
        </div>
    )
};

export default SidebarToggler;