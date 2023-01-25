import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.text_header}>This is a parking page for Grecatech</h1>
      <div className={styles.text_header_ru}>Это парковочная страница для Grecatech</div>
      <div className={styles.text_desc}>created with create-next-app</div>
    </main>
  )
}
