import styles from './Typography.module.scss';

const typographyConst = [
    {
        title: 'Heading 1',
        rank: 'h1'
    },
    {
        title: 'Heading 2',
        rank: 'h2'
    },
    {
        title: 'Heading 3',
        rank: 'h3'
    },
    {
        title: 'Heading 4',
        rank: 'h4'
    },
    {
        title: 'Heading 5',
        rank: 'h5'
    },
    {
        title: 'Heading 6',
        rank: 'h6'
    },
]

const Typography = () => {
    return (
        <>
            <h1>Typography</h1>
            <span><strong>Font:</strong> Averta</span>
            <div className={styles.container}>
                {
                    typographyConst.map((item: any, index) => {
                        const Tag = item.rank;
                        return (
                            <div>
                                {/* <span>{index + 1}: </span> */}
                                <Tag>{item.title}</Tag>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}

export default Typography