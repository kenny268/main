import Image from 'next/image'
import { BsLinkedin } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import styles from "@/app/components/Portfolio.module.css"

const Header = () => {
    return ( 
    <div className={styles.header}>
        <div className={styles.me}>
                <h1>KENNEDY KIPRONO</h1>
                <h3>Software Engineer</h3>
        </div>
        <div className={styles.img}>
            <Image
                src="/favicon.png"
                alt="me"
                width={200}
                height={200}
                className={styles.imgLight}
                priority={true} 
            />
        </div>
        <div className={styles.socialHandles}>
            <p className={styles.linkedin}><BsLinkedin/></p>
            <p className={styles.twitter}><FaXTwitter /></p>
            <p className={styles.github}><FaGithub /></p>
        </div>
    </div>
);
}
 
export default Header;