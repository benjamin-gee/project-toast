import { useEffect } from 'react';

export const useEscapeKey = (callback) => {
    useEffect(() => {
        const escapeKeyListener = (event) => {
            if (event.keyCode === 27) {
                callback();
            }
        };

        document.addEventListener('keydown', escapeKeyListener);

        return () => {
            document.removeEventListener('keydown', escapeKeyListener);
        };
    }, [callback]);
};
