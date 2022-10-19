import cn from 'classnames'
import { useEffect } from 'react';
import { useAppDispatch } from '../store/hooks';

import { actionsUiNotification } from '../store/uiNotificationSlice';

interface IProps {
    [index: string]: string
}

const Notification: React.FC<IProps> = (props) => {
    const appDispatch = useAppDispatch();
    const { message, visibilityStatus, type } = props;
    const classnamesOfParentContainer = cn('notification', {
        'notification-success': type === 'success' ? true : false,
        'notification-error': type === 'error' ? true : false,
        'show': visibilityStatus === 'visible' ? true : false,
    })
    useEffect(() => {
        const id = setTimeout(() => {appDispatch(actionsUiNotification.hide())}, 1000);
        return () => {clearTimeout(id)};
        
    })
    return (
        <div 
            className={classnamesOfParentContainer}
            style={{
                'background': 'var(--color-sidebar)',
                'color': 'var(--color-text)'
            }}>
                <div className="notification-content">{message}</div>
        </div>
    )

};

export default Notification;