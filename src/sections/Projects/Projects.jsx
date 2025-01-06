import styles from './ProjectsStyles.module.css';
import aurveda from '../../assets/ayurveda.png';
import helmet from '../../assets/helmet.png';
import sumz from '../../assets/sumz.png';
import moneymint from '../../assets/moneymint.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle" >Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={helmet}
          link="https://github.com/RushikeshMukkawar/Accident-Detection-System"
          h3="Smart Helmet"
          p="Accident Detection App"
        />
        <ProjectCard
          src={aurveda}
          link="https://github.com/RushikeshMukkawar/ayuveer"
          h3="Ayuveer"
          p="Ayurvedic App"
        />
          <ProjectCard 
            src={sumz}
            link="https://github.com/RushikeshMukkawar/AI-SUMMARIZER"
            h3="Sumz"
            p="AI Summerizer"
          />
        <ProjectCard
          src={moneymint}
          link="https://github.com/RushikeshMukkawar/MoneyMint"
          h3="MoneyMint"
          p="Decentralized Payment App"
        />
      </div>
    </section>
  );
}

export default Projects;
