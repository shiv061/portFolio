import Head from 'next/head';
import { useEffect, useMemo, useState } from 'react';
import LeftColumn from '../components/LeftColumn';
import RightColumn from '../components/RightColumn';
import { useAppContext } from '../context';

export default function Home() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {}, []);

  const calculate = useMemo(() => Math.min(scroll / 15, 100), [scroll]);

  const backgroundStyles = {
    background: `linear-gradient(0deg, rgba(59,0,145,1)  0%,rgba(36,36,36,1) ${calculate}%)`,
  };

  return (
    <div>
      <Head>
        <title>Shivansh | Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 min-h-screen">
        <div className="col-span-1 md:max-h-screen bg-primary overflow-auto overflow-x-hidden" style={backgroundStyles}>
          <LeftColumn />
        </div>
        <div className="col-span-2 lg:col-span-3 bg-secondary">
          <RightColumn scroll={scroll} setScroll={setScroll} />
        </div>
      </div>
    </div>
  );
}
