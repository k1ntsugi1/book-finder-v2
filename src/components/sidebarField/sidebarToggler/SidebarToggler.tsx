import cn from 'classnames';
import { ReactComponent as List } from '../../../assets/svg/list.svg';
import { useAppDispatch } from '../../../store/hooks';
import { actionsUiActiveSectionOfSidebar } from '../../../store/slices/uiActiveSectionOfSidebarSlice';
interface IProps {
  showStateOfSidebar: string;
  setShowStateOfSidebar: (newStatus: string) => void;
}

const SidebarToggler: React.FC<IProps> = (props) => {
  const { showStateOfSidebar, setShowStateOfSidebar } = props;
  const appDispatch = useAppDispatch();
  const classNames = cn('list cursor-pointer', {
    border: showStateOfSidebar === 'hidden',
    rounded: showStateOfSidebar === 'hidden'
  });
  const showStateOfSidebarHandler = () => {
    const newStatus = showStateOfSidebar === 'show' ? 'hidden' : 'show';
    setShowStateOfSidebar(newStatus);
    appDispatch(actionsUiActiveSectionOfSidebar.removeActiveItemOfOptions());
  };
  return (
    <div className={classNames} onClick={showStateOfSidebarHandler}>
      <List width="30" height="30" />
    </div>
  );
};

export default SidebarToggler;
