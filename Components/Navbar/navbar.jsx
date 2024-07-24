
import className from 'classnames/bind'
import styles from './navbar.module.scss'
import logo from '../../assets/graduate-icon.png'
import { useEffect, useState } from 'react'
import Button from '../Button/button'
const cx = className.bind(styles)

function Navbar() {
    const [sticky, setSticky] = useState(false)
    
    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 500 ? setSticky(true) : setSticky(false)
        })
    },[])
    return ( 
    <nav className={cx(`${sticky ?'container' :'dark-nav'}`)}>
        
        <img src={logo} alt="" className={cx('graduate-img')}/>
           
        <ul>
            <li>
                <a>Home</a>
            </li>
            <li>
                <a>Program</a>
            </li>
            <li>
                <a>About us</a>
            </li>
            <li>
                <a>Campus</a>
            </li>
            <li>
                <a>Testimonials</a>
            </li>
            <li>
                <Button primary>Contact us</Button>
            </li>
        </ul>
    </nav> 
    );
}

export default Navbar;