import clsx from "clsx";
import Image from "next/image";
import GlowFilter from "../GlowFilter";
import styles from "./aboutMe.module.css";
import portrait from "./portrait.png";

export default function AboutMe() {
    return (
        <section className={styles.root}>
            <div className={styles.layout}>
                <div className={clsx(styles.block, styles.block1)} id="about">
                    <h2>About</h2>
                    <p>
                        I am a senior full stack developer with a focus on frontend. Over the years, I have developed a
                        deep passion for creating engaging and user-friendly digital experiences. My expertise includes
                        building responsive web applications and developing interactive interfaces with cutting-edge
                        technologies. I enjoy working on challenging projects and have a passion for pushing user
                        experience (UX) design, developing software that is built for people and their needs.
                    </p>
                    <p>
                        When I&apos;m not coding, I enjoy exploring my creative side through 3D printing and model
                        making. While at university I learnt 3D modelling and animation and I now enjoy in bringing my
                        designs to life and experimenting with different materials to create unique objects. Apart from
                        that, I love gaming and photography. Gaming helps me unwind and get some down time, while
                        photography allows me to work on my creative eye with composition, lighting and colour.
                    </p>
                </div>
                <div className={styles.portrait}>
                    <div className={styles.portraitWrap}>
                        <div className={styles.ring}>
                            <GlowFilter id="aboutGlow" />
                        </div>
                        <Image
                            className={styles.img}
                            src={portrait}
                            alt="Headshot of a man looking off to the left, lit from behind"
                            width={300}
                        />
                    </div>
                </div>
                <div className={clsx(styles.block, styles.block2)}>
                    <h2>Career</h2>
                    <p>
                        My career in software development began by creating design templates for eCommerce websites.
                        After gaining experience in web design, I transitioned to working on that eCommerce systems
                        development team. This involved learning Java for backend development and rebuilding the
                        company&apos;s frontend systems. As I continued to develop my skills, I picked up JavaScript
                        frameworks such as React and used them to create a comprehensive CMS editor for non-technical
                        users to build and maintain their website easily.
                    </p>
                    <p>
                        I had the opportunity to work on an <abbr title="Electronic Point of Sale">EPoS</abbr> system
                        that would run locally in stores, which enabled me to gain experience in developing software
                        that was tailored to meet the specific needs of retail businesses. I then moved on to work on an
                        adtech platform, where I developed a system that manages advertising campaigns and interacts
                        with various ad network integrations.
                    </p>
                    <p>
                        During my career, I have worked with numerous other developers in different roles, and I learned
                        a great deal from their perspectives and expertise. Over the years, I have worked with some
                        notable companies, including Hamleys toy store, Apple, and the Wall Street Journal, delivering
                        solutions to meet their needs. Today, I manage a small team of developers and use my experience
                        to mentor and guide them.
                    </p>
                </div>
            </div>
        </section>
    );
}
