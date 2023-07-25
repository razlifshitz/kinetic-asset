import EmailForm from './EmailForm'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <EmailForm />
      </footer>
    </>
  )
}
