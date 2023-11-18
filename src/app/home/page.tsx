import 'animate.css';
import Image from 'next/image';
import Link from 'next/link';
import { AiFillLinkedin } from 'react-icons/ai';
import { BiMessageDetail } from 'react-icons/bi';
import { FaGithub } from 'react-icons/fa6';
import { HiOutlineEye, HiOutlineHome } from "react-icons/hi2";
import { IoPersonOutline, IoSettingsOutline } from 'react-icons/io5';
import { MdOutlineTipsAndUpdates } from 'react-icons/md';
import styles from './homeComponent.module.css';
export default function HomeContent (){
return(
<div className={styles.fullScreen} >
<style>
@import url('https://fonts.googleapis.com/css2?family=Barlow&family=Barlow+Condensed&family=Edu+TAS+Beginner&family=Gilda+Display&family=Playpen+Sans:wght@500&display=swap');
</style>

<div className={styles.homeContainer}>

<div className={`${styles.leftPart} col-md-6 col-sm-12`}>

<div className={styles.centerText}>
    <div className={styles.word}>
    <div className={styles.wrapper}>
        <h1 className={styles.shadow}>H</h1>
        <h1 className={styles.letter}>H</h1>
    </div>
    <div className={styles.wrapper}>
        <h1 className={styles.shadow}>i</h1>
        <h1 className={styles.letter}>i</h1>
    </div>
    <div className={styles.wrapper}>
        <h1 className={styles.shadow}>,</h1>
        <h1 className={styles.letter}>,</h1>
    </div>
    </div>

    <div className={styles.sentence}>
    <div className={styles.word}>
    <div className={styles.wrapper}>
        <h1 className={styles.shadow}>I</h1>
        <h1 className={styles.letter}>I</h1>
    </div>
    <div className={styles.wrapper}>
        <h1 className={styles.shadow}>'</h1>
        <h1 className={styles.letter}>'</h1>
    </div>
    <div className={styles.wrapper}>
        <h1 className={styles.shadow}>m</h1>
        <h1 className={styles.letter}>m</h1>
    </div>
    </div>
    <div className={styles.word}>
    <div className={styles.wrapper}>
        <h1 className={styles.shadow}>H</h1>
        <h1 className={styles.letter}>H</h1>
    </div>
    <div className={styles.wrapper}>
        <h1 className={styles.shadow}>u</h1>
        <h1 className={styles.letter}>u</h1>
    </div>
    <div className={styles.wrapper}>
        <h1 className={styles.shadow}>d</h1>
        <h1 className={styles.letter}>d</h1>
    </div>
    <div className={styles.wrapper}>
        <h1 className={styles.shadow}>a</h1>
        <h1 className={styles.letter}>a</h1>
    </div>
    </div>
    <div className={styles.word}>
    <div className={styles.wrapper}>
        <h1 className={styles.shadow}>R</h1>
        <h1 className={styles.letter}>R</h1>
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
        <h1 className={styles.shadow}>s</h1>
        <h1 className={styles.letter}>s</h1>
    </div>
    <div className={styles.wrapper}>
        <h1 className={styles.shadow}>h</h1>
        <h1 className={styles.letter}>h</h1>
    </div>
    <div className={styles.wrapper}>
        <h1 className={styles.shadow}>d</h1>
        <h1 className={styles.letter}>d</h1>
    </div>
    <div className={styles.wrapper}>
        <h1 className={styles.shadow}>y</h1>
        <h1 className={styles.letter}>y</h1>
    </div>
    <div className={styles.wrapper}>
        <h1 className={styles.shadow}>,</h1>
        <h1 className={styles.letter}>,</h1>
    </div>
    </div>
    </div>

    <div className={styles.sentence}>
    <div className={styles.word}>
    <div className={styles.wrapper}>
        <h1 className={styles.shadow}>W</h1>
        <h1 className={styles.letter}>W</h1>
    </div>
    <div className={styles.wrapper}>
        <h1 className={styles.shadow}>e</h1>
        <h1 className={styles.letter}>e</h1>
    </div>
    <div className={styles.wrapper}>
        <h1 className={styles.shadow}>b</h1>
        <h1 className={styles.letter}>b</h1>
    </div>
    </div>
    <div className={styles.word}>
    <div className={styles.wrapper}>
        <h1 className={styles.shadow}>D</h1>
        <h1 className={styles.letter}>D</h1>
    </div>
    <div className={styles.wrapper}>
        <h1 className={styles.shadow}>e</h1>
        <h1 className={styles.letter}>e</h1>
    </div>
    <div className={styles.wrapper}>
        <h1 className={styles.shadow}>v</h1>
        <h1 className={styles.letter}>v</h1>
    </div>
    <div className={styles.wrapper}>
        <h1 className={styles.shadow}>e</h1>
        <h1 className={styles.letter}>e</h1>
    </div>
    <div className={styles.wrapper}>
        <h1 className={styles.shadow}>l</h1>
        <h1 className={styles.letter}>l</h1>
    </div>
    <div className={styles.wrapper}>
        <h1 className={styles.shadow}>o</h1>
        <h1 className={styles.letter}>o</h1>
    </div>
    <div className={styles.wrapper}>
        <h1 className={styles.shadow}>p</h1>
        <h1 className={styles.letter}>p</h1>
    </div>
    <div className={styles.wrapper}>
        <h1 className={styles.shadow}>e</h1>
        <h1 className={styles.letter}>e</h1>
    </div>
    <div className={styles.wrapper}>
        <h1 className={styles.shadow}>r</h1>
        <h1 className={styles.letter}>r</h1>
    </div>
    </div>
    </div>
    
<br />
    <h2>Full stack developer/MERN developer/freelancer</h2> 
    <button className={styles.btn}><Link href='/contact'>CONTACT ME</Link></button>
</div>
</div>

<div className='col-md-6'>
</div>
</div>



<script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"></script>
<script>var Alert = ReactBootstrap.Alert;</script>

</div>



)
}