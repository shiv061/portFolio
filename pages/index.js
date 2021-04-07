import Head from 'next/head';
import { useState } from 'react';
import LeftPannel from '../components/leftPannel';
import RightPannel from '../components/rightPannel';

export default function Home() {
  const [screen, setScreen] = useState('home');
  return (
    <div className="grid md:grid-cols-3">
      <Head>
        <title>Shivansh | Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}
