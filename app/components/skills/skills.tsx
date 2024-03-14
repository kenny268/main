import styles from '@/app/components/Portfolio.module.css'

import React from 'react'
import SkillList from '@/app/components/skills/SkillList';


export default function Skills() {

  const skills: { skill:string, rating:number }[] =  [
    { skill: 'HTML', rating: 5 },
    { skill: 'CSS', rating: 4 },
    { skill: 'Javascript', rating: 4 },
    { skill: 'Typescript', rating: 3 },
    {skill: 'Jest', rating:3},
    { skill: 'Python', rating: 3 },
    { skill: 'kotlin', rating: 3 },
    { skill: 'Git', rating: 4 },
    { skill: 'Docker', rating: 4 },
    { skill: 'Kubernetes', rating: 2 },
    { skill: 'React', rating: 4 },
    { skill: 'NextJs', rating: 4 },
    { skill: 'Node.js', rating: 5 },
    { skill: 'Express.js', rating: 5 },
    { skill: 'MongoDB', rating: 4 },
    { skill: 'Django', rating: 3 },
    { skill: 'Azure', rating: 3 },
    { skill: 'Restfull', rating: 5 }
  ]

  skills.sort((a, b) => {
    // First, compare by rating
    if (a.rating !== b.rating) {
        return b.rating - a.rating; // Sort by descending rating
    }
    // If ratings are equal, compare alphabetically by skill name
    return a.skill.localeCompare(b.skill);
});
  // Calculate the midpoint to split the array into two halves
const midpoint = Math.ceil(skills.length / 2);


// Split the 'skills' array into two halves
const firstHalf = skills.slice(0, midpoint);
const secondHalf = skills.slice(midpoint);

// Map each half to separate <div> elements
const firstHalfList = (
<div>
<SkillList skills={firstHalf}/>
</div>
);

const secondHalfList = (
<div>
<SkillList skills={secondHalf}/>
</div>
);

  return (
    <div className={styles.skills}>
                <h2>Skills</h2>
                <div>                    
                        {firstHalfList}
                        {secondHalfList}                                  
                </div>
    </div>
  )
}
