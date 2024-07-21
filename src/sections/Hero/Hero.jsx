import styles from './HeroStyles.module.css'
import heroImg from '../../assets/hero-img.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import profilephoto from '../../assets/profilephoto.jpg'
import CV from '/Users/safamohammed/Documents/Safa_Mohammed_Resume.pdf'
import { useTheme } from '../../common/ThemeContext'

function Hero() {
    const {theme, toggleTheme} = useTheme();
    const themeIcon = theme === 'light' ? sun : moon;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

    return  (
        <section id="hero" className={styles.container}>
            <div className={styles.colorModeContainer}>
                <img id="pfp"
                    className={styles.hero} 
                    src={profilephoto} 
                    alt="Profile picture of Safa Mohammed"
                />
                <img 
                    className={styles.colorMode} 
                    src={themeIcon} 
                    alt='Color mode icon'
                    onClick={toggleTheme}

                />
            </div>
            <div className={styles.info}>
                <h1>Safa 
                    <br/> 
                    Mohammed
                </h1>
                <h2>
                    Aspiring Developer / Student
                </h2>
                <span>
                    <a href="https://github.com/sumohammed0" target='_blank'>
                        <img src={githubIcon} alt="Github Icon"/>
                    </a>
                    <a href="https://www.linkedin.com/in/safa-mohammed-aa7833195/" target='_blank'>
                        <img src={linkedinIcon} alt="LinkedIn Icon"/>
                    </a>
                </span>
                <p className={styles.description}>
                    Hi there! My name is Safa and I'm a computer science student at the University of Texas at Dallas. Check out my work below :)
                </p>
                <a href={CV} download>
                    <button className="hover">
                        Resume
                    </button>
                </a>
            </div>
        </section>
    )
}

export default Hero;