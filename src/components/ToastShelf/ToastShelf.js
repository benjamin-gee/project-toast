import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

const ToastShelf = ({ toasts, onClose }) => {
    return (
        <ol
            className={styles.wrapper}
            role='region'
            aria-live='polite'
            aria-label='Notification'
        >
            {toasts.map((toast) => {
                return (
                    <li className={styles.toastWrapper} key={toast.id}>
                        <Toast
                            variant={toast.variant}
                            message={toast.message}
                            onClose={() => onClose(toast.id)}
                        />
                    </li>
                );
            })}
        </ol>
    );
};

export default ToastShelf;
