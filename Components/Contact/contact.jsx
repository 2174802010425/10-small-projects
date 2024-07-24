import classNames from "classnames/bind";
import styles from "./contact.module.scss";
import MessageIcon from "../../assets/massage-icon.png";
import Mail from "../../assets/mail.png";
import Phone from "../../assets/phone.png";
import Location from "../../assets/location.png";
import Button from "../Button/button";
import { useState } from "react";
const cx = classNames.bind(styles);
function Contact() {
  const [formData, setFormData] = useState({
    Name: "",
    phoneNumber: "",
    Email: "",
  });
  function handleChange(e) {
    const { value, name } = e.target;
    setFormData((pre) => ({ ...pre, [name]: value }));
  }
  return (
    <div className={cx("contact")}>
      <div className={cx("contact-col")}>
        <h3>
          Send us a message
          <img src={MessageIcon} alt="" />
        </h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
          <li>
            <img src={Mail} alt="" />
            <span>Contact@QuangHuy.dev</span>
          </li>
          <li>
            <img src={Phone} alt="" />
            <span>0931469037</span>
          </li>
          <li>
            <img src={Location} alt="" />
            <span>142/22, Nguyen Thi Thap, phuong Binh Thuan, Q7, TPHCM</span>
          </li>
        </ul>
      </div>
      <div className={cx("contact-col")}>
        <form>
          <label>Your name</label>
          <input
            placeholder="Enter your name"
            type="text"
            name="name"
            required
            value={formData.Name}
            onChange={handleChange}
          />
          <label>Phone Number</label>
          <input
            placeholder="Enter your phone number"
            type="text"
            name="phone"
            required
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          <label>Your Email</label>
          <input
            placeholder="Enter your email"
            type="text"
            name="email"
            required
            value={formData.Email}
            onChange={handleChange}
          />
          <label>Your name</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
          ></textarea>
        </form>
        <Button bg icon>
          Submit now
        </Button>
      </div>
    </div>
  );
}

export default Contact;
