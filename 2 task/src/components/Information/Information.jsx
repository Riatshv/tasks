import { ReactComponent as TelegrammSvg} from "./imgs/Tg.svg";
import { ReactComponent as PhoneSvg} from "./imgs/phone.svg";
import { ReactComponent as WhatsSvg} from "./imgs/whats.svg";

export const Information = ({styles}) => {
    return (
        <div className={styles.container}>
            <div className={styles.phoneNumber}>+7 555 555-55-55</div>
            <ul className={styles.list}>
                <li className={styles.listElem}>
                    <a href=""><TelegrammSvg></TelegrammSvg></a>
                </li>
                <li className={styles.listElem}>
                    <a href = ""><PhoneSvg></PhoneSvg></a>
                </li>
                <li className={styles.listElem}>
                    <a href=""><WhatsSvg></WhatsSvg></a>
                </li>
            </ul>
            <div className={styles.adress}>Москва, Путевой проезд 3с1, к 902</div>
            <div className={styles.welbex}>
                WELBEX 2022. Все права защищены.
                <div className={styles.welbexPolitic}>Политика конфиденциальности</div>
            </div>
        </div>
    )
}