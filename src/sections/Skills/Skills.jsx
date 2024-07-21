import styles from './SkillsStyles.module.css';
import checkMarkIcon from '../../assets/checkmark-dark.svg'
import python from '../../assets/python.png'
import flutter from '../../assets/flutter.png'
import css from '../../assets/css.png'
import c from '../../assets/c++.png'
import html from '../../assets/html.png'
import react from '../../assets/react.png'
import pandas from '../../assets/pandas.png'
import java from '../../assets/java.png'
import powershell from '../../assets/powershell.png'
import git from '../../assets/git.png'
import SkillList from '../../common/SkillList';

function Skills() {
  return (
    <section id='skills' className={styles.container}>
        <h1 className='sectionTitle' >Skills</h1>
        <div className={styles.skillList}>
            <SkillList src={java} skill="Java"/>
            <SkillList src={python} skill="Python"/>
            <SkillList src={c} skill="C/C++"/>
            <SkillList src={html} skill="HTML"/>
            <SkillList src={css} skill="CSS"/>
            <SkillList src={powershell} skill="PowerShell"/>
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={flutter} skill="Flutter"/>
            <SkillList src={react} skill="React"/>
            <SkillList src={pandas} skill="Pandas"/>
            <SkillList src={checkMarkIcon} skill="Flask"/>
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={git} skill="Git"/>
        </div>
    </section>
  );
}

export default Skills;