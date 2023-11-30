import styles from '../myWork/myWork.module.css'
interface Props {
title:string,
description:string,
url:string
}
export default function ProjectCap (proj:Props){
return(
<div className={styles.capture}>
    <h2 className={styles.projTitle}>{proj.title}</h2>
    <p className={styles.desc}>{proj.description}</p>
    <button className={styles.btn} onClick={()=> window.open(proj.url)}>Visit</button>
</div>
)
}