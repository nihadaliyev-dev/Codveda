import React from "react";
import styles from "./Home.module.css";
import avatar1 from "../../assets/images/avatar1.png";
import avatar2 from "../../assets/images/avatar2.png";
import avatar3 from "../../assets/images/avatar3.png";
import avatar4 from "../../assets/images/avatar4.png";
import avatar5 from "../../assets/images/avatar5.png";
import avatar6 from "../../assets/images/avatar6.png";
import brainIcon from "../../assets/images/brainIcon.png";
import course1 from "../../assets/images/course1.jpg";
import details1 from "../../assets/images/details1.svg";
import details2 from "../../assets/images/details2.svg";
import retroComputer from "../../assets/images/retro-computer.png";

const Home = () => {
  return (
    <main className={styles.main}>
      <div className={styles.mainMain}>
        <div className={styles.container}>
          <section className={styles.heroSection}>
            <div className={styles.heroSection__bg}>
              <div className={styles.firstCircle}>
                <div className={styles.imgs}>
                  <img src={avatar1} alt="" />
                  <img src={avatar4} alt="" />
                  <img src={brainIcon} alt="" />
                  <img src={avatar5} alt="" />
                </div>
              </div>
              <div className={styles.secondCircle}>
                <div className={styles.imgs}>
                  <img src={avatar3} alt="" />
                  <img src={avatar6} alt="" />
                  <img src={avatar1} alt="" />
                  <img src={avatar4} alt="" />
                </div>
              </div>
              <div className={styles.thirdCircle}>
                <div className={styles.imgs}>
                  <img src={avatar1} alt="" />
                  <img src={avatar2} alt="" />
                  <img src={avatar4} alt="" />
                  <img src={avatar5} alt="" />
                </div>
              </div>
            </div>
            <div className={styles.heroSection__content}>
              <h5 className={styles.heroSection__content__header}>
                Where the joy of learn meets the power of community
              </h5>
              <p className={styles.heroSection__content__paragraph}>
                Dive deep in immersive, interactive small groups. Expand
                horizons, engage in discussions, and elevate your learning
                journey with us.
              </p>
              <a className={styles.heroSection__content__btn} href="#">
                Start your travel
              </a>
              <a className={styles.heroSection__content__link} href="#">
                Watch video
              </a>
            </div>
          </section>
        </div>

        <div className={styles.container}>
          <section className={styles.detailsSection}>
            <div className={styles.detailsSection__detail}>
              <div className={styles.detailsSection__detail__icon}>
                <img src={details1} alt="" />
              </div>
              <div className={styles.detailsSection__detail__content}>
                <div className={styles.detailsSection__detail__content__header}>
                  Explore topics
                </div>
                <div className={styles.detailsSection__detail__content__main}>
                  Explore our selection of courses in development
                </div>
              </div>
            </div>
            <div className={styles.detailsSection__detail}>
              <div className={styles.detailsSection__detail__icon}>
                <img src={details2} alt="" />
              </div>
              <div className={styles.detailsSection__detail__content}>
                <div className={styles.detailsSection__detail__content__header}>
                  Meet new friends
                </div>
                <div className={styles.detailsSection__detail__content__main}>
                  Join the network with million of students and learn
                </div>
              </div>
            </div>
            <div className={styles.detailsSection__detail}>
              <div className={styles.detailsSection__detail__icon}>
                <img src={details2} alt="" />
              </div>
              <div className={styles.detailsSection__detail__content}>
                <div className={styles.detailsSection__detail__content__header}>
                  Learn code
                </div>
                <div className={styles.detailsSection__detail__content__main}>
                  Learn all about code and become in a developer
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className={styles.container}>
          <section className={styles.popularCoursesSection}>
            <div className={styles.popularCoursesSection__header}>
              <h5>Popular Courses</h5>
            </div>
            <div className={styles.popularCoursesSection__main}>
              <div className={styles.popularCoursesSection__main__course}>
                <div
                  className={
                    styles.popularCoursesSection__main__course__bannerImg
                  }
                >
                  <div
                    className={
                      styles.popularCoursesSection__main__course__bannerImg__category
                    }
                  >
                    Development
                  </div>
                  <img
                    className={
                      styles.popularCoursesSection__main__course__bannerImg__img
                    }
                    src={course1}
                    alt=""
                  />
                </div>
                <div
                  className={
                    styles.popularCoursesSection__main__course__content
                  }
                >
                  <p
                    className={
                      styles.popularCoursesSection__main__course__content__header
                    }
                  >
                    Frontend Development with JavaScript
                  </p>
                  <div
                    className={
                      styles.popularCoursesSection__main__course__content__author
                    }
                  >
                    By Cristian Muhaz
                  </div>
                  <div
                    className={
                      styles.popularCoursesSection__main__course__content__duration
                    }
                  >
                    <div
                      className={
                        styles.popularCoursesSection__main__course__content__duration__icon
                      }
                    ></div>
                    <div
                      className={
                        styles.popularCoursesSection__main__course__content__duration__text
                      }
                    >
                      Duration: <span>7 weeks</span>
                    </div>
                  </div>
                  <div
                    className={
                      styles.popularCoursesSection__main__course__content__price__discount
                    }
                  >
                    $80.00 USD 80% discount
                  </div>
                  <button
                    className={
                      styles.popularCoursesSection__main__course__content__price
                    }
                  >
                    Buy now $14.00 USD
                  </button>
                </div>
              </div>
              <div className={styles.popularCoursesSection__main__course}>
                <div
                  className={
                    styles.popularCoursesSection__main__course__bannerImg
                  }
                >
                  <div
                    className={
                      styles.popularCoursesSection__main__course__bannerImg__category
                    }
                  >
                    Development
                  </div>
                  <img
                    className={
                      styles.popularCoursesSection__main__course__bannerImg__img
                    }
                    src={course1}
                    alt=""
                  />
                </div>
                <div
                  className={
                    styles.popularCoursesSection__main__course__content
                  }
                >
                  <p
                    className={
                      styles.popularCoursesSection__main__course__content__header
                    }
                  >
                    Frontend Development with JavaScript
                  </p>
                  <div
                    className={
                      styles.popularCoursesSection__main__course__content__author
                    }
                  >
                    By Cristian Muhaz
                  </div>
                  <div
                    className={
                      styles.popularCoursesSection__main__course__content__duration
                    }
                  >
                    <div
                      className={
                        styles.popularCoursesSection__main__course__content__duration__icon
                      }
                    ></div>
                    <div
                      className={
                        styles.popularCoursesSection__main__course__content__duration__text
                      }
                    >
                      Duration: <span>7 weeks</span>
                    </div>
                  </div>
                  <div
                    className={
                      styles.popularCoursesSection__main__course__content__price__discount
                    }
                  >
                    $80.00 USD 80% discount
                  </div>
                  <button
                    className={
                      styles.popularCoursesSection__main__course__content__price
                    }
                  >
                    Buy now $14.00 USD
                  </button>
                </div>
              </div>
              <div className={styles.popularCoursesSection__main__course}>
                <div
                  className={
                    styles.popularCoursesSection__main__course__bannerImg
                  }
                >
                  <div
                    className={
                      styles.popularCoursesSection__main__course__bannerImg__category
                    }
                  >
                    Development
                  </div>
                  <img
                    className={
                      styles.popularCoursesSection__main__course__bannerImg__img
                    }
                    src={course1}
                    alt=""
                  />
                </div>
                <div
                  className={
                    styles.popularCoursesSection__main__course__content
                  }
                >
                  <p
                    className={
                      styles.popularCoursesSection__main__course__content__header
                    }
                  >
                    Frontend Development with JavaScript
                  </p>
                  <div
                    className={
                      styles.popularCoursesSection__main__course__content__author
                    }
                  >
                    By Cristian Muhaz
                  </div>
                  <div
                    className={
                      styles.popularCoursesSection__main__course__content__duration
                    }
                  >
                    <div
                      className={
                        styles.popularCoursesSection__main__course__content__duration__icon
                      }
                    ></div>
                    <div
                      className={
                        styles.popularCoursesSection__main__course__content__duration__text
                      }
                    >
                      Duration: <span>7 weeks</span>
                    </div>
                  </div>
                  <div
                    className={
                      styles.popularCoursesSection__main__course__content__price__discount
                    }
                  >
                    $80.00 USD 80% discount
                  </div>
                  <button
                    className={
                      styles.popularCoursesSection__main__course__content__price
                    }
                  >
                    Buy now $14.00 USD
                  </button>
                </div>
              </div>
              <div className={styles.popularCoursesSection__main__course}>
                <div
                  className={
                    styles.popularCoursesSection__main__course__bannerImg
                  }
                >
                  <div
                    className={
                      styles.popularCoursesSection__main__course__bannerImg__category
                    }
                  >
                    Development
                  </div>
                  <img
                    className={
                      styles.popularCoursesSection__main__course__bannerImg__img
                    }
                    src={course1}
                    alt=""
                  />
                </div>
                <div
                  className={
                    styles.popularCoursesSection__main__course__content
                  }
                >
                  <p
                    className={
                      styles.popularCoursesSection__main__course__content__header
                    }
                  >
                    Frontend Development with JavaScript
                  </p>
                  <div
                    className={
                      styles.popularCoursesSection__main__course__content__author
                    }
                  >
                    By Cristian Muhaz
                  </div>
                  <div
                    className={
                      styles.popularCoursesSection__main__course__content__duration
                    }
                  >
                    <div
                      className={
                        styles.popularCoursesSection__main__course__content__duration__icon
                      }
                    ></div>
                    <div
                      className={
                        styles.popularCoursesSection__main__course__content__duration__text
                      }
                    >
                      Duration: <span>7 weeks</span>
                    </div>
                  </div>
                  <div
                    className={
                      styles.popularCoursesSection__main__course__content__price__discount
                    }
                  >
                    $80.00 USD 80% discount
                  </div>
                  <button
                    className={
                      styles.popularCoursesSection__main__course__content__price
                    }
                  >
                    Buy now $14.00 USD
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section className={styles.motivationTextSection}>
          <div className={styles.container}>
            <div className={styles.motivationTextSection__content}>
              <h5 className={styles.motivationTextSection__content__header}>
                Emily Rolando
              </h5>
              <p className={styles.motivationTextSection__content__paragraph}>
                I recently started learning to code with Tian and it's been a
                game-changer. The lessons are clear and engaging, perfect for
                beginners like me. I've already built my first app thanks to
                their hands-on approach. Highly recommend Tian for anyone
                starting their coding journey!
              </p>
            </div>
          </div>
        </section>

        <div className={styles.aboutSection__main}>
          <div className={styles.container}>
            <section className={styles.aboutSection}>
              <div className={styles.aboutSection__content}>
                <div className={styles.aboutSection__content__image}>
                  <img src={retroComputer} alt="retroComputer" />
                </div>
                <div className={styles.aboutSection__content__text}>
                  <h5 className={styles.aboutSection__content__text__header}>
                    Explore topics
                  </h5>
                  <p className={styles.aboutSection__content__text__body}>
                    Dive deep into our diverse catalog featuring a curated
                    selection of courses in the realms of arts and writing.
                    Experience knowledge crafted by experts, designed to inspire
                    and nurture your creative journey.
                  </p>
                </div>
              </div>
              <div className={styles.aboutSection__content}>
                <div className={styles.aboutSection__content__image}>
                  <img src={retroComputer} alt="retroComputer" />
                </div>
                <div className={styles.aboutSection__content__text}>
                  <h5 className={styles.aboutSection__content__text__header}>
                    Explore topics
                  </h5>
                  <p className={styles.aboutSection__content__text__body}>
                    Dive deep into our diverse catalog featuring a curated
                    selection of courses in the realms of arts and writing.
                    Experience knowledge crafted by experts, designed to inspire
                    and nurture your creative journey.
                  </p>
                </div>
              </div>
              <div className={styles.aboutSection__content}>
                <div className={styles.aboutSection__content__image}>
                  <img src={retroComputer} alt="retroComputer" />
                </div>
                <div className={styles.aboutSection__content__text}>
                  <h5 className={styles.aboutSection__content__text__header}>
                    Explore topics
                  </h5>
                  <p className={styles.aboutSection__content__text__body}>
                    Dive deep into our diverse catalog featuring a curated
                    selection of courses in the realms of arts and writing.
                    Experience knowledge crafted by experts, designed to inspire
                    and nurture your creative journey.
                  </p>
                </div>
              </div>
              <div className={styles.aboutSection__content}>
                <div className={styles.aboutSection__content__image}>
                  <img src={retroComputer} alt="retroComputer" />
                </div>
                <div className={styles.aboutSection__content__text}>
                  <h5 className={styles.aboutSection__content__text__header}>
                    Explore topics
                  </h5>
                  <p className={styles.aboutSection__content__text__body}>
                    Dive deep into our diverse catalog featuring a curated
                    selection of courses in the realms of arts and writing.
                    Experience knowledge crafted by experts, designed to inspire
                    and nurture your creative journey.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
