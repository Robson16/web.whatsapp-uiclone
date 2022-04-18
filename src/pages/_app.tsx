import 'normalize.css';
import '../styles/variables.scss';
import '../styles/globals.scss';
import Head from 'next/head';
import styles from '../styles/App.module.scss';
import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Whatsapp UI Clone</title>
      </Head>
      <div className={styles.wrapper}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
