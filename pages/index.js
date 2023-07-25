import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Kinetic Asset</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="headerContainer">
          <h1 className="title">Kinetic Asset</h1>
          <p className="description">Enabling access to illiquid assets</p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
