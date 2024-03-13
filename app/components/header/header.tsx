import Image from 'next/image'
import { BsLinkedin } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import styles from "@/app/components/Portfolio.module.css"
import Link from 'next/link';

const Header = () => {
    return ( 
    <div className={styles.header}>

        <div className={styles.me}>
                <h1>KENNEDY KIPRONO</h1>
                <h3>Software Engineer</h3>
        </div>
      
        <div className={styles.socialHandles}>
            <Link href="https://www.linkedin.com/in/kiprono-kennedy-328909235/" className={styles.linkedin}><BsLinkedin/> <span>Linkedin</span></Link>
            <Link href="https://twitter.com/kkenny268" className={styles.twitter}><FaXTwitter /> <span>Twitter</span></Link>
            <Link href="https://github.com/kenny268" className={styles.github}><FaGithub /> <span>Github</span></Link>
            <Link href="https://drive.google.com/file/d/1cWaFZRwGUc34DaGIIKpdLrcsOG9YD2q6/view?usp=sharing" className={styles.github}>CV <span>Resume</span></Link>
        </div>
        <div className={styles.img}>
            <Image
                src="/favicon.jpg"
                alt="me"
                width={200}
                height={200}
                className={styles.imgLight}
                priority={true} 
            />
        </div>
    </div>
);
}
 
export default Header;