import classNames from "classnames/bind";
import styles from './Campus.module.scss'
import Gallery1 from '../../assets/gallery-1.png'
import Gallery2 from '../../assets/gallery-2.png'
import Gallery3 from '../../assets/gallery-3.png'
import Gallery4 from '../../assets/gallery-4.png'
import arrow from '../../assets/right-arrow.png'
import Button from "../Button/button";
const cx = classNames.bind(styles)
function Campus() {
    return ( 
        <div className={cx('campus')}>
            <div className={cx('gallery')}>
                <img src={Gallery1} alt=""/>
                <img src={Gallery2} alt=""/>
                <img src={Gallery3} alt=""/>
                <img src={Gallery4} alt=""/>
            </div>
            <Button center bg icon>
            See more here
            
            </Button>
        </div> 
    );
}

export default Campus;