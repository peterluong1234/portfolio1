import NavItem from './NavItem'
import styles from '../styles/Navbar.module.scss'

const MENU_LIST = [
    {text: "Home", href: '/'},
    {text: "About", href: '/about'},
    {text: "Projects", href: '/projects'},
    // {text: "Github", href: 'https://github.com/peterluong1234'},
    {text: "LinkedIn", href: 'https://www.linkedin.com/in/peter-luong-677530a9/'},
]

export const Navbar = () => {
    // const [navActive, setNavActive] = useState(null);
    // const [activeIdx, setActiveIdx] = useState(-1);


    return (
            <nav>
                <div className={styles.nav}>
                    {MENU_LIST.map((item, idx) => (
                        <div key={idx}className={styles.navItem}>
                        <NavItem name={item.text} href= {item.href} key={idx}/>
                        </div>
                    ))}
                </div>
            </nav>
    )
}