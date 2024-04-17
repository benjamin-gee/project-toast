import React from 'react';

import styles from './Button.module.css';

function Button({ className = '', callback, ...delegated }) {
    return (
        <button
            className={`${styles.button} ${className}`}
            onClick={callback}
            {...delegated}
        />
    );
}

export default Button;
