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
        <meta property="og:url" content="https://portfolio-shiv061.vercel.app" key="ogurl" />
        <meta property="og:image" content="https://res.cloudinary.com/dpfcrhcnj/image/upload/c_scale,w_1300/v1624258301/Screenshot_2021-06-21_at_12.09.14_PM_adx8o0.png" key="ogimage" />
        <meta property="og:site_name" content="Article" key="ogsitename" />
        <meta property="og:title" content="Shivansh Singh | Developer" key="ogtitle" />
        <meta property="og:description" content="Built Using Next.js, Tailwind CSS and Framer Motion. This portfolio is showcase my projects as well as technologies i work on." key="ogdesc" />
      </Head>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 min-h-screen">
        <div className="col-span-1 md:max-h-screen bg-primary overflow-auto overflow-x-hidden" style={backgroundStyles}>
          <LeftColumn />
        </div>
        <div className="col-span-2 lg:col-span-3 max-w-screen-sm md:max-w-screen-2xl bg-secondary">
          <RightColumn scroll={scroll} setScroll={setScroll} />
        </div>
      </div>
    </div>
  );
}
