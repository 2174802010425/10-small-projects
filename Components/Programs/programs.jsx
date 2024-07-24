import className from 'classnames/bind'
import styles from './programs.module.scss'
import Student1 from '../../assets/student1.png'
import Student2 from '../../assets/student2.png'
import Student3 from '../../assets/student3.png'
import GraduationDegree from '../../assets/graduation-degree.png'
import MasterDegree from '../../assets/master-degree.png'
import PostGraduation from '../../assets/post-graduation.png'
const cx = className.bind(styles)
function Program () {
    return ( 
        <div className={cx('program-container')}>
            
            
            <div className={cx('programs')}>
                <div className={cx('program')}>
                    <img src = {Student1} alt=''/>
                    <div className={cx('action')}>
                        <img src={GraduationDegree} alt=''/>
                        <p>Graduation Degree</p>
                    </div>
                </div>
                <div className={cx('program')}>
                    <img src = {Student2} alt=''/>
                    <div className={cx('action')}>
                        <img src={MasterDegree}/>
                        <p>Master Degree</p>
                    </div>
                </div>
                <div className={cx('program')}>
                    <img src = {Student3} alt=''/>
                    <div className={cx('action')}>
                        <img src={PostGraduation}/>
                        <p>Post Gradution</p>
                    </div>
                </div>
            </div>

            
        </div> 
    );
}

export default Program;