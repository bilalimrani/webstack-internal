import { forwardRef, useState } from 'react';
import styles from './input.module.scss';

const Input = forwardRef(({
    onChange,
    label,
    type,
    ...rest
}: any, ref) => {
    const [value, setValue] = useState('');
    const [error] = useState('');
    return (
        <div className={styles.inputContainer}>
            <input type={type} className={error ? `${styles.error}` : ''} value={value} onChange={(e) => setValue(e.target.value)} />
            <label className={`${value && `${styles.filled}`}${error ? `${styles.error}` : '' }`} htmlFor={label}>
                Email Address
            </label>
            {error && <span className={styles.error}>Email must be formatted correctly.</span>}
        </div>
    )
})

Input.defaultProps = {
    onChange: () => null,
    type: 'text'
};

export default Input;