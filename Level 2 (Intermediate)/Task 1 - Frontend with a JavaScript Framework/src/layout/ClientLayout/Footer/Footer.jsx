import React from "react";
import { Link } from "react-router";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerMain}>
          <div className={styles.footerLeftSide}>
            <div className={styles.footerLogo}>
              <div className={styles.logo}>diano</div>
            </div>
            <div className={styles.footerSocials}>
              <ul className={styles.footerSocials__ul}>
                <li className={styles.footerSocial__li}>
                  <Link to={"/"} className={styles.footerSocial__a}></Link>
                </li>
                <li className={styles.footerSocial__li}>
                  <Link to={"/"} className={styles.footerSocial__a}></Link>
                </li>
                <li className={styles.footerSocial__li}>
                  <Link to={"/"} className={styles.footerSocial__a}></Link>
                </li>
                <li className={styles.footerSocial__li}>
                  <Link to={"/"} className={styles.footerSocial__a}></Link>
                </li>
                <li className={styles.footerSocial__li}>
                  <Link to={"/"} className={styles.footerSocial__a}></Link>
                </li>
                <li className={styles.footerSocial__li}>
                  <Link to={"/"} className={styles.footerSocial__a}></Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.footerRightSide}>
            <div className={styles.footerLinksMain}>
              <div className={styles.footerLinksHeader}>Products</div>
              <div className={styles.footerLinksBody}>
                <ul className={styles.footerLinks}>
                  <li className={styles.footerLink__li}>
                    <Link to={"/"} className={styles.footerLink__a}>
                      Courses
                    </Link>
                  </li>
                  <li className={styles.footerLink__li}>
                    <Link to={"/"} className={styles.footerLink__a}>
                      Development
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.footerLinksMain}>
              <div className={styles.footerLinksHeader}>Resources</div>
              <div className={styles.footerLinksBody}>
                <ul className={styles.footerLinks}>
                  <li className={styles.footerLink__li}>
                    <Link to={"/"} className={styles.footerLink__a}>
                      Careers
                    </Link>
                  </li>
                  <li className={styles.footerLink__li}>
                    <Link to={"/"} className={styles.footerLink__a}>
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.footerLinksMain}>
              <div className={styles.footerLinksHeader}>Company</div>
              <div className={styles.footerLinksBody}>
                <ul className={styles.footerLinks}>
                  <li className={styles.footerLink__li}>
                    <Link to={"/"} className={styles.footerLink__a}>
                      QA
                    </Link>
                  </li>
                  <li className={styles.footerLink__li}>
                    <Link to={"/"} className={styles.footerLink__a}>
                      Terms and conditions
                    </Link>
                  </li>
                  <li className={styles.footerLink__li}>
                    <Link to={"/"} className={styles.footerLink__a}>
                      Privacy policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
