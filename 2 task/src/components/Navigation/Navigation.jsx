export const Navigation = ({styles}) => {
    return (
        <nav className={styles.headerNav}>
            <ul className={styles.headerList}>
                <li className={styles.headerListElem}>
                    <a href="">Услуги</a>
                </li>
                <li className={styles.headerListElem}>
                    <a href="">Виджеты</a>
                </li>
                <li className={styles.headerListElem}>
                    <a href="">Интеграции</a>
                </li>
                <li className={styles.headerListElem}>
                    <a href="">Кейсы</a>
                </li>
                <li className={styles.headerListElem}>
                    <a href="">Сертификаты</a>
                </li>
            </ul>
        </nav>
    )
}