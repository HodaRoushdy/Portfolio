// import Logo1 from '../../../assets/logo1.png'
import Logo1 from '../../../assets/logo1.png'
import Image from 'next/image'
import Css3 from '../../../assets/css-3.png'
import Logo3 from '../../../assets/logo3.png'
import Typescript from '../../../assets/typescript.svg'
import Logo192 from '../../../assets/logo192.png'
import Logo512 from '../../../assets/logo512.png'
import Mongodb from '../../../assets/mongodb-seeklogo.com.svg'
import Reactlogo from '../../../assets/react-1-logo-png-transparent.png'
import NodeLogo from '../../../assets/nodejs.svg'
import Logo4 from '../../../assets/logo4.png'
import Sql from '../../../assets/database-sql-svgrepo-com.svg'






import styles from './tipsComponent.module.css'

export default function Tips(){
    return(
        <div className={styles.fullScreen}>
<style>
@import url('https://fonts.googleapis.com/css2?family=Barlow&family=Barlow+Condensed&family=Edu+TAS+Beginner&family=Gilda+Display&family=Playpen+Sans:wght@500&display=swap');
</style>

<div className={styles.content}>

            {/* <h1>Full stack tips</h1> */}
            <div className={styles.sentence}>
                <div className={styles.word}>
                    <div className={styles.wrapper}>
                    <h1 className={styles.letter}>F</h1>
                    <h1 className={styles.shadow}>F</h1>
                    </div>
                    <div className={styles.wrapper}>
                    <h1 className={styles.letter}>u</h1>
                    <h1 className={styles.shadow}>u</h1>
                    </div>
                    <div className={styles.wrapper}>
                    <h1 className={styles.letter}>l</h1>
                    <h1 className={styles.shadow}>l</h1>
                    </div>
                    <div className={styles.wrapper}>
                    <h1 className={styles.letter}>l</h1>
                    <h1 className={styles.shadow}>l</h1>
                    </div>
                </div>
                <div className={styles.word}>
                    <div className={styles.wrapper}>
                    <h1 className={styles.letter}>S</h1>
                    <h1 className={styles.shadow}>S</h1>
                    </div>
                    <div className={styles.wrapper}>
                    <h1 className={styles.letter}>t</h1>
                    <h1 className={styles.shadow}>t</h1>
                    </div>
                    <div className={styles.wrapper}>
                    <h1 className={styles.letter}>a</h1>
                    <h1 className={styles.shadow}>a</h1>
                    </div>
                    <div className={styles.wrapper}>
                    <h1 className={styles.letter}>c</h1>
                    <h1 className={styles.shadow}>c</h1>
                    </div>
                    <div className={styles.wrapper}>
                    <h1 className={styles.letter}>k</h1>
                    <h1 className={styles.shadow}>k</h1>
                    </div>
                </div>
                    <div className={styles.word}>
                    <div className={styles.wrapper}>
                    <h1 className={styles.letter}>t</h1>
                    <h1 className={styles.shadow}>t</h1>
                    </div>
                    <div className={styles.wrapper}>
                    <h1 className={styles.letter}>i</h1>
                    <h1 className={styles.shadow}>i</h1>
                    </div>
                    <div className={styles.wrapper}>
                    <h1 className={styles.letter}>p</h1>
                    <h1 className={styles.shadow}>p</h1>
                    </div>
                    <div className={styles.wrapper}>
                    <h1 className={styles.letter}>s</h1>
                    <h1 className={styles.shadow}>s</h1>
                    </div>
                </div>
            </div>

<div className="row">
<div className= { `col-md-8 ${styles.images}`}>
                <a href="#" className={`col-md-1 ${styles.imaga}`}>
                <Image src={Logo1.src} alt={'logo1'} width={50} height={50}/>
                </a>

                <a href="#" className={`col-md-1 ${styles.imaga}`}>
                <Image src={Css3.src} alt={'css'} width={50} height={50}/>
                </a>
            
                <a href="#" className={`col-md-1 ${styles.imaga}`}>
                <Image src={Logo3.src} alt={'js'} width={50} height={50}/>
                </a>
            
                <a href="#" className={`col-md-1 col-lg-1 col-sm-3 ${styles.imaga}`}>
                <Image src={Typescript.src} alt={'ts'} width={50} height={50}/>
                </a>
            
                <a href="#" className={`col-md-1 col-lg-1 col-sm-3 ${styles.imaga}`}>
                <Image src={Logo192.src} alt={'react'} width={50} height={50}/>
                </a>
            
                <a href='#' className={`col-md-1 col-lg-1 col-sm-3 ${styles.imaga}`}>
                <Image src={Logo4.src} alt={'angular'} width={50} height={50}/>
                </a>
            
                <a href="#" className={`col-md-1 col-lg-1 col-sm-3 ${styles.imaga} ${styles.imgNode} d-flex align-items-center justify-content-center`}>
                <Image src={NodeLogo.src} alt={'node'} width={50} height={50}/>
                </a>
            
                <a href="#" className={`col-md-1 col-lg-1 col-sm-3 ${styles.imaga}`}>
                {/* <img className='img-fluid' src='./mongodb-seeklogo.com.svg'/> */}
                <Image src={Mongodb.src} alt={'mongo'} width={50} height={50}/>
                </a>
            
                <a href="#" className={`col-md-1 col-lg-1 col-sm-3 ${styles.imaga}`} >
                <Image src={Sql.src} alt={'sql'} width={50} height={50}/>
                </a>

            </div>
</div>
            
            
            </div>
        </div>
    )
}