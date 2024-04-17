import React from 'react';
import Button from '../Button';
import styles from './ToastPlayground.module.css';
import ToastShelf from '../ToastShelf/ToastShelf';
import { ToastContext, VARIANT_OPTIONS } from '../ToastProvider/ToastProvider';

function ToastPlayground() {
    const { toasts, addToast, removeToast, removeAllToasts } =
        React.useContext(ToastContext);

    const [selectedVariant, setSelectedVariant] = React.useState(
        VARIANT_OPTIONS[0]
    );
    const [message, setMessage] = React.useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        addToast(selectedVariant, message);
        setMessage('');
        setSelectedVariant(VARIANT_OPTIONS[0]);
    };

    React.useEffect(() => {
        const escapeKeyListener = (event) => {
            if (event.keyCode === 27) {
                removeAllToasts();
            }
        };

        document.addEventListener('keydown', escapeKeyListener);

        return () => {
            document.removeEventListener('keydown', escapeKeyListener);
        };
    }, [removeAllToasts]);

    return (
        <div className={styles.wrapper}>
            <header>
                <img alt='Cute toast mascot' src='/toast.png' />
                <h1>Toast Playground</h1>
            </header>
            {toasts.length > 0 && (
                <ToastShelf toasts={toasts} onClose={removeToast} />
            )}
            <form className={styles.controlsWrapper} onSubmit={handleSubmit}>
                <div className={styles.row}>
                    <label
                        htmlFor='message'
                        className={styles.label}
                        style={{ alignSelf: 'baseline' }}
                    >
                        Message
                    </label>
                    <div className={styles.inputWrapper}>
                        <textarea
                            id='message'
                            className={styles.messageInput}
                            value={message}
                            onChange={(event) => setMessage(event.target.value)}
                        />
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.label}>Variant</div>
                    <div
                        className={`${styles.inputWrapper} ${styles.radioWrapper}`}
                    >
                        {VARIANT_OPTIONS.map((variant) => {
                            const id = `variant-${variant}`;
                            return (
                                <label htmlFor={id} key={id}>
                                    <input
                                        id={id}
                                        type='radio'
                                        name='variant'
                                        value={variant}
                                        onChange={() => {
                                            setSelectedVariant(variant);
                                        }}
                                        checked={selectedVariant === variant}
                                    />
                                    {variant}
                                </label>
                            );
                        })}
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.label} />
                    <div
                        className={`${styles.inputWrapper} ${styles.radioWrapper}`}
                    >
                        <Button>Pop Toast!</Button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ToastPlayground;
