'use client';
import HomeContenet from './home/page';
import 'animate.css'
import styles from './page.module.css';
export default function Home() {
  
  return (
    <div className={`${styles.all}`}>
      <HomeContenet/>
    </div>
  )
}
