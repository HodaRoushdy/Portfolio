'use client';
import styles from './myWork.module.css'
import Portfolio from '../data/portfolio.json'
export default function myWork (){

const renderPortfolio =(data:any)=>{
    return(
        <div className={styles.allProjects}>
            {
                data.map((proj:any,indx:number)=>{
                    return(
                        <div className={`${styles.project} col-md-3 col-sm-6`} key={indx}>
                        <img src={proj.cover} alt={proj.title} /> 
                        <div className={styles.capture}>
                            <h2 className={styles.projTitle}>{proj.title}</h2>
                            <p className={styles.desc}>{proj.description}</p>
                            <button className={styles.btn} onClick={()=> window.open(proj.url)}>Visit</button>
                        </div>
                    </div>
                    )
                })
            }
        </div>
    )
}

    return (
        <div className={`${styles.fullScreen} m-auto py-5 col-md-12`}>
            <style>
@import url('https://fonts.googleapis.com/css2?family=Barlow&family=Barlow+Condensed&family=Edu+TAS+Beginner&family=Gilda+Display&family=Playpen+Sans:wght@500&display=swap');
</style>
            <div className={`${styles.title} pb-5`}>
            <h1>my work</h1>
            </div>
            <div >
            <div className='d-flex' >
                {renderPortfolio(Portfolio.portfolio)}
            </div>
            
            </div>
            
        </div>
    )
}

