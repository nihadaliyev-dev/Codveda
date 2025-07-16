import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router";

import sunIcon from "../../../assets/icons/sun.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerMain}>
          <nav className={styles.navbar}>
            <div className={styles.logo}>diano</div>
            <div className={styles.navLinks}>
              <ul className={styles.navLinks__ul}>
                <li className={styles.navLink__li}>
                  <Link className={styles.navLink__a__active} to={"./"}>
                    Home
                  </Link>
                </li>
                <li className={styles.navLink__li}>
                  <a className={styles.navLink__a}>About us</a>
                </li>
                <li className={styles.navLink__li}>
                  <a className={styles.navLink__a}>Courses</a>
                </li>
                <li className={styles.navLink__li}>
                  <a className={styles.navLink__a}>FAQ</a>
                </li>
                <li
                  className={
                    (styles.navLink__li, styles.navLink__li__contactUs)
                  }
                >
                  <a
                    className={
                      (styles.navLink__a, styles.navLink__a__contactUs)
                    }
                  >
                    Contact Us
                  </a>
                </li>
                <li className={styles.navLink__li}>
                  <button className={styles.navLink__btn}>
                    <img src={sunIcon} width="24" height="24" alt="" />
                  </button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
