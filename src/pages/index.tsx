import styles from '../styles/Home.module.scss';

import { Contact } from '../components/Contact';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.aside}>
        <div className={styles.contactsList}>
          <Contact />
          <Contact />
          <Contact />
          <Contact />
          <Contact />
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.chat}>
        </div>
      </div>
    </div>
  );
}
