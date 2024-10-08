import Image from 'next/image';
import styles from '@/app/components/Portfolio.module.css'



interface Project {
    name: string;
    imageUrl: string;
    githubUrl: string;
  }

  const projects: Project[] = [
    {
      name: 'Ewaste Solutions System',
      imageUrl: '/Ewaste.png',
      githubUrl: 'https://github.com/kennedykiprono',
    },
    {
      name: 'Dropshipping System',
      imageUrl: '/yerunoSTore.png',
      githubUrl: 'https://www.linkedin.com/in/kennedykiprono/',
    },
    {
      name: 'Django Auth BoilerPlate',
      imageUrl: '/djangoAuth.png',
      githubUrl: 'https://www.linkedin.com/in/kennedykiprono/',
    },
    {
      name: 'Online Consult Doctor Mimic',
      imageUrl: '/mediconsult.png',
      githubUrl: 'https://www.linkedin.com/in/kennedykiprono/',
    },
    {
      name: 'My portfolio',
      imageUrl: '/portfolio.png',
      githubUrl: 'https://www.linkedin.com/in/kennedykiprono/',
    }
    ,
    {
      name: 'HTML CSS Ecomerce Projact',
      imageUrl: '/myfirstweb.png',
      githubUrl: 'https://www.linkedin.com/in/kennedykiprono/',
    },
  ];

const Projects: React.FC = () => {
  return (
    <div className={styles.projects} >
        <h2>Projects</h2>
        
      <div>  
        
        {projects.map((project, index) => (
            <div key={index}>
            <a href={project.githubUrl} target="_blank" rel="noreferrer"></a>
            <h3>{project.name}</h3>
          
                <Image
                    src={project.imageUrl}
                    alt="Project Image"
                    width={120}
                    height={120}
                    className={styles.imgProject}
                    priority={true}
                />
            
            
        </div>
      ))}
      </div>
    </div>
  );
};
 
export default Projects;

