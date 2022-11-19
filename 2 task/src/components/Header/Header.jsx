import { Information } from "../Information/Information"
import { Logo } from "../Logo/Logo"
import { Navigation } from "../Navigation/Navigation"
import styles from "./styles.module.css"

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.headerLeft}>
                <Logo styles={styles}></Logo> 
                <Navigation styles={styles}></Navigation>
            </div>

            <div className={styles.headerRight}>
                <Information styles={styles}></Information>
            </div>
        </header>
    )
}