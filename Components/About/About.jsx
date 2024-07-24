import classNames from "classnames/bind";
import styles from "./about.module.scss";
import AboutLeft from "../../assets/about-left.png";
import PlayIcon from "../../assets/play-icon.png";
const cx = classNames.bind(styles);
function AboutUniversity() {
  return (
    <div className={cx("about")}>
      <div className={cx("about-left")}>
        <img src={AboutLeft} alt="" className={cx('img')}/>
        <img src={PlayIcon} alt=""  className={cx('play-img')}/>
      </div>
      <div className={cx("about-right")}>
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          Embark on a transformative educational journey with our university's
          comprehensive education programs. Our cutting-edge curriculum is
          designed to empower students with the knowledge, skills, and
          experiences needed to excel in the dynamic field of education.
        </p>
        <p>
          With a focus on innovation, hands-on learning, and personalized
          mentorship, our programs prepare aspiring educators to make a
          meaningful impact in classrooms, schools, and communities.
        </p>
        <p>
          Whether you aspire to become a teacher, administrator, counselor, or
          educational leader, our diverse range of programs offers the perfect
          pathway to achieve your goals and unlock your full potential in
          shaping the future of education.
        </p>
      </div>
    </div>
  );
}

export default AboutUniversity;
