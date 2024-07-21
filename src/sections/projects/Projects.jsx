import React from 'react'
import styles from './ProjectsStyles.module.css';
import rememberMe from '../../assets/rememberMe.png';
import ProjectCard from '../../common/ProjectCard';
import cspcover from '../../assets/cspcover.png'
import allocation from '../../assets/allocation.png'
import beetle from '../../assets/beetle.jpg'
import friends from '../../assets/friends.png'

function Projects() {
  return (
    <section id="projects" className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard src={rememberMe} link="https://github.com/acm-projects/RememberMe" h3='RememberMe' p='The ultimate mobile app to remember important details about the people you just met.'/>
            <ProjectCard src={cspcover} link="https://github.com/sumohammed0/CSP-Solver" h3='CSP Solver' p='Constraint Satisfaction Solver using forward checking and arc consistency to reduce search space.'/>
            <ProjectCard src={beetle} link="https://github.com/sumohammed0/Ant-vs-Beetle" h3='Ant vs Beetle' p='Ants survive against beetles using a transition model for movement, multiplication, and consumption'/>
            <ProjectCard src={friends} link="hhttps://github.com/md-y/hackutd9-community-deals" h3='Friends Basket' p='Friends Basket is an app for the everyday consumer aiding in their shopping experience'/>
            <ProjectCard src={allocation} link="https://github.com/sumohammed0/Disk-Allocation" h3='Disk Allocation' p='This project demonstrates two different file allocation methods: contiguous and chained'/>
        </div>
    
    </section>
  )
}

export default Projects