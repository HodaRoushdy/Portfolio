'use client'
import {SiAngularjs} from 'react-icons/si'
import {GrReactjs} from 'react-icons/gr'
import {RiJavascriptLine} from 'react-icons/ri'
import{FaNode} from 'react-icons/fa'
import {ImCss3} from 'react-icons/im'
import {SiMongodb} from 'react-icons/si'
import styles from './aboutComponent.module.css'


export default function About(){
    return(
<div className={`${styles.fullScreen}`}>
<div className='row'>
    <div className='col-lg-6 col-md-6 col-sm-12'>
            <div className={`${styles.text} col-md-10`}>
            <div className={styles.sentence}>
    <div className={styles.word}>
    <div className={styles.wrapper}>
        <h1 className={styles.shadow}>A</h1>
        <h1 className={styles.letter}>A</h1>
    </div>
    <div className={styles.wrapper}>
        <h1 className={styles.shadow}>b</h1>
        <h1 className={styles.letter}>b</h1>
    </div>
    <div className={styles.wrapper}>
        <h1 className={styles.shadow}>o</h1>
        <h1 className={styles.letter}>o</h1>
    </div>
    <div className={styles.wrapper}>
        <h1 className={styles.shadow}>u</h1>
        <h1 className={styles.letter}>u</h1>
    </div>
    <div className={styles.wrapper}>
        <h1 className={styles.shadow}>t</h1>
        <h1 className={styles.letter}>t</h1>
    </div>
    </div>
    <div className={styles.word}>
    <div className={styles.wrapper}>
        <h1 className={styles.shadow}>M</h1>
        <h1 className={styles.letter}>M</h1>
    </div>
    <div className={styles.wrapper}>
        <h1 className={styles.shadow}>e</h1>
        <h1 className={styles.letter}>e</h1>
    </div>
    </div>

    </div>
            <p>
            I’m very ambitious full-stack developer looking for a role in
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p>
            I'm quietly confident and throughout my carrer, i have gained valuable experience ,
            I adapt quickly to challenges ,I believe in maintaining a positive and collaborative work ethic and 
            I’m confident in my ability to contribute to the success of a company, tram or organisation
          </p>
          <p>
            If I need to define myself in one sentence that would be a very motivated and driven individual with a passion for continuous growth and learning,
            Critical thinker and good problem solver
          </p>
            </div>
        </div>

    <div className={`${styles.forAnimate} col-lg-6 col-md-6 col-sm-12`}>
          <div className= {`${styles.stageCubeCont}`}>
            <div className={`${styles.cubespinner}`}>
              <div className={`${styles.face1}`}>
                <SiAngularjs style={{fontSize:'200px',color:'#DD0031'}}/>
              </div>
              <div className={`${styles.face2}`}>
                <GrReactjs style={{fontSize:'200px',color:'#5ED4F4'}}/>
              </div>
              <div className={`${styles.face3}`}>
                <RiJavascriptLine style={{fontSize:'200px',color:'#EFD81D'}}/>
              </div>
              <div className={`${styles.face4}`}>
                <FaNode style={{fontSize:'200px'}}/>
              </div>
              <div className={`${styles.face5}`}>
                <ImCss3 style={{fontSize:'200px',color:'#28A4D9'}}/>
              </div>
              <div className={`${styles.face6}`}>
                <SiMongodb style={{fontSize:'200px',color:'#86af49'}}/>
              </div>
            </div>
          </div>

        </div>
</div>

        </div>
      


    )
}