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
      <div className="md:col-span-1 bg-offWhite max-h-screen">
        <LeftPannel screen={screen} setScreen={setScreen} />
      </div>
      <div className="md:col-span-2 bg-offBlack max-h-screen">
        <RightPannel screen={screen} />
      </div>
    </div>
  );
}
