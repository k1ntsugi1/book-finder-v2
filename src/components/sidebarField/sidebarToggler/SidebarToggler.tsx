import { ReactComponent as List } from '../../../assets/svg/list.svg'

interface IProps {
    statusOfSidebar: string,
    setStatusOfSidebar: (newStatus: string) => void
}

const SidebarToggler: React.FC<IProps> = (props) => {
    const { statusOfSidebar, setStatusOfSidebar } = props;
    const statusOfSidebarHandler = () => {
        const newStatus = statusOfSidebar === 'show' ? 'hidden' : 'show';
        setStatusOfSidebar(newStatus);
    }
    return (
        <div className="list cursor-pointer" onClick={statusOfSidebarHandler}>
            <List width='30' height='30' />
        </div>
    )
};

export default SidebarToggler;