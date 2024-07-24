import classNames from "classnames/bind";
import styles from './button.module.scss'
import WhiteArrow from '../../assets/white-arrow.png'
const cx = classNames.bind(styles)
function Button({children,to, href, primary, center, bg, icon}) {
    const props = {
        href,
        to,
        primary,
        center,
        bg,
        icon
    }
    const classes = cx('primary', {
        center,
        bg
    })
    let Elememt = 'button'
    if(href) {
        props.href = href
        Elememt = "a"
    }
    return ( <div className={cx('container')}>
        <Elememt {...props} className={classes}>
        {children}
        {icon ? <img src={WhiteArrow} alt="" className={cx('arrow-img')}/> : null}
        </Elememt>
    </div> );
}

export default Button;