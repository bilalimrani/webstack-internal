import { forwardRef, useState } from 'react';
import styles from './input.module.scss';

const Input = forwardRef(({
    onChange,
    label,
    type,
    styleInputWrapper,
    styleLabel,
    ...rest
}: any, ref) => {
    const [value, setValue] = useState('');
    const [error] = useState('');
    return (
        <div className={`inputContainer ${styles.inputContainer} ${styleInputWrapper}`}>
            <input
                type={type}
                className={`${error ? `${styles.error}` : ''}`} value={value}
                onChange={(e) => setValue(e.target.value)}
                {...rest}
            />
            <label className={`${value && `filled`} ${error ? styles.error : ''} ${styleLabel}`} htmlFor={label}>
                {label}
            </label>
            {/* {error && <span className={styles.error}>Email must be formatted correctly.</span>} */}
        </div>
    )
})

Input.defaultProps = {
    onChange: () => null,
    type: 'text'
};

export default Input;