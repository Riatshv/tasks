import mainStyles from "./styles.module.css"

export const Consultation = ({styles}) => {
    return (
        <section className={mainStyles.moreInformation}>
            <h2 className={mainStyles.title}>
                Вместе с 
                <span className={[styles.gradientt, mainStyles.mobileText].join(" ")}> БЕСПЛАТНОЙ КОНСУЛЬТАЦИЕЙ </span>
                мы дарим:
            </h2>
            <ul className= {mainStyles.list}>
                <li>
                    <h3 className={mainStyles.elemTitle}>Виджеты</h3>
                    <div className={mainStyles.elemInfo}>30 готовых решений</div>
                </li>
                <li>
                    <h3 className={mainStyles.elemTitle}>Dashboard</h3>
                    <div className={mainStyles.elemInfo}>с показателями вашего бизнеса</div>
                </li>
                <li>
                    <h3 className={mainStyles.elemTitle}>Skype Аудит</h3>
                    <div className={mainStyles.elemInfo}>отдела продаж и CRM системы</div>
                </li>
                <li>
                    <h3 className={mainStyles.elemTitle}>35 дней</h3>
                    <div className={mainStyles.elemInfo}>использования CRM</div>
                </li>
            </ul>

            <ul className= {[mainStyles.list, mainStyles.listMobile].join(" ")}>
                <li className={mainStyles.elem}>
                    <h3 className={mainStyles.elemTitle}>SKYPE АУДИТ</h3>
                </li>
                <li className={mainStyles.elem}>
                    <h3 className={mainStyles.elemTitle}>30 ВИДЖЕТОВ</h3>
                </li>
                <li className={mainStyles.elem}>
                    <h3 className={mainStyles.elemTitle}>DASHBOARD</h3>
                </li>
                <li className={mainStyles.elem}>
                    <h3 className={mainStyles.elemTitle}>МЕСЯЦ AMOCRM</h3>
                </li>
            </ul>
            <button className={mainStyles.button}>Получить консультацию</button>
        </section>
    )
}