import { forwardRef } from 'react';
import styles from './input.module.scss';

const Input = forwardRef(({
    onChange,
    label,
    type,
    ...rest
}: any, ref) => {
    return (
        <div className={styles.inputContainer}>
            <input type="text" className={styles.inputText} required />
            <span className={styles.floatingLabel}>{label}</span>
        </div>
    )
})

Input.defaultProps = {
    onChange: () => null,
    type: 'text'
};

export default Input;