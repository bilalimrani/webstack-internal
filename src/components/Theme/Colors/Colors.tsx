import styles from './Colors.module.scss';

const colorObject = [
    {
        title: 'theme.color.primary',
        colorName: 'Dodger Blue',
        colorCode: '#2885F6'
    },
    {
        title: 'theme.color.secondary',
        colorName: 'Solitude',
        colorCode: '#E3F2FF'
    },
    {
        title: 'theme.color.tertiary',
        colorName: 'Mischka',
        colorCode: '#D0D5DD'
    },
    {
        title: 'theme.color.warning',
        colorName: 'Zest',
        colorCode: '#E48C20'
    },
    {
        title: 'theme.color.danger',
        colorName: 'Fiord',
        colorCode: '#475467'
    },
]

const Colors = () => {
    return (
        <>
            <h1>Colors</h1>
            <div className={styles.container}>
                <div className={styles.innerContainer}>
                    <div className={styles.left}>Name</div>
                    <div className={styles.left}>Swatches</div>
                </div>
                {
                    colorObject.map((item, index) => (
                        <div key={index} className={styles.innerContainer}>
                            <div className={styles.left}>
                                <div>{item.title}</div>
                                <div className={styles.leftBottom}>
                                    <div>{item.colorName}</div>
                                </div>
                            </div>
                            <div className={styles.right}>
                                <div className={styles.color} style={{ backgroundColor: item.colorCode }}></div>
                                <div className={styles.rightBottom}>
                                    <div>{item.colorCode}</div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default Colors