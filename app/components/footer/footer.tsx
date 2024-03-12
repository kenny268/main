import styles from "@/app/components/Portfolio.module.css"
import Link from "next/link";
const Footer = () => {
    return (   
    
        <div className={styles.footer}>
     
                <Link href="https://drive.google.com/file/d/1cWaFZRwGUc34DaGIIKpdLrcsOG9YD2q6/view?usp=sharing">Download Cv</Link>
            
                <p>
                    Copyright &copy; 2024 kenny268
                </p>
            
        </div>
);
}
 
export default Footer;