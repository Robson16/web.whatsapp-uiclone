import Image from 'next/image';

import { Disappearing } from '../Icon';

import styles from './styles.module.scss';

export function Avatar() {
  return (
    <div className={styles.avatarContainer}>

      <div className={styles.spacer}>

        <div className={styles.withDisappearingMessages}>
          <div className={styles.icon} >
            <Disappearing width={12} height={12} viewBox="0 0 12 12" />
          </div>

          <div
            className={styles.photo}
            style={{ width: "49px", height: "49px" }}
          >
            <Image
              src="https://via.placeholder.com/147x147"
              width={49}
              height={49}
              alt="placeholder"
              objectFit="cover"
            />
          </div>
        </div>

      </div>

    </div>
  );
}