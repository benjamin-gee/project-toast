import { createContext, useState } from 'react';

export const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];
export const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = useState([]);

    const addToast = (selectedVariant, message) => {
        setToasts([
            ...toasts,
            { variant: selectedVariant, message, id: crypto.randomUUID() }
        ]);
    };

    const removeToast = (idToRemove) => {
        setToasts((prevToastState) =>
            prevToastState.filter((toast) => toast.id !== idToRemove)
        );
    };

    const removeAllToasts = () => {
        setToasts([]);
    };

    const toastProviderValue = {
        toasts,
        addToast,
        removeToast,
        removeAllToasts
    };

    return (
        <ToastContext.Provider value={toastProviderValue}>
            {children}
        </ToastContext.Provider>
    );
};
