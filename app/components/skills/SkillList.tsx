import React from 'react';
import { BsFillStarFill } from "react-icons/bs";
import styles from "@/app/components/Portfolio.module.css"


interface SkillListProps {
  skills: Skill[];
}

const SkillList: React.FC<SkillListProps> = ({ skills }) => {
  return (
    <p>
      {skills.map(({ skill, rating }) => (
        <span key={skill}>
          
            {skill}
              
            {[...Array(5)].map((_, index) => (
            <span key={index}  className={getStarClass(index, rating)}>
                <BsFillStarFill />
            </span>
            ))}
            
         </span> 
        
      ))}
    </p>
  );
};
// Function to determine the class for the star based on the index and rating
const getStarClass = (index: number, rating: number): string => {
    const integerPart = Math.floor(rating); 
    const decimalPart = rating - integerPart; 
  
    // If index is less than the integer part, it's a fully golden star
    if (index < integerPart) {
      return styles.gold;
    }
    // If index is equal to the integer part, it's a partially golden star based on the decimal part
    if (index === integerPart && decimalPart > 0) {
      const percentage = decimalPart * 100; // Convert decimal part to percentage
      return `${styles.gold} ${styles.partial} ${styles['partial-' + percentage]}`; // Apply partial styles
    }
    // Otherwise, it's a white star
    return '';
  };
  

export default SkillList;

export interface Skill {
  skill: string;
  rating: number;
}
