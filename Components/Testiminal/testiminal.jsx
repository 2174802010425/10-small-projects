import classNames from "classnames/bind";
import styles from "./testiminal.module.scss";
import GoBack from "../../assets/goback.png";
import MoveOn from "../../assets/moveon.png";
import User1 from "../../assets/Emily.png";
import User2 from "../../assets/William.png";
import User3 from "../../assets/User3.png";
import User4 from "../../assets/user4.png";
import { useRef } from "react";
const cx = classNames.bind(styles);
function Testiminals() {
  const slider = useRef();
  let tx = 0;
  function handleNext() {
    if(tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
    console.log(tx);
  }
  function handlePrevious() {
    if(tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
    console.log(tx)
  }
  return (
    <div className={cx("testiminals")}>
      <img
        src={GoBack}
        alt=""
        className={cx("back-btn")}
        onClick={handleNext}
      />
      <img
        src={MoveOn}
        alt=""
        className={cx("next-btn")}
        onClick={handlePrevious}
      />
      <div className={cx("slider")}>
        <ul ref={slider}>
          <li>
            <div className={cx("slide")}>
              <div className={cx("user-info")}>
                <img src={User1} alt="" className={cx("user-img")} />
                <div>
                  <h3 className={cx("user-name")}>Emily Williams</h3>
                  <span className={cx("user-country")}>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className={cx("slide")}>
              <div className={cx("user-info")}>
                <img src={User2} alt="" className={cx("user-img")} />
                <div>
                  <h3 className={cx("user-name")}>Emily Williams</h3>
                  <span className={cx("user-country")}>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className={cx("slide")}>
              <div className={cx("user-info")}>
                <img src={User3} alt="" className={cx("user-img")} />
                <div>
                  <h3 className={cx("user-name")}>Emily Williams</h3>
                  <span className={cx("user-country")}>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className={cx("slide")}>
              <div className={cx("user-info")}>
                <img src={User4} alt="" className={cx("user-img")} />
                <div>
                  <h3 className={cx("user-name")}>Emily Williams</h3>
                  <span className={cx("user-country")}>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Testiminals;
