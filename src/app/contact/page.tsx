import emailjs from '@emailjs/browser';
import styles from './contact.module.css'
export default function Contact (){
return (
<div className={styles.fullScreen}>
<style>
@import url('https://fonts.googleapis.com/css2?family=Barlow&family=Barlow+Condensed&family=Edu+TAS+Beginner&family=Gilda+Display&family=Playpen+Sans:wght@500&display=swap');
</style>
{/* <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
    <script type="text/javascript">
        (function() {
            emailjs.init('nJMrjzdJpzGR6FCMr')
        })();
    </script> */}
    <div className={`${styles.content} col-md-6 col-sm-12 `}>
        <div className='col-md-9 offset-1'>
        <div className="col-md-10 m-auto p-4">
            <div className={styles.text}>
                <div className={styles.header}>
                <div className={styles.word}>
                <div className={styles.wrapper}>
                    <div className={styles.letter}>C</div>
                    <div className={styles.shadow}>C</div>
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.letter}>o</div>
                    <div className={styles.shadow}>o</div>
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.letter}>n</div>
                    <div className={styles.shadow}>n</div>
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.letter}>t</div>
                    <div className={styles.shadow}>t</div>
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.letter}>a</div>
                    <div className={styles.shadow}>a</div>
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.letter}>c</div>
                    <div className={styles.shadow}>c</div>
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.letter}>t</div>
                    <div className={styles.shadow}>t</div>
                </div>
            </div>

            <div className={styles.word}>
            <div className={styles.wrapper}>
                    <div className={styles.letter}>M</div>
                    <div className={styles.shadow}>M</div>
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.letter}>e</div>
                    <div className={styles.shadow}>e</div>
                </div>
            </div>
                </div>
            <p>
            I am interested in freelance opportunities – especially
            ambitious or large projects. However, if you have other request or
            question, don’t hesitate to contact me using below form
            either.
            </p>

            </div>
            
            <form className={styles.form}>
                <div className= {`${styles.nameAndEmail} d-flex col-md-12 my-2 `} >
                <div className='col-md-6 col-sm-12 m-auto pe-1' >
                <input required type="text" name="name" placeholder='Name' style={{width:'100%'}} className='p-2'/>
                </div>

                <div className='col-md-6 col-sm-12 m-auto ps-1' >
                <input required type="email" name="email" placeholder='Email' style={{width:'100%'}} className='p-2'/>
                </div>
                </div>
                
            
            <input required type="text" placeholder='Subject' name="subject" className='col-md-12 p-2 my-2'/>
            <textarea required placeholder='message' name="message" className='col-md-12 p-2 my-2'></textarea>
            <button className={styles.btn} type='submit' ><a href="mailto:hodaroshdy106@gmail.com">SEND</a></button>
        </form>
        
        
        </div>
        
        </div>
        
    </div>

    <div className="map col-md-6 col-sm-12">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55251.336634756546!2d31.29966406839954!3d30.059556316900174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2z2KfZhNmC2KfZh9ix2KnYjCDZhdit2KfZgdi42Kkg2KfZhNmC2KfZh9ix2KnigKw!5e0!3m2!1sar!2seg!4v1698673534093!5m2!1sar!2seg" width="100%" height="100%" style={{border:'0'}} loading="lazy"></iframe>
    </div>

</div>

)
}