import cn from 'classnames'
import { useEffect } from 'react';
import { useAppDispatch } from '../store/hooks';

import { actionsUiNotification } from '../store/slices/uiNotificationSlice';

const Notification: React.FC<{[index: string]: string}> = (props) => {

    const { message, visibilityStatus, type } = props;

    const appDispatch = useAppDispatch();
    
    const classnamesOfParentContainer = cn('notification background-color-sidebar color-text', {
        'notification-success': type === 'success' ? true : false,
        'notification-error': type === 'error' ? true : false,
        'show': visibilityStatus === 'visible' ? true : false,
    });

    useEffect(() => {
        const id = setTimeout(() => {appDispatch(actionsUiNotification.hide())}, 1000);
        return () => {clearTimeout(id)};
        
    });
    
    return (
        <div className={classnamesOfParentContainer}>
                <div className="notification-content">{message}</div>
        </div>
    )
};

export default Notification;