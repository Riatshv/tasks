import { Information } from "../Information/Information"
import styles from "./styles.module.css"

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <ul className={styles.footerList}>
                <li className={styles.footerElem}>
                    <div className={styles.elemTitle}>
                        О компании
                    </div>
                    <ul className={styles.elemList}>
                        <li className={styles.elemList_elem}>
                            <a href="" className={styles.elemLink}>Партнёрская программа</a>
                        </li>
                        <li className={styles.elemList_elem}>
                            <a href="" className={styles.elemLink}>Вакансии</a>
                        </li>
                    </ul>
                </li>
                <li className={styles.footerElem}>
                    <div className={styles.elemTitle}>
                        Меню
                    </div>
                    <ul className={[styles.elemList, styles.elemListSecond].join(" ")}>
                        <li className={styles.elemList_elem}>
                            <a href="" className={styles.elemLink}>Расчёт стоимости</a>
                        </li>

                        <li className={[styles.elemList_elem, styles.elemList_elem_Mobile].join(" ")}>
                            <a href="" className={styles.elemLink}>Благодарность клиентов</a>
                        </li>

                        <li className={styles.elemList_elem}>
                            <a href="" className={styles.elemLink}>Кейсы</a>
                        </li>
                        <li className={styles.elemList_elem}>
                            <a href="" className={styles.elemLink}>Услуги</a>
                        </li>
                        <li className={[styles.elemList_elem, styles.elemList_elem_Desk].join(" ")}>
                            <a href="" className={styles.elemLink}>Благодарственные письма</a>
                        </li>
                        <li className={styles.elemList_elem}>
                            <a href="" className={styles.elemLink}>Виджеты</a>
                        </li>
                        <li className={styles.elemList_elem}>
                            <a href="" className={styles.elemLink}>Сертификаты</a>
                        </li>
                        <li className={styles.elemList_elem}>
                            <a href="" className={styles.elemLink}>Интеграции</a>
                        </li>
                        <li className={styles.elemList_elem}>
                            <a href="" className={styles.elemLink}>Блог на Youtube</a>
                        </li>
                        <li className={styles.elemList_elem}>
                            <a href="" className={styles.elemLink}>Наши клиенты</a>
                        </li>
                        <li className={styles.elemList_elem}>
                            <a href="" className={styles.elemLink}>Вопрос / Ответ</a>
                        </li>
                    </ul>
                </li>
                <li className={styles.footerElem}>
                    <div className={styles.elemTitle}>
                        Контакты
                    </div>
                    <Information styles={styles}></Information>
                </li>
            </ul>
        </footer>
    )
}