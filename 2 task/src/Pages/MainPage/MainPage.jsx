import { Consultation } from "../../components/Consultation/Consultation";
import styles from "./styles.module.css"

export const MainPage = () => {
    return (
        <main className = {styles.container}>
            <section className = {styles.tagline}>
                <h1 className = {styles.title}>
                    Зарабатывайте больше
                    <div className = {styles.gradientt}>с WELBEX</div>
                </h1>
                <div className={styles.taglineInfo}>
                    Развиваем и контролируем продажи за вас
                </div>
            </section>
            <Consultation styles={styles}></Consultation>
        </main>
    )
}