'use client'
import Portfolio from '../data/portfolio.json';
import ProjectCap from '../projectCap/projectCap';
import styles from './myWork.module.css';
import CappaSrc from '../data/images/the cappa.png'
import BakerySrc from '../data/images/bakery.png'
import TicSrc from '../data/images/tic-tac-toe.png'
import FokerSrc from '../data/images/fokir.png'
import WeddingSrc from '../data/images/wedding-company.png'
import AngularSrc from '../data/images/angular-task.png'
import { Image } from 'react-bootstrap';
type portfolioData ={
    cover:string,
    title:string,
    description:string,
    url:string,
}
export default function myWork (){

const renderPortfolio =(data:portfolioData[])=>{
    return(
        <div className={`${styles.allProjects} row g-3`}>
                        <div className={`col-md-4 col-sm-6`}>
                            <div className={`${styles.project} `}>
                            <Image src={CappaSrc.src} alt={data[0]?.title} width={'100%'} height={'100%'}/>
                            <ProjectCap title={data[0]?.title as string} description={data[0]?.description  as string} url={data[0]?.url  as string}/>
                            </div>
                    </div>
                    <div className={`col-md-4 col-sm-6`}>
                            <div className={`${styles.project} `}>
                            <Image src={WeddingSrc.src} alt={data[4]?.title} width={'100%'} height={'100%'}/>
                            <ProjectCap title={data[4]?.title  as string} description={data[4]?.description  as string} url={data[4]?.url as string}/>
                            </div>
                    </div>
                    <div className={`col-md-4 col-sm-6`}>
                            <div className={`${styles.project} `}>
                            <Image src={BakerySrc.src} alt={data[5]?.title  as string} width={'100%'} height={'100%'}/>
                            <ProjectCap title={data[5]?.title  as string} description={data[5]?.description  as string} url={data[5]?.url  as string}/>
                            </div>
                    </div>
                    <div className={`col-md-4 col-sm-6`}>
                            <div className={`${styles.project} `}>
                            <Image src={TicSrc.src} alt={data[1]?.title  as string} width={'100%'} height={'100%'}/>
                            <ProjectCap title={data[1]?.title  as string} description={data[1]?.description  as string} url={data[1]?.url  as string}/>
                            </div>
                    </div>
                    <div className={`col-md-4 col-sm-6`}>
                            <div className={`${styles.project} `}>
                            <Image src={FokerSrc.src} alt={data[3]?.title  as string} width={'100%'} height={'100%'}/>
                            <ProjectCap title={data[3]?.title  as string} description={data[3]?.description  as string} url={data[3]?.url  as string}/>
                            </div>
                    </div>
                    <div className={`col-md-4 col-sm-6`}>
                            <div className={`${styles.project} `}>
                            <Image src={AngularSrc.src} alt={data[2]?.title  as string} width={'100%'} height={'100%'}/>
                            <ProjectCap title={data[2]?.title  as string} description={data[2]?.description  as string} url={data[2]?.url  as string}/>
                            </div>
                    </div>
                    
                    

        </div>
    )
}
    return (
        <div className={`${styles.fullScreen} m-auto py-5`}>
    <div className={`${styles.title} pb-4`}>

        <div className={styles.sentence}>
                <div className={styles.word}>
                    <div className={styles.wrapper}>
                    <h1 className={styles.letter}>M</h1>
                    <h1 className={styles.shadow}>M</h1>
                    </div>
                    <div className={styles.wrapper}>
                    <h1 className={styles.letter}>y</h1>
                    <h1 className={styles.shadow}>y</h1>
                    </div>
                </div>
                <div className={styles.word}>
                    <div className={styles.wrapper}>
                    <h1 className={styles.letter}>W</h1>
                    <h1 className={styles.shadow}>W</h1>
                    </div>
                    <div className={styles.wrapper}>
                    <h1 className={styles.letter}>o</h1>
                    <h1 className={styles.shadow}>o</h1>
                    </div>
                    <div className={styles.wrapper}>
                    <h1 className={styles.letter}>r</h1>
                    <h1 className={styles.shadow}>r</h1>
                    </div><div className={styles.wrapper}>
                    <h1 className={styles.letter}>k</h1>
                    <h1 className={styles.shadow}>k</h1>
                    </div>
                </div>
                </div>
        </div>


            <div className='container'>
                {renderPortfolio(Portfolio.portfolio)}
        </div>
    </div>
    )
}

