'use client';
import HomeContenet from './home/page';
import Drawer from './drawer/page'
import 'animate.css'
import styles from './page.module.css';
export default function Home() {
  return (
    
    <div className={`${styles.all}`}>
      <div className={styles.navaya}>
      <Drawer/>
      </div> 
      <HomeContenet/>
    </div>
  )
}
