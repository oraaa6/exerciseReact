import styles from './Menu.module.css'
import {NavLink} from 'react-router-dom'

const Menu = () => {
    return ( 
        <nav>
            <ul className={styles.menuList}>
                <li className={styles.menuList__Item}>
                    <NavLink className={styles.menuList_link} to ="/">Strona głowna
                        </NavLink>
                </li>
                <li className={styles.menuList__Item}>
                    <NavLink className={styles.menuList_link} to ="/about">O nas
                        </NavLink>
                </li>
                <li className={styles.menuList__Item}>
                    <NavLink className={styles.menuList_link} to ="/products">Pordukty
                        </NavLink>
                </li>
                <li className={styles.menuList__Item}>
                    <NavLink className={styles.menuList_link} to ="/contact">Kontakt
                        </NavLink>
                </li>
            </ul>
        </nav>
     );
}
 
export default Menu;