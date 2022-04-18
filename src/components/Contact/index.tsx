import { Avatar } from '../Avatar';
import { Muted, ChevronDown, Laptop } from '../Icon';


import styles from './styles.module.scss';

export function Contact() {
  return (
    <div className={styles.contactContainer}>

      <Avatar />

      <div className={styles.infos}>

        <div className={styles.rowOne}>

          <span className={styles.name}>John Doe</span>
          <span className={styles.lastMessageTime}>12:00</span>

        </div>

        <div className={styles.rowTwo}>

          <div className={styles.lastMessage}>

            <span className={styles.messageAutor}>
              John
            </span>

            <span>
              :
              &nbsp;
            </span>

            <span className={styles.message}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit
            </span>

          </div>

          <div className={styles.icons}>

            <div className={styles.icon}>
              <span className={styles.unreadMessages}>
                12
              </span>
            </div>

            <div className={styles.icon}>
              <Muted viewBox="0 0 16 18" width={16} height={18} />
            </div>

            <div className={styles.icon}>
              <ChevronDown viewBox="0 0 19 20" width={19} height={20} />
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}