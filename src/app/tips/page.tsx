
import styles from './tipsComponent.module.css'
export default function Tips(){
    return(
        <div className={styles.fullScreen}>
<style>
@import url('https://fonts.googleapis.com/css2?family=Barlow&family=Barlow+Condensed&family=Edu+TAS+Beginner&family=Gilda+Display&family=Playpen+Sans:wght@500&display=swap');
</style>

<div className={styles.content}>

            <h1>Full stack tips</h1>

            <div className= { `col-md-8 ${styles.images}`}>

                <a href="#" className={`col-md-1 ${styles.imaga}`}>
                <img className='img-fluid' src='./logo1.png' />
                </a>

                <a href="#" className={`col-md-1 ${styles.imaga}`}>
                <img className='img-fluid' src='./css-3.png' />
                </a>
            
                <a href="#" className={`col-md-1 ${styles.imaga}`}>
                <img className='img-fluid' src='./logo3.png' />
                </a>
            
                <a href="#" className={`col-md-1 ${styles.imaga}`}>
                <img className='img-fluid' src='./typescript.svg' />
                </a>
            
                <a href="#" className={`col-md-1 ${styles.imaga}`}>
                <img className='img-fluid' src='./logo192.png' />
                </a>
            
                <a href='#' className={`col-md-1 ${styles.imaga}`}>
                    <img className='img-fluid' src='./logo4.png' />
                </a>
            
                <a href="#" className={`col-md-1 ${styles.imaga}`}>
                <img className='img-fluid' src='./nodejs.svg' />
                </a>
            
                <a href="#" className={`col-md-1 ${styles.imaga}`}>
                <img className='img-fluid' src='./mongodb-seeklogo.com.svg' />
                </a>
            
                <a href="#" className={`col-md-1 ${styles.imaga}`} >
                <img className='img-fluid' src='./database-sql-svgrepo-com.svg' />
                </a>

            </div>
            
            </div>
        </div>
    )
}