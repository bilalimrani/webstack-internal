import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import clsx from 'classnames';
import styles from './Button.module.scss';

const ButtonComp = ({
  btnType,
  label,
  icon,
  ...props
}: any) => {
  return (
    <button
      className={clsx(styles.button, styles[btnType])}
      {...props}
    >
      {label}
      {icon && <ArrowForwardIcon className={styles.arrowIcon} />}
    </button>
  );
};

ButtonComp.defaultProps = {
  onclick: () => null,
  btnType: 'primary',
  icon: false
}

export default ButtonComp;