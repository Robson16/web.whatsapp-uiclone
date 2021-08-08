import 'normalize.css';
import '../styles/variables.scss';
import '../styles/globals.scss';
import styles from '../styles/App.module.scss';
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.wrapper}>
      <Component {...pageProps} />
    </div>
  );
}
export default MyApp
