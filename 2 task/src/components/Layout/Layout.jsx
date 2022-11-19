import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import styles from "./styles.module.css"

export const Layout = ({children}) => {
    return (
        <div className={styles.app}>
            <div className="container">
                <Header></Header>
                {children}
                <Footer></Footer>
            </div>
        </div>
    )
};