import React from 'react';
import Button from '../Button';
import Toast from '../Toast';
import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
    const [selectedVariant, setSelectedVariant] = React.useState(
        VARIANT_OPTIONS[0]
    );
    const [message, setMessage] = React.useState('');
    const [showToast, setShowToast] = React.useState(false);

    const popToastCallback = () => {
        setShowToast(true);
        console.log('popped toast!');
    };

    return (
        <div className={styles.wrapper}>
            <header>
                <img alt='Cute toast mascot' src='/toast.png' />
                <h1>Toast Playground</h1>
            </header>
            {showToast && (
                <Toast
                    message={message}
                    variant={selectedVariant}
                    onClose={() => setShowToast(false)}
                />
            )}
            <div className={styles.controlsWrapper}>
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
                        <Button callback={popToastCallback}>Pop Toast!</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ToastPlayground;
