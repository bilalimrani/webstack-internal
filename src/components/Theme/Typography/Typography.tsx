import { Typography } from '@mui/material';
import styles from './Typography.module.scss';

const TypographyComp = () => {
    return (
        <>
            <Typography variant='h4'>Typography</Typography>
            <span><strong>Font:</strong> Averta</span>
            <div className={styles.container}>
                <Typography variant='h6'>Heading 6</Typography>
                <Typography variant='h5'>Heading 5</Typography>
                <Typography variant='h4'>Heading 4</Typography>
                <Typography variant='h3'>Heading 3</Typography>
                <Typography variant='h2'>Heading 2</Typography>
                <Typography variant='h1'>Heading 1</Typography>
            </div>
        </>
    );
}

export default TypographyComp