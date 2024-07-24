import styles from './hero.module.scss'
import classNames from 'classnames/bind'
import arrow from '../../assets/right-arrow.png'
const cx = classNames.bind(styles)
function Hero() {
    return ( 
        <div className={cx('hero', {
            container : true
        })}>
            <div className={cx("hero-text")}>
                <h1>We ensure better education for a better world</h1>
                <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education</p>
            </div>
            <a className={cx('btn')} href='https://online.vlu.edu.vn/Login'>
                Explore more
                <img src={arrow} alt=''/>
            </a>
        </div> 
    );
}

export default Hero;