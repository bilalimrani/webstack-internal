import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import clsx from 'classnames';
import styles from './Button.module.scss';

const ButtonComp = ({
  btnType,
  label,
  icon,
  disabled,
  size,
  ...props
}: any) => {
  const iconSizeStyle = size === 'large' ? styles.iconSizeLarge : size === 'medium' ? styles.iconSizeMedium : styles.iconSizeSmall;
  return (
    <button
      className={clsx(styles.button, styles[btnType], styles[size])}
      disabled={disabled}
      {...props}
    >
      {label}
      {icon && <ArrowForwardIcon className={iconSizeStyle} />}
    </button>
  );
};

ButtonComp.defaultProps = {
  onclick: () => null,
  btnType: 'primary',
  icon: false,
  size: 'large'
}

export default ButtonComp;