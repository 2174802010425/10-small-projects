import classNames from "classnames/bind";
import styles from './title.module.scss'
const cx = classNames.bind(styles)
function Title({subTitle , subDescription}) {
    return ( 
        <div className={cx('title')}>
            <p>{subTitle}</p>
            <h2>{subDescription}</h2>
        </div> 
    );
}

export default Title;