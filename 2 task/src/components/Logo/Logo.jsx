import {ReactComponent as LogoSvg} from "../../imgs/logo.svg"
import {ReactComponent as LogoSvgText} from "../../imgs/logoText.svg"

export const Logo = ({styles}) => {
    return (
        <div className={styles.logoContainer}>
            <div className={styles.logo}>
                <LogoSvg className = {styles.logoSvg}></LogoSvg>
                <LogoSvgText className={styles.logoSvgTxt}></LogoSvgText>
            </div>
            <div className={styles.logoText}>крупный интегратор CRM в России и еще 8 странах</div>
        </div>

    )
}